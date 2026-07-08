// One-off migration: parse the old FrontPage catalog HTML into clean JSON.
// Run:  node scripts/migrate-catalog.mjs
// Output: src/data/catalog/{chemicals,glassware,equipment,general}.json
import { load } from "cheerio";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OLD = join(__dirname, "..", "..", "Hyglass_Mar17-2024-v8 - Copy-test");
const OUT = join(__dirname, "..", "src", "data", "catalog");
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const clean = (s) =>
  (s || "")
    .replace(/ /g, " ")
    .replace(/\s+/g, " ")
    .replace(/^[\s\-–]+|[\s\-–]+$/g, "")
    .trim();

function readHtml(file) {
  const path = join(OLD, file);
  if (!existsSync(path)) return null;
  return load(readFileSync(path, "latin1")); // old files are windows-1252
}

function dedupe(items) {
  const seen = new Set();
  const out = [];
  for (const it of items) {
    const key = it.name.toLowerCase();
    if (!it.name || seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
}

// ---- Chemicals: <li><span style="text-transform:uppercase">NAME</span> ----
function parseChemicals() {
  let items = [];
  for (const L of letters) {
    const $ = readHtml(`chem${L}.html`);
    if (!$) continue;
    $('span[style*="uppercase"]').each((_, el) => {
      const name = clean($(el).text());
      if (name && name.length <= 90 && /[a-z]/i.test(name)) {
        items.push({ name });
      }
    });
  }
  return dedupe(items);
}

// ---- Glassware: <li> "C.N. 4060 FLASKS - Boiling, Flat Bottom" ----
function parseGlassware() {
  const files = ["a", ...letters.filter((l) => l !== "a"), "T"];
  let items = [];
  for (const L of files) {
    const $ = readHtml(`glassware${L}.html`);
    if (!$) continue;
    $("li").each((_, el) => {
      const text = clean($(el).text());
      if (!/\b\d{3,5}\b/.test(text)) return; // must have a catalogue code
      if (text.length < 4 || text.length > 140) return;
      const m = text.match(/^(.*?)\s*[-–]\s*(.*)$/);
      let name = clean(m ? m[1] : text);
      name = name.replace(/^C\.?\s*N\.?\s*/i, ""); // drop "C.N." catalogue prefix
      const description = m ? clean(m[2]) : "";
      if (name) items.push({ name, description });
    });
  }
  return dedupe(items);
}

// ---- Equipment / General: comma-separated prose lists ----
const STOP =
  /@|https?:|copyright|patent|hyglass|developed|about us|overseas|request quote|sitemap|contact us|more details|products in this|responsibility|conventions/i;
const NAV = new Set([
  "about","products","clients","home","glassware","chemicals","equipments",
  "general items","sitemap","contact us","overseas partners","request quote","i","no",
  "list","list of","list of general items","etc.","etc","less compressor",
]);

function parseProse(file) {
  const $ = readHtml(file);
  if (!$) return [];
  const raw = $("body").text();
  const items = [];
  for (const line of raw.split(/\n|\r/)) {
    if (STOP.test(line)) continue;
    for (const piece of line.split(/[,;:]/)) {
      const name = clean(piece);
      const low = name.toLowerCase();
      if (
        name.length >= 3 &&
        name.length <= 45 &&
        /^[A-Za-z]/.test(name) &&
        /^[A-Za-z0-9 .&/\-]+$/.test(name) && // no parentheses = drops brand asides
        !/^(of|and|as per|mfg|for)\b/i.test(name) &&
        !NAV.has(low) &&
        !STOP.test(name)
      ) {
        items.push({ name });
      }
    }
  }
  return dedupe(items);
}

const datasets = {
  chemicals: parseChemicals(),
  glassware: parseGlassware(),
  equipment: parseProse("equipments.html"),
  general: parseProse("generalitems.html"),
};

for (const [cat, items] of Object.entries(datasets)) {
  writeFileSync(join(OUT, `${cat}.json`), JSON.stringify(items, null, 2));
  console.log(`${cat.padEnd(10)} -> ${items.length} items`);
}
