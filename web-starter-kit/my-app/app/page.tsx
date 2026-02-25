import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container max-w-screen-2xl mx-auto px-4 md:px-6">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
