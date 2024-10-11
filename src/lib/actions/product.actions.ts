"use server";

import { clothingItemSchema } from "@/schemas";
import { actionData } from "http-react";
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";

export const createProduct = async (product: any) => {
  try {
    console.log("Received product", product);
    
    // Validación de datos del producto
    const validation = clothingItemSchema.safeParse(product);
    if (!validation.success) {
      throw new Error("Product validation failed");
    }

    // Crear el nuevo producto en la base de datos
    const newProduct = await prisma.products.create({
      data: product,
    });
    console.log("\x1b[32m%s\x1b[0m", "NEW PRODUCT", newProduct);

    // Convertir a un objeto plano antes de retornarlo
    const plainProduct = JSON.parse(JSON.stringify(newProduct));

    // Revalidar la página del inventario
    revalidatePath("/inventory");

    return plainProduct;
  } catch (error) {
    console.log(error);
  }
};
