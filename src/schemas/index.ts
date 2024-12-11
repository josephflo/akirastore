import { z } from 'zod'

export const postSchema = z.object({
  imageUrl: z.custom<File[]>().optional(),
})

export const clothingItemSchema = z.object({
  name: z.string().min(1, "El nombre del artículo es obligatorio"),
  type: z.enum(["Camperas", "Pantalones", "Corsets", "Chalecos",""]),
  description: z.string().min(1, "La descripción del artículo es obligatoria"),
  price: z.string().min(1, "El precio debe ser un número positivo"),
  size: z.enum(["S", "M", "L",""]),
  imageUrl: z.custom<File[]>().optional(),
});

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});