"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BsPlayFill,
  BsPauseFill,
  BsStopFill,
  BsFillSkipBackwardFill,
  BsFillSkipStartFill,
  BsFillSkipForwardFill,
  BsFillSkipEndFill,
} from "react-icons/bs";
import Image, { StaticImageData } from "next/image";

import thumbnail0 from "@/public/images/thumbnails/clip0Thumbnail.jpg";
import thumbnail1 from "@/public/images/thumbnails/clip1Thumbnail.jpg";
import videoThumbnail  from "@/public/images/thumbnails/fragzGP0Thumbnail.jpg"; 

interface PlayerProps {
  link?: string;
  src: StaticImageData;
  id: number;
}

const PopupPlayer = ({ link, src, id }: PlayerProps) => {

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
        delay: 0.1 * id,
      }
    },
  };

  return (
    <motion.span
      variants={variants}
      initial="hidden"
      whileInView={'visible'}
      className="popup-player">
      {/* Tab */}
      <div className="w-full h-5 mb-1 bg-gradient-to-r from-[#020C67] to-[#3372BC] flex flex-row items-center justify-start font-windows text-sm tracking-widest p-1">
        Media Player
      </div>
      {/* Video */}
      <div className="w-full h-[180px]">
        {link !== undefined ?
          <video
            loop
            autoPlay
            playsInline
            muted
            className="h-full object-fill bg-black"
            src={link}
            poster="images/thumbnails/clip0Thumbnail.jpg"
          /> :
          <Image src={src} alt="video" className='object-cover bg-black'/>
        }
      </div>
      {/* Icon group */}
      <div className="flex h-8 lg:h-16 flex-row items-center justify-evenly text-[#b7b6b6] text-xl">
        <BsPlayFill />
        <BsPauseFill />
        <BsStopFill />
        <span className="h-[70%] w-[1px] bg-slate-200" />
        <BsFillSkipBackwardFill />
        <BsFillSkipStartFill />
        <BsFillSkipEndFill />
        <BsFillSkipForwardFill />
      </div>
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section className="w-full h-fit min-h-screen flex flex-col">
      <div className=" w-full flex flex-col md:flex-row">
        {/* Video block */}
        <div className="w-full h-[350px] md:w-1/2 popup-container relative">
          <PopupPlayer src={thumbnail0} id={0} />
          <PopupPlayer src={thumbnail1} id={1} />
          <PopupPlayer link="https://d21vt9tthjew1s.cloudfront.net/fragzGP0.mp4" src={videoThumbnail} id={2} />
        </div>
        {/* Text Block */}
        <div className="w-full flex flex-col text-white items-start justify-evenly md:w-1/2 -z-0 px-5">
          <h1 className="font-broshk text-4xl">
            Dominate in a World of <br></br>Unparalleled Movement and Fluidity
          </h1>
          <h3 className="text-lg my-3">
            Master the Classics: Frag-Z Brings Back Quake-Style Techniques for Unstoppable Fragging!
          </h3>
          <button className="button-v2">Coming Soon</button>
        </div>
      </div>
      {/* Alert row */}
      <div className="w-full flex flex-row items-center justify-center">

      </div>
    </section>
  );
};

export default Hero;
