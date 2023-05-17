"use client";
import React from "react";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";

import fragz from "@/public/appIcons/fragz.png";
import windows from "@/public/appIcons/windows.png";

import { useSupabase } from "./supabase/supabase-provider";

interface TabProps {
  img: StaticImageData;
  title: string;
  link: string;
}

const Navbar = () => {

  const tabdata: TabProps[] = [
    {
      img: windows,
      title: "Home",
      link: "/",
    },
    {
      img: fragz,
      title: "Login",
      link: "/login",
    },
    {
      img: fragz,
      title: "Store",
      link: "/store",
    },
    {
      img: fragz,
      title: "Development",
      link: "/development",
    },
    {
      img: fragz,
      title: "Wiki",
      link: "/wiki",
    },
  ];

  const Tab = ({ img, title, link }: TabProps) => {
    return (
      <Link
        href={link}
        className={`flex flex-row items-center justify-start ${
          title === "Home" ? "" : "w-[140px]"
        } min-w-fit px-1 py-4 h-full mr-3 border-2 border-b-black border-r-black overflow-hidden max-h-12 `}
      >
        <Image className="w-6 h-6 mr-" src={img} alt="img" />
        <h1 className="font-windows aid font-bold mx-1">{title}</h1>
      </Link>
    );
  };

  return (
    <div className="navbar">
      {/* Nav content */}
      <div className="navbar-inner">
        {tabdata.map((val: TabProps, i: number) => (
          <Tab key={i} img={val.img} title={val.title} link={val.link} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
