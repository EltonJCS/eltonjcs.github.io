import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import BackgroundOverlay from "@/components/background-overlay";

import ActiveSectionContextProvider from "../../context/active-section-context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EltonJCS | Portfolio",
  description:
    "Desenvolvedor Front-end. Portfólio com meus projetos, experiência e habilidades.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body
        className={`${inter.className}  relative overscroll-none bg-slate-200 pt-28 text-slate-950 sm:pt-36`}
      >
        <BackgroundOverlay />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
