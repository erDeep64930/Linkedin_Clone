import { Bell, BriefcaseBusiness, HomeIcon, MessageCircleMore, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

type NAVITEMS = {
  src: string,
  icon: JSX.Element,
  text: string,
}

const navItems: NAVITEMS[] = [
  { src: "/home", icon: <HomeIcon />, text: "Home" },
  { src: "/networks", icon: <Users />, text: "My Network" },
  { src: "/job", icon: <BriefcaseBusiness />, text: "Job" },
  { src: "/message", icon: <MessageCircleMore />, text: "Messaging" },
  { src: "/notification", icon: <Bell />, text: "Notification" },
];

const NavItems = () => {
  return (
    <div className="flex gap-8">
      {
        navItems.map((navItem, index) => {
          return (
            <div className="text-xs flex flex-col items-center cursor-pointer text-gray-500 hover:text-black" key={index}>
              <span>{navItem.icon}</span>
              <Link href={navItem.src}>{navItem.text}</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default NavItems;
