import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React from "react";

type Params = {
  id: string; // o number si el id es numérico
};

type Props = {
  params: Params;
};

const productDetails = async ({ params: { id } }: Props) => {
  const product = await prisma.products.findUnique({
    where: {
      id: id, // reemplaza 123 por el id que buscas
    },
  });

  return (
    <section className="container h-full w-full margin-section-hero px-8 lg:px-28 mx-auto">
      <div className="flex flex-col lg:flex-row mx-auto gap-6">

        <div className="flex flex-col w-full">
          <img
            src={product?.imageUrl ? product.imageUrl : "/campera-1.png"} 
            alt="campera"
            className="w-full h-[860px] object-cover"
          />
        </div>

        <div className="flex flex-col w-full text-start mt-2 gap-2 ">
          <h1 className=" text-2xl font-bold mb-8">{product?.name}</h1>
          <p className="text-2xl">${product?.price}</p>
          <p className="text-small">
            {product?.description}
          </p>
          <p className="text-base font-bold">Talle S M L XL</p>
          <p className="text-base font-bold">Color</p>
          <Button className="w-full">Agregar al carrito</Button>
          <Button className="w-full bg-whatsapp">Continuar en WhatsApp</Button>
          <div className="w-full mt-4 border-dashed border-black border-t"/>
          <p>SKU: 24299-M-VERDE04</p>
          <div className="w-full mt-4 border-dashed border-black border-t"/>
          <p>Categorías: LINO, NEW IN, SHORT, SHORTS & POLLERAS
          </p>
        </div>
      </div>
    </section>
  );
};

export default productDetails;
