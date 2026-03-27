"use server"

import { PostSchema } from "@/app/schemas/blog"
import { api } from "@/convex/_generated/api"
import { getToken } from "@/lib/auth-server"
import { fetchMutation } from "convex/nextjs"
import { redirect } from "next/navigation"
import * as z from "zod"

export async function createBlogAction(value: z.infer<typeof PostSchema>) {
  const parsed = PostSchema.safeParse(value)

  if (!parsed.success) {
    throw new Error("Invalid post")
  }

  const token = await getToken()

  const { title, content: body } = parsed.data

  await fetchMutation(api.posts.createPost, { title, body }, { token })

  return redirect("/")
}
