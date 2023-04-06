"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./navigation";
import Footer from "./footer";

export default function ClientPageWrapper({ children }) {
    /* ==== Dark Mode Set Up ===== */
    let boolDark = true;
    // const [boolDark, setBoolDark] = useState(true);
    const [isDark, setIsDark] = useState(boolDark);
    useEffect(() => {
        const storedDarkMode = localStorage.getItem("DARK_MODE");
        // storedDarkMode == "false" ? setBoolDark(false) : setBoolDark(true)

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
                {/* <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transitionEnd: {
                            display: "none",
                        },
                    }}
                    transition={{ duration: 0.3, delay: 2.8 }}
                    className="fixed top-0 left-0 h-screen w-screen  z-50 bg-first flex justify-center items-center"
                >
                    <motion.svg
                        id="logo"
                        width="180"
                        height="180"
                        viewBox="-5 -5 192 192"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.path
                            stroke={"#ea591f"}
                            strokeWidth={2}
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{
                                pathLength: 1,
                                fillOpacity: 1,
                                transition: {
                                    pathLength: {
                                        duration: 1.5,
                                        ease: "linear",
                                    },
                                    fillOpacity: {
                                        delay: 1.6,
                                        duration: 0.7,
                                    },
                                },
                            }}
                            fill={"#ea591f"}
                            d="M63.7505 0H43.688V66.9375C43.688 70 43.2349 72.5781 42.3287 74.6719C41.4224 76.7656 40.0943 78.3594 38.3443 79.4531C36.6255 80.5156 34.5162 81.0469 32.0162 81.0469C29.6412 81.0469 27.5787 80.5781 25.8287 79.6406C24.1099 78.6719 22.7505 77.2969 21.7505 75.5156C20.7818 73.7031 20.2662 71.5313 20.2037 69H0.000526684C-0.0307233 75.375 1.32865 80.6719 4.07865 84.8906C6.82865 89.0781 10.5474 92.2031 15.2349 94.2656C19.9537 96.2969 25.2037 97.3125 30.9849 97.3125C37.4849 97.3125 43.188 96.0781 48.0943 93.6094C53.0005 91.1406 56.8287 87.625 59.5787 83.0625C62.3599 78.5 63.7505 73.125 63.7505 66.9375V58.1909L65.3471 56.2396L92.3293 97H116.314L80.1909 42.4305L114.907 2.86102e-06H88.1042L63.7505 29.7656V0Z"
                        />
                    </motion.svg>
                </motion.div> */}
                <motion.div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.3, delay: 2.7 }}
                >
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
                    {children}
                    <Footer />
                </motion.div>
            </motion.body>
        </AnimatePresence>
    );
}
