"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useSWR from "swr";
const toBase64 = (str: string) => {
    return typeof window === "undefined"
        ? Buffer.from(str).toString("base64")
        : window.btoa(str);
};

export const createSvgShimmer = (width: number, height: number): string => {
    const shimmer = `
          <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                  <linearGradient id="g">
                      <stop stop-color="#333" offset="20%" />
                      <stop stop-color="#222" offset="50%" />
                      <stop stop-color="#333" offset="70%" />
                  </linearGradient>
              </defs>
              <rect width="${width}" height="${height}" fill="#333" />
              <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
              <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite" />
          </svg>
      `;

    return `data:image/svg+xml;base64,${toBase64(shimmer)}`;
};

async function fetcher(id) {
    if (id) {
        const res = await fetch(
            "https://cms.jkdelara.com/api/photos/" +
                id +
                "?populate[photograph][fields][0]=url"
        );
        return res.json();
    }
    return { error: "error" };
}

export default function ImageModal({ art, i }) {
    const regex = /(<([^>]+)>)/gi;

    const [shouldFetch, setShouldFetch] = useState(false);
    const [fetchID, setfetchID] = useState(null);

    const { data } = useSWR(!shouldFetch && fetchID ? null : fetchID, fetcher);
    function handleClick(e, id) {
        // console.log(id)
        setfetchID(id);
        setShouldFetch(true);
    }
    useEffect(() => {}, [fetchID, shouldFetch]);

    return (
        <AnimatePresence>
            {shouldFetch ? (
                // <div className="w-full h-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 z-10 flex items-center justify-center object-contain w-full h-full bg-black/70"
                    onClick={() => setShouldFetch(false)}
                >
                    <motion.div
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
                        className=" flex flex-col justify-center items-center w-[90%] md:w-fit"
                        onClick={() => setShouldFetch(false)}
                    >
                        {data ? (
                            <figure>
                                <Image
                                    src={
                                        data.data?.attributes?.photograph?.data
                                            ?.attributes?.url
                                    }
                                    alt={
                                        "artbyjkd " +
                                        art?.attributes?.summary?.replace(
                                            regex,
                                            ""
                                        )
                                    }
                                    className="!h-[95%]"
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                />
                                <figcaption className="h-8">
                                    {/* EXIF DATA DISPLAY */}
                                </figcaption>
                            </figure>
                        ) : (
                            <figure>
                                <Image
                                    alt="Loading..."
                                    src="/spinner.svg"
                                    width={50}
                                    height={50}
                                />
                            </figure>
                        )}
                    </motion.div>
                </motion.div>
            ) : (
                // </div>

                <></>
            )}
            <motion.div
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
                className="w-full h-full"
            >
                <Image
                    src={art?.attributes?.photograph?.data?.attributes?.url}
                    priority
                    alt={
                        "artbyjkd " +
                        art?.attributes?.summary?.replace(regex, "")
                    }
                    width={300}
                    height={300}
                    className="hover:cursor-pointer rounded-[11px]"
                    onClick={(e) => handleClick(e, art?.id)}
                />
            </motion.div>
        </AnimatePresence>
    );
}
