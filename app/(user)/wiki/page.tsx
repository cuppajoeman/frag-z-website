import React from "react";
import Image, { StaticImageData } from 'next/image'
import alert from '@/public/appIcons/alert.png'
import FileSystem from "@/components/FileSystem";
import { createClient } from "@/utils/supabase-server";

interface PointProps {
  text: string;
}


const Point = ({ text }: PointProps) => (
  <span className="flex flex-row items-center mx-auto justify-start w-[340px] h-[70px] bg-[#C5C5C5] border-2 border-b-black border-r-black">
    {/* Icon */}
    <div className="flex items-center justify-center w-[50px] h-[50px] mx-2">
      <Image src={alert} alt="alert" className="object-cover" width={100} height={100} />
    </div>
    {/* Text */}
    <h1 className="font-sans font-semibold flex items-center justify-start text-black w-[250px] h-[70px]">
      {text}
    </h1>
  </span>
)

const PointData: PointProps[] = [
  { text: "Relevant information for implementing features" },
  { text: "Provides context, motivation, and project benefits" },
  { text: "Ensures accessibility and clarity for developers" },
  { text: "Minimal working example to assist developers" },
]


export default async function WikiPage() {
  const supabase = createClient()
  // from wiki_directories get the root element, now with it's id, iterate through the wiki_dir_to_wiki_dirs table, 
  // find all rows with matching parent_dir_id and and collect the child_directory ids into an array called child_dirs and articles in to wiki_articles
  // then iterate through the id's stored in child_directory_ids and get the associated directory from the wiki_directories table and then load the meta data
  // iterate through the articles and also add those in.

  // Only do this one layer at a time when the user clicks on it so we can lazy load as we go instead of just loading everythign at once.
  const { data: articles }: any = await supabase.from('wiki_articles').select('*')

  
  return (
    <main className="h-fit flex flex-col items-center justify-start p-5">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center text-white max-w-[800px] mx-auto">
        <h1 className="font-broshk text-center text-5xl">Developer Wiki Page</h1>
        <p className="w-full text-justify font-sans">A valuable resource containing relevant information for developers looking to implement various features</p>
        <div className="grid grid-col-1 grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 items-center justify-center">
          {PointData.map((point, i) => (
            <Point key={i} text={point.text} />
          ))}
        </div>
      </div>
      {/* File system */}
      <section className="my-5">
        <FileSystem articles={articles} />
      </section>
    </main>
  );
}
