import Hero from "@/components/Hero";
import { PropertiesWindow } from "@/components/PropertiesWindow";

export default function HomePage() {
  return (
    <main className="h-full min-h-fit overflow-y-scroll overflow-x-clip no-scrollbar flex flex-col items-center justify-start">
      {/* Hero */}
      <Hero/>
      {/* Properties window */}
      <PropertiesWindow/>
    </main>
  );
}
