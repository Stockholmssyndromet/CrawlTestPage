import React from "react";
import { GoInbox } from "react-icons/go";
import { LuMedal } from "react-icons/lu";
import {
  IoHeadsetOutline,
  IoPieChartOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { RiTruckLine } from "react-icons/ri";
import { RiCoinsLine } from "react-icons/ri";
import { RiUserSmileLine } from "react-icons/ri";
import { CiShop, CiUser } from "react-icons/ci";
import { TbTicket } from "react-icons/tb";
import { BiSolidVideoRecording } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const asideList = [
  { name: "상품관리", icon: <GoInbox /> },
  { name: "가격관리", icon: <LuMedal /> },
  { name: "로켓그로스", icon: <IoRocketOutline /> },
  { name: "주문/배송", icon: <RiTruckLine /> },
  { name: "정산", icon: <RiCoinsLine /> },
  { name: "고객관리", icon: <RiUserSmileLine /> },
  { name: "마이샵", icon: <CiShop /> },
  { name: "프로모션", icon: <TbTicket /> },
  { name: "광고센터", icon: <IoPieChartOutline /> },
  { name: "쿠팡 라이브", icon: <BiSolidVideoRecording /> },
  //   { name: "판매통계", icon: <FaChartBar /> },
  //   { name: "판매자정보", icon: <CiUser /> },
  //   { name: "공지사항", icon: <HiOutlineSpeakerphone /> },
  //   { name: "온라인문의", icon: <IoHeadsetOutline /> },
];

const Aside = () => {
  return (
    <div className="fixed pt-14 bg-white w-56 h-[100vh] flex flex-col justify-between">
      {asideList.map((aside) => (
        <div className="w-full flex cursor-pointer items-center justify-center gap-2 border-r-[1px] border-solid border-[#ccc] pr-5 h-full">
          <span className="flex items-center gap-2 mr-auto ml-6">
            {aside.icon} {aside.name}
          </span>
          <FaAngleDown />
        </div>
      ))}
    </div>
  );
};

export default Aside;
