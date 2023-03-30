"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function FramerBG() {
    return (
        <AnimatePresence>
            <motion.div
                style={{
                    width: 220,
                    height: 150,
                    borderRadius: 30,
                }}
                className="-z-10 fixed top-60 right-5 md:right-24 opacity-30 bg-eighth"
                initial={{ scale: 2, rotate: 70 }}
                animate={{
                    rotate: 360,
                    scale: 2.1,
                    x: [0, 30, 30, 0, 0],
                    y: [0, 0, 20, 20, 0],
                }}
                transition={{ ease: "linear", duration: 75, repeat: Infinity }}
            />
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                }}
                className="rounded-full -z-10 fixed bottom-0 md:top-96 left-5 md:left-24 opacity-30 bg-eighth"
                initial={{
                    scale: 2,
                }}
                animate={{
                    x: [0, 30, 30, 0, 0],
                    y: [0, 0, 20, 20, 0],
                }}
                transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                }}
            />
        </AnimatePresence>
    );
}
