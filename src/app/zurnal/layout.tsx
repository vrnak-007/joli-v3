import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Žurnál | J.Oli Origins",
  description:
    "Články o rituálu, skin longevity, ingrediencích a smyslové péči. Žurnál J.Oli Origins pro ženy, které chtějí své kosmetice rozumět.",
  openGraph: {
    title: "Žurnál J.Oli Origins | Péče, která má souvislosti",
    description:
      "Průvodce rituálem, skin longevity, ingrediencemi a vědomou péčí o pleť.",
    images: ["/assets/joliorigins/zurnal/hero.png"],
  },
};

export default function ZurnalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
