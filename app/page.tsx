'use client'

import Image from "next/image";
import phonemenu from "./assets/images/phonemenu.png"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <nav className="fixed pt-4 m-2 ">
        <div className="float-left mr-4 text-[#E5DBAD]">
        <h1 className="text-sm c ">Welcome this is where we turn ideas into reality.</h1>
        <h1 className="text-5xl">ChimeraKraft</h1>
      </div>
      <Image className="w-10 pt-3" src={phonemenu} alt="Menu"  onClick={() => setMenuOpen(true)}/>
          <AnimatePresence>
  {menuOpen && (
    <>
      {/* OVERLAY */}
      <motion.div
        className="fixed inset-0 bg-black/40 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
      />

      {/* MENU PANEL */}
      <motion.div
        className="fixed top-0 right-0 h-[100dvh] w-[70%] max-w-sm bg-[#E6CFAE] z-50 p-8 flex flex-col gap-8"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        {/* CLOSE BUTTON */}
        <button onClick={() => setMenuOpen(false)}>✕</button>

        {/* MENU ITEMS */}
        <nav className="flex flex-col gap-6 text-xl tracking-wide font-[besley]">
          <a className="border-b pb-2">STORE</a>
          <a className="border-b pb-2">SERVICES</a>
          <a className="border-b pb-2">ABOUT</a>
          <a className="border-b pb-2">CONTACT</a>
          <a className="border-b pb-2">PEOPLE</a>
        </nav>

        {/* BOTTOM IMAGE */}
        <div className="mt-auto">
          {/* put your mascot here */}
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
      </nav>
      <div className="Slider h-screen bg-[url(./assets/images/stickers.png)] bg-center">
        <div className="selectors"></div>

      </div>
      <div className="text-center">
        <div className=" relative h-2 w-16 border-t-2 border-black-solid float-left"></div>
        <h2 className="text-black font-semibold mt-4" >OUR SERVICES</h2>
        <div className=" relative h-2 w-16 border-t-2 border-black-solid float-right"></div>
        <h3 className="text-2xl">Kraft your own stickers!</h3>
        <p className="text-xs">Click on the cards to reveal the steps to create your own sticker.</p>
        <div className="deck"></div>
      </div>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Paragraph</p>
    </main>
  );
}
