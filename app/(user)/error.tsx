'use client'
import Image from 'next/image'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import gif from '@/public/appIcons/skull.gif'

export default function ErrorPage() {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="h-32 w-32 flex items-center justify-center">
          <Image className="mx-auto" src={gif} alt="skull" />
        </span>
        <h1 className="text-6xl text-white font-arash text-center">
          THIS PAGE DOES NOT EXIST
        </h1>
        <Link className="text-6xl text-white font-arash" href={"/"}>
          <BiArrowBack />
        </Link>
      </div>
    </section>
  );
}
