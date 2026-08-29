import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  title,
  eyebrow,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif leading-[1.1] tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-light/70 max-w-2xl text-lg mt-2 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
