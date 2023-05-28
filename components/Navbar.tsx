"use client";
import React from "react";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";

import fragz from "@/public/appIcons/fragz.png";
import windows from "@/public/appIcons/windows.png";
import userIcon from "@/public/images/defaultUser.png"
import cartIcon from "@/public/images/cartIcon.png"
import wikiIcon from "@/public/images/wikiIcon.png"
import devIcon from "@/public/images/devIcon.png"

import { useAuth } from "./supabase/supabase-auth-provider";

interface TabProps {
  img: StaticImageData;
  title: string;
  link: string;
}

const Navbar = () => {
  const { user } = useAuth();
  const tabdata: TabProps[] = [
    {
      img: windows,
      title: "Home",
      link: "/",
    },
    {
      img: userIcon,
      title: "Login",
      link: "/login",
    },
    {
      img: cartIcon,
      title: "Store",
      link: "/store",
    },
    {
      img: devIcon,
      title: "Development",
      link: "/development",
    },
    {
      img: wikiIcon,
      title: "Wiki",
      link: "/wiki",
    },
  ];

  const Tab = ({ img, title, link }: TabProps) => {
    return (
      <>
        {/* 
          If User isnt logged in
          - Hide the dev and wiki links
          - Render remaining links
          If User is logged in
          - Render all links
          - For login tab show username 
        */}
        {(user === null || user === undefined) ?
          <>
            {/* Hide Dev and wiki */}
            {(title === "Development" || title === "Wiki") ?
              <></>
              :
              <Link
                href={link}
                className={`flex flex-row items-center justify-start ${title === "Home" ? "" : "w-[140px]"
                  } min-w-fit px-1 py-4 h-full mr-3 border-2 border-b-black border-r-black overflow-hidden max-h-12 `}
              >
                <Image className="w-6 h-6" src={img} width={100} height={100} alt="img" />
                <h1 className="font-windows font-bold mx-1">{title}</h1>
              </Link>
            }
          </>
          :
          <>
            {/* If users logged in show user tab instead of login tab */}
            {(title === "Login") ?
              <span
                className={`flex flex-row items-center justify-start w-[140px] min-w-fit px-1 py-4 h-full mr-3 border-2 border-b-black border-r-black overflow-hidden max-h-12 `}
              >
                <Image className="w-6 h-6" src={img} width={100} height={100} alt="img" />
                <h1 className="font-windows font-bold mx-1">{user.username}</h1>
              </span>
              :
              <Link
                href={link}
                className={`flex flex-row items-center justify-start ${title === "Home" ? "" : "w-[140px]"
                  } min-w-fit px-1 py-4 h-full mr-3 border-2 border-b-black border-r-black overflow-hidden max-h-12 `}
              >
                <Image className="w-6 h-6" src={img} width={100} height={100} alt="img" />
                <h1 className="font-windows font-bold mx-1">{title}</h1>
              </Link>
            }
          </>
        }
      </>
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
