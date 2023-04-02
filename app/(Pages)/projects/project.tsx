"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function SingleProject({ project, i }) {
    const regex = /(<([^>]+)>)/gi;

    return (
        <motion.article
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, scale: 10, translateY: 10 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
        >
            <Link
                href={"/projects/" + project.attributes.slug}
                className="p-4 mb-2 transition-all hover:scale-[101%] "
            >
                <figure className="transition-all rounded-[11px] h-full">
                    <Image
                        src={project?.attributes?.image?.data?.attributes?.url}
                        alt={project.attributes.name}
                        width={500}
                        height={250}
                        className="w-full h-[260px] "
                        // className="ounded-[11px]"
                    />
                    <figcaption className="flex flex-col justify-center mx-auto text-sm font-light mt-1 text-center">
                        {/* <span className="text-lg font-semibold text-center">{project.attributes.name}</span> */}
                        {/* <figcaption className=""> */}
                        {project.attributes.title}
                        {/* </figcaption> */}
                    </figcaption>
                </figure>
            </Link>
        </motion.article>
    );
}
