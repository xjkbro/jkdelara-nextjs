import React from "react";
import { notFound } from "next/navigation";
import { allNotes } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const getNotesFromParams = async (slug: string) => {
    const note = allNotes.find((note) => note.slugAsParams == slug);
    if (!note) {
        null;
    }
    return note;
};
import { noteCategories } from "@/constants/noteCategories";

export default async function Note({ params }) {
    const note = await getNotesFromParams(params.slug);

    if (!note) {
        notFound();
    }
    const Content = getMDXComponent(note.body.code);
    return (
        <article className="mx-auto prose dark:prose-invert w-[90vw] md:w-2/3">
            <Link href="/posts" className="no-underline">
                ← Go Back
            </Link>
            <div className="">
                {note.image && (
                    <Image
                        src={note.image}
                        width={500}
                        height={500}
                        alt={note.title}
                        className="object-cover w-full h-56 my-8 rounded-lg md:h-96"
                    />
                )}
                <h1 className="relative mb-4 text-5xl font-bold font-notosans dark:text-slate-300 text-second">
                    {note.title}
                </h1>
                <div className="my-2">
                    <div className="flex gap-2">
                        {note.categories &&
                            note.categories.map((category) => (
                                <span
                                    key={category}
                                    className="px-4 py-3 rounded-full text-md bg-eighth text-fifth"
                                >
                                    {noteCategories.find(
                                        (noteCategory) =>
                                            noteCategory.id == category
                                    )?.name.singular ??
                                        category.charAt(0).toUpperCase() +
                                            category.slice(1)}
                                </span>
                            ))}
                    </div>
                </div>
                <div className="flex justify-between my-2">
                    {note.publishedDate && (
                        <div>
                            Published on{" "}
                            {new Date(note.publishedDate).toDateString()}
                        </div>
                    )}
                    <div>10 views</div>
                </div>
                <hr className="my-4 dark:border-sixth border-fourth" />
                <Content
                    components={{
                        h1: ({ className, ...props }) => (
                            <h2
                                className={clsx(
                                    "relative mt-2 text-5xl font-bold font-notosans  dark:text-slate-300 text-second",
                                    className
                                )}
                                {...props}
                            />
                        ),
                        h2: ({ className, ...props }) => (
                            <h3
                                className={clsx(
                                    "relative mt-4 mb-2 text-2xl font-bold font-notosans  dark:text-slate-300 text-second",
                                    className
                                )}
                                {...props}
                            />
                        ),
                        p: ({ className, ...props }) => (
                            <p
                                className={clsx(
                                    "font-mono text-sm font-normal dark:text-slate-300 text-second",
                                    className
                                )}
                                {...props}
                            />
                        ),
                        ul: ({ className, ...props }) => (
                            <ul
                                className={clsx(
                                    "font-mono text-sm font-normal dark:text-slate-300 text-second",
                                    className
                                )}
                                {...props}
                            />
                        ),
                        iframe: ({ className, ...props }) => (
                            <iframe
                                // className={clsx(
                                //     "h-96 w-full py-4 border",
                                //     "h-96 w-full py-4 border",
                                //     className
                                // )}
                                className="border h-96"
                                {...props}
                            ></iframe>
                        ),
                        code: ({ className, ...props }) => (
                            <code
                                className={clsx(
                                    "relative rounded font-mono text-sm",
                                    className
                                )}
                                {...props}
                            />
                        ),
                    }}
                />
            </div>
        </article>
    );
}
