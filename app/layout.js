import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "New Force Basketball Club",
  description:
    "Bangkok basketball club empowering athletes through training, competition, and international exposure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${outfit.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
