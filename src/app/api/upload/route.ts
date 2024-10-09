import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { resolve } from "path";
import { CloudinaryResponse } from "@/types";

cloudinary.config({
  cloud_name: "dqjinotkw",
  api_key: "447799582188724",
  api_secret: "5TscP9gjhBu5U-HMosFq0Omzz5o",
});

export async function POST(req: Request) {
  try {
    const files = await req.formData();
    const images = files.get("files");

    console.log("\x1b[31m%s\x1b[0m", "FILES", images);

    if (!images) {
      return NextResponse.json("No files uploaded", { status: 400 });
    }

    let responseCloudinary: any;

    if (images instanceof File) {
      const bytes = await images.arrayBuffer();
      const buffer = Buffer.from(bytes);
      console.log("\x1b[35m%s\x1b[0m", "BUFFER", buffer);

      responseCloudinary = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({}, (error, result) => {
            if (error) {
              console.log("\x1b[31m%s\x1b[0m", "ERROR", error);
              return reject(error);
            }
            console.log("\x1b[32m%s\x1b[0m", "RESULT", result);
            resolve(result);
          })
          .end(buffer);
      });

      console.log(
        "\x1b[33m%s\x1b[0m",
        "RESPONSE CLOUDINARY",
        responseCloudinary
      );
    }

    // Verifica si la respuesta de Cloudinary contiene el URL
    if (!responseCloudinary || !responseCloudinary.secure_url) {
      return NextResponse.json("Error uploading to Cloudinary", {
        status: 500,
      });
    }

    return NextResponse.json({
      message: "Uploaded successfully",
      url: responseCloudinary.secure_url,
    });
  } catch (error) {
    console.log("\x1b[31m%s\x1b[0m", "ERROR CATCH", error);
    return NextResponse.json(
      { message: "Error during the upload process" },
      { status: 500 }
    );
  }
}
