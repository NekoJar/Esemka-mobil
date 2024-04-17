import { avant, montserrat, roboto } from "@/components/Fonts";
import type { Metadata } from "next";
import NavBar from "../components/navbar/NavBar";
import { SmoothScroll } from "../components/ui/SmoothScroll";
import "./globals.css";
import { Providers } from "./Providers";
import { Montserrat } from "next/font/google";
import { createClient } from "@/prismicio";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Esemka Mobil",
    description:
      settings.data.meta_description ||
      "PT. SOLO MANUFAKTUR KREASI | Mobil anak bangsa, kebanggaan Indonesia. Mobil ESEMKA Indonesia mempunyai cita-cita untuk membuktikan bahwa anak-anak Indonesia bisa dan mampu untuk membuat mobil sendiri.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

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
        <Providers>
          <SmoothScroll>
            <NavBar />
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
