import * as React from "react";

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 md:py-24 lg:py-32 w-full ${className}`}>
      {children}
    </section>
  );
}
