"use client"
import React from 'react'

export const PropertiesWindow = () => {
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
        <div className="w-full flex flex-row h-10 ">

        </div>
        {/* Content */}
        <div className="w-full flex flex-col h-full border-2  border-b-black border-r-black">

        </div>
      </section>
    </div>
  )
}
