"use client";
import React from "react";
import { Badge } from "@/components/ui/badge"
import ProfilePhoto from "./shared/ProfilePhoto";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import SocialOptions from "./SocialOptions";
import { IPostDocument } from "@/models/post.model";
import PostContent from "./PostContent";

const Post = ({post}:{post:IPostDocument}) => {
  const user = useUser();
  const fullName = post?.user?.firstName + " " + post?.user?.lastName
  console.log(user);

  return (
    <div className="bg-white my-2 rounded-lg border border-gray-300">
      <div className="flex items-center gap-3 p-4">
        <ProfilePhoto src={post?.user?.profilePhoto!}/> 
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-sm font-semibold">{fullName} <Badge variant={"secondary"} className="ml-2">You</Badge> </h1>
            <p className="text-xs text-gray-500">@{user ? user?.username : "username"}</p>
            <p className="text-xs text-gray-500">1hr ago</p>
          </div>
          <Button size={"icon"} className="rounded-full" variant={"outline"}>
            <Trash />
          </Button>
        </div>
        <PostContent post={post}/>
       {/* postcontent */}
       <SocialOptions />
      </div>
    </div>
  );
};

export default Post;
