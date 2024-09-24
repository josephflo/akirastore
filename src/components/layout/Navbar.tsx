"use client";
import Link from "next/link";
import { BrowserOnly } from "react-kuh";
import { IoIosMenu } from "react-icons/io";

import { ThemeToggle, AuthButton } from "@/components/layout";

export default function Navbar() {
  return (
    <header className="border-b border-opacity-10 backdrop-blur-lg bg-opacity-70 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-2 px-6 md:px-8">
        <div className="flex justify-between w-full items-center ">
          <Link className="flex font-bold text-lg w-6 h-auto " href={"/"}>
            <IoIosMenu className="text-2xl font-normal  items" />
          </Link>

          <Link className="flex font-bold text-lg w-16 h-auto tracking-widest" href={"/"}>
            MENU
          </Link>

          <Link
            className="font-bold text-lg w-16 h-auto mx-auto tracking-widest"
            href="/inventory"
          >
            BSCR
          </Link>
        </div>

        <div className="flex items-center gap-x-2">
          <AuthButton />
          <BrowserOnly>
            <ThemeToggle />
          </BrowserOnly>
        </div>
      </div>
    </header>
  );
}
