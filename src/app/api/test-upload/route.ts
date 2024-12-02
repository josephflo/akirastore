import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: Request) {
  try {
    const files = await req.formData();
    const images = files.getAll("files");

    if (!images || images.length === 0) {
      return NextResponse.json("No files uploaded", { status: 400 });
    }

    const urls: string[] = [];

    for (const image of images) {
      if (image instanceof File) {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        try {
          const responseCloudinary = await new Promise<any>(
            (resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "akiracloud" },
                (error, result) => {
                  if (error) {
                    console.log("\x1b[31m%s\x1b[0m", "ERROR DETAIL", error); // Log detallado del error
                    return reject(error);
                  }
                  resolve(result);
                }
              );
              uploadStream.end(buffer);
            }
          );

          console.log(
            "\x1b[33m%s\x1b[0m",
            "RESPONSE CLOUDINARY",
            responseCloudinary
          );

          // Agrega la URL al array si la respuesta es exitosa
          if (responseCloudinary && responseCloudinary.secure_url) {
            urls.push(responseCloudinary.secure_url);
          } else {
            return NextResponse.json("Error uploading to Cloudinary", {
              status: 500,
            });
          }
        } catch (uploadError:any) {
          console.log("\x1b[31m%s\x1b[0m", "UPLOAD ERROR", uploadError); // Error en la subida
          return NextResponse.json(
            {
              message: "Error uploading to Cloudinary",
              error: uploadError.message,
            },
            { status: 500 }
          );
        }
      }
    }

    return NextResponse.json({
      message: "Uploaded successfully",
      urls,
    });
  } catch (error) {
    console.log("\x1b[31m%s\x1b[0m", "ERROR CATCH", error);
    return NextResponse.json(
      { message: "Error during the upload process" },
      { status: 500 }
    );
  }
}
