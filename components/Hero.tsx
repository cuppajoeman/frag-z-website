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

interface PlayerProps {
  link?: string;
  src?: string;
  id: number;
}

const PopupPlayer = ({ link, src, id }: PlayerProps) => {

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.08 * id,
      }
    },
  };

  return (
    <motion.span className="popup-player">
      {/* Tab */}
      <div className="w-full h-5 mb-1 bg-gradient-to-r from-[#020C67] to-[#3372BC] flex flex-row items-center justify-start font-windows text-sm tracking-widest p-1">
        Media Player
      </div>
      {/* Video */}
      <div className="">
        <video
          loop
          autoPlay
          playsInline
          muted
          className="h-full object-fill bg-black"
          src={link}
          poster="images/thumbnails/clip0Thumbnail.jpg"
        />
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
    <section className="w-full h-fit min-h-screen flex flex-col aid">
      <div className="aid w-full flex flex-col md:flex-row">
        {/* Video block */}
        <div className="w-full h-[500px] md:w-1/2 aid">
            <PopupPlayer link="a" src="a" id={0}/>
        </div>
        {/* Text Block */}
        <div className="w-full md:w-1/2 aid">

        </div>
      </div>
      {/* Alert row */}
    </section>
  );
};

export default Hero;
