"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { stripTags } from "@/lib/utils";

export default function FeaturedProjectsBlock({ projects }) {
    return (
        <div className="z-[5] md:justify-between pt-12 pb-4 px-8 w-full bg-white dark:bg-second">
            <div className="mx-auto md:w-3/4">
                <h3 className="text-[2rem] md:text-[3rem] font-black mb-2">
                    Featured Projects
                </h3>

                <div className="flex flex-col gap-8 md:gap-2 my-8">
                    {projects.data.map((project, i) => (
                        <motion.div
                            initial={{ opacity: 0, translateX: -25 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.3, delay: i * 0.07 }}
                            key={i}
                        >
                            <Link
                                href={"/note/" + project.attributes.slug}
                                className="flex flex-col items-start justify-center gap-2 h-32 p-4 transition-all border-l-4 group border-eighth hover:translate-x-1 hover:dark:bg-third hover:bg-sixth"
                            >
                                <span className="font-bold text-left font-catamaran text-eighth">
                                    {project.attributes.name}
                                </span>
                                <span className="font-thin text-left text-sm font-notosans">
                                    {stripTags(project.attributes.description).substring(0,200)}...
                                </span>
                                <span className="font-thin text-xs font-mono md:flex gap-4 hidden dark:text-fourth text-third">
                                    {project.attributes.technologies.data.map((tech,i)=> <span key={i}>{tech.attributes.name}</span>)}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
