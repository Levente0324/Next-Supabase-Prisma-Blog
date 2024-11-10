"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { changeName } from "./actions/Actions";
import { useState } from "react";

type prop = {
  id: string | undefined;
  name: string | undefined;
};

export function EditButtonShad(props: prop) {
  const [changeNameCurrent, setChangeNameCurrent] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent border border-white/70 rounded w-24 h-8 text-sm mt-1 font-second hover:text-teal-400 hover:bg-transparent">
          Edit profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 backdrop-blur-lg text-white -mt-48 w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-teal-400 font-bold tracking-normal">
            Edit username
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="username"
              className="text-right text-lg font-second"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder={props.name}
              onChange={(e) => setChangeNameCurrent(e.target.value)}
              className="col-span-3 focus:outline-none h-8 bg-zinc-900 text-lg text-white border border-white/70 px-1 rounded-md focus:placeholder:text-zinc-900"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-900 text-base"
              onClick={() => {
                changeName(
                  props.id ? props.id : "undefined",
                  changeNameCurrent
                );
              }}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
