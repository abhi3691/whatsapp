import React from "react";
import profile from "../assets/profile.jpg";
import { BiMessage } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
function NavBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#eeedef]">
      <div className="w-12 h-12 flex">
        {/* Header */}
        <img src={profile} alt="" className="object-cover rounded-full" />

        {/* Input */}
        {/* Contacts */}
      </div>
      <div className="flex items-center gap-4">
        <BiMessage className="w-6 h-6" />
        <HiOutlineMenu className="w-6 h-6" />
      </div>
    </div>
  );
}

export default NavBar;
