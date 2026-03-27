import * as z from "zod"

export const PostSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be atleast 3 characters long")
    .max(50, "Title must be less than 50 characters long"),
  content: z.string().min(10, "Content must be atleast 10 characters long"),
})
