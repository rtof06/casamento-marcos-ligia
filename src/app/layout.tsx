import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casamento Marcos & Lígia",
  description: "Site do casamento do Marcos Paulo e Lígia Cavallari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-background-gradient">
        {children}
      </body>
    </html>
  );
}
