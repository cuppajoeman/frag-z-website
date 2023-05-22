import React from "react";
import ItemDialogue from "@/components/ItemDialogue";
import caution from "@/public/images/caution.png";
import { Item } from "@/types";

const dummyItems: Item[] = [
  // {
  //   name: "Dummy Item",
  //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sint quisquam, ad nihil animi iusto obcaecati optio sit dolorem repudiandae, voluptas illo aliquid eveniet impedit ullam. Tempore in eaque optio.",
  //   price: 'Free 99',
  //   img: caution
  // },
  // {
  //   name: "Dummy Item",
  //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sint quisquam, ad nihil animi iusto obcaecati optio sit dolorem repudiandae, voluptas illo aliquid eveniet impedit ullam. Tempore in eaque optio.",
  //   price: 'Free 99',
  //   img: caution
  // },
  // {
  //   name: "Dummy Item",
  //   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sint quisquam, ad nihil animi iusto obcaecati optio sit dolorem repudiandae, voluptas illo aliquid eveniet impedit ullam. Tempore in eaque optio.",
  //   price: 'Free 99',
  //   img: caution
  // },
]

export default function StorePage() {

  return (
    <main className="h-full flex flex-col items-center justify-center">
      {/* Main container */}
      <div className="h-full w-full flex flex-row items-center justify-center bg-black border-2 border-white p-5 relative">
        {/* 
          Item dialogue / items list 
          - Contains Shop items and Item info
        */}
        <ItemDialogue items={dummyItems}/>
      </div>
    </main>
  );
}
