import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { CiBellOn } from "react-icons/ci";

import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="z-50 bg-white fixed w-full flex itmes-center h-14 px-5 border-b-[1px] border-solid border-[#ccc] justify-between">
      <div className="flex items-center gap-6">
        <RxHamburgerMenu size={30} />
        <img
          className="w-28 mt-[5px]"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Coupang_logo.svg"
        />
      </div>
      <div className="flex items-center gap-6">
        <select className="border-[1px] borer-solid border-[#ccc] rounded-md py-1 px-2">
          <option>한국어</option>
          <option>English</option>
          <option>China</option>
        </select>
        <span>판매자 교육</span>
        <div className="h-3 w-[1px] bg-[#ccc]" />
        <span>온라인문의</span>
        <div className="h-3 w-[1px] bg-[#ccc]" />
        <span>도움말</span>
        <div className="h-3 w-[1px] bg-[#ccc]" />
        <CiBellOn size={26} />
        <span className="flex items-center gap-2">
          <b>이세진</b>님 <FaAngleDown className="mt-[2px]" />
        </span>
      </div>
    </div>
  );
};

export default Header;
