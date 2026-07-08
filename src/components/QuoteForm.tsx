"use client";

import { useState } from "react";

// Free email delivery via Web3Forms (no backend, unlimited submissions).
// Activate by putting your key in .env.local as NEXT_PUBLIC_WEB3FORMS_KEY.
// Get one free (1 min) at https://web3forms.com — enter your Gmail, copy the key.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Not yet configured -> simulate success so the UX is testable now.
    if (!WEB3FORMS_ACCESS_KEY) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New enquiry from HyGlass website",
          from_name: "HyGlass Website",
          ...data,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-semibold text-green-800">Thank you — enquiry received.</p>
        <p className="mt-1 text-sm text-green-700">
          Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from users, catches bots (Web3Forms convention). */}
      <input type="checkbox" name="botcheck" tabIndex={-1} className="hidden" aria-hidden />

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
          <input name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
          <input name="phone" className={inputClass} placeholder="Phone number" />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
        <input type="email" name="email" required className={inputClass} placeholder="you@example.com" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Product / subject
        </label>
        <input name="subject" className={inputClass} placeholder="What are you enquiring about?" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
        <textarea
          name="message"
          required
          rows={compact ? 4 : 5}
          className={inputClass}
          placeholder="Include quantities, grades or catalogue codes if known…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  );
}
