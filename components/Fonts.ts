import localFont from "next/font/local";
import { Montserrat, Roboto_Mono } from "next/font/google";

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const avant = localFont({
  src: "../public/fonts/AVGARDD_2.woff",
  weight: "400",
  variable: "--font-avant",
});
