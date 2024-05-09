import { IoMdCloseCircle, IoMdPeople, IoIosCloseCircle } from "react-icons/io";
import { IoColorPaletteOutline, IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { PiNotepadBold } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";
import { RiDiscountPercentLine } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BiWallet } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { sideeBarOpen } from "@/atom/sidebarAtom";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import op from '@/public/op.jpg';

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
        icon: <IoMdPeople />,
        name: "Audience"
    },
    {
        icon: <IoColorPaletteOutline />,
        name: "Appearance"
    }
];

const Sidebar = () => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useRecoilState(sideeBarOpen);
  
    const handleToggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
      <>
        <aside
          className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] ${
            isOpen
              ? "pointer-events-all opacity-100"
              : "pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto"
          }`}
        >
          <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
          <button
            className={`${isOpen ? "fixed" : "hidden"} top-5 right-4 lg:hidden`}
            onClick={handleToggleModal}
          >
            <IoIosCloseCircle className="text-white text-3xl"/>
          </button>
          <div
            className={`relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between ${
              isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
            ref={modalRef}
          >
            <div className="w-full flex flex-col gap-6 items-center">
              <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
                <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
                  <Image
                    src={op}
                    alt="nishyanLogo"
                    width={39}
                    height={39}
                    className="object-cover object-center"
                    quality={95}
                  />
                </div>
                <div className="flex flex-col gap-1 w-[108px] justify-center">
                  <h3 className="font-medium text-[15px] leading-[22px]">Nishyan</h3>
                  <Link
                    href={"#"}
                    className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]"
                  >
                    Visit Store
                  </Link>
                </div>
                <FaChevronDown className="w-[20px] h-[20px]" />
              </div>
              <div className="w-full flex-col gap-4">
                {menu.map((item) => (
                  <Link
                    key={item.name}
                    href={"#"}
                    className={`${
                      item.name === "Payouts" ? "bg-[#FFFFFF]/10" : ""
                    } px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10`}
                  >
                    <div className="relative w-[18px] h-[18px]">
                      {item.icon}
                    </div>
                    <p className="text-[14px] font-medium">{item.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded">
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
        </aside>
      </>
    );
};

export default Sidebar;
