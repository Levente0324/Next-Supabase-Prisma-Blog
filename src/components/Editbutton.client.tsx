"use client";

import Modal from "react-modal";
import React, { useState } from "react";
import Image from "next/image";
import { changeName } from "./actions/Actions";

type prop = {
  id: string | undefined;
  name: string | undefined;
};

const Editbutton = (props: prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeNameCurrent, setChangeNameCurrent] = useState("");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    content: {
      margin: "120px auto 0 auto",
      color: "white",
      width: "25%",
      height: "18%",
      border: "1px solid white",
      background: "rgba(0, 0, 0, 1)",
      padding: "0px",
      borderRadius: "10px",
    },
  };

  return (
    <>
      <button
        className="border border-white/70 rounded w-24 h-8 text-sm mt-1 font-second hover:text-teal-400"
        onClick={() => setIsOpen(true)}
      >
        Edit profile
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="w-full h-12 py-4 px-4 flex justify-between items-center font-second">
          <h1 className="text-2xl">Change username</h1>
          <button onClick={() => setIsOpen(false)} className="w-16 h-16 ml-2">
            <Image
              src="/redcross.png"
              alt="check"
              width={24}
              height={24}
              className="ml-auto"
            />
          </button>
        </div>
        <form className="flex justify-center items-center w-full h-28 mt-1 font-second">
          <input
            type="text"
            name="name"
            placeholder={props?.name}
            className="w-56 h-12 px-2 py-4 rounded-sm bg-transparent text-white text-2xl placeholder:text-white placeholder:text-2xl border-2 border-white/70 focus:outline-none focus:placeholder:text-black"
            onChange={(e) => {
              setChangeNameCurrent(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              changeName(props.id ? props.id : "undefined", changeNameCurrent);
            }}
            className="w-16 h-16 ml-2"
          >
            <Image src="/check.png" alt="check" width={48} height={48} />
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Editbutton;
