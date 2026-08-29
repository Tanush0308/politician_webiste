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

export default async function InitiativeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const initiative = getInitiativeBySlug(slug);

  if (!initiative) {
    notFound();
  }

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
              <span>{initiative.date}</span>
              <span>{initiative.location}</span>
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
                  <h3 className="text-xl font-serif text-white mb-2">समस्या</h3>
                  <p>{initiative.problem}</p>
                </div>
              )}
              {initiative.action && (
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">उपाययोजना</h3>
                  <p>{initiative.action}</p>
                </div>
              )}
              {initiative.result && (
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">परिणाम</h3>
                  <p>{initiative.result}</p>
                </div>
              )}
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-light/50 block mb-4">सद्यस्थिती</span>
                <p className="text-white font-medium">प्रकल्प पूर्ण. नागरिकांना सेवा उपलब्ध.</p>
              </div>
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
                  <span>{initiative.date}</span>
                  <span>•</span>
                  <span>{initiative.location}</span>
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
                  <h3 className="text-xl font-serif mb-6 text-white border-l-2 border-accent pl-4">समस्या</h3>
                  <p className="mb-6">{initiative.problem}</p>
                </>
              )}
              {initiative.action && (
                <>
                  <h3 className="text-xl font-serif mt-12 mb-6 text-white border-l-2 border-accent pl-4">उपाययोजना</h3>
                  <p className="mb-6">{initiative.action}</p>
                </>
              )}
              {initiative.result && (
                <>
                  <h3 className="text-xl font-serif mt-12 mb-6 text-white border-l-2 border-accent pl-4">परिणाम</h3>
                  <p className="mb-6">{initiative.result}</p>
                </>
              )}
            </article>
            
            <div className="mt-20 pt-10 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-light/40 block mb-2">Sources / अधिकृत माहिती</span>
              <p className="text-sm text-light/60">आमदार स्थानिक विकास निधी अहवाल आणि शासकीय परिपत्रके.</p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
