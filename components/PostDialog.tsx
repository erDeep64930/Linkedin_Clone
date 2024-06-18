import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ProfilePhoto from "./shared/ProfilePhoto";

import { useRef, useState } from "react";
import { ImageIcon } from "lucide-react";

export function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: (open: boolean) => void;
  open: boolean;
  src: string;
}) {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataUrl(file);
      setSelectedFile(dataUrl);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

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
              <h1>Deep Design Web</h1>
              <p className="text-xs">Post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form>
          <div className="flex flex-col">
            <Textarea
              placeholder="Type your message here."
              id="inputText"
              name="inputText"
              className="border-none text-lg focus-visible:ring-0"
            />
            <div className="my-4">
              {selectedFile && (
                <Image
                  src={selectedFile}
                  alt="preview"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>

          <DialogFooter>
            <div className="flex items-center gap-4">
              <input
                ref={inputRef}
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
                onChange={fileChangeHandler}
              />
              <Button type="submit">Post Now</Button>
            </div>
          </DialogFooter>
        </form>
        <Button
          variant="ghost"
          onClick={() => inputRef?.current?.click()}
          className="gap-2"
        >
          <ImageIcon className="text-blue-500" />
          <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}

async function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
