import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro salony | J.Oli Origins",
  description:
    "Salonní spolupráce J.Oli Origins: profesionální longevity rituály, domácí retail péče, školení, pracovní listy, marketingová podpora a partnerské podmínky pro kosmetické salony.",
  openGraph: {
    title: "J.Oli Origins pro salony",
    description:
      "Ne další značka do vitríny. Hotový longevity rituálový systém pro profesionální salony.",
    images: ["/assets/joliorigins/pro-salony/hero.png"],
  },
};

export default function ProSalonyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
