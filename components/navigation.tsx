"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as MoonOn } from "@fortawesome/free-solid-svg-icons";
import { faMoon as MoonOff } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
    "/story": {
        name: "Story",
    },
    "/projects": {
        name: "Projects",
    },
    "/notes": {
        name: "Notes",
    },
    "/arts": {
        name: "Art",
    },
    "/contact": {
        name: "Contact",
    },
};

export default function Navigation({ isDark, setIsDark, overlay, setOverlay }) {
    let pathname = usePathname() || "/";
    if (pathname.includes("/notes/") || pathname.includes("/note/")) {
        pathname = "/notes";
    }
    if (pathname.includes("/projects/")) {
        pathname = "/projects";
    }
    return (
        <header className=" w-[90vw] md:w-2/3 mx-auto">
            <DesktopNav
                isDark={isDark}
                setIsDark={setIsDark}
                pathname={pathname}
            />
            <MobileNav
                isDark={isDark}
                setIsDark={setIsDark}
                overlay={overlay}
                setOverlay={setOverlay}
                pathname={pathname}
            />
        </header>
    );
}

function DesktopNav({ isDark, setIsDark, pathname }) {
    return (
        <nav className="flex-row items-center justify-between hidden my-8 lg:flex">
            <ul className="flex flex-row gap-x-8 md:gap-12">
                <motion.li
                    initial={{ width: "100%", translateX: -15, opacity: 0 }}
                    animate={{ width: "100%", translateX: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-light hover:text-sixth"
                >
                    <Link href="/">
                        <Image
                            src="/favicon/android-chrome-192x192.png"
                            width={30}
                            height={30}
                            alt="Logo"
                        />
                    </Link>
                </motion.li>
                {Object.entries(navItems).map(([path, { name }]) => {
                    const isActive = path === pathname;
                    return (
                        <li
                            key={name}
                            className={clsx(
                                "underline-hover-effect text-xl font-light hover:text-sixth",
                                {
                                    'text-sixth before:!absolute before:!bottom-0 before:!left-0 before:!w-full before:!content-[""] before:!h-[2px] before:!bg-eighth':
                                        isActive,
                                }
                            )}
                        >
                            <Link href={path}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
            <button
                title="Toggle Dark Mode"
                className="hidden w-8 h-8 border-2 md:flex justify-center dark:border-white border-black rounded-full shadow-md items-center"
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? (
                    <FontAwesomeIcon icon={MoonOn} width={16} height={16} />
                ) : (
                    <FontAwesomeIcon icon={MoonOff} width={16} height={16} />
                )}
            </button>
        </nav>
    );
}
function MobileNav({ isDark, setIsDark, overlay, setOverlay, pathname }) {
    return (
        <>
            <nav className="flex justify-between my-8 lg:hidden">
                <motion.a
                    initial={{ width: "0%", translateX: -15, opacity: 0 }}
                    animate={{ width: "100%", translateX: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    href="/"
                >
                    <Image
                        src="/favicon/android-chrome-192x192.png"
                        width={50}
                        height={50}
                        alt="Logo"
                    />
                </motion.a>
                <button
                    title="Menu"
                    className="md:block"
                    onClick={() => setOverlay(!overlay)}
                >
                    {" "}
                    <FontAwesomeIcon
                        className="w-8 h-8 dark:text-white"
                        icon={faBars}
                    />{" "}
                </button>
            </nav>
            <AnimatePresence>
                {overlay && (
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        exit={{ width: "0%" }}
                        transition={{ duration: 0.5 }}
                        className={
                            overlay
                                ? "flex fixed top-0 left-0 justify-center w-screen h-screen dark:bg-first bg-nineth z-10 align-center"
                                : ""
                        }
                    >
                        <ul className="flex flex-col justify-center text-center gap-x-8 md:gap-12">
                            <li className="flex justify-center mb-4 text-xl font-light hover:text-sixth">
                                <Link href="/">
                                    <Image
                                        className=""
                                        src="/favicon/android-chrome-192x192.png"
                                        width={30}
                                        height={30}
                                        alt="Logo"
                                    />
                                </Link>
                            </li>
                            <li
                                className="text-xl font-light hover:text-sixth"
                                onClick={() => setOverlay(false)}
                            >
                                <Link href="/story">Story</Link>
                            </li>
                            <li
                                className="text-xl font-light hover:text-sixth"
                                onClick={() => setOverlay(false)}
                            >
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li
                                className="text-xl font-light hover:text-sixth"
                                onClick={() => setOverlay(false)}
                            >
                                <Link href="/notes">Notes</Link>
                            </li>
                            <li
                                className="text-xl font-light hover:text-sixth"
                                onClick={() => setOverlay(false)}
                            >
                                <Link href="/arts">Arts</Link>
                            </li>
                            <li
                                className="text-xl font-light hover:text-sixth"
                                onClick={() => setOverlay(false)}
                            >
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="my-2 mt-12">
                                <button
                                    title="Toggle Dark Mode"
                                    className="w-8 h-8 border-2 rounded-full shadow-md dark:border-fifth border-first md:block"
                                    onClick={() => setIsDark(!isDark)}
                                >
                                    {isDark ? (
                                        <FontAwesomeIcon icon={MoonOn} />
                                    ) : (
                                        <FontAwesomeIcon icon={MoonOff} />
                                    )}
                                </button>
                            </li>
                            <li className="my-2">
                                <button
                                    className="w-8 h-8 md:block"
                                    onClick={() => setOverlay(false)}
                                >
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
