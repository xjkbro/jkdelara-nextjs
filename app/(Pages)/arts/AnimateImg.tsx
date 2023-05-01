"use client";
import { motion } from "framer-motion";
import React from "react";
import ImageModal from "./imageModal";

export default function AnimateImg(art, i) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                translateY: 50,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
                delay: 0.3 * i,
            }}
            key={art.id}
            className="w-full h-full"
        >
            <ImageModal art={art} i={i} />
        </motion.article>
    );
}
