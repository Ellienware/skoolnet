import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmallTitle from "@/components/frontend/small-title";

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0"></div>

      <div className="container max-w-6xl mx-auto relative z-10 px-4 mx-auto text-center">
        <SmallTitle title="Welcome to SkoolNet" />

        <h1 className="max-w-4xl mx-auto mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Modern Management for Modern Schools
        </h1>

        <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
        Your digital command center for running a modern, connected, and efficient school.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="px-6 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Get Started!
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" className="px-6 py-6 border-gray-300 text-gray-900 rounded-full">
            See all features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
