
import { clothingItemSchema } from "@/schemas";
import { actionData } from "http-react";
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";

export const createProduct = async (product: any) => {
  try {
    console.log("Received product", product);
    if (!product.imageUrl || product.imageUrl.length === 0) {
      throw new Error("No image uploaded");
    }
    const formData = new FormData();
    product.imageUrl.forEach((file: File) => {
      formData.append("files", file);
    });

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const dataResponse = await response.json();

    console.log("\x1b[33m%s\x1b[0m","DATA RESPONSE", dataResponse);

    if (!response.ok) {
      throw new Error("Error uploading image");
    }

    console.log("\x1b[34m%s\x1b[0m","responseAction", response);

    const validation = clothingItemSchema.safeParse(product);

    if (validation.success) {
      product.imageUrl = dataResponse.url.secure_url;
      console.log("\x1b[31m%s\x1b[0m","URL IMAGEN", product.imageUrl);
      console.log("\x1b[31m%s\x1b[0m","PRODUCT", product);
      const newPost = await prisma.products.create({
        data: product,
      });
      console.log("\x1b[32m%s\x1b[0m","NEW POST", newPost);
      const plainProduct = JSON.parse(JSON.stringify(newPost));
      return plainProduct
    }
    revalidatePath("/inventory");
  } catch (error) {
    console.log(error);
  }
};
