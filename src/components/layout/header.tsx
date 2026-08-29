"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "मुख्यपृष्ठ", href: "/" },
  { name: "माझा प्रवास", href: "/journey" },
  { name: "कामं", href: "/initiatives" },
  { name: "मतदारसंघ", href: "/constituency" },
  { name: "विधानसभा", href: "/assembly" },
  { name: "मीडिया", href: "/media" },
  { name: "गॅलरी", href: "/gallery" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isScrolled ? "bg-dark/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
              कै
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold font-serif text-white group-hover:text-accent transition-colors">
                {siteConfig.siteName}
              </span>
              <span className="text-[11px] text-light/70 uppercase tracking-widest">
                {siteConfig.designationEn}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all relative group",
                    isActive ? "text-white" : "text-light/80 hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ml-4">
              <Button asChild size="sm">
                <Link href="/contact">संपर्क</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-light p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </Container>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark/80 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-dark-secondary shadow-2xl flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-white/10">
                <span className="font-bold font-serif text-xl">मेनू</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-light/80 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="p-5 border-t border-white/10">
                <Button asChild className="w-full">
                  <Link href="/contact">संपर्क साधा</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
