import Link from "next/link";
import NoteHeading from "./NoteHeading";
import NoteNav from "./NoteNav";
import SingleNote from "./singleNote";
import Pages from "./pagination";
import { currentPageSetup } from "@/lib/pagination";
// import NoteGrid from "./NoteGrid";

export const metadata = { title: "Notes" };

export default async function Notes({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const currentPage = currentPageSetup(searchParams);
    const notes = await getNotes(currentPage);
    const categories = await getCategories();
    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <NoteHeading category={null} />
            <NoteNav
                categories={categories}
                results={notes && notes?.meta?.pagination?.total}
            />
            <div className="grid gap-4 md:grid-cols-2 mt-4 min-h-[20vh]">
                {notes &&
                    notes?.data?.map((note, i) => (
                        <Link
                            key={note.id}
                            href={"/note/" + note.attributes.slug}
                        >
                            <SingleNote note={note} i={i} />
                        </Link>
                    ))}
            </div>
            {/* <Pages meta={notes.meta} page={currentPage} /> */}
            {/* <NoteGrid page={currentPage} /> */}
        </div>
    );
}

async function getNotes(page) {
    const url =
        "https://cms.jkdelara.com/api/posts?populate=*&sort=publishedAt:desc";
    const res = await fetch(url, { next: { revalidate: 120 } });
    return res.json();
}

async function getCategories() {
    const res = await fetch(
        "https://cms.jkdelara.com/api/categories?populate=*",
        { next: { revalidate: 120 } }
    );
    return res.json();
}
