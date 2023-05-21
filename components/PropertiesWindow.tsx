"use client";
import React from "react";

interface TabProps {
  id: number;
  title: string;
  selected: false | number;
}

export const PropertiesWindow = () => {
  const [ selected, setSelected ] = React.useState<false | number>(0);

  const Tab = ({ title, selected, id }: TabProps) => {
    const toggle = id === selected
    
    return (
      <span 
        onClick={() => setSelected(id)}
        className={`h-[40px] w-[100px] bg-[#C5C5C5] flex items-center justify-center rounded-tl-[3px] rounded-tr-[3px] border-l-2  border-r-2 border-r-black border-t-2 
        ${toggle ? 'mt-1' : 'mt-0 h-[30px]'}`}
        >
        <h1 className="text-center">{title}</h1>
      </span>
    );
  };

  return (
    <div className="properties-window">
      {/* Tab gradient */}
      <div className="tab-gradient">
        <h1 className="">FRAG-Z PROPERTIES</h1>
        <div className="flex flex-row gap-2">
          <span className="tab-gradient-button">?</span>
          <span className="tab-gradient-button">X</span>
        </div>
      </div>
      {/* Property window */}
      <section className="flex flex-col w-full h-full pt-4">
        {/* Tab row */}
        <div className="w-full flex flex-row items-end h-10 relative">
          <Tab id={0} selected={selected} title="Properties" />
          <Tab id={1} selected={selected} title="Properties" />
          <Tab id={2} selected={selected} title="Properties" />
          <Tab id={3} selected={selected} title="Properties" />
        </div>
        {/* Content */}
        <div className="w-full flex flex-col h-full border-2  border-b-black border-r-black"></div>
      </section>
    </div>
  );
};
