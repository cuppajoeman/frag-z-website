import React from "react";
import FileSystem from "@/components/FileSystem";
import Point from "@/components/Point";
import { createClient } from "@/utils/supabase-server";

interface Props {
  params: {
    folder: string;
  };
}

interface PointProps {
  text: string;
}

const PointData: PointProps[] = [
  { text: "Relevant information for implementing features" },
  { text: "Provides context, motivation, and project benefits" },
  { text: "Ensures accessibility and clarity for developers" },
  { text: "Minimal working example to assist developers" },
];

function getFolderID(name: string) {
  switch (name) {
    case "weapons":
      return 1;
    case "development":
      return 2;
    case "/":
      return 3;
    case "gamemodes":
      return 4;
    case "commands":
      return 5;
    default:
      return 0;
  }
}

export default async function WikiFolder({
  params: { folder },
}: Props) {
  const supabase = createClient();
  // Get wiki dir
  const folderID  = getFolderID(folder)
  const { data:filesIds } = await supabase
    .from("wiki_dir_to_wiki_articles")
    .select("*")
    .eq("wiki_directory_id", folderID);

  // Get articles in dir
  // **** Should add error handling for null ****
  const uniqueArticles = new Set(filesIds!.map((obj:any) => obj.wiki_article_id))
  const uniqueArticleList = Array.from(uniqueArticles);

  const { data:articles } = await supabase
    .from("wiki_articles")
    .select("*")
    .in("id", uniqueArticleList);
    

  return (
    <main className="h-fit flex flex-col items-center justify-start p-5">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center justify-center text-white max-w-[800px] mx-auto">
        <h1 className="font-broshk text-center text-5xl">
          Developer Wiki Page
        </h1>
        <p className="w-full text-justify font-sans">
          A valuable resource containing relevant information for developers
          looking to implement various features
        </p>
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
