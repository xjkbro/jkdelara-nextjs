"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IntroBlock() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.3 }}
                className="z-[5] flex flex-col items-center mx-auto md:justify-between md:h-[80vh] lg:flex-row w-[90vw] md:w-2/3 mx-auto"
            >
                <div
                    className="order-2 w-full mx-auto my-8 md:w-fit md:order-1"
                    id="title"
                >
                    <h2 className="text-[5rem] md:text-[10rem] lg:text-[15rem] font-black md:leading-[12.5rem] flex gap-4 md:gap-12 items-center">
                        <span className="md:-ml-[1rem] -ml-[0.2rem]">Hello </span>
                        <motion.span
                            style={{ originX: 1, originY: 1 }}
                            animate={{ rotate: [0, -10, 10, -10,10, -10 ,0] }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-[2.5rem] md:text-[7.5rem]">👋</motion.span>
                    </h2>
                    <h1 className="text-[1.5rem] md:text-[2rem] font-bold flex md:block flex-col mb-8 md:mb-4">
                       <span>I&apos;m Jason-Kyle De Lara.</span> <span>Developer. </span> <span>Dreamer.</span> <span>Creator.</span>
                    </h1>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="block font-bold text-[1.5rem] bg-eighth hover:bg-seventh rounded-full p-2 w-24 text-white text-center mt-2"
                        href="/resume2022b.pdf"
                        download
                    >
                        <FontAwesomeIcon
                            icon={faAngleDoubleDown}
                            className="mr-2"
                        />
                        CV
                    </motion.a>
                </div>
                {/* <div
                    id="home-avatar"
                    className="mx-auto my-8 w-[300px] h-[300px]  md:order-2 order-1"
                >
                    <AnimatedBorder>
                        <Image
                            className="mx-auto bg-transparent rounded-full"
                            src="/feature.png"
                            priority
                            width={300}
                            height={300}
                            alt="Photo of Jason Kyle De Lara"
                        />
                    </AnimatedBorder>
                </div> */}
            </motion.div>
        </>
    );
}

function AnimatedBorder({ children }) {
    return (
        <div className="animate-border rounded-full h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r">
            <div className="w-full h-full transition-all rounded-full dark:bg-second bg-fifth">
                {children}
            </div>
        </div>
    );
}
