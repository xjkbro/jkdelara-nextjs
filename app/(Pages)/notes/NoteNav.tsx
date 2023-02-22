"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation"

const navLinks = {
    '/notes': {
        name: 'All Categories',
    },
    '/notes/blog': {
        name: 'Blog',
    },
    '/notes/recipe': {
        name: 'Recipe',
    },
    '/notes/diary': {
        name: 'Diary',
    },
};

export default function NoteNav({ categories }) {
    let pathname = usePathname() || '/notes';
    console.log(pathname)

    return (
        <motion.nav
            // initial={{ opacity: 0, translateY: 0 }}
            // animate={{ opacity: 1, translateY: 0 }}
            // transition={{ duration: 0.3 }}
            className="mb-4 flex gap-2"
        >
            {/* {categories.data.map((cat) => {
                return (
                    <Link key={cat.id} className="rounded-full !no-underline font-bold text-white bg-eighth py-2 px-4 hover:bg-seventh" href={"/notes/" + cat?.attributes?.slug}> {cat?.attributes?.title} </Link>
                )
            })} */}
            {
                    Object.entries(navLinks).map(([path, { name }]) => {
                    const isActive = path === pathname;
                    return (<>
                            <Link href={path} key={name} className={clsx("underline-hover-effect text-xl font-light hover:text-sixth",{ 'text-sixth before:!absolute before:!bottom-0 before:!left-0 before:!w-full before:!content-[""] before:!h-[2px] before:!bg-eighth': isActive,})}>{name}</Link>
                            {/* <Link href={path} key={name} className={clsx("rounded-full !no-underline font-bold text-white bg-eighth py-2 px-4 hover:bg-seventh",{ '!bg-second': isActive,})}>{name}</Link> */}
                    </>
                    );
                    }
                )}
        </motion.nav>
    )
}
