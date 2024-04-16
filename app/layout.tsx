import { avant, montserrat, roboto } from "@/components/Fonts";
import type { Metadata } from "next";
import NavBar from "../components/navbar/NavBar";
import { SmoothScroll } from "../components/ui/SmoothScroll";
import "./globals.css";
import { Providers } from "./Providers";
import { Montserrat } from "next/font/google";

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
