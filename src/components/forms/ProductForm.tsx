import { Dispatch, SetStateAction, useState } from "react";
import { Form } from "../ui/form";
import { z } from "zod";
import { clothingItemSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../SubmitButton";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { Catalogo } from "@/constants";
import { SelectItem } from "../ui/select";
import Image from "next/image";

const ProductForm = ({
  type = "create",
  item,
  setOpen,
}: {
  type: "create" | "edit" | "delete";
  item?: any;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof clothingItemSchema>>({
    resolver: zodResolver(clothingItemSchema),
    defaultValues: {
      name: item ? item?.name : "",
      type: item ? item?.type : "",
      description: item ? item.description : "",
      price: item?.note || "",
      size: item?.size || "",
      imageUrl: item?.imageUrl || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof clothingItemSchema>) => {
    // setIsLoading(true);

    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        {type === "create" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">Nuevo Producto</h1>
            <p className="text-dark-700">Crea tu producto en 10 segundos.</p>
          </section>
        )}

        {type === "edit" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">Editar Producto</h1>
            <p className="text-dark-700">Edita tu producto en 10 segundos.</p>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Nombre del producto"
              placeholder="Vestido Suecia"
            >
              {item?.name}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="type"
              label="Tipo"
              placeholder="Vestido"
            >
              {item?.type}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="type"
              label="Tipo"
              placeholder="Selecciona un tipo"
            >
              {Catalogo.map((item, i) => (
                <SelectItem key={item.name + i} value={item.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={item.image}
                      width={32}
                      height={32}
                      alt="doctor"
                      className="rounded-full border border-dark-500"
                    />
                    <p>{item.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="description"
              label="Descripción"
              placeholder="Tela Lycra con Modal ..."
            >
              {item?.description}
            </CustomFormField>
          </section>
        )}

        {type === "delete" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">Eliminar Producto</h1>
            <p className="text-dark-700">Elimina tu producto en 10 segundos.</p>
          </section>
        )}
        <SubmitButton
          isLoading={isLoading}
          className={`${
            type === "delete" ? "shad-danger-btn" : "shad-primary-btn"
          } w-full`}
        >
          {/* {buttonLabel} */}
          {type}
        </SubmitButton>
      </form>
    </Form>
  );
};

export default ProductForm;
