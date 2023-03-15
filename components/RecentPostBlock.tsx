"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecentPostBlock({ notes }) {
    return (
        // <div className="z-[5] md:justify-between pt-12 pb-4 px-8 w-full bg-white dark:bg-second">
        <div className="z-[5] md:justify-between pt-12 pb-4 px-8 w-full">
            <div className="mx-auto md:w-3/4">
                <h3 className="text-[2rem] md:text-[3rem] font-black mb-2">
                    Featured Notes
                </h3>

                <div className="grid grid-cols-1 gap-8 mx-auto my-8 md:grid-cols-3">
                    <>
                        {/* {notes.data.map((note, i) => (
                        <Link
                            key={i}
                            href={"/note/" + note.attributes.slug}
                            className="flex items-center justify-center h-32 p-4 px-8 border-4 rounded-full border-eighth"
                        >
                            <div className="flex flex-col items-start justify-center w-full">
                                <span className="font-bold text-left">
                                    {
                                        note.attributes.categories.data[0]
                                            .attributes.title
                                    }
                                </span>
                                <span className="font-thin text-left">
                                    {note.attributes.title}
                                </span>
                            </div>
                            <span className="before:absolute -mt-[9.5rem] absolute inline-block">
                                <span className="absolute rounded-full left-[2rem] bg-eighth py-1 px-2 text-white whitespace-nowrap">
                                    {note.attributes.views} views
                                </span>
                            </span>
                        </Link>
                    ))} */}
                    </>
                    {notes.data.map((note, i) => (
                        <motion.div
                            initial={{ opacity: 0, translateX: -25 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.3, delay: i * 0.07 }}
                            key={i}
                        >
                            <Link
                                href={"/note/" + note.attributes.slug}
                                className="flex flex-col items-start justify-center h-32 p-4 transition-all border-l-4 group border-eighth hover:translate-x-1 hover:dark:bg-third hover:bg-sixth"
                            >
                                <span className="font-bold text-left font-catamaran">
                                    {note.attributes.categories.data[0].attributes.title}
                                </span>
                                <span className="font-thin text-left font-notosans">
                                    {note.attributes.title}
                                </span>
                                {/* <span className="absolute hidden group-hover:inline-block before:absolute">
                                    <span className="absolute rounded-full left-[2rem] bg-eighth py-1 px-2 text-white whitespace-nowrap">
                                        {note.attributes.views} views
                                    </span>
                                </span> */}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
