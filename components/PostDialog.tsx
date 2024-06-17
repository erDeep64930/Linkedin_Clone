import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ProfilePhoto from "./shared/ProfilePhoto";
import { Image } from "lucide-react";
import { useRef } from "react";

export function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any;
  open: boolean;
  src: string;
}) {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <ProfilePhoto src={src} />
            <div>
              <h1>Deep Design Web </h1>
              <p className="text-xs">Post to anyone </p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action="">
          <div className="flex flex-col">
            <Textarea
              placeholder="Type your message here."
              id="name"
              name="inputText"
              className="border-none text-lg focus-visible:ring-0"
            />
            <div className="my-4">yha pr image upload ayega</div>
          </div>
         
       

        <DialogFooter>
          <div className="flex items-center gap-4">
            <input
              type="file"
              name="image"
              className="hidden"
              accept="image/*"
            />
             <Button type="submit">Post Now</Button>
          </div>
         
        </DialogFooter>
        </form>
        <Button variant={"ghost"} onClick={()=>inputRef?.current?.click()}>
            <Image className="text-blue-500"/>
            <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
