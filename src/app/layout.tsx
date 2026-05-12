import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indrajit Chakraborty | SQA Engineer Portfolio",
  description:
    "Software Quality Assurance Engineer specializing in manual testing, API testing, WebdriverIO automation, and structured QA workflows. View projects, skills, and experience.",
  keywords: [
    "QA Engineer",
    "Software Testing",
    "WebdriverIO",
    "Selenium",
    "Automation Testing",
    "Manual Testing",
    "API Testing",
    "Indrajit Chakraborty",
  ],
  authors: [{ name: "Indrajit Chakraborty" }],
  openGraph: {
    title: "Indrajit Chakraborty | SQA Engineer Portfolio",
    description:
      "Software Quality Assurance Engineer with expertise in manual testing, automation, and API validation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
