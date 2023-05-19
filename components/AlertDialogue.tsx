import React from 'react'
import alert from '@/public/appIcons/alert.png'
import Image from 'next/image'

interface Props {
    title: string;
    message: string;
}

const AlertDialogue = ( { title , message }: Props ) => {
  return (
    <div className='flex flex-col w-[300px] h-[200px] bg-[#C5C5C5] border-2 border-b-black border-r-black p-1 mx-auto'>
        {/* Gradient */}
        <span className="w-full h-7 mb-1 bg-gradient-to-r from-[#020C67] to-[#3372BC] flex flex-row items-center relative text-white justify-between font-windows text-sm tracking-widest p-1">
            {title}
            <span className="h-[20px] w-[20px] bg-[#C5C5C5] border-2 border-b-black border-r-black flex items-center justify-center text-black">
            X
            </span>
        </span>
        {/* Content */}
        <section className="h-[100px] my-2 flex justify-evenly items-center flex-row w-full">
        {/* Icon */}
        <span className="w-[65px] h-[65px] min-w-[65px]">
            <Image src={alert} alt='alert' className='object-cover' width={100} height={100}/>
        </span>
        {/* Message */}
        <p className="font-windows">{message}</p>
        </section>
        {/* Button */}
        <button className="button-v2 mx-auto text-[#b4b4b4]">
            Close
        </button>
    </div>
  )
}

export default AlertDialogue