"use client"

import { AiOutlineProduct } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoMdPeople } from "react-icons/io";
import { IoColorPaletteOutline, IoHomeOutline } from "react-icons/io5";
import { PiNotepadBold } from "react-icons/pi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CgVercel } from "react-icons/cg";
import { BiWallet } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

import next from '@/public/next.svg'
import Image from "next/image";
import op from '@/public/op.jpg'

const menu = [
    {
        icon: <IoHomeOutline />,
        name: "Home"
    },
    {
        icon: <PiNotepadBold />,
        name: "Order"
    },
    {
        icon: <AiOutlineProduct />,
        name: "Product"
    },
    {
        icon: <CiDeliveryTruck />,
        name: "Delivery"
    },
    {
        icon: <HiOutlineSpeakerphone />,
        name: "Marketing"
    },
    {
        icon: <TbBrandGoogleAnalytics />,
        name: "Analytics"
    },
    {
        icon: <BsCashStack />,
        name: "Payouts"
    },
    {
        icon: <RiDiscountPercentLine />,
        name: "Discount"
    },
    {
        icon : <IoMdPeople/>,
        name : "Audience"
    },
    {
        icon : <IoColorPaletteOutline/>,
        name : "Appearence"
    }
];

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-between bg-[#1E2640] rounded-sm w-[14rem] h-screen fixed top-0 left-0 overflow-y-auto">
            <div>
                <div className="text-white flex items-center justify-between px-4 py-2">
                    <div className="flex items-center">
                        <Image 
                            src={op}
                            alt={""}
                            className="w-[2rem] h-[2rem] rounded-lg mr-3"
                        />
                        <span>Nishyam</span>
                    </div>
                    <MdKeyboardArrowDown className="text-white w-[2rem] h-[2rem]"/>
                </div>
                <div className="pt-5">
                    {menu.map((item) => (
                        <div key={item.name} className={`px-4 py-2 flex gap-3 text-slate-200 items-center rounded-[4px] hover:bg-[#FFFFFF]/10 `}>
                            {item.icon}
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded mb-5">
                <div className="flex gap-3 items-center">
                    <div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
                        <BiWallet className="text-white"/>
                    </div>
                    <div className="flex flex-col text-white gap-[2px]">
                        <h3 className="text-[13px] text-[#FFFFFF] font-light">Available Credits</h3>
                        <h6 className="text-base font-medium">224.10</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}