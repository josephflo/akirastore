import { Navbar } from "@/components/layout";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <div className="flex w-full text-center mx-auto items-center justify-center h-12 bg-black text-white ">
            <Link href="/">
              <img
                src="/akira-logo-white.png"
                alt="logo"
                className="w-auto h-12"
              />
            </Link>
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
