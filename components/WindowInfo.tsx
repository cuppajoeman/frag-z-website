'use client'
import React from 'react'
import Image from "next/image";
import { usePathname } from "next/navigation";
import fragz from "@/public/appIcons/fragz.png";

export const WindowInfo = () => {
    const path = usePathname();

    return (
        <div className="w-full h-full flex flex-row items-center justify-start">
            <Image className="h-7 w-7 mx-2" src={fragz} alt="logo" />
            <h1 className="font-windows text-white">
                {" "}
                  FRAG-Z &#8226;{" "}
                  {path === "/"
                    ? "HOME"
                    : path.toUpperCase().replace(/[^0-9a-z]/gi, "")}
            </h1>
        </div>
    )
}
