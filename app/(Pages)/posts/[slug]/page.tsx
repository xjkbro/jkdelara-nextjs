import React from "react";
import { notFound } from "next/navigation";
import { allNotes } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import clsx from "clsx";
// import { MarkdownX } from "@/components/MarkdownX";

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
        <article className="py-8 mx-auto w-11/12 md:w-2/3 md:grid md:grid-cols-4">
            <Link href="/posts" className="md:col-span-1">
                ← Go Back
            </Link>
            <div className="md:col-span-3">
                <Content
                    components={{
                        h1: ({ className, ...props }) => (
                            <h2
                                className={clsx(
                                    "relative mt-2 text-5xl font-bold text-rose-100/90",
                                    className
                                )}
                                {...props}
                            />
                        ),
                        code: ({ className, ...props }) => (
                            <pre className="w-full p-4 my-6 mx-2 rounded-lg bg-slate-700 border-2 border-slate-600">
                                <code
                                    className={clsx(
                                        "relative rounded font-mono text-sm",
                                        className
                                    )}
                                    {...props}
                                />
                            </pre>
                        ),
                    }}
                />
                {/* <MarkdownX code={note.body.code} /> */}
            </div>
        </article>
    );
}
