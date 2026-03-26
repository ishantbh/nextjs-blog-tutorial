import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="absolute top-5 left-5">
        <Button variant="secondary" asChild>
          <Link href="/">
            <ArrowLeft className="size-4" />
            Go Back
          </Link>
        </Button>
      </div>
      <div className="mx-auto w-full max-w-md">{children}</div>
    </div>
  )
}
