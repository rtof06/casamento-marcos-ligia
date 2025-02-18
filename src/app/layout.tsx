import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import {Kodchasan} from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Casamento Marcos & Lígia",
  description: "Site do casamento do Marcos Paulo e Lígia Cavallari",
};

// Definindo as fontes fora do export
export const titleFontFamily = localFont({
  src: "/fonts/Milan.ttf"
});

export const secTitleFontFamily = localFont({
  src: "/fonts/Milan.ttf"
});

export const textFontFamily =  Kodchasan({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--textFont'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`scroll-smooth`}
    >
      <body className={`${textFontFamily.variable} bg-background-gradient break-words`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
