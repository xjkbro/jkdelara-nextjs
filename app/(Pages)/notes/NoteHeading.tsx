"use client";
import { motion } from "framer-motion";
export default function NoteHeading({ category }) {
    if (category == null)
        return (
            <motion.div
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-end justify-between mb-4"
            >
                <div className="">
                    <h1 className="text-[2rem] font-bold">Notes</h1>
                    <p className="text-sm">
                        This is Jason-Kyle De Lara&apos;s catalog of notes.
                        Writings include developer, food, and lifestyle
                        writings.
                    </p>
                </div>
            </motion.div>
        );
    if (category)
        return (
            <motion.section
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-end justify-between mb-4"
            >
                <div className="">
                    <h1 className="text-[2rem] font-bold">
                        {category.attributes?.title}
                    </h1>
                    <p className="text-sm">
                        {category.attributes?.description}
                    </p>
                </div>
                {/* <div>{catInfo.meta.pagination.total} results found</div> */}
            </motion.section>
        );

    return <></>;
}
