import React from "react";
import { notFound } from "next/navigation";
import { allNotes } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import {} from "next/navigation";
import Link from "next/link";

const getNotesFromParams = async (slug: string) => {
    const note = allNotes.find((note) => note.slugAsParams == slug);
    if (!note) {
        null;
    }
    return note;
};

export default async function Note({ params }) {
    const note = await getNotesFromParams(params.slug);

    if (!note) {
        notFound();
    }
    const Content = getMDXComponent(note.body.code);
    return (
        <article className="py-8 mx-auto w-2/3">
            <Link href="/posts">← Go Back</Link>
            <div className="mb-8 text-5xl">
                <h1>{note.title}</h1>
            </div>
            <Content />
        </article>
    );
}
