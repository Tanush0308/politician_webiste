export interface AssemblyQuestion {
  id: string;
  date?: string;
  topic: string;
  issue: string;
  action: string;
  govResponse?: string;
  currentStatus?: string;
  sources?: { label: string; url?: string; type: "official" | "news" | "research" }[];
  verification: "verified" | "unverified";
}

export const assemblyQuestions: AssemblyQuestion[] = [
  {
    id: "water-supply-question",
    date: "२० जुलै २०२४",
    topic: "उस्मानाबाद शहर पाणीपुरवठा",
    issue: "उजनी धरणातून धाराशिव (उस्मानाबाद) शहरासाठी थेट पाणी आणण्याच्या योजनेला विलंब होत होता.",
    action: "कैलास पाटील यांनी योजनेला गती देण्याबाबत व निधी उपलब्ध करून देण्याबाबत विधानसभेत प्रश्न उपस्थित केला.",
    govResponse: "शासनाने योजनेसाठी आवश्यक निधी टप्प्याटप्प्याने उपलब्ध करून देण्याचे आश्वासन दिले.",
    currentStatus: "पाठपुरावा सुरू",
    sources: [{ label: "Legislative Records", type: "official" }],
    verification: "verified"
  },
  {
    id: "crop-insurance-question",
    date: "१५ मार्च २०२४",
    topic: "शेतकऱ्यांची अतिवृष्टी नुकसानभरपाई",
    issue: "धाराशिव जिल्ह्यातील शेतकऱ्यांना अतिवृष्टीमुळे झालेल्या नुकसानीची भरपाई मिळण्यास उशीर होत होता.",
    action: "कैलास पाटील यांनी तातडीने नुकसानभरपाई मिळण्याबाबत लक्षवेधी सूचना मांडली.",
    govResponse: "तातडीने उर्वरित भरपाईचे वाटप करण्याचे आश्वासन प्रशासनाकडून देण्यात आले.",
    currentStatus: "अंशतः वाटप सुरू",
    sources: [{ label: "Legislative Records", type: "official" }],
    verification: "verified"
  },
  {
    id: "cath-lab-question",
    date: "ऑक्टोबर २०२३",
    topic: "कार्डियाक कॅथ लॅब आणि MRI",
    issue: "जिल्हा रुग्णालयात कार्डियाक कॅथ लॅब आणि MRI सुविधा उपलब्ध नसल्याने रुग्णांची गैरसोय होत होती.",
    action: "कैलास पाटील यांनी जिल्हा रुग्णालयात कार्डियाक कॅथ लॅब आणि MRI सुविधा तातडीने सुरू करण्याबाबत शासनाचे लक्ष वेधले.",
    govResponse: "१८ कोटींचा निधी मंजूर करण्यात आला.",
    currentStatus: "मंजुरी मिळाली, अंमलबजावणी प्रलंबित",
    sources: [{ label: "News Reports", type: "news" }],
    verification: "verified"
  }
];
