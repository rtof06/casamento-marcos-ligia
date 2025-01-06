import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Casamento Marcos & Lígia",
  description: "Site do casamento do Marcos Paulo e Lígia Cavallari",
};

export const titleFontFamily = Cinzel_Decorative({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--cinzel-decorative",
});

export const secTitleFontFamily = Cinzel({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--cinzel",
});
export const textFontFamily = Crimson_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--crimson",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${secTitleFontFamily.variable} ${titleFontFamily.variable} ${textFontFamily.variable}`}
    >
      <body className="bg-background-gradient break-words">
        <Header />
        {children}
      </body>
    </html>
  );
}
