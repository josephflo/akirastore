"use client";

import { FileUploader } from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { postSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormSchema = z.infer<typeof postSchema>;

const Test = () => {
  const [files, setFiles] = useState([]);

  const form = useForm<FormSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      imageUrl: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof postSchema>) => {
    try {
      if (!values.imageUrl || values.imageUrl.length === 0) {
        throw new Error("No image uploaded");
      }
      
      console.log("Click submit",values.imageUrl);
      

      const formData = new FormData();
      values.imageUrl.forEach((file: File) => {
        formData.append("files", file);
      });
      console.log("this is formData",formData.getAll("files"));

      const response = await fetch("/api/test-upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Error while uploading image");
      }

      const data = await response.json();
      console.log("this is data",data);
    } catch (error) {
      console.error("Error on:", (error as Error).message);
    }
    console.log("worldohNo",values.imageUrl);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 container">
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <FileUploader files={field.value} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">CREAR ARTICULO</Button>
        </div>
      </form>
    </Form>
  );
};

export default Test;
