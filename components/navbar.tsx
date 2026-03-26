import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between py-5">
      <div className="flex items-center gap-8">
        <h1 className="text-3xl font-bold">
          <Link href="/">
            Next<span className="text-blue-500">Pro</span>
          </Link>
        </h1>

        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/create">Create</Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/auth/sign-up">Sign Up</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
