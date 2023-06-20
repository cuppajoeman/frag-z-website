import React from "react";
import Image, { StaticImageData } from 'next/image'
import caution from '@/public/images/caution.png'
import Point from "@/components/Point";

interface PointProps {
  text: string;
}

const PointData: PointProps[] = [
  { text: "Relevant information for implementing features" },
  { text: "Provides context, motivation, and project benefits" },
  { text: "Ensures accessibility and clarity for developers" },
  { text: "Minimal working example to assist developers" },
]

export default function DevelopmentPage() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="flex flex-col gap-4 items-center justify-center text-white max-w-[800px] mx-auto">
        <h1 className="font-broshk text-center text-5xl">Developer Log</h1>
        <p className="w-full text-justify font-sans">A valuable resource containing relevant information for developers looking to implement various features</p>
        <div className="grid grid-col-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 items-center justify-center">
          {PointData.map((point, i) => (
            <Point key={i} text={point.text} />
          ))}
        </div>
      </div>
    </main>
  );
}
