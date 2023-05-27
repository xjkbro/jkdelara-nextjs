"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Roboto_Slab } from "next/font/google";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function StoryScroller({ stories }) {
    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <div className="mb-8 pb-16 px-6 mx-auto max-w-screen-xl ">
                {stories.data.map((story, i) => (
                    <motion.section
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
                        key={i}
                        className="my-12 w-full"
                    >
                        <div className="flex justify-start items-center">
                            <div className="hidden md:block">
                                {DisplayDateRange(story)}
                            </div>
                            <div className=" md:-translate-x-10 w-full">
                                <h2
                                    className={clsx(
                                        "text-5xl break-words mb-3 md:text-6xl font-black dark:text-sixth text-first",
                                        robotoSlab.className
                                    )}
                                >
                                    {story.attributes.name}
                                </h2>
                                <div className="md:hidden block">
                                    {DisplayDateRange(story)}
                                </div>
                                <h4 className="text-2xl md:text-3xl mb-3 font-semibold dark:text-seventh text-third">
                                    {story.attributes.title}
                                </h4>
                                <p className="text-sm font-normal font-mono">
                                    {story.attributes.summary}
                                </p>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
}

const DisplayDateRange = (story) => {
    const startDate = new Date(story.attributes.started);
    const start = startDate.toLocaleDateString("en-US", {
        year: "numeric",
    });

    let end: Date | string = "Present";
    if (story.attributes.ended != null) {
        end = new Date(story.attributes.ended);
        end = end.toLocaleDateString("en-US", {
            year: "numeric",
        });
    }
    return (
        <div className="flex md:flex-col items-center md:justify-center md:p-12 md:w-72 md:h-72 rounded-full md:bg-first dark:md:opacity-70 md:opacity-50">
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
