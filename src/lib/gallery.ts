// Gallery images. Keep this to ~6-8 items. This is the list the admin
// will manage from the CMS later (add/replace up to 8 photos).
export type GalleryItem = {
  src: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  { src: "/gallery/gallery-01.png", caption: "Our delivery fleet" },
  { src: "/gallery/gallery-02.png", caption: "In the lab & our team" },
  { src: "/gallery/gallery-03.png", caption: "Our product & brand range" },
];
