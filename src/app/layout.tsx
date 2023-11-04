import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import UIProvider from "@/providers/UIProvider";
import Header from "@/components/common/header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiago Mecânico Oficina e Escola",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className}`}>
        <UIProvider>
          <Header />
          <main className="relative overflow-hidden">{children}</main>
        </UIProvider>
      </body>
    </html>
  );
}
