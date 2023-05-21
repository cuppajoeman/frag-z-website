"use client"
import React from 'react'

interface TabProps {
  title: string;
}

export const PropertiesWindow = () => {

  const Tab = (  { title }: TabProps) => {

    return (
      <span className="h-[40px] w-[100px] bg-[#C5C5C5] flex items-center justify-center rounded-tl-[3px] rounded-tr-[3px] border-l-2  border-r-2 border-r-black border-t-2">
        <h1 className="text-center">{title}</h1>
      </span>
    )
  }

  return (
    <div className='properties-window'>
      {/* Tab gradient */}
      <div className="tab-gradient">
        <h1 className="">FRAG-Z PROPERTIES</h1>
        <div className="flex flex-row gap-2">
          <span className="tab-gradient-button">
            ?
          </span>
          <span className="tab-gradient-button">
            X
          </span>
        </div>
      </div>
      {/* Property window */}
      <section className="flex flex-col w-full h-full pt-4">
        {/* Tab row */}
        <div className="w-full flex flex-row h-10 relative">
          <Tab title="Properties" />
          <Tab title="Properties" />
          <Tab title="Properties" />
          <Tab title="Properties" />
        </div>
        {/* Content */}
        <div className="w-full flex flex-col h-full border-2  border-b-black border-r-black">

        </div>
      </section>
    </div>
  )
}
