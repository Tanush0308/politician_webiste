import { GalleryItem } from "@/types/content";
import { mediaRegistry } from "./media";

export const galleryData: GalleryItem[] = [
  {
    id: "gallery-1",
    image: mediaRegistry.awards.felicitation,
    category: "events",
    title: "उद्धव साहेब ठाकरे यांच्यासोबत",
    verification: "verified"
  },
  {
    id: "gallery-2",
    image: mediaRegistry.gallery.placeholder2,
    category: "campaigns",
    title: "जनतेशी संवाद",
    verification: "unverified"
  },
  {
    id: "gallery-3",
    image: mediaRegistry.gallery.placeholder3,
    category: "events",
    title: "सांस्कृतिक कार्यक्रम",
    verification: "unverified"
  }
];
