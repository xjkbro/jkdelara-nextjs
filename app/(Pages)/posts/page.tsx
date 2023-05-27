import React from "react";
import { allNotes } from "contentlayer/generated";
import Link from "next/link";
import NoteViews from "@/components/NoteViews";
import { noteCategories } from "@/constants/noteCategories";

export default async function Notes() {
    //sort allNotes by publishedDate
    const notes = allNotes.sort((a, b) => {
        const dateA = new Date(a.publishedDate!);
        const dateB = new Date(b.publishedDate!);
        return dateB.getTime() - dateA.getTime();
    });
    // const notes = allNotes.sort(note => );
    console.log(notes);
    return (
        <div className="grid gap-4 md:grid-cols-2  mt-4 min-h-[20vh]">
            {notes.map((note) => (
                <Link
                    key={note.slugAsParams}
                    href={"/post/" + note.slugAsParams}
                >
                    <article className="p-4 transition-all rounded-md  md:min-h-[12rem] h-full dark:bg-second shadow-xl hover:-translate-y-1 duration-200 bg-white hover:bg-fifth">
                        <div className="md:mb-2">
                            <div className="flex gap-1 mb-2">
                                {note.categories &&
                                    note.categories.map((category, i) => (
                                        <span
                                            key={i + category}
                                            className=" px-2 py-1 text-sm rounded-full bg-eighth text-fifth"
                                        >
                                            {noteCategories.find(
                                                (noteCategory) =>
                                                    noteCategory.id == category
                                            )?.name.singular ??
                                                category
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    category.slice(1)}
                                        </span>
                                    ))}
                                <span className="ml-2 text-sm text-second dark:text-fourth flex items-center">
                                    <NoteViews slug={note.slugAsParams} />
                                </span>
                            </div>
                            <span className="block text-lg font-bold">
                                {note.title}
                            </span>
                        </div>
                        <p className="prose dark:prose-invert">
                            {note.summary}
                        </p>
                    </article>
                </Link>
            ))}
        </div>
    );
}
