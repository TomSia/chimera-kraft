'use client'
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import phonemenu from "../assets/images/phonemenu.png"
import Link from "next/link";

export default function MobileMenu() {
    const [menuOpen, setMenuOpen] = useState(false); 
    return (
        <nav className="fixed pt-4 m-2 z-10">
        <div className="float-left mr-4 text-[#F9E1BD]">
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
                <Link href="./" className="border-b pb-2">HOME</Link>
                <Link href="/store" className="border-b pb-2">STORE</Link>
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
    )
}