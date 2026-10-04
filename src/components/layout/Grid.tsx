import * as React from "react";

export function Grid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-6 md:gap-8 ${className}`}>
      {children}
    </div>
  );
}
