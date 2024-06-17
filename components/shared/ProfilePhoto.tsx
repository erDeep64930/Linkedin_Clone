
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const ProfilePhoto = ({ src }: { src: string }) => {
  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage src={src} alt="profile photo" />
      </Avatar>
    </div>
  );
};

export default ProfilePhoto;
