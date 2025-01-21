import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: {
      default: "HeliusArt",
      template: "%s | HeliusArt",
   },
   description: "Keramika",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} antialiased max-w-screen-xl px-10 mx-auto`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
