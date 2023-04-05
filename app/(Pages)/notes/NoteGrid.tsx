"use client";

import Link from "next/link";
import useSWR from "swr";
import Pages from "./pagination";
import SingleNote from "./singleNote";
const fetcher = (url) =>
    fetch(url, { method: "GET" }).then((res) => res.json());

export default function NoteGrid({ page }) {
    const url =
        "https://cms.jkdelara.com/api/posts?populate=*&sort=publishedAt:desc&pagination[pageSize]=10&pagination[page]=" +
        page;
    const { data } = useSWR(url, fetcher);
    console.log(data);
    if (!data) return <>Loading...</>;
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 mt-4 min-h-[20vh]">
                {data.data.map((note, i) => (
                    <Link key={note.id} href={"/note/" + note.attributes.slug}>
                        <SingleNote note={note} i={i} />
                    </Link>
                ))}
            </div>
            <Pages meta={data.meta} page={page} />
        </div>
    );
}
