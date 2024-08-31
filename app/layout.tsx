import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Dinahasina Ralaivao",
  description: "Développeur Fullstack expert en JavaScript et Python, j'allie React, Angular, Next.js, et Django pour créer des applications web performantes et centrées sur l'utilisateur. Passionné par l'innovation, je conçois des solutions sur-mesure, optimisées pour la performance et le SEO, avec un souci constant d'excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
