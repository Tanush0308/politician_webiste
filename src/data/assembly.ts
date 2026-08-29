export interface AssemblyQuestion {
  id: string;
  date?: string;
  topic: string;
  description: string;
  status: string;
  sources?: { label: string; url?: string; type: "official" | "news" }[];
  verification: "verified" | "unverified";
}

export const assemblyQuestions: AssemblyQuestion[] = [
  {
    id: "water-supply-question",
    date: "२० जुलै २०२४",
    topic: "उस्मानाबाद शहर पाणीपुरवठा",
    description: "उजनी धरणातून धाराशिव (उस्मानाबाद) शहरासाठी थेट पाणी आणण्याच्या योजनेला गती देण्याबाबत विचारलेला प्रश्न.",
    status: "शासनाचे सकारात्मक उत्तर",
    sources: [{ label: "Legislative Records", type: "official" }],
    verification: "verified"
  },
  {
    id: "crop-insurance-question",
    date: "१५ मार्च २०२४",
    topic: "अतिवृष्टी नुकसानभरपाई",
    description: "धाराशिव जिल्ह्यातील शेतकऱ्यांना अतिवृष्टीमुळे झालेल्या नुकसानीची भरपाई तातडीने मिळण्याबाबत लक्षवेधी सूचना.",
    status: "तातडीने वाटप करण्याचे आश्वासन",
    sources: [{ label: "Legislative Records", type: "official" }],
    verification: "verified"
  },
  {
    id: "cath-lab-question",
    date: "ऑक्टोबर २०२३",
    topic: "कार्डियाक कॅथ लॅब आणि MRI",
    description: "जिल्हा रुग्णालयात कार्डियाक कॅथ लॅब आणि MRI सुविधा तातडीने सुरू करण्याबाबत शासनाचे लक्ष वेधले.",
    status: "१८ कोटींचा निधी मंजूर, अंमलबजावणी प्रलंबित",
    sources: [{ label: "News Reports / Assembly Questions", type: "news" }],
    verification: "verified"
  }
];
