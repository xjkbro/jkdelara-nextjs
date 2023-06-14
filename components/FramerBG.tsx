"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import React from "react";

export default function FramerBG() {
	// window.addEventListener("mouseover", () => {});
	return (
		<>
			<AnimatePresence>
				<motion.div
					key={"bigcircle"}
					style={{
						width: 260,
						height: 150,
						borderRadius: 30,
					}}
					className="fixed -z-30 top-60 right-5 md:right-24 opacity-30 bg-eighth"
					initial={{ scale: 2, rotate: 70 }}
					animate={{
						rotate: 430,
						scale: [2, 2.1, 2],
						x: [0, 30, 30, 0, 0],
						y: [0, 0, 20, 20, 0],
					}}
					transition={{
						ease: "linear",
						duration: 75,
						repeat: Infinity,
					}}
				/>
				<motion.div
					key={"smallcircle"}
					style={{
						width: 150,
						height: 150,
						borderRadius: 10,
					}}
					className="fixed -z-30 top-60 right-5 md:right-[60vw] opacity-30 bg-eighth"
					initial={{ scale: 2, rotate: -25 }}
					animate={{
						rotate: -385,
						scale: [2, 1.5, 2],
						x: [0, 30, 30, 0, 0],
						y: [0, 0, 20, 20, 0],
					}}
					transition={{
						ease: "linear",
						duration: 60,
						repeat: Infinity,
					}}
				/>
				<motion.div
					key={"square"}
					style={{
						width: 150,
						height: 150,
					}}
					className="fixed bottom-0 rounded-full -z-30 md:top-96 left-5 md:left-24 opacity-30 bg-eighth"
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
				<motion.div
					key={"rectangle"}
					style={{
						width: 150,
						height: 150,
					}}
					className="fixed bottom-0 rounded-full -z-30 md:top-[65vh] left-[10vw] md:left-[50vw] opacity-30 bg-eighth"
					animate={{
						x: [0, 0, 30, 30, 0],
						y: [0, 20, 20, 0, 0],
					}}
					transition={{
						ease: "linear",
						duration: 20,
						repeat: Infinity,
					}}
				/>
			</AnimatePresence>
		</>
	);
}
