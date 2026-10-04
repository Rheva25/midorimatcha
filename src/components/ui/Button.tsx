import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

// Instead of class-variance-authority if it's not installed, I'll manually implement variants for simplicity.
const buttonVariants = {
  primary: "bg-midori-dark text-white hover:bg-opacity-90",
  secondary: "bg-transparent border-2 border-midori-dark text-midori-dark hover:bg-midori-dark hover:text-white",
  ghost: "bg-transparent text-content-primary hover:bg-surface-sand",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:pointer-events-none disabled:bg-disabled-bg disabled:text-disabled-text ${buttonVariants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
