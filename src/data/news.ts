import { NewsArticle } from "@/types/content";
import { mediaRegistry } from "./media";

export const newsArticles: NewsArticle[] = [
  {
    id: "news-001",
    publisher: "सकाळ",
    date: "१२ ऑगस्ट २०२४",
    title: "शेतकऱ्यांच्या प्रश्नांवरून कैलास पाटील आक्रमक, विधिमंडळात वेधले लक्ष",
    originalUrl: undefined,
    image: mediaRegistry.media.news1,
    verification: "verification-required"
  },
  {
    id: "news-002",
    publisher: "लोकमत",
    date: "०५ जुलै २०२४",
    title: "उस्मानाबादच्या पाणीप्रश्नी लवकरच तोडगा: आ. कैलास पाटील",
    originalUrl: undefined,
    image: mediaRegistry.media.news2,
    verification: "verification-required"
  },
  {
    id: "news-003",
    publisher: "एबीपी माझा",
    date: "२२ मे २०२४",
    title: "युवकांसाठी रोजगार मेळाव्याचे आयोजन, हजारो तरुणांची उपस्थिती",
    originalUrl: undefined,
    image: mediaRegistry.media.news3,
    verification: "verification-required"
  }
];
