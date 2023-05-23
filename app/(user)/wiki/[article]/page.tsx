import { FileProps } from "@/types";
import { createClient } from "@/utils/supabase-server";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    article: string;
  };
}

export default async function WikiArticle({ params: { article } }: Props) {
  const supabase = createClient();
  const { data } = await supabase
    .from('wiki_articles')
    .select('*')
    .eq('slug',article)
    .single()

  return (
    <section className="flex flex-col items-center justify-center h-full w-full">
      <span className="w-[350px] sm:w-[600px] font-windows md:w-[700px] h-[600px] min-h-[600px] sm:h-[700px] sm:min-h-[700px] border-2 border-b-black border-r-black bg-[#C5C5C5] flex flex-col items-start justify-start p-1">
        {/* Tab gradient */}
        <div className="tab-gradient">
          <h1 className="">Note</h1>
          <div className="flex flex-row gap-2">
            <Link href={'/wiki'} className="tab-gradient-button cursor-pointer">X</Link>
          </div>
        </div>
        {/* Filesystem window */}
        <section className="flex flex-col w-full h-full pt-4">
          {/* Explorer*/}
          <div className="w-full h-full sm:max-h-[630px] flex flex-col p-5 items-start justify-start border-2 border-t-black border-l-black bg-white overflow-y-scroll overflow-x-clip text-black">
            <div className="flex h-24 flex-col items-center justify-center w-full">
              {/* Title */}
              <h1 className="text-xl md:text-3xl w-full">{data!.title}</h1>
              {/* Author */}
              <div className="flex flex-row w-full items-center justify-start">
                By: {data!.authors}
              </div>
            </div>
            {/* Content */}
            <div className="w-full h-fit">
              {data!.content}
            </div>
          </div>
        </section>
      </span>
    </section>
  );
}
