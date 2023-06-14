"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./navigation";
import Footer from "@/components/footer";
import Background from "./Background";

export default function ClientPageWrapper({ children }) {
	/* ==== Dark Mode Set Up ===== */
	let boolDark = true;
	const [isDark, setIsDark] = useState(boolDark);

	useEffect(() => {
		const storedDarkMode = localStorage.getItem("DARK_MODE");
		// eslint-disable-next-line react-hooks/exhaustive-deps
		storedDarkMode == "false" ? (boolDark = false) : (boolDark = true);
		localStorage.setItem("DARK_MODE", String(boolDark));
		setIsDark(boolDark);
	}, [boolDark]);

	useEffect(() => {
		localStorage.setItem("DARK_MODE", String(isDark));
	}, [isDark]);
	/* =========================== */
	const [overlay, setOverlay] = useState(false);
	return (
		<AnimatePresence>
			<motion.body
				className={
					isDark
						? "dark bg-first text-fifth transition-colors"
						: "bg-fifth text-first transition-colors"
				}
			>
				<motion.div>
					<Navigation
						isDark={isDark}
						setIsDark={setIsDark}
						overlay={overlay}
						setOverlay={setOverlay}
					/>
					<div
						className={
							isDark
								? "h-[100vh] fixed -z-20 top-0 left-0 w-full bg-gradient-to-t from-first to-transparent"
								: "h-[100vh] fixed -z-20 top-0 left-0 w-full bg-gradient-to-t from-fifth to-transparent"
						}
					/>
					{/* <Background dark={isDark} /> */}
					{children}
					<Footer />
				</motion.div>
			</motion.body>
		</AnimatePresence>
	);
}
