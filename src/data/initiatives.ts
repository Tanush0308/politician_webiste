import { Initiative } from "@/types/content";
import { mediaRegistry } from "./media";

export const initiativesData: Initiative[] = [
  {
    slug: "farmer-insurance",
    category: "farmers",
    title: "पीक विम्यासाठी ऐतिहासिक लढा आणि यश",
    shortDescription: "शेतकऱ्यांना पीक विम्याची रक्कम मिळवून देण्यासाठी केलेला पाठपुरावा.",
    problem: "अतिवृष्टी आणि दुष्काळामुळे शेतकऱ्यांचे मोठ्या प्रमाणावर नुकसान झाले होते. मात्र, विमा कंपन्यांकडून नुकसानभरपाई देण्यास टाळाटाळ केली जात होती.",
    action: "या प्रश्नावर कैलास दादा पाटील यांनी सातत्याने पाठपुरावा केला. विधानसभेत आवाज उठवला आणि रस्त्यावर उतरून आंदोलनही केले.",
    result: "त्यांच्या या लढ्याला मोठे यश मिळाले आणि उस्मानाबाद जिल्ह्यातील लाखो शेतकऱ्यांना त्यांच्या हक्काचा पीक विमा मिळाला.",
    heroImage: mediaRegistry.initiatives.farmerInsurance,
    stats: [
      { value: "२५० कोटी+", label: "शेतकऱ्यांना मिळालेला विमा" },
      { value: "३ लाख+", label: "लाभार्थी शेतकरी" }
    ],
    date: "२०२३",
    location: "धाराशिव जिल्हा",
    verification: "verified"
  },
  {
    slug: "water-supply",
    category: "water",
    title: "उस्मानाबाद शहर पाणीपुरवठा योजना",
    shortDescription: "शहरातील पाण्याचा प्रश्न कायमस्वरूपी सोडवण्यासाठी उजनी धरणातून थेट पाणी आणण्याची योजना.",
    problem: "धाराशिव शहरात अनेक वर्षांपासून पाण्याचा गंभीर प्रश्न होता. उन्हाळ्यात नागरिकांना तीव्र पाणीटंचाईचा सामना करावा लागत होता.",
    action: "हा प्रश्न कायमस्वरूपी मार्गी लावण्यासाठी उजनी धरणातून थेट पाणी आणण्याच्या महत्त्वाकांक्षी योजनेला मंजुरी मिळवून आणली.",
    result: "या योजनेमुळे शहराला मुबलक पाणी उपलब्ध होणार असून, नागरिकांची पाण्यासाठीची वणवण थांबणार आहे.",
    heroImage: mediaRegistry.initiatives.waterSupply,
    stats: [
      { value: "१००+", label: "गावांचा पाणीप्रश्न मार्गी" },
      { value: "१००%", label: "योजनेचे काम प्रगतीपथावर" }
    ],
    date: "२०२२ - सुरू",
    location: "धाराशिव शहर",
    verification: "verified"
  },
  {
    slug: "medical-camps",
    category: "healthcare",
    title: "भव्य मोफत महाआरोग्य शिबिरे",
    shortDescription: "तळागाळातील रुग्णांना दर्जेदार उपचार मिळावेत यासाठी महाआरोग्य शिबिरांचे आयोजन.",
    problem: "ग्रामीण भागातील अनेक रुग्णांना पैशाअभावी वेळेवर उपचार मिळत नाहीत.",
    action: "या समस्येवर तोडगा म्हणून मतदारसंघात वेळोवेळी भव्य महाआरोग्य शिबिरांचे आयोजन करण्यात आले. या शिबिरांमध्ये तज्ज्ञ डॉक्टरांकडून तपासणी आणि मोफत औषधोपचार करण्यात आले.",
    result: "गंभीर आजार असलेल्या रुग्णांवर मोफत शस्त्रक्रियाही करण्यात आल्या.",
    heroImage: mediaRegistry.initiatives.medicalCamps,
    stats: [
      { value: "५०,०००+", label: "रुग्णांची तपासणी" },
      { value: "५००+", label: "मोफत शस्त्रक्रिया" }
    ],
    date: "२०२१ - २०२४",
    location: "विविध गावे",
    verification: "verified"
  }
];

export function getInitiatives(): Initiative[] {
  return initiativesData;
}

export function getInitiativeBySlug(slug: string): Initiative | null {
  return initiativesData.find(initiative => initiative.slug === slug) || null;
}
