import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] transition-transform duration-200",
  variants: {
    variant: {
      default: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20",
      outline: "border border-accent text-accent hover:bg-accent hover:text-white",
      secondary: "bg-dark-secondary text-light hover:bg-dark-secondary/80",
      ghost: "hover:bg-dark-secondary hover:text-light",
      link: "text-accent underline-offset-4 hover:underline",
    },
    size: {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-4",
      lg: "h-14 rounded-md px-8 text-base",
      icon: "h-11 w-11",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof buttonVariants.variants.variant;
  size?: keyof typeof buttonVariants.variants.size;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants.base,
          buttonVariants.variants.variant[variant],
          buttonVariants.variants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
