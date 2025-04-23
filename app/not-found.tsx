import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Card className="max-w-2xl w-full text-center">
        <CardHeader>
          <p className="text-base font-semibold text-emerald-600">404</p>
          <CardTitle className="text-5xl sm:text-7xl text-gray-900 mt-4">
            Page not found
          </CardTitle>
          <CardDescription className="mt-4 text-lg sm:text-xl text-gray-500">
            Sorry, we couldn't find the page you're looking for.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex items-center justify-center gap-x-4 flex-wrap">
          <Link
            href="/"
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Go back home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </CardContent>
        <CardFooter className="justify-center text-sm text-gray-500 border-t pt-4">
          © {new Date().getFullYear()} SkoolNet. All rights reserved.
        </CardFooter>
      </Card>
    </main>
  )
}
