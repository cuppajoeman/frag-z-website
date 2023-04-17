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
            <div className="card-background">
                
            </div>
            {/* Foreground */}
            <div className="card-foreground">
                {/* Header */}
                <h1 className="w-full flex items-center justify-center h-10 tracking-wider mb-3 text-xl border-b-2 border-b-black font-bold">{title}</h1>
                {/* Content */}
                <div className="w-full flex flex-col md:flex-row items-center justify-evenly">
                    {video}
                    <div className="w-[95%] mt-3 text-sm p-3 text-justify border-b-white/90  border-r-white/90  border-l-2 border-t-2 border-b-2 border-t-black border-l-black border-r-2 bg-[#BEBEBE]">
                        {text}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card