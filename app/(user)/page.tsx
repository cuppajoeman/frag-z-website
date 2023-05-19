import Hero from "@/components/Hero";
import { PropertiesWindow } from "@/components/PropertiesWindow";

export default function HomePage() {
  return (
    <main className="h-full min-h-fit overflow-y-scroll no-scrollbar flex flex-col items-start justify-center">
      {/* Hero */}
      <Hero/>
      {/* Properties window */}
      <PropertiesWindow/>
    </main>
  );
}
