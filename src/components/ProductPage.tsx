"use client";

import { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  id: string;
  name: string;
  type: string;
  price: string;
  size: string;
  imageUrl: string[];
  description: string;
  createdAt: Date;
} | null

const ProductPage = ({product}: Props) => {
  const { id, name, type, price, size, imageUrl, description, createdAt } = product;

  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col lg:flex-row mx-auto gap-6">
        <div className="flex flex-col w-full">
          <img
            src={imageUrl ? imageUrl[index] : "/campera-1.png"}
            alt="campera"
            className="w-full h-[860px] object-cover py-4"
          />
          <div className= 'flex gap-2'>
            {imageUrl.map((image,index) => (
              <img 
              src={image}
               alt="campera" 
               className="w-auto h-[80px] object-cover border border-transparent hover:border-black transition-all duration-300 cursor-pointer " 
               key={index}
               onClick={() => setIndex(index)}
               />
            ))}
          </div>

        </div>

        <div className="flex flex-col w-full text-start mt-2 gap-2 ">
          <h1 className=" text-2xl font-bold mb-8">{name}</h1>
          <p className="text-2xl">${price}</p>
          <p className="text-small">{description}</p>
          <p className="text-base font-bold">Talle {size}</p>
          <p className="text-base font-bold">Color</p>
          <Button className="w-full">Agregar al carrito</Button>
          <Button className="w-full bg-whatsapp">Continuar en WhatsApp</Button>
          <div className="w-full mt-4 border-dashed border-black border-t" />
          <p>SKU: 24299-M-VERDE04</p>
          <div className="w-full mt-4 border-dashed border-black border-t" />
          <p>Categorías: LINO, NEW IN, SHORT, SHORTS & POLLERAS</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
