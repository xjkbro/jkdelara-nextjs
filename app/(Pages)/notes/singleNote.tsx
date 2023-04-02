"use client";
import useSWR from "swr";
import { motion } from "framer-motion";

async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init);
    return res.json();
}
export default function SingleNote({ note, i }) {
    const { data } = useSWR<{ views: number }>(
        `/api/views/notes/${note.attributes.slug}`,
        fetcher
    );
    const regex = /(<([^>]+)>)/gi;
    return (
        <motion.article
            initial={{ opacity: 0, translateY: 25 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
        >
            <div className="p-4 transition-all rounded-md h-fit md:min-h-[12rem] dark:bg-second shadow-xl hover:-translate-y-1 duration-200 bg-white hover:bg-fifth">
                <div className="md:mb-2">
                    <div className="mb-2">
                        {note.attributes?.categories?.data.map((cat) => {
                            return (
                                <span
                                    key={cat.id}
                                    className="z-10 px-2 py-1 text-sm rounded-full bg-eighth text-fifth"
                                >
                                    {cat.attributes.title}
                                </span>
                            );
                        })}
                        <span className="ml-2 text-sm text-second dark:text-fourth">
                            {data?.views ? data?.views : 0} views
                        </span>
                    </div>
                    <span className="block text-lg font-bold">
                        {note.attributes.title}
                    </span>
                </div>
                <p className="prose dark:prose-invert">
                    {note.attributes.summary.length > 200 ? (
                        <>{note.attributes.summary.substring(0, 200)}...</>
                    ) : (
                        <>{note.attributes.summary}</>
                    )}
                </p>
            </div>
        </motion.article>
    );
}
