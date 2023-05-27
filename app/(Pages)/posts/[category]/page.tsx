import React from "react";
import { notFound } from "next/navigation";
import { allNotes } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import clsx from "clsx";
import { noteCategories } from "@/constants/noteCategories";
import NoteViews from "@/components/NoteViews";
const getNotesInCatFromParams = async (catId: string) => {
    const notes = allNotes.filter((note) => {
        if (note?.categories?.includes(catId)) {
            return note;
        } else {
            return;
        }
    });
    return notes ? notes : [];
};

export default async function Note({ params }) {
    const notes = await getNotesInCatFromParams(params.category);
    if (!notes) {
        notFound();
    }
    return (
        // <div className="w-[90vw] md:w-2/3 mx-auto">
        <div className="grid gap-4 md:grid-cols-2 mt-4 min-h-[20vh]">
            {notes.map((note) => (
                <Link
                    key={note.slugAsParams}
                    href={"/post/" + note.slugAsParams}
                >
                    <article className="p-4 transition-all rounded-md  md:min-h-[12rem] h-full dark:bg-second shadow-xl hover:-translate-y-1 duration-200 bg-white hover:bg-fifth">
                        <div className="md:mb-2">
                            <div className="flex gap-1 mb-2">
                                {note.categories &&
                                    note.categories.map((category) => (
                                        <span
                                            key={category}
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
        // </div>
    );
}
