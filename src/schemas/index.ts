import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(1, "Title can't be empty"),
  content: z.string().min(1, "Description can't be empty")
})

export const clothingItemSchema = z.object({
  name: z.string().min(1, "El nombre del artículo es obligatorio"),
  type: z.enum(["Camperas", "Pantalones", "Corsets", "Chalecos",""]),
  description: z.string().min(1, "La descripción del artículo es obligatoria"),
  price: z.string().min(1, "El precio debe ser un número positivo"),
  size: z.enum(["S", "M", "L",""]),
  imageUrl: z.custom<File[]>().optional(),
});