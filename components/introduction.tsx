"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Introduction() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.5 }}
                className="z-[5] flex flex-col items-center mx-auto md:justify-between md:h-[80vh] lg:flex-row"
            >
                <div
                    className="order-2 w-full mx-auto my-8 md:w-fit md:order-1"
                    id="title"
                >
                    <h1 className="text-[2rem] md:text-[3rem] font-black">
                        Jason-Kyle De Lara
                    </h1>
                    <h3 className="text-[1.3rem] md:text-[2rem] font-bold">
                        Full Stack Web Developer at ICP DAS USA.
                    </h3>
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
                <div
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
                </div>
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
