"use client";

import { getViews } from "@/pages/api/strapi/viewCounter";
import { motion } from "framer-motion";
import Link from "next/link";
export default function SingleNote({note, i}) {
    // console.log(note)
    const regex = /(<([^>]+)>)/ig;
  return (
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{opacity:1, translateY:0}}
        transition={{duration: 0.3, delay: i * 0.1}}
        className="animate-border rounded-xl bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r" >
        {/* <div className="p-4 transition-all border-2 rounded-xl xl:rounded-full md:mb-2 border-third md:border-sixth dark:hover:bg-second hover:bg-sixth"> */}
        <div className="p-4 transition-all rounded-[11px] dark:bg-first dark:hover:bg-second bg-fifth hover:bg-white">
            <div className="hidden md:block md:mb-2">
                <span className="px-2 py-1 text-sm font-bold rounded-full bg-eighth text-fifth">{note.attributes?.categories?.data[0].attributes.title}</span>
                <span className="ml-2 text-lg font-bold">{note.attributes.title}</span>
                <span className="ml-2 text-sm dark:text-fourth whitespace-nowrap">{note.attributes.views} views</span>
            </div>
            <div className="block md:hidden md:mb-2">
                <div className="mb-2">
                {note.attributes?.categories?.data.map((cat)=>{
                    return (
                        <a key={cat.id} className="z-10 px-2 py-1 text-sm rounded-full bg-eighth text-fifth">{cat.attributes.title}</a>
                    )
                })}                    
                    <span className="ml-2 text-sm text-second dark:text-fourth">{note.attributes.views} views</span>
                </div>
                <span className="block text-lg font-bold">{note.attributes.title}</span>
            </div>
            <p className="prose dark:prose-invert">{note.attributes.summary.substring(0, 120)}</p>
        </div>
    </motion.div>
  )
}
