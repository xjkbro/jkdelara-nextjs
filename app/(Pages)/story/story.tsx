"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Roboto_Slab } from "next/font/google";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function StoryPanel({ stories }) {
    return (
        <motion.div
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
            className="w-11/12 mx-auto h-[70vh] snap-mandatory snap-y overflow-y-scroll scrollbar-hide rounded-xl"
        >
            {stories.data.map((story, i) => (
                <section
                    key={i}
                    className="my-2 h-[70vh] bg-eighth/90 text-black snap-center p-4 py-12 md:p-24 rounded-xl relative"
                >
                    <div className="flex justify-start items-center h-full">
                        <div className="hidden md:block w-96">
                            {DisplayDateRange(story)}
                        </div>
                        <div className=" md:-translate-x-10 w-full">
                            <h2
                                className={clsx(
                                    "text-5xl break-words mb-3 md:text-6xl font-black text-first",
                                    robotoSlab.className
                                )}
                            >
                                {story.attributes.name}
                            </h2>
                            <div className="md:hidden block w-96">
                                {DisplayDateRange(story)}
                            </div>
                            <h4 className="text-2xl md:text-3xl mb-3 font-semibold text-third">
                                {story.attributes.title}
                            </h4>
                            <p className="text-sm font-normal font-mono">
                                {story.attributes.summary}
                            </p>
                        </div>
                    </div>
                </section>
            ))}
        </motion.div>
    );
}

const DisplayDateRange = (story) => {
    const startDate = new Date(story.attributes.started);
    const start = startDate.toLocaleDateString("en-US", {
        year: "numeric",
        // month: "short",
        // day: "numeric",
    });

    let end: Date | string = "Present";
    if (story.attributes.ended != null) {
        end = new Date(story.attributes.ended);
        end = end.toLocaleDateString("en-US", {
            year: "numeric",
            // month: "long",
            // day: "numeric",
        });
    }
    return (
        <div className="flex md:flex-col items-center md:justify-center md:p-12 md:w-72 md:h-72 rounded-full md:bg-first md:opacity-30">
            <div className="text-slate-200 font-bold text-xl md:text-3xl">
                {start}
            </div>
            <div className="text-white font-black">-</div>
            <div className="text-slate-200 font-bold text-xl md:text-3xl">
                {end}
            </div>
        </div>
    );
};
