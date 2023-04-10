"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

const navLinks = {
    "/notes": {
        name: "All Notes",
    },
};
export default function NoteNav({ categories, results }) {
    categories?.data?.map((cat) => {
        navLinks[`/notes/${cat.attributes.slug}`] = {
            name: `${cat.attributes.title}`,
        };
    });
    let pathname = usePathname() || "/notes";

    return (
        <div className="flex items-center justify-between">
            <motion.div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(navLinks).map(([path, { name }], i) => {
                    const isActive = path === pathname;
                    return (
                        <Link
                            href={path}
                            key={i}
                            className={clsx(
                                "underline-hover-effect text-xl font-light hover:text-sixth",
                                {
                                    '!text-sixth before:!absolute before:!bottom-0 before:!left-0 before:!w-full before:!content-[""] before:!h-[2px] before:!bg-eighth':
                                        isActive,
                                }
                            )}
                        >
                            {name}
                        </Link>
                    );
                })}
            </motion.div>
            <div className="hidden text-sm md:block">
                {results} results found
            </div>
        </div>
    );
}
