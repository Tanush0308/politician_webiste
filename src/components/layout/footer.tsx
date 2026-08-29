import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/container";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M2.5 7.1C2.1 8.4 2 10.2 2 12s.1 3.6.5 4.9a4 4 0 0 0 2.8 2.8c2.7.7 14.5.7 17.2 0a4 4 0 0 0 2.8-2.8c.4-1.3.5-3.1.5-4.9s-.1-3.6-.5-4.9a4 4 0 0 0-2.8-2.8c-2.7-.7-14.5-.7-17.2 0a4 4 0 0 0-2.8 2.8z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-white/10 pt-16 pb-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Identity */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                कै
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold font-serif text-white">
                  {siteConfig.siteName}
                </span>
                <span className="text-xs text-light/60 uppercase tracking-widest mt-1">
                  {siteConfig.designationEn}
                </span>
              </div>
            </Link>
            <p className="text-light/70 text-sm max-w-xs pt-2">
              {siteConfig.slogan}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-serif">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><Link href="/journey" className="text-sm text-light/70 hover:text-accent transition-colors">माझा प्रवास (Journey)</Link></li>
              <li><Link href="/initiatives" className="text-sm text-light/70 hover:text-accent transition-colors">विकासकामे (Initiatives)</Link></li>
              <li><Link href="/constituency" className="text-sm text-light/70 hover:text-accent transition-colors">मतदारसंघ (Constituency)</Link></li>
              <li><Link href="/assembly" className="text-sm text-light/70 hover:text-accent transition-colors">विधानसभा (Assembly)</Link></li>
            </ul>
          </div>

          {/* Media & Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-serif">Media</h3>
            <ul className="space-y-2.5">
              <li><Link href="/media" className="text-sm text-light/70 hover:text-accent transition-colors">बातम्या (News & Press)</Link></li>
              <li><Link href="/gallery" className="text-sm text-light/70 hover:text-accent transition-colors">फोटो गॅलरी (Gallery)</Link></li>
              <li><Link href="/contact" className="text-sm text-light/70 hover:text-accent transition-colors">संपर्क (Contact)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg font-serif">Contact Office</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-light/70 leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-light/70">{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-light/70">{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-light/50">
            &copy; {currentYear} {siteConfig.personNameEn}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-light/70 hover:bg-accent hover:text-white transition-all">
              <InstagramIcon />
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-light/70 hover:bg-accent hover:text-white transition-all">
              <FacebookIcon />
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-light/70 hover:bg-accent hover:text-white transition-all">
              <TwitterIcon />
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-light/70 hover:bg-accent hover:text-white transition-all">
              <YoutubeIcon />
            </a>
          </div>
          
          <div className="flex gap-4 text-xs text-light/50">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
