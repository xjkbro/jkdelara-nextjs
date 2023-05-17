"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { stripTags } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";

export default function FeaturedProjectsBlock({ projects }) {
    return (
        <section>
            <div className="z-[5] md:justify-between pt-12 pb-4 px-8 w-full">
                {/* bg-white dark:bg-second"> */}
                <div className="mx-auto md:w-3/4">
                    <h3 className="text-[2rem] md:text-[3rem] font-black mb-2">
                        Featured Projects
                    </h3>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 my-8 md:gap-8 ">
                        {projects?.data?.map((project, i) => (
                            <motion.article
                                initial={{ opacity: 0, translateX: -25 }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.3, delay: i * 0.07 }}
                                key={i}
                                className={clsx(
                                    i == 0 &&
                                        "md:col-span-2 min-h-[12rem] h-fit ",
                                    "h-32"
                                )}
                            >
                                <Link
                                    href={
                                        "/projects/" + project.attributes.slug
                                    }
                                    className="flex flex-col md:flex-row items-center justify-center min-h-[12rem] h-full gap-8 p-4 rounded-lg hover:bg-third/25 transition-all"
                                    // className="flex flex-col md:flex-row items-center justify-center h-full gap-8 p-4 transition-all border-l-4 group border-eighth hover:translate-x-1 hover:dark:bg-second hover:bg-fifth"
                                >
                                    {i == 0 && (
                                        <div className="md:w-full h-full">
                                            <Image
                                                src={
                                                    project.attributes.image
                                                        .data.attributes.url
                                                }
                                                alt={project.attributes.title}
                                                width={500}
                                                height={500}
                                                className="object-cover aspect-video rounded-md opacity-75"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col items-start justify-center gap-4">
                                        <span className="text-2xl font-bold text-left font-catamaran text-eighth">
                                            {project.attributes.name}
                                        </span>
                                        <p className="text-sm font-light text-left font-notosans">
                                            {i == 0
                                                ? stripTags(
                                                      project.attributes
                                                          .description
                                                  )
                                                : stripTags(
                                                      project.attributes
                                                          .description
                                                  ).substring(0, 120) + "..."}
                                        </p>
                                        <span className="hidden gap-4 font-mono text-xs font-normal md:flex dark:text-slate-300 text-fourth">
                                            {project.attributes.technologies.data.map(
                                                (tech, i) => (
                                                    <span key={i}>
                                                        {tech.attributes.name}
                                                    </span>
                                                )
                                            )}
                                        </span>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
