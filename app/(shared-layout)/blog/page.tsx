import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { api } from "@/convex/_generated/api"
import { fetchQuery } from "convex/nextjs"
import Image from "next/image"
import Link from "next/link"

export default async function BlogPage() {
  const data = await fetchQuery(api.posts.getPosts)

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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => (
          <Card key={post._id} className="pt-0">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                className="object-cover"
                src="https://images.unsplash.com/photo-1773929484011-13d062a73b24"
                alt="A stone breakwater divides two bodies of water"
                fill
              />
            </div>

            <CardContent>
              <h2 className="text-2xl font-bold">
                <Link
                  href={`/blog/${post._id}`}
                  className="transition hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="line-clamp-1 text-muted-foreground">{post.body}</p>

              <Button className="mt-4 w-full" asChild>
                <Link href={`/blog/${post._id}`}>Read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
