import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-Record | Aplikasi Kehadiran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className + " flex w-full justify-center overflow-hidden"
        }
      >
        <div className="relative h-screen w-full overflow-auto border-2 sm:max-w-[400px]">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
