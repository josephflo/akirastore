import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { toBase64 } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const { name, type, price, size, description, imageUrl } =
      await request.json();

      let base64Image = '';
      if (imageUrl && imageUrl?.length > 0) {
        const file = imageUrl[0];
    
        // Convert Blob to Base64
        base64Image = await toBase64(file);
      }
    const newProduct = await prisma.products.create({
      data: {
        name,
        type,
        price,
        size,
        description,
        imageUrl:base64Image,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.log("Error creating product", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}
