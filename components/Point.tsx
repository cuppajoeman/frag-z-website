import React from "react";
import Image, { StaticImageData } from "next/image";
import alert from "@/public/appIcons/alert.png";
interface PointProps {
  text: string;
}

const Point = ({ text }: PointProps) => (
  <span className="flex flex-row items-center mx-auto justify-start w-[340px] h-[70px] bg-[#C5C5C5] border-2 border-b-black border-r-black">
    {/* Icon */}
    <div className="flex items-center justify-center w-[50px] h-[50px] mx-2">
      <Image
        src={alert}
        alt="alert"
        className="object-cover"
        width={100}
        height={100}
      />
    </div>
    {/* Text */}
    <h1 className="font-sans font-semibold flex items-center justify-start text-black w-[250px] h-[70px]">
      {text}
    </h1>
  </span>
);

export default Point;
