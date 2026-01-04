import { Hero } from "@/components/Hero";
import { MemoryWall } from "@/components/MemoryWall";
import { Reasons } from "@/components/Reasons";
import { Footer } from "@/components/Footer";
import { TogetherTimer } from "@/components/TogetherTimer";
import { LoveLetter } from "@/components/LoveLetter";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-pink-200 selection:text-pink-900">
      <Hero />
      <TogetherTimer />
      <Timeline />
      <Reasons />
      <LoveLetter />
      <MemoryWall />
      <Footer />
    </main>
  );
}
