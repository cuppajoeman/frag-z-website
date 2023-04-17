import React from 'react'
import { BsPlayFill, BsPauseFill, BsStopFill, BsFillSkipBackwardFill, BsFillSkipStartFill, BsFillSkipForwardFill, BsFillSkipEndFill } from 'react-icons/bs'

interface VideoProps {
    link: string
}

const VideoPlayer = ( { link } : VideoProps ) => {
    return (
        <div className="videoplayer">
            {/* Tab */}
            <div className="w-full h-5 mb-1 bg-gradient-to-r from-[#020C67] to-[#3372BC] flex flex-row items-center justify-start font-windows text-sm tracking-widest p-1">
                Media Player
            </div>
            {/* Video */}
            <div className="">
                <video loop autoPlay playsInline muted className='h-full object-fill' src={link} poster='images/thumbnails/clip0Thumbnail.jpg' />
            </div>
            {/* Icon group */}
            <div className="flex h-8 lg:h-16 flex-row items-center justify-evenly text-[#b7b6b6] text-xl">
                <BsPlayFill/>
                <BsPauseFill/>
                <BsStopFill/>
                <span className="h-[70%] w-[1px] bg-slate-200"/>
                <BsFillSkipBackwardFill/>
                <BsFillSkipStartFill/>
                <BsFillSkipEndFill/>
                <BsFillSkipForwardFill/>
                
            </div>
        </div>
    )
}

export default VideoPlayer