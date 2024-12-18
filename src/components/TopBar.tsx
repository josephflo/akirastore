'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopBar = () => {

  const [text, setText] = useState<number>(0)
  const texts = ["COMPRA MINIMA $15000",  "ENVIOS A TODO EL PAIS | 5% OFF ABONANDO EN EFECTIVO EN EL LOCAL" , "LOS PRECIOS NO INCLUYEN IVA"];

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); 
    return () => clearInterval(interval); 
  }, [texts.length]);

  return (
    <>
    <div className="flex w-full text-center mx-auto items-center justify-center h-8 bg-background ">
      <p className="text-sm text-slate-500">{texts[text]}</p>
    </div>
    <div className="flex w-full text-center mx-auto items-center justify-center h-12 bg-black text-white ">
      <Link href="/">
        <img src="/akira-logo-white.png" alt="logo" className="w-auto h-14" />
      </Link>
    </div>
    </>
    
  );
};

export default TopBar;
