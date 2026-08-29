import { GalleryItem } from "@/types/content";
import { mediaRegistry } from "./media";

export const galleryData: GalleryItem[] = [
  {
    id: "gallery-1",
    image: mediaRegistry.gallery.placeholder1,
    category: "events",
    verification: "verified"
  },
  {
    id: "gallery-2",
    image: mediaRegistry.gallery.placeholder2,
    category: "people",
    verification: "verified"
  },
  {
    id: "gallery-3",
    image: mediaRegistry.gallery.placeholder3,
    category: "assembly",
    verification: "verified"
  }
];
