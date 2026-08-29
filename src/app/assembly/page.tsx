import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { FileText, Users, Mic, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "विधानसभा कामकाज | Assembly Work | Kailas Dada Patil",
  description: "आमदार कैलास दादा पाटील यांचे महाराष्ट्र विधानसभेतील कामकाज आणि विचारलेले प्रश्न.",
};

const assemblyStats = [
  { icon: Mic, label: "उपस्थित केलेले प्रश्न", value: "२५०+" },
  { icon: FileText, label: "मांडलेली विधेयके", value: "१५+" },
  { icon: Users, label: "सभागृहातील उपस्थिती", value: "९५%" },
  { icon: CheckCircle, label: "सोडवलेले प्रश्न", value: "२००+" },
];

const recentQuestions = [
  {
    date: "२० जुलै २०२४",
    topic: "उस्मानाबाद शहर पाणीपुरवठा",
    description: "उजनी धरणातून उस्मानाबाद शहरासाठी थेट पाणी आणण्याच्या योजनेला गती देण्याबाबत विचारलेला तारांकित प्रश्न.",
    status: "सकारात्मक उत्तर, निधी मंजूर",
  },
  {
    date: "१५ मार्च २०२४",
    topic: "अतिवृष्टी नुकसानभरपाई",
    description: "धाराशिव जिल्ह्यातील शेतकऱ्यांना अतिवृष्टीमुळे झालेल्या नुकसानीची भरपाई तातडीने मिळण्याबाबत लक्षवेधी सूचना.",
    status: "तातडीने वाटप करण्याचे आदेश",
  },
  {
    date: "१० डिसेंबर २०२३",
    topic: "आरोग्य सुविधांचे बळकटीकरण",
    description: "जिल्हा शासकीय रुग्णालयात अद्ययावत वैद्यकीय सुविधा आणि रिक्त पदे भरण्याबाबत शासनाचे लक्ष वेधले.",
    status: "२०० पदे भरण्यास मंजुरी",
  },
];

export default function AssemblyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <Container>
        <SectionTitle 
          title="विधानसभा कामकाज"
          eyebrow="सभागृहातील आवाज"
          subtitle="मतदारसंघाचे आणि महाराष्ट्राच्या हिताचे प्रश्न सोडवण्यासाठी विधानसभेत सातत्याने उठवलेला आवाज."
          className="mb-16"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          {assemblyStats.map((stat, i) => (
            <div key={i} className="bg-dark-secondary p-6 rounded-2xl border border-white/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-serif text-white mb-2">{stat.value}</div>
              <div className="text-sm text-light/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Questions */}
        <div>
          <h2 className="text-3xl font-bold font-serif mb-10 text-center">महत्त्वाचे प्रश्न आणि लक्षवेधी</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {recentQuestions.map((q, i) => (
              <div key={i} className="bg-dark-secondary p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-6 md:items-start hover:border-accent/40 transition-colors">
                <div className="md:w-1/4 shrink-0">
                  <span className="inline-block bg-white/5 text-light/80 px-3 py-1 rounded text-sm font-medium mb-3">
                    {q.date}
                  </span>
                  <h3 className="font-bold text-lg text-white">{q.topic}</h3>
                </div>
                <div className="md:w-3/4 flex flex-col justify-between">
                  <p className="text-light/70 mb-4">{q.description}</p>
                  <div className="inline-flex items-center text-sm font-medium text-accent">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {q.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
