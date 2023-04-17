import React from 'react'

interface CardProps {
    title: string,
    video: JSX.Element
    text: string,
}

const Card = ({ title, video, text }: CardProps) => {
    return (
        <div className="card">
            {/* Background */}
            <div className="card-background"/>
            {/* Foreground */}
            <div className="card-foreground">
                {/* Header */}
                <h1 className="w-full flex items-center justify-center h-10 md:h-16 tracking-wider mb-3 text-xl border-b-2 border-b-black font-bold md:text-2xl">{title}</h1>
                {/* Content */}
                <div className="w-full flex flex-col md:flex-row items-center justify-evenly md:h-72">
                    {video}
                    <div className="w-[95%] h-44  md:w-1/2 md:h-60 md:mt-0 mt-3 text-sm p-3 text-justify border-b-white/90  border-r-white/90  border-l-2 border-t-2 border-b-2 border-t-black border-l-black border-r-2 bg-[#BEBEBE] md:text-lg overflow-y-scroll no-scrollbar">
                        {text}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card