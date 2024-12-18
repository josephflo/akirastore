import ProductPage from "@/components/ProductPage";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import React, { useState } from "react";

type Params = {
  id: string; // o number si el id es numérico
};

type Props = {
  params: Params;
};

const productDetails = async ({ params: { id } }: Props) => {

  const product = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });
  console.log("productsssss", product);

  if (!product) {
    return <div>Producto no encontrado</div>; // Mostrar mensaje si el producto no se encuentra
  }

  return (
    <section className="container h-full w-full margin-section-hero px-8 lg:px-28 mx-auto">
      <ProductPage product={product} />
    </section>
  );
};

export default productDetails;
