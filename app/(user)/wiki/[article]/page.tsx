import React from "react";
import Link from "next/link";
import { FileProps } from "@/types";
import Markdown from "markdown-to-jsx";
import { marked } from "marked";
import { createClient } from "@/utils/supabase-server";

interface Props {
  params: {
    article: string;
  };
}

const ParserOptions: any = {
  forceBlock: true,
  overrides: {
    h1: {
      props: {
        className: "my-2 text-2xl font-bold",
      },
    },
    h2: {
      props: {
        className: "text-lg font-bold",
      },
    },
    h3: {
      props: {
        className: "text-base font-bold",
      },
    },
    ul: {
      props: {
        className: "my-3",
      },
    },
    li: {
      props: {
        className: "ml-5 list-disc",
      },
    },
    p: {
      props: {
        className: "my-2.5"
      }
    }
  },
};

const regexp_list_line = /^[ \t]*(\*|\d+\.)/gm;
const regexp_text_line = /^[ \t]*[^\s]+/gm;
const regexp_code_line = /^[ \t]*(\`{3})/gm;
let isInCodeBlock = false;

export default async function WikiArticle({ params: { article } }: Props) {
  const supabase = createClient();
  const { data } = await supabase
    .from("wiki_articles")
    .select("*")
    .eq("slug", article)
    .single();

  const text = data!.content;
  console.log(text)

  return (
    <section className="flex flex-col items-center justify-center h-full min-h-fit w-full ">
      <span className="w-[300px] sm:w-[600px] my-4 sm:my-8 font-windows md:w-[700px] h-[600px] min-h-[600px] sm:h-[700px] sm:min-h-[700px] border-2 border-b-black border-r-black bg-[#C5C5C5] flex flex-col items-start justify-start p-1">
        {/* Tab gradient */}
        <div className="tab-gradient">
          <h1 className="">Note</h1>
          <div className="flex flex-row gap-2">
            <Link href={"/wiki"} className="tab-gradient-button cursor-pointer">
              X
            </Link>
          </div>
        </div>
        {/* Filesystem window */}
        <section className="flex flex-col w-full h-full pt-4">
          {/* Explorer*/}
          <div className="w-full h-full sm:max-h-[630px] flex flex-col p-5 items-start justify-start border-2 border-t-black border-l-black bg-white overflow-y-scroll overflow-x-clip text-black accent-indigo-600">
            <div className="flex h-24 flex-col items-center justify-start w-full">
              {/* Title */}
              <h1 className="text-xl md:text-3xl w-full">{data!.title}</h1>
              {/* Author */}
              <div className="flex flex-row w-full items-center justify-start">
                By: {data!.authors}
              </div>
              {/* Content */}
              <div className="w-full h-fit ">
                {<Markdown options={ParserOptions}>{text}</Markdown>}
              </div>
            </div>
          </div>
        </section>
      </span>
    </section>
  );
}
