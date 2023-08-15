import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

//https:res.cloudinary.com/isreal/image/upload/v1673918222/banking%20app/AJIS_FILE_1_re65mc.png
function NavBar() {
  return (
    <div className="flex justify-between p-3 px-2 md:px-10 border-b-[1px] shadow-sm">
      <div className="flex gap-10 items-center">
        <Image
          src="https://res.cloudinary.com/isreal/image/upload/v1673918222/banking%20app/AJIS_FILE_1_re65mc.png"
          alt="logo"
          width={120}
          height={60}
        />
        <div className="hidden md:flex gap-6">
          <h2 className="p-2 rounded-md cursor-pointer transition-all hover:bg-gray-100 ">
            Home
          </h2>
          <h2 className="p-2 rounded-md cursor-pointer transition-all hover:bg-gray-100 ">
            History
          </h2>
          <h2 className="p-2 rounded-md cursor-pointer transition-all hover:bg-gray-100 ">
            Help
          </h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default NavBar;
