//src/app/layout.sx
import type { Metadata } from "next";
import "./globals.css";
// import Providers from "./components/Providers";
import { Jost } from "next/font/google";
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "New Town Spares",
  description: "New Town Spares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        {/* <Providers> */}
        {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
