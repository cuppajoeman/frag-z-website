import React from "react";
import Image, { StaticImageData } from 'next/image'
import caution from '@/public/images/caution.png'

export default function DevelopmentPage() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <Image src={caution} alt="caution" />
    </main>
  );
}
