"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Card className="max-w-2xl w-full text-center">
        <CardHeader>
          <p className="text-base font-semibold text-rose-600">500 - Server Error</p>
          <CardTitle className="text-5xl sm:text-7xl text-gray-900 mt-4">
            Something went wrong
          </CardTitle>
          <CardDescription className="mt-4 text-lg sm:text-xl text-gray-500">
            We're sorry, but we encountered an error processing your request.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex items-center justify-center gap-x-4 flex-wrap">
          <button
            onClick={handleRefresh}
            className="rounded-md bg-gray-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-500"
          >
            Refresh page
          </button>
          <Link
            href="/"
            className="text-sm font-semibold text-gray-900"
          >
            Go back home <span aria-hidden="true">&rarr;</span>
          </Link>
        </CardContent>
        <CardFooter className="justify-center text-sm text-gray-500 border-t pt-4">
          © {new Date().getFullYear()} SkoolNet. All rights reserved.
        </CardFooter>
      </Card>
    </main>
  )
}

