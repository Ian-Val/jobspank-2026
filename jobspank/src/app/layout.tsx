import type { Metadata } from "next";
import "./globals.css";
import { Temporal } from "@js-temporal/polyfill";

(globalThis as any).Temporal = Temporal;

export const metadata: Metadata = {
  title: "JobSpank | Job Application Tracker",
  description:
    "Designed for entry-level talent to keep organized on their job search journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"h-full antialiased"}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
