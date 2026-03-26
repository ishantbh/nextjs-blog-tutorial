import * as z from "zod"

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be atleast 3 characters long")
    .max(30, "Name must be less than 30 characters long"),
  email: z.email({ error: "Invalid email" }),
  password: z
    .string()
    .min(8, "Password must be atleast 8 characters long")
    .max(30, "Password must be less than 30 characters long"),
})
