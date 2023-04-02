"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IntroBlock() {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.3 }}
                className="z-[5] flex flex-col items-center justify-start md:justify-between min-h-[85vh] pb-12 md:pb-0 md:h-[80vh] lg:flex-row w-[90vw] md:w-2/3 mx-auto"
            >
                <div
                    className="order-2 w-full  mx-auto my-2 md:my-8 md:w-fit md:order-1"
                    id="title"
                >
                    <div className="flex flex-col">
                        <h1 className="order-2 text-[1.5rem] md:text-[2rem] font-bold flex md:block flex-col mb-8 md:mb-4">
                            <span>I&apos;m Jason-Kyle De Lara.</span>{" "}
                            <span className="px-1">Developer. </span>{" "}
                            <span className="px-1">Dreamer.</span>{" "}
                            <span className="px-1">Creator.</span>
                        </h1>
                        <h2 className="order-1 text-[5rem] md:text-[10rem] lg:text-[15rem] font-black md:leading-[12.5rem] flex gap-4 md:gap-12 items-center">
                            <span className="md:-ml-[0.5rem] -ml-[0.2rem]">
                                Hello{" "}
                            </span>
                            <motion.span
                                style={{ originX: 1, originY: 1 }}
                                animate={{
                                    rotate: [0, -10, 10, -10, 10, -10, 0],
                                }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-[2.5rem] md:text-[7.5rem]"
                            >
                                👋
                            </motion.span>
                        </h2>
                    </div>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="block font-bold text-[1.5rem] bg-eighth hover:bg-seventh rounded-full p-2 w-24 text-white text-center mt-2"
                        href="/Resume2023.pdf"
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
                    className="order-1 mx-auto w-fit md:hidden md:order-2"
                > */}
                {/* <AnimatedBorder> */}
                {/* <Image
                        className="mx-auto bg-transparent rounded-xl"
                        src="/feature.png"
                        // priority
                        loading="lazy"
                        width={400}
                        height={400}
                        alt="Photo of Jason Kyle De Lara"
                    /> */}
                {/* </AnimatedBorder> */}
                {/* </div> */}
            </motion.div>
        </section>
    );
}
