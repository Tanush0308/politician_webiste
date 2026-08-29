import { GalleryItem } from "@/types/content";
import { mediaRegistry } from "./media";

export const galleryData: GalleryItem[] = [
  {
    id: "gallery-1",
    image: mediaRegistry.awards.felicitation,
    category: "events",
    caption: "उद्धव साहेब ठाकरे यांच्यासोबत",
    verification: "verified"
  },
  {
    id: "gallery-2",
    image: mediaRegistry.gallery.placeholder2,
    category: "campaigns",
    caption: "जनतेशी संवाद",
    verification: "verification-required"
  },
  {
    id: "gallery-3",
    image: mediaRegistry.gallery.placeholder3,
    category: "events",
    caption: "सांस्कृतिक कार्यक्रम",
    verification: "verification-required"
  }
];
