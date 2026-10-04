import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  actionText,
  actionHref,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center mx-auto" : "md:flex-row md:items-end justify-between gap-6"
      } mb-10`}
    >
      <div className={`space-y-2 ${align === "center" ? "max-w-xl" : "max-w-2xl"}`}>
        {eyebrow && (
          <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
            <span className="font-epilogue text-xs uppercase tracking-widest text-midori-green font-bold">
              {eyebrow}
            </span>
            {align === "left" && <span className="w-8 h-[1px] bg-midori-green"></span>}
          </div>
        )}
        <h2 className="font-epilogue text-3xl md:text-4xl lg:text-5xl text-content-primary tracking-tight uppercase font-bold">
          {title}
        </h2>
        {description && (
          <p className="font-jakarta text-base md:text-lg text-muted-text mt-2">
            {description}
          </p>
        )}
      </div>

      {actionText && actionHref && align === "left" && (
        <div className="shrink-0">
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1 font-jakarta text-sm font-semibold text-midori-green hover:text-midori-dark transition-colors"
          >
            {actionText} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
