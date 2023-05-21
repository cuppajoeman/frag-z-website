"use client";
import { StaticImageData } from "next/image";
import React from "react";

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
    videoLink: "",
    thumbnail: thumbnail0,
    blurb: "Relive the golden era of gaming with Frag-Z, capturing the essence of 90's frag movies. Immerse yourself in a world where skill, speed, and precision are celebrated. Get ready for an authentic experience that pays homage to the games that ignited your gaming passion, transporting you back to a time when gaming was pure, raw, and undeniably addictive.",
  },
  {
    header: "Unparalleled Movement and Fluidity",
    videoLink: "",
    thumbnail: thumbnail0,
    blurb: "Embrace the true freedom of movement in Frag-Z, where agility and finesse reign supreme. With the ability to execute gravity-defying jumps, lightning-fast strafes, and exploit the tiniest edges, you'll discover a new level of fluidity and control. Experience the exhilarating rush as you effortlessly traverse the terrain and outmaneuver your opponents.",
  },
  {
    header: "Master the Art of Fragging",
    videoLink: "",
    thumbnail: thumbnail0,
    blurb: "Experience the heart-pounding intensity of Frag-Z's multiplayer shooter gameplay. Engage in fast-paced battles where every move counts, as you unleash classic techniques and masterful strategies. Prepare for an adrenaline-fueled journey that will push your skills to the limit.",
  },
  {
    header: "Support our vision",
    videoLink: "",
    blurb: "Everyone on our team is driven by the sheer love and passion for the game. We are committed to delivering an incredible gaming experience, and your support will not only cover the costs associated with the development of Frag-Z but also help us realize our vision of bringing on our dedicated contributors full-time. Join us in shaping the future of Frag-Z and be a part of something truly special.",
  },
];

export const PropertiesWindow = () => {
  const [blurb, setBlurb] = React.useState<string>("");
  const [header, setHeader] = React.useState<string>("");
  const [videoLink, setVideoLink] = React.useState<string>("");
  const [thumbnail, setThumbnail] = React.useState<StaticImageData | undefined>(
    undefined
  );
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
    if (thumbnail) {
      setThumbnail(thumbnail);
    }
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
        className={`h-[40px] w-[100px] bg-[#C5C5C5] flex items-center justify-center rounded-tl-[3px] rounded-tr-[3px] border-l-2  border-r-2 border-r-black border-t-2 
        ${toggle ? "mt-1" : "mt-0 h-[30px]"}`}
      >
        <h1 className="text-center">{title}</h1>
      </span>
    );
  };

  const TabData = ({ header, videoLink, thumbnail, blurb }: TabDataProps) => (
    <div className="w-full flex flex-col items-center justify-start sm:flex-row h-full border-2  border-b-black border-r-black p-2 overflow-y-scroll">
      {/* Video Group */}
      <div className="flex flex-col w-full sm:w-1/2 h-fit aid">
        <h1 className="font-broshk text-3xl">{header}</h1>
        <div className="mx-auto w-[250px]">
          {thumbnail !== undefined ? (
            <video
              loop
              autoPlay
              playsInline
              muted
              className="object-fill aid bg-black"
              src={videoLink}
              poster="images/thumbnails/clip0Thumbnail.jpg"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="aid">
        <p className="">{blurb}</p>
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
        <div className="w-full flex flex-row items-end h-10 relative">
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
