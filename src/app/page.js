"use client";
import Image from "next/image";
import { useState } from "react";
import { IoPowerSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import vector from "../asset/vector.png";
import vector2 from "../asset/wakeup.png";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={` w-full min-h-screen h-auto ${
        isClicked ? "bg-slate-900" : "bg-blue-100"
      } flex items-center justify-center py-10`}
    >
      <div className=" h-full items-center flex flex-col gap-10">
        <div className="h-full items-center flex flex-col gap-20">
          <div
            className={`relative w-72 h-72 ${
              isClicked
                ? "bg-gradient-to-tr from-violet-300 via-violet-800 to-slate-900 "
                : "bg-gradient-to-tr from-orange-600 to-orange-300 drop-shadow-xl"
            } rounded-full `}
          >
            <div
              className={`absolute top-0 right-0 w-64 h-64  ${
                isClicked ? " bg-slate-900 " : "bg-inherit"
              } rounded-full `}
              style={{
                clipPath: "circle(70% at 55% 55% )",
                transitionDuration: "0.5s",
              }}
            ></div>
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <h1
              className={`${
                isClicked
                  ? "text-slate-200  bg-gradient-to-t from-slate-200 to-gray-700 bg-clip-text text-transparent"
                  : "text-[#303030] bg-gradient-to-b from-slate-900 to-gray-500 bg-clip-text text-transparent"
              } text-8xl font-bold text-center uppercase`}
            >
              Good {isClicked ? "Night" : " Morning"}
            </h1>
            <h1 className={` ${isClicked ? "text-gray-400" : "text-gray-600"} tracking-widest uppercase text-xl`}>
              {isClicked
                ? "its time to sleep go to your bed kid!"
                : "wake up kid its time for your school!"}
            </h1>
            {isClicked && <Image src={vector} width={200} />}
            {!isClicked && <Image src={vector2} width={200} />}
          </div>
        </div>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div
            onClick={() => setIsClicked(!isClicked)}
            className={`${
              isClicked
                ? "bg-gradient-to-r from-slate-900 via-slate-600 to-slate-800 shadow-slate-900 shadow-inner"
                : "bg-gradient-to-r from-blue-100 via-white to-blue-200 shadow-xl "
            } rounded-full w-32 h-32  flex items-center justify-center `}
            style={{ transitionDuration: "0" }}
          >
            <IoPowerSharp
              className={`${
                isClicked ? "text-white text-6xl" : "text-black text-6xl"
              } `}
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
}
