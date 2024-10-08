"use client";
import Link from "next/link";
import { BrowserOnly } from "react-kuh";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import { ThemeToggle, AuthButton } from "@/components/layout";

export default function Navbar() {
  return (
    <header className="border-b border-opacity-10 backdrop-blur-lg bg-opacity-70 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-2 px-6 md:px-8">
        <div className="flex justify-between w-full items-center ">
          <Link className="flex font-bold text-lg w-6 h-auto " href={"/"}>
            <IoIosMenu className="text-2xl font-normal  items" />
          </Link>

          <Link
            className="font-bold text-lg w-16 h-auto tracking-widest hidden md:block"
            href={"/"}
          >
            MENU
          </Link>

          <Link
            className="flex font-bold text-lg w-16 h-auto mx-auto tracking-widest"
            href="/inventory"
          >
            BSCR
            <h1 className="text-center text-lg font-bold mt-1">
              <IoIosSearch size={22} />
            </h1>
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
