import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "J.OLI ORIGINS | Longevity rituál pro pleť",
  description:
    "Pět kroků pro dlouhověkost pleti. Ranní a večerní longevity rituál, který dává péči o pleť jasný řád. Začněte Travel Luxe Setem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${playfair.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
