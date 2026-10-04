import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Midori Matcha Club",
  description: "Modern Matcha & Contemporary Lifestyle Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-jakarta bg-surface-cream text-content-primary antialiased min-h-screen flex flex-col">
        {children}
        <Toaster position="top-center" toastOptions={{ className: 'font-jakarta text-sm font-semibold' }} />
      </body>
    </html>
  );
}
