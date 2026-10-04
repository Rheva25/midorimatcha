import * as React from "react";

export function PageWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={`flex-1 w-full flex flex-col pt-20 ${className}`}>
      {children}
    </main>
  );
}
