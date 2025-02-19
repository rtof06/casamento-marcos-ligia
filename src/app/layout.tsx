import type { Metadata } from "next";
import "./globals.css";
import { Kodchasan } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Casamento Lígia & Marcos",
  description: "Site do casamento do Marcos Paulo e Lígia Cavallari",
};

const textFontFamily = Kodchasan({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--textFont",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`scroll-smooth`}>
      <body
        className={`${textFontFamily.variable} bg-background-gradient break-words`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
