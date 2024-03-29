import Link from "next/link";
import NoteHeading from "../NoteHeading";
import NoteNav from "../NoteNav";
import SingleNote from "../singleNote";
import Pages from "../pagination";
import { currentPageSetup } from "@/lib/pagination";

export async function generateMetadata({ params, searchParams }) {
    const category: string = params.category;
    const catInfo = await getCategoryInfo(category);
    return { title: catInfo.data[0].attributes.title };
}

export default async function Category({
    params,
    searchParams,
}: {
    params: { category: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const currentPage = currentPageSetup(searchParams);
    const category: string = params.category;
    const catInfo = await getCategoryInfo(category);
    const catNotes = await getCategoryNotes(category, currentPage);
    const categories = await getCategories();
    const postData = catNotes.data[0];
    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <NoteHeading category={catInfo.data[0]} />
            <NoteNav
                categories={categories}
                results={catNotes.meta.pagination.total}
            />
            <div className="grid gap-2 md:grid-cols-2 h-j min-h-[20vh]">
                {catNotes.data.map((note, i) => (
                    <Link key={note.id} href={"/note/" + note.attributes.slug}>
                        <SingleNote note={note} i={i} />
                    </Link>
                ))}
            </div>
            {/* <Pages meta={catNotes.meta} page={currentPage} /> */}
        </div>
    );
}

async function getCategoryNotes(slug: string, page: string | number) {
    // const URL =
    //     "https://cms.jkdelara.com/api/posts?filters[categories][slug][$eq]=" +
    //     slug +
    //     "&populate=*&sort=publishedAt:desc&pagination[pageSize]=10&pagination[page]=" +
    //     page;
    const URL =
        "https://cms.jkdelara.com/api/posts?filters[categories][slug][$eq]=" +
        slug +
        "&populate=*&sort=publishedAt:desc";
    // console.log(URL)
    const res = await fetch(URL, { cache: "no-store" });
    return res.json();
}
async function getCategoryInfo(slug: string) {
    const URL =
        "https://cms.jkdelara.com/api/categories?filters[slug][$eq]=" +
        slug +
        "&populate=*";
    // console.log(URL)
    const res = await fetch(URL, { cache: "no-store" });
    return res.json();
}
async function getCategories() {
    const res = await fetch(
        "https://cms.jkdelara.com/api/categories?populate=*",
        { cache: "no-store" }
    );
    return res.json();
}
