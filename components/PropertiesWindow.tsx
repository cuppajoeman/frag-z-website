"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { FaYoutube, FaPatreon, FaInstagram, FaDiscord } from 'react-icons/fa'

import thumbnail0 from "@/public/images/thumbnails/clip0Thumbnail.jpg";

interface TabProps {
  id: number;
  title: string;
  selected: false | number;
}

interface TabDataProps {
  header: string;
  videoLink: string;
  thumbnail?: StaticImageData;
  blurb: string;
}

const TabDataInfo: TabDataProps[] = [
  {
    header: "Step into the Nostalgic Abyss",
    videoLink: "https://d21vt9tthjew1s.cloudfront.net/clip0.mp4",
    thumbnail: thumbnail0,
    blurb: "Relive the golden era of gaming with Frag-Z, capturing the essence of 90's frag movies. Immerse yourself in a world where skill, speed, and precision are celebrated. Get ready for an authentic experience that pays homage to the games that ignited your gaming passion, transporting you back to a time when gaming was pure, raw, and undeniably addictive.",
  },
  {
    header: "Unparalleled Movement and Fluidity",
    videoLink: "https://d21vt9tthjew1s.cloudfront.net/clip1.mp4",
    thumbnail: thumbnail0,
    blurb: "Embrace the true freedom of movement in Frag-Z, where agility and finesse reign supreme. With the ability to execute gravity-defying jumps, lightning-fast strafes, and exploit the tiniest edges, you'll discover a new level of fluidity and control. Experience the exhilarating rush as you effortlessly traverse the terrain and outmaneuver your opponents.",
  },
  {
    header: "Master the Art of Fragging",
    videoLink: "https://d21vt9tthjew1s.cloudfront.net/clip1.mp4",
    thumbnail: thumbnail0,
    blurb: "Experience the heart-pounding intensity of Frag-Z's multiplayer shooter gameplay. Engage in fast-paced battles where every move counts, as you unleash classic techniques and masterful strategies. Prepare for an adrenaline-fueled journey that will push your skills to the limit.",
  },
  {
    header: "Support our vision",
    videoLink: "",
    thumbnail: undefined,
    blurb: "Everyone on our team is driven by the sheer love and passion for the game. We are committed to delivering an incredible gaming experience, and your support will not only cover the costs associated with the development of Frag-Z but also help us realize our vision of bringing on our dedicated contributors full-time. Join us in shaping the future of Frag-Z and be a part of something truly special.",
  },
];

export const PropertiesWindow = () => {
  const [blurb, setBlurb] = React.useState<string>(TabDataInfo.at(0)!.blurb);
  const [header, setHeader] = React.useState<string>(TabDataInfo.at(0)!.header);
  const [videoLink, setVideoLink] = React.useState<string>(TabDataInfo.at(0)!.videoLink);
  const [thumbnail, setThumbnail] = React.useState<StaticImageData | undefined>(TabDataInfo.at(0)?.thumbnail);
  const [selected, setSelected] = React.useState<false | number>(0);

  function handleClick(
    id: number,
    blurb: string,
    header: string,
    videoLink: string,
    thumbnail?: StaticImageData
  ) {
    setSelected(id);
    setBlurb(blurb);
    setHeader(header);
    setVideoLink(videoLink);
    setThumbnail(thumbnail);
  }

  const Tab = ({ title, selected, id }: TabProps) => {
    const toggle = id === selected;
    
    return (
      <span
        onClick={() =>
          handleClick(
            id,
            TabDataInfo.at(id)!.blurb,
            TabDataInfo.at(id)!.header,
            TabDataInfo.at(id)!.videoLink,
            TabDataInfo.at(id)?.thumbnail
          )
        }
        className={`w-[100px] bg-[#C5C5C5] flex items-center justify-center rounded-tl-[3px] rounded-tr-[3px] border-l-2  border-r-2 border-r-black border-t-2 
        ${toggle ? "h-[40px]" : "h-[30px]"}`}
      >
        <h1 className="text-center">{title}</h1>
      </span>
    );
  };

  const TabData = ({ header, videoLink, thumbnail, blurb }: TabDataProps) => (
    <div className="w-full flex flex-col items-center justify-start sm:flex-row h-full border-2 no-scrollbar border-b-black border-r-black p-2 overflow-y-scroll">
      {/* Video Group */}
      <div className="flex flex-col sm:items-center sm:justify-center w-full sm:w-1/2 h-fit sm:h-full">
        <h1 className="font-broshk text-[26px] text-center flex items-center justify-center leading-[30px] h-16">{header}</h1>
        <div className="mx-auto h-[180px] w-full sm:p-1 mb-2">
          {thumbnail !== undefined ? (
            <video
              loop
              autoPlay
              playsInline
              muted
              className="object-fill bg-black"
              src={videoLink}
              poster="images/thumbnails/clip0Thumbnail.jpg"
            />
          ) : (
            <div className="mx-auto h-[180px] mb-2 flex flex-col items-center justify-center w-full border-2 border-b-black border-r-black">
              <div className="flex flex-row w-full justify-evenly items-center my-5">
                <a href='https://patreon.com/user?u=89056897' target='/' className="text-4xl mx-auto">
                  <FaPatreon />
                </a>
                <a href='https://www.youtube.com/channel/UC85fkO9QnMYru6a2ZKPPK3g' target='/' className="text-4xl mx-auto">
                  <FaYoutube />
                </a>
                <a href='https://www.instagram.com/frag.z.game/' target='/' className="text-4xl mx-auto">
                  <FaInstagram />
                </a>
                <a href='https://discord.gg/v8uGkx2g77' target='/' className="text-4xl mx-auto">
                  <FaDiscord />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full sm:flex sm:w-1/2 sm:h-full sm:items-center sm:justify-end">
        <p className="px-3 text-justify sm:text-[16px]">{blurb}</p>
      </div>
    </div>
  );
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
        <div className="w-full flex flex-row items-end justify-start h-10 relative">
          <Tab id={0} selected={selected} title="Fragging" />
          <Tab id={1} selected={selected} title="Movement" />
          <Tab id={2} selected={selected} title="Gameplay" />
          <Tab id={3} selected={selected} title="Support" />
        </div>
        {/* Content */}
        <TabData
          blurb={blurb}
          header={header}
          videoLink={videoLink}
          thumbnail={thumbnail}
        />
      </section>
    </div>
  );
};
