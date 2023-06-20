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
        className: "ml-5",
      },
    },
  },
};

const regexp_list_line = /^[ \t]*(\*|\d+\.)/gm;
const regexp_text_line = /^[ \t]*[^\s]+/gm;
const regexp_code_line = /^[ \t]*(\`{3})/gm;
let isInCodeBlock = false;

export function add_newlines_to_markdown(text: string): string {
  const new_lines: string[] = [];
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    line = line.trimEnd();
    if (i > 0) {
      const previous_line = lines[i - 1];
      if (regexp_code_line.test(line)) isInCodeBlock = !isInCodeBlock;
      if (
        previous_line.match(regexp_text_line) &&
        !previous_line.match(regexp_list_line) &&
        !isInCodeBlock
      ) {
        if (line.match(regexp_list_line)) {
          new_lines[i - 1] = previous_line + "\n\n";
        } else if (line.match(regexp_text_line) && isInCodeBlock) {
          new_lines[i - 1] = previous_line + "<br />  ";
        }
      }
    }
    new_lines.push(line);
  });
  const new_text = new_lines.join("\n");
  return new_text;
}

export default async function WikiArticle({ params: { article } }: Props) {
  const supabase = createClient();
  const { data } = await supabase
    .from("wiki_articles")
    .select("*")
    .eq("slug", article)
    .single();

  const text = add_newlines_to_markdown(data!.content);

  return (
    <section className="flex flex-col items-center justify-center h-full min-h-fit w-full ">
      <span className="w-[350px] sm:w-[600px] sm:my-8 font-windows md:w-[700px] h-[600px] min-h-[600px] sm:h-[700px] sm:min-h-[700px] border-2 border-b-black border-r-black bg-[#C5C5C5] flex flex-col items-start justify-start p-1">
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
