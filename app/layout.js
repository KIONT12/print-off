import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/Archivo.woff2",
  variable: "--font-archivo",
  weight: "400 700",
  display: "swap",
});

const oswald = localFont({
  src: "./fonts/Oswald.woff2",
  variable: "--font-oswald",
  weight: "400 700",
  display: "swap",
});

const teko = localFont({
  src: "./fonts/Teko.woff2",
  variable: "--font-teko",
  weight: "500 700",
  display: "swap",
});

export const metadata = {
  title: "New Force Basketball Club",
  description:
    "Bangkok basketball club empowering athletes through training, competition, and international exposure.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} ${archivo.variable} ${oswald.variable} ${teko.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
