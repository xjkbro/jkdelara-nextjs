"use client";
import { motion, Variants } from "framer-motion";
import { Catamaran } from "@next/font/google";
const QuoteFont = Catamaran({
    weight: ["500", "700", "900"],
    subsets: ["latin"],
});

const lQuoteVariants: Variants = {
    offscreen: {
        x: -25,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
};
const rQuoteVariants: Variants = {
    offscreen: {
        x: 25,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
};
const quoteVariants: Variants = {
    offscreen: {
        y: -25,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
};

export default function DisplayQuote({ quote, quotee }) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="flex items-center justify-center py-16 overflow-hidden h-fit md:overflow-visible"
        >
            <div
                className={
                    "grid grid-cols-3 md:grid-cols-[200px_minmax(900px,_1fr)_100px] mx-auto text-center align-middle " +
                    QuoteFont.className
                }
            >
                <motion.div
                    variants={lQuoteVariants}
                    className="text-[5rem] md:text-[10rem] h-16 md:h-32 text-eighth font-black"
                >
                    &ldquo;
                </motion.div>
                <div className="col-span-2"></div>
                <div className="hidden md:block md:col-span-1"></div>
                <motion.div
                    variants={quoteVariants}
                    className="col-span-3 text-center md:col-span-1"
                >
                    <div className="text-lg md:text-[2.4rem] break-normal font-bold md:leading-9">
                        {quote}
                    </div>
                    <div className="mt-2 text-sm italic font-normal md:mt-8 md:text-1rem text-first dark:text-fourth">
                        - {quotee}
                    </div>
                </motion.div>
                <div className="hidden md:block md:col-span-1"></div>
                <div className="col-span-2"></div>
                <motion.div
                    variants={rQuoteVariants}
                    className="text-[5rem] md:text-[10rem] h-16 md:h-32 text-eighth font-black"
                >
                    &rdquo;
                </motion.div>
            </div>
        </motion.div>
    );
}
