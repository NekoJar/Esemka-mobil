import { avant, montserrat, roboto } from "@/components/Fonts";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import type { Metadata } from "next";
import { SmoothScroll } from "../components/ui/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esemka Mobil",
  description:
    "PT. SOLO MANUFAKTUR KREASI | Mobil anak bangsa, kebanggaan Indonesia. Mobil ESEMKA Indonesia mempunyai cita-cita untuk membuktikan bahwa anak-anak Indonesia bisa dan mampu untuk membuat mobil sendiri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avant.variable} ${montserrat.variable} ${roboto.variable} font-avant`}
      >
        <SmoothScroll>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
