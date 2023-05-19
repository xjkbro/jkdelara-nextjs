"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecentPostBlock({ notes }) {
    return (
        <div className="z-[5] md:justify-between pt-12 pb-4 px-8 w-full">
            <div className="mx-auto md:w-3/4">
                <h3 className="text-[2rem] md:text-[3rem] font-black mb-2">
                    Featured Notes
                </h3>

                <div className="grid grid-cols-1 gap-8 mx-auto my-8 md:grid-cols-3">
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
                                    {
                                        note.attributes.categories.data[0]
                                            .attributes.title
                                    }
                                </span>
                                <span className="font-thin text-left font-notosans">
                                    {note.attributes.title}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
