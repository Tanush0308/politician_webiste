export interface ConstituencyStat {
  id: string;
  label: string;
  value: string;
  description?: string;
  sources?: { label: string; url?: string; type: "official" | "news" }[];
  verification: "verified" | "unverified";
}

export const constituencyData = {
  name: "धाराशिव (उस्मानाबाद) - कळंब",
  assemblyNumber: "२४२",
  description: "महाराष्ट्राच्या नकाशावरील एक महत्त्वाचा आणि ऐतिहासिक वारसा असलेला धाराशिव (पूर्वीचे उस्मानाबाद) विधानसभा मतदारसंघ. येथील प्रत्येक गावाला विकासाच्या प्रवाहात आणण्यासाठी आम्ही कटिबद्ध आहोत.",
  stats: [
    {
      id: "geography",
      label: "भौगोलिक विस्तार",
      value: "कळंब आणि धाराशिव (उस्मानाबाद) तालुक्यांचा समावेश",
      description: "संपूर्ण कळंब तालुका आणि धाराशिव (उस्मानाबाद) तालुक्याचा काही भाग.",
      sources: [{ label: "Election Commission of India", type: "official" }],
      verification: "verified"
    },
    {
      id: "voters",
      label: "एकूण मतदार (२०२४)",
      value: "३,७५,३५९",
      description: "२०२४ च्या विधानसभा निवडणुकीनुसार नोंदणीकृत मतदार.",
      sources: [{ label: "Election Commission of India", type: "official" }],
      verification: "verified"
    },
    {
      id: "villages",
      label: "ग्रामपंचायती व गावे",
      value: "१५०+",
      description: "१५० पेक्षा अधिक गावे आणि वाड्या-वस्त्या.",
      verification: "verified"
    },
    {
      id: "economy",
      label: "प्रमुख व्यवसाय",
      value: "शेती",
      description: "शेती हा प्रमुख व्यवसाय असून सोयाबीन, ऊस, हरभरा आणि ज्वारी ही मुख्य पिके आहेत.",
      verification: "verified"
    }
  ] as ConstituencyStat[]
};
