import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { api } from "@/convex/_generated/api"
import { fetchQuery } from "convex/nextjs"
import Image from "next/image"
import Link from "next/link"

export async function BlogList() {
  const data = await fetchQuery(api.posts.getPosts)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((post) => (
        <Card key={post._id} className="pt-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              className="object-cover"
              src="https://images.unsplash.com/photo-1773929484011-13d062a73b24"
              alt="A stone breakwater divides two bodies of water"
              fill
              loading="lazy"
            />
          </div>

          <CardContent className="flex flex-1 flex-col">
            <h2 className="line-clamp-1 text-2xl font-bold">
              <Link
                href={`/blog/${post._id}`}
                className="transition hover:text-primary"
              >
                {post.title}
              </Link>
            </h2>

            <p className="line-clamp-3 flex-1 text-muted-foreground">
              {post.body}
            </p>

            <Button className="mt-4 w-full" asChild>
              <Link href={`/blog/${post._id}`}>Read more</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
