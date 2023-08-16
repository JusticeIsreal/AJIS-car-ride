import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import NavBar from "@/components/NavBar";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AJIS CAR RIDE",
  description: "Developed by Justice Agbonma",
  icons: [
    "https://res.cloudinary.com/isreal/image/upload/v1673918222/banking%20app/AJIS_FILE_1_re65mc.png",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
