"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { stripTags } from "@/lib/utils";

export default function FeaturedProjectsBlock({ projects }) {
    return (
        <section>
            <div className="z-[5] md:justify-between pt-12 pb-4 px-8 w-full">
                {/* bg-white dark:bg-second"> */}
                <div className="mx-auto md:w-3/4">
                    <h3 className="text-[2rem] md:text-[3rem] font-black mb-2">
                        Featured Projects
                    </h3>

                    <div className="flex flex-col gap-8 my-8 md:gap-2">
                        {projects?.data?.map((project, i) => (
                            <motion.article
                                initial={{ opacity: 0, translateX: -25 }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.3, delay: i * 0.07 }}
                                key={i}
                            >
                                <Link
                                    href={
                                        "/projects/" + project.attributes.slug
                                    }
                                    className="flex flex-col items-start justify-center h-32 gap-2 p-4 transition-all border-l-4 group border-eighth hover:translate-x-1 hover:dark:bg-third hover:bg-sixth"
                                >
                                    <span className="text-lg font-bold text-left font-catamaran text-eighth">
                                        {project.attributes.name}
                                    </span>
                                    <p className="text-sm font-light text-left font-notosans">
                                        {stripTags(
                                            project.attributes.description
                                        ).substring(0, 200)}
                                        ...
                                    </p>
                                    <span className="hidden gap-4 font-mono text-xs font-normal md:flex dark:text-fourth text-third">
                                        {project.attributes.technologies.data.map(
                                            (tech, i) => (
                                                <span key={i}>
                                                    {tech.attributes.name}
                                                </span>
                                            )
                                        )}
                                    </span>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
