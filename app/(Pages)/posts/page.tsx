import React from "react";
import { allNotes } from "contentlayer/generated";
import Link from "next/link";

export default async function Notes() {
    const notes = allNotes;

    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <div className="grid gap-4 md:grid-cols-2 mt-4 min-h-[20vh]">
                {notes.map((note) => (
                    <Link
                        key={note.slugAsParams}
                        href={"/posts/" + note.slugAsParams}
                    >
                        <article>
                            <div className="p-4 transition-all rounded-md h-fit md:min-h-[12rem] dark:bg-second shadow-xl hover:-translate-y-1 duration-200 bg-white hover:bg-fifth">
                                <div className="md:mb-2">
                                    <div className="mb-2">
                                        <span className="z-10 px-2 py-1 text-sm rounded-full bg-eighth text-fifth">
                                            {note.category}
                                        </span>
                                        <span className="ml-2 text-sm text-second dark:text-fourth">
                                            10 views
                                        </span>
                                    </div>
                                    <span className="block text-lg font-bold">
                                        {note.title}
                                    </span>
                                </div>
                                <p className="prose dark:prose-invert">
                                    {note.summary}
                                </p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
