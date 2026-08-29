import * as React from "react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  className?: string;
  category?: string;
  label?: string;
  aspectRatio?: "video" | "square" | "portrait" | "auto";
}

export function MediaPlaceholder({
  className,
  category,
  label = "AUTHENTIC PHOTOGRAPH REQUIRED",
  aspectRatio = "auto"
}: MediaPlaceholderProps) {
  
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    auto: "h-full w-full"
  };

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center bg-[#1A1A1A] border border-[#333333] p-8 text-center grayscale",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        <div className="w-full border-t border-[#444444]" />
        
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase max-w-[200px] leading-relaxed">
            {label}
          </span>
          
          {category && (
            <span className="text-[#C9973E] font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mt-4">
              {category}
            </span>
          )}
        </div>

        <div className="w-full border-t border-[#444444]" />
      </div>
    </div>
  );
}
