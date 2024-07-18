import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discography",
  description: "Web application with music discography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <NavbarComponent />
          {children}
        </>
      </body>
    </html>
  );
}
