import { z } from 'zod'

export const postSchema = z.object({
  title: z.string().min(1, "Title can't be empty"),
  content: z.string().min(1, "Description can't be empty")
})

export const clothingItemSchema = z.object({
  tipo: z.enum(["pantalón", "camiseta", "buzo", "chaqueta", "zapatos", "accesorios"]),
  nombre: z.string().min(1, "El nombre del artículo es obligatorio"),
  descripcion: z.string().min(1, "La descripción del artículo es obligatoria"),
  precio: z.number().positive("El precio debe ser un número positivo"),
  talles: z.enum(["S", "M", "L"]).array().min(1, "Debe haber al menos un talle disponible"),
  imagenUrl: z.string().url("La URL de la imagen debe ser válida")
});