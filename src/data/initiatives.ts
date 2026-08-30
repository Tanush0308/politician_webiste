import { Initiative } from "@/types/content";
import { mediaRegistry } from "./media";

export const initiativesData: Initiative[] = [
  {
    slug: "farmer-insurance",
    category: "farmers",
    title: "पीक विम्यासाठी ऐतिहासिक लढा",
    shortDescription: "अतिवृष्टी आणि दुष्काळामुळे नुकसान झालेल्या शेतकऱ्यांना पीक विमा मिळवून देण्यासाठी केलेला पाठपुरावा.",
    problem: "अतिवृष्टी आणि पावसाच्या खंडाने (dry spells) शेतकऱ्यांचे मोठ्या प्रमाणावर नुकसान झाले होते. मात्र, विमा कंपन्यांकडून नुकसानभरपाई देण्यास टाळाटाळ केली जात होती.",
    action: "कैलास पाटील यांनी शेतकऱ्यांच्या हक्कासाठी सातत्याने पाठपुरावा केला. त्यांनी प्रशासनाकडे निवेदने दिली, विधानसभेत प्रश्न उपस्थित केला आणि विमा कंपन्यांवर दबाव आणण्यासाठी आंदोलने केली.",
    governmentResponse: "शासनाने आणि विमा कंपन्यांनी दखल घेत काही टप्प्यांत पीक विम्याची रक्कम मंजूर केली.",
    result: "उस्मानाबाद जिल्ह्यातील लाखो शेतकऱ्यांना त्यांच्या हक्काच्या पीक विम्याची रक्कम मिळण्यास मदत झाली, मात्र अद्याप काही प्रलंबित रकमेसाठी पाठपुरावा सुरू आहे.",
    status: "पाठपुरावा सुरू",
    heroImage: mediaRegistry.initiatives.farmerInsurance,
    date: "२०२३ - २०२४",
    location: "धाराशिव जिल्हा",
    sources: [
      {
        label: "ABP Majha News",
        url: "https://marathi.abplive.com/",
        type: "news"
      }
    ],
    verification: "verified"
  },
  {
    slug: "water-supply",
    category: "water",
    title: "उस्मानाबाद शहर पाणीपुरवठा योजना",
    shortDescription: "शहरातील पाण्याचा प्रश्न सोडवण्यासाठी उजनी धरणातून थेट पाणी आणण्याच्या योजनेचा पाठपुरावा.",
    problem: "धाराशिव शहरात अनेक वर्षांपासून पाण्याचा गंभीर प्रश्न आहे. उन्हाळ्यात नागरिकांना तीव्र पाणीटंचाईचा सामना करावा लागतो.",
    action: "उजनी धरणातून थेट पाणी आणण्याच्या योजनेसाठी त्यांनी सातत्याने सरकारकडे पाठपुरावा केला.",
    governmentResponse: "योजनेला प्रशासकीय मंजुरी मिळाली असून निधीची तरतूद करण्यात आली आहे.",
    result: "योजनेचे काम सुरू असून ते पूर्ण झाल्यानंतर शहराचा पाणीप्रश्न कायमस्वरूपी सुटेल.",
    status: "काम सुरू झाले",
    heroImage: mediaRegistry.initiatives.waterSupply,
    date: "२०२२ - सुरू",
    location: "धाराशिव शहर",
    verification: "verified"
  },
  {
    slug: "cardiac-cath-lab",
    category: "healthcare",
    title: "कार्डियाक कॅथ लॅब आणि MRI सुविधा",
    shortDescription: "धाराशिव जिल्हा रुग्णालयात कार्डियाक कॅथ लॅब आणि MRI सुविधा तातडीने सुरू करण्याची मागणी.",
    problem: "धाराशिवमध्ये अद्याप सरकारी रुग्णालयात कार्डियाक कॅथ लॅब आणि MRI ची सुविधा नाही. यामुळे हृदयविकाराच्या रुग्णांना उपचारासाठी सोलापूर किंवा इतर जिल्ह्यात जावे लागते, ज्यामुळे अनेकदा रुग्णांचा प्रवासातच मृत्यू होण्याच्या घटना घडल्या आहेत.",
    action: "आमदार कैलास पाटील यांनी विधानसभेत आणि प्रशासनाकडे या सुविधा तातडीने सुरू करण्याची वारंवार मागणी केली आहे.",
    governmentResponse: "ऑक्टोबर २०२३ मध्ये शासनाकडून कॅथ लॅबसाठी सुमारे १८ कोटी रुपयांचा निधी मंजूर करण्यात आला, परंतु अद्याप त्याची अंमलबजावणी झालेली नाही.",
    result: "निधी मंजूर असूनही प्रशासकीय दिरंगाईमुळे काम प्रलंबित आहे.",
    status: "मंजुरी मिळाली",
    heroImage: mediaRegistry.initiatives.medicalCamps,
    date: "२०२३ - २०२४",
    location: "जिल्हा रुग्णालय, धाराशिव",
    sources: [
      {
        label: "Pudhari News - MRI & Cath Lab Delay",
        url: "https://pudhari.news/",
        type: "news"
      }
    ],
    verification: "verified"
  },
  {
    slug: "district-hospital",
    category: "healthcare",
    title: "५०० खाटांचे जिल्हा रुग्णालय",
    shortDescription: "धाराशिवमध्ये नवीन ५०० खाटांच्या रुग्णालयाच्या कामाला गती देण्याची मागणी.",
    problem: "जिल्ह्यातील आरोग्य सुविधा अपुऱ्या असून, रुग्णांना अद्ययावत उपचारांसाठी मोठ्या शहरांत जावे लागते.",
    action: "५०० खाटांच्या नवीन जिल्हा रुग्णालयाचे काम जलद गतीने पूर्ण व्हावे यासाठी त्यांनी शासनाकडे सातत्याने पाठपुरावा केला.",
    governmentResponse: "या प्रकल्पासाठी शासनाने मंजुरी दिली असून, आशियाई विकास बँकेच्या (ADB) अर्थसाह्याने ३२६ कोटी रुपयांचा निधी उपलब्ध करण्यात आला आहे.",
    result: "रुग्णालयाचे काम सुरू झाले असून ते प्रगतीपथावर आहे.",
    status: "काम सुरू झाले",
    heroImage: mediaRegistry.initiatives.medicalCamps,
    date: "२०२४",
    location: "धाराशिव",
    sources: [
      {
        label: "Pudhari News - 500 Bed Hospital",
        url: "https://pudhari.news/",
        type: "news"
      }
    ],
    verification: "verified"
  }
];

export function getInitiatives(): Initiative[] {
  return initiativesData;
}

export function getInitiativeBySlug(slug: string): Initiative | null {
  return initiativesData.find(initiative => initiative.slug === slug) || null;
}
