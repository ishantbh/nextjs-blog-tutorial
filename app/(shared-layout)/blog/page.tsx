import { BlogList } from "@/components/blog-list"
import { Suspense } from "react"

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="pb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Blog
        </h1>
        <p className="mx-auto max-w-2xl pt-4 text-xl text-muted-foreground">
          Insights, thoughts, and trends from our team.
        </p>
      </div>

      <Suspense
        fallback={<div className="text-2xl text-red-400">Loading...</div>}
      >
        <BlogList />
      </Suspense>
    </div>
  )
}
