import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const dogica = localFont({
  src: "../public/fonts/DogicaPixelBold.otf",
  variable: "--font-dogica",
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Kurinu E-Pets - Bring your Fursonas to life!",
  description:
    "Custom E-Pets crafted with love to reflect your individual style and imagination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${dogica.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
