'use client'
import React from 'react'
import Image from "next/image";
import { Item } from '@/types';
import caution from "@/public/images/caution.png";

interface Props {
    items: Item[]
}

const ItemDialogue = ({ items }: Props) => {
    const [toggle, setToggle] = React.useState(false);
    // Item vars
    const [itemName, setItemName] = React.useState("");
    const [itemDesc, setItemDesc] = React.useState("");
    const [itemPrice, setItemPrice] = React.useState("");
    const [itemImgs, setItemImgs] = React.useState("");

    // Updates the popup window with the correct item info
    function handleClick(name: string, desc: string, price: string) {
        setToggle(true);
        setItemName(name);
        setItemDesc(desc);
        setItemPrice(price);
    }

    const Item = ({ name, desc, price, img }: Item) => {
        return (
            <div
                onClick={(e) => {
                    handleClick(name, desc, price);
                }}
                className="h-40 w-40 md:h-60 md:w-60 flex flex-col items-center justify-evenly text-white font-windows"
            >
                <div className="h-28 w-28 md:h-40 md:w-40 flex justify-center">
                    <Image className="object-cover" src={img} alt="dummy" />
                </div>
                <h1 className="md:text-xl">{name}</h1>
            </div>
        )
    }

    return (
        <>
            <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-evenly p-5">
                {/* Header */}
                <h1 className="tracking-widest text-white font-windows text-3xl md:text-4xl md:p-2 w-full border-2 border-white text-center">
                    SHOP
                </h1>
                {/* Items */}
                <div className="w-full h-5/6 flex flex-row flex-wrap items-center justify-center border-2 border-white overflow-y-scroll no-scrollbar">
                    {items.length > 0 ?
                        items.map((item: Item, index: number) => (
                            <Item key={index} {...item} />
                        ))
                        :
                        <h1 className="font-windows text-white text-2xl">Items coming soon!</h1>
                    }
                </div>
            </div>
            <div
                className={`${toggle ? "scale-100 opacity-100" : "scale-0 lg:scale-100 lg:opacity-0"} absolute lg:static h-full w-full lg:w-1/2 p-5 bg-black text-white transition-all ease-in duration-75`}
            >
                <div className="w-full h-full flex flex-col items-center justify-evenly bg-black overflow-y-scroll no-scrollbar">
                    {/* Close button */}
                    <span
                        onClick={() => { setToggle(false) }}
                        className="absolute z-20 h-8 w-8 -top-0 -right-0 text-center cursor-pointer lg:hidden"
                    >
                        X
                    </span>
                    {/* Header */}
                    <h1 className="tracking-widest text-white font-windows text-3xl md:text-4xl md:p-2 w-full border-2 border-white text-center">
                        {itemName}
                    </h1>
                    {/* Content block */}
                    <div className="w-full h-5/6 flex flex-col items-center border-2 border-white p-5 overflow-y-scroll no-scrollbar font-windows">
                        {/* Img block */}
                        <div className="flex flex-col items-center justify-evenly">
                            {/* Main img */}
                            <div className="w-full h-[250px] md:w-4/6 md:h-[350px] border-2 border-white flex justify-center my-2">
                                <Image className="object-cover" src={caution} alt="dummy" />
                            </div>
                            {/* Sub imgs - hard coded for now */}
                            <div className="flex flex-row flex-wrap h-fit w-full md:w-4/6  my-2">
                                <div className="h-20 w-20 md:h-32 md:w-32 border-2 border-white">
                                    <Image className="object-cover" src={caution} alt="dummy" />
                                </div>
                            </div>
                            {/* Price */}
                            <h3 className="w-full md:text-xl  md:w-4/6  text-white/90">
                                {itemPrice}
                            </h3>
                        </div>
                        {/* Desc */}
                        <div className="md:w-4/6 md:text-lg flex text-justify my-2 text-white/90">
                            {itemDesc}
                        </div>
                        {/* Button group */}
                        <div className="flex flex-row w-full md:w-4/6  items-center justify-evenly mt-2">
                            <button className="button">Add to Cart</button>
                            <button className="button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDialogue