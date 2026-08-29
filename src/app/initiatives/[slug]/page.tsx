import { getInitiativeBySlug, getInitiatives } from "@/data/initiatives";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const initiatives = getInitiatives();
  return initiatives.map((initiative) => ({
    slug: initiative.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);
  
  if (!initiative) return { title: "Not Found" };
  
  return {
    title: `${initiative.title} | विकासकामे`,
    description: initiative.shortDescription,
  };
}

const statusMap: Record<string, string> = {
  "Demand": "मागणी केली",
  "Follow-up": "पाठपुरावा सुरू",
  "Question Raised": "प्रश्न उपस्थित केला",
  "Representation Submitted": "निवेदन दिले",
  "Approved": "मंजुरी मिळाली",
  "In Progress": "काम प्रगतीपथावर आहे",
  "Partially Implemented": "अंशतः अंमलबजावणी",
  "Completed": "काम पूर्ण झाले",
  "Status Unclear": "सद्यस्थिती अस्पष्ट"
};

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);

  if (!initiative) {
    notFound();
  }

  const translatedStatus = initiative.status ? (statusMap[initiative.status] || initiative.status) : null;

  return (
    <div className="bg-dark min-h-screen">
      <Container className="px-0 sm:px-6 lg:px-8">
        
        {/* Mobile Layout (Stacked) */}
        <div className="block lg:hidden pt-24 pb-24">
          <div className="px-4 mb-8">
            <Link href="/initiatives" className="inline-flex items-center text-xs tracking-widest uppercase text-light/50 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-3 h-3 mr-2" /> सर्व विकासकामे
            </Link>
            <span className="block text-accent text-[10px] tracking-[0.2em] uppercase mb-4">
              {initiative.category}
            </span>
            <h1 className="text-4xl font-bold font-serif leading-tight text-white mb-6">
              {initiative.title}
            </h1>
          </div>
          
          <div className="w-full aspect-[4/3] mb-8 relative overflow-hidden bg-dark/20 border-y border-white/10">
            {initiative.heroImage?.status === "available" ? (
              <Image
                src={initiative.heroImage.src}
                alt={initiative.heroImage.alt}
                fill
                className="object-cover object-center"
              />
            ) : (
              <MediaPlaceholder category={initiative.category.toUpperCase()} aspectRatio="auto" className="border-none" />
            )}
          </div>

          <div className="px-4 space-y-8">
            <div className="flex flex-col gap-2 text-xs text-light/60 uppercase tracking-widest border-l border-accent pl-4">
              {initiative.date && <span>{initiative.date}</span>}
              {initiative.location && <span>{initiative.location}</span>}
            </div>

            {initiative.stats && initiative.stats.length > 0 && (
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                {initiative.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-accent mb-1 font-serif">{stat.value}</div>
                    <div className="text-[10px] text-light/50 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-6 text-lg text-light/80 leading-relaxed font-sans">
              {initiative.problem && (
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">समस्या / पार्श्वभूमी</h3>
                  <p>{initiative.problem}</p>
                </div>
              )}
              {initiative.action && (
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">उपाययोजना / मागणी</h3>
                  <p>{initiative.action}</p>
                </div>
              )}
              {initiative.governmentResponse && (
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">शासनाचे उत्तर / प्रतिसाद</h3>
                  <p>{initiative.governmentResponse}</p>
                </div>
              )}
              {initiative.result && (
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">परिणाम / सद्यस्थिती</h3>
                  <p>{initiative.result}</p>
                </div>
              )}
              
              {translatedStatus && (
                <div className="mt-12 pt-8 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-light/50 block mb-4">अधिकृत सद्यस्थिती</span>
                  <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                    <p className="text-white font-bold text-sm tracking-wide">{translatedStatus}</p>
                  </div>
                </div>
              )}

              {initiative.sources && initiative.sources.length > 0 && (
                <div className="mt-12 pt-8 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-light/50 block mb-4">स्रोत / Sources</span>
                  <ul className="space-y-3">
                    {initiative.sources.map((src, i) => (
                      <li key={i}>
                        {src.url ? (
                          <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-2">
                            {src.label} 
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-light/70 uppercase tracking-widest">{src.type}</span>
                          </a>
                        ) : (
                          <span className="text-sm text-light/80 flex items-center gap-2">
                            {src.label}
                            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-light/70 uppercase tracking-widest">{src.type}</span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout (Sticky Split Screen) */}
        <div className="hidden lg:flex min-h-screen border-x border-white/10">
          
          {/* Left Column (Sticky) */}
          <div className="w-[45%] relative border-r border-white/10">
            <div className="sticky top-0 h-screen flex flex-col p-12">
              <div className="pt-12 mb-auto">
                <Link href="/initiatives" className="inline-flex items-center text-xs tracking-widest uppercase text-light/50 hover:text-white transition-colors mb-12">
                  <ArrowLeft className="w-3 h-3 mr-2" /> सर्व विकासकामे
                </Link>
                <span className="block text-accent text-[10px] tracking-[0.2em] uppercase mb-6">
                  {initiative.category}
                </span>
                <h1 className="text-5xl xl:text-6xl font-bold font-serif leading-tight text-white mb-8">
                  {initiative.title}
                </h1>
                <div className="flex items-center gap-6 text-xs text-light/50 uppercase tracking-widest">
                  {initiative.date && <span>{initiative.date}</span>}
                  {initiative.date && initiative.location && <span>•</span>}
                  {initiative.location && <span>{initiative.location}</span>}
                </div>
              </div>

              <div className="w-full aspect-[4/3] relative overflow-hidden bg-dark/20 border border-white/10">
                {initiative.heroImage?.status === "available" ? (
                  <Image
                    src={initiative.heroImage.src}
                    alt={initiative.heroImage.alt}
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <MediaPlaceholder category={initiative.category.toUpperCase()} aspectRatio="auto" className="border-none" />
                )}
              </div>
            </div>
          </div>

          {/* Right Column (Scrolling Narrative) */}
          <div className="w-[55%] p-12 lg:p-20 xl:p-24 pt-32 pb-40">
            
            {initiative.stats && initiative.stats.length > 0 && (
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10 mb-16">
                {initiative.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold text-accent mb-2 font-serif">{stat.value}</div>
                    <div className="text-[10px] text-light/50 uppercase tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <article className="prose prose-invert prose-lg max-w-none prose-p:text-light/80 prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-white">
              {initiative.problem && (
                <>
                  <h3 className="text-xl font-serif mb-6 text-white border-l-2 border-accent pl-4">समस्या / पार्श्वभूमी</h3>
                  <p className="mb-6">{initiative.problem}</p>
                </>
              )}
              {initiative.action && (
                <>
                  <h3 className="text-xl font-serif mt-12 mb-6 text-white border-l-2 border-accent pl-4">उपाययोजना / मागणी</h3>
                  <p className="mb-6">{initiative.action}</p>
                </>
              )}
              {initiative.governmentResponse && (
                <>
                  <h3 className="text-xl font-serif mt-12 mb-6 text-white border-l-2 border-accent pl-4">शासनाचे उत्तर / प्रतिसाद</h3>
                  <p className="mb-6">{initiative.governmentResponse}</p>
                </>
              )}
              {initiative.result && (
                <>
                  <h3 className="text-xl font-serif mt-12 mb-6 text-white border-l-2 border-accent pl-4">परिणाम / सद्यस्थिती</h3>
                  <p className="mb-6">{initiative.result}</p>
                </>
              )}
            </article>
            
            {translatedStatus && (
              <div className="mt-20 pt-10 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-light/40 block mb-4">अधिकृत सद्यस्थिती</span>
                <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                  <p className="text-white font-bold tracking-wide">{translatedStatus}</p>
                </div>
              </div>
            )}

            {initiative.sources && initiative.sources.length > 0 && (
              <div className="mt-12 pt-10 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-light/40 block mb-4">स्रोत / Sources</span>
                <ul className="space-y-4">
                  {initiative.sources.map((src, i) => (
                    <li key={i}>
                      {src.url ? (
                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-light/80 hover:text-accent transition-colors flex items-center gap-3">
                          {src.label} 
                          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-sm text-light/60 uppercase tracking-widest">{src.type}</span>
                        </a>
                      ) : (
                        <span className="text-light/80 flex items-center gap-3">
                          {src.label}
                          <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-sm text-light/60 uppercase tracking-widest">{src.type}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </Container>
    </div>
  );
}
