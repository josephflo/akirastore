"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "http-react";
import { AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createPost } from "@/actions/post";
import { clothingItemSchema } from "@/schemas";
import { FileUploader } from "../FileUploader";
import { featuresList } from "@/constants";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { useState } from "react";

type FormSchema = z.infer<typeof clothingItemSchema>;

export default function PostForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(clothingItemSchema),
    defaultValues: {
      name: "",
      type: "",
      description: "",
      price: "",
      size: "",
      imageUrl: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof clothingItemSchema>) => {
    setLoading(true);

    let formData;
    if (values.imageUrl && values.imageUrl?.length > 0) {
      const blobFile = new Blob([values.imageUrl[0]], {
        type: values.imageUrl[0].type,
      });

      formData = new FormData();
      formData.append("blobFile", blobFile);
      formData.append("fileName", values.imageUrl[0].name);
    }
    
    try {
      const product = {
        name: values.name,
        type: values.type,
        description: values.description,
        price: values.price,
        size: values.size,
        imageUrl: values.imageUrl ? formData : undefined,
      };
      console.log("product", product);

      // const newProduct = await createPost(product);
      const res = await fetch('https://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      
      router.push("/inventory");
      setLoading(false);
      return res
      
    } catch (error) {
      console.log(error);
    }
  };
  // To learn how to use the `useMutation` hook with server actions
  // visit https://httpr.vercel.app/docs/server_actions#server-mutations

  // const { refresh, loading, error } = useMutation(createPost, {
  //   params: form.getValues(),
  //   onResolve() {
  //     router.replace("/inventory");
  //   },
  // });

  return (
    <Form {...form}>
      {/* {error && (
        <Alert className="mb-4" variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>An error ocurred</AlertTitle>
        </Alert>
      )} */}

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="nombre del artículo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="type"
          label="Tipo"
          placeholder="Elije un tipo"
        >
          {featuresList.map((type, i) => (
            <SelectItem key={type.name + i} value={type.name}>
              <div className="flex cursor-pointer items-center gap-2">
                <Image
                  src={type.image}
                  width={20}
                  height={20}
                  alt="type"
                  className="rounded-full border border-slate-700"
                />
                <p>{type.name}</p>
              </div>
            </SelectItem>
          ))}
        </CustomFormField>

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>
              <FormControl>
                <Input placeholder="$3999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Talles</FormLabel>
              <FormControl>
                <Input placeholder="S,M,L,XL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* IMAGEN INPUT  */}
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

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Breve descripcion del producto"
                  {...field}
                  onChange={(e) => {
                    const heightOffset = 3;
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height =
                      e.currentTarget.scrollHeight + heightOffset + "px";

                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button disabled={loading} type="submit">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            CREAR ARTICULO
          </Button>
        </div>
      </form>
    </Form>
  );
}
