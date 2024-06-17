import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
        {/* search bar */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={35} height={35} />

          <div>
            <SearchInput />
          </div>
        </div>

        {/* menuitem */}
        <div className="flex items-center gap-5">
          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
