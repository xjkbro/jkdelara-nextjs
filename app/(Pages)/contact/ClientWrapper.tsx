"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Contact from "@/components/contact";

export default function ClientWrapper() {
    return (
        <motion.div
            // initial={{ height: "0vh", translateX: 100, opacity: 0 }}
            // animate={{height: "75vh", translateX: 0, opacity: 1}}
            // transition={{duration: 0.3}}
            // exit={{height: "0vh"}}
            initial={{
                opacity: 0,
                translateY: 50,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 0.1,
            }}
            className="overflow-hidden  w-[90vw] md:w-2/3 mx-auto"
        >
            <Contact />
        </motion.div>
    );
}
