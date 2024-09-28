import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex w-full text-center mx-auto items-center justify-center h-12 bg-black text-white ">
      <Link href="/">
        <h1 className="text-xl font-bold">AKIRA STORE</h1>
      </Link>
    </div>
  );
};

export default TopBar;
