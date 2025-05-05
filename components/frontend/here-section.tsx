import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SmallTitle from "@/components/frontend/small-title";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./images/Flux_Dev_two_smiling_children_a_boy_with_freckles_and_a_girl_w_3.jpg')",
        }}
      />

      
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20 z-0"></div>

      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* <SmallTitle title="Welcome to SkoolNet" /> */}

        <h1 className="max-w-4xl mx-auto mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Modern Management for Modern Schools
        </h1>

        <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-200">
          Your digital command center for running a modern, connected, and efficient school.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="px-6 py-6 bg-violet-600 hover:bg-violet-700 text-white rounded-full">
            Get Started!
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className="px-6 py-6 border-white text-black hover:border-violet-300 hover:text-violet-300 rounded-full"
          >
            See all features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
