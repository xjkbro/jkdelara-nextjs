"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function SingleProject({ project, i }) {
    // const regex = /(<([^>]+)>)/gi;
    return (
        <motion.article
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
        >
            <div className="transition-all rounded-md hover:-translate-y-1 duration-200">
                <Link
                    href={"/projects/" + project.attributes.slug}
                    className="group"
                >
                    <figure>
                        <Image
                            src={
                                project?.attributes?.image?.data?.attributes
                                    ?.url
                            }
                            alt={project.attributes.name}
                            width={500}
                            height={200}
                            className="w-full h-[180px] max-h-[180px] object-cover rounded-[11px] group-hover:brightness-110 transition-all"
                        />
                        <motion.figcaption
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: 0.3 * i + 0.5,
                            }}
                        >
                            <p className="mt-2 text-center font-light text-first text-sm dark:text-fifth">
                                {project.attributes.title}
                            </p>
                        </motion.figcaption>
                    </figure>
                </Link>
            </div>
        </motion.article>
    );
}
