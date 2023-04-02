"use client";
import { motion, Variants } from "framer-motion";
import { Catamaran } from "@next/font/google";
import Image from "next/image";
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
        <section>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="flex items-center justify-center py-16 overflow-hidden h-fit md:overflow-visible w-[90vw] md:w-2/3 mx-auto relative"
            >
                {/* <Image
                src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80"
                // width={1000}
                // height={800}
                fill
                className="dark:block hidden object-cover object-center  w-full"
                alt="s"
            /> */}
                <div
                    className={
                        "grid grid-cols-3 md:grid-cols-[100px_minmax(900px,_1fr)_100px] mx-auto text-center align-middle " +
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
                    <motion.blockquote
                        variants={quoteVariants}
                        className="col-span-3 text-center md:col-span-1"
                    >
                        <div className="text-lg md:text-[2.4rem] break-normal font-bold md:leading-9">
                            {quote}
                        </div>
                        <div className="mt-2 text-sm italic font-normal md:mt-8 md:text-1rem text-first dark:text-fourth">
                            - {quotee}
                        </div>
                    </motion.blockquote>
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
        </section>
    );
}
