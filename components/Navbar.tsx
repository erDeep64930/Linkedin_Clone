import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import NavItems from "./NavItems";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow-xl">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
        {/* search bar */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={35} height={35} />

          <div className="md:block hidden">
            <SearchInput />
          </div>
        </div>

        {/* menuitem */}
        <div className=" flex items-center gap-5">
          <div className="md:block hidden">
            <NavItems />
          </div>
        </div>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button className="rounded-full">
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
