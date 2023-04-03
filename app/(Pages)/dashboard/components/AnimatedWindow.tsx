"use client";
import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function AnimatedWindow({ children, title, icon }) {
    return (
        <motion.div
            drag
            className="animate-border rounded-xl h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r"
        >
            <div className=" transition-all h-full w-full rounded-[11px] dark:bg-first bg-fifth">
                <div className="flex w-full gap-2 p-1 rounded-t-md bg-gradient-to-tr from-gray-300 to-gray-400 h-fit">
                    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                    <span className="w-4 h-4 bg-yellow-300 rounded-full"></span>
                    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
                <div className="p-2 h-fit">
                    <h2 className="mb-1 text-xl font-bold">
                        <FontAwesomeIcon
                            icon={icon}
                            className="mr-2"
                            width={25}
                            height={25}
                        />
                        {title}
                    </h2>
                    <div className="flex items-center w-full h-full ">
                        <div className="w-full pb-4">{children}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
