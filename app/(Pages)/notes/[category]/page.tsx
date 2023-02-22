import Link from "next/link";
import NoteHeading from "../NoteHeading";
import NoteNav from "../NoteNav";
import SingleNote from "../singleNote";

export default async function Category({ params, searchParams }:
    {
        params: { category: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    }
) {
    const category: string = params.category;
    const catInfo = await getCategoryInfo(category);
    const catNotes = await getCategoryNotes(category);
    const categories = await getCategories();
    const postData = catNotes.data[0]
    return (
        <>
        
        <NoteHeading category={catInfo.data[0]}/>
        <NoteNav categories={categories} results={catInfo.meta.pagination.total} />
        <div className="grid gap-2 md:grid-cols-2 h-j min-h-[20vh]">
        {catNotes.data.map((note, i) => (
            <Link
                key={note.id} 
                href={"/note/"+ note.attributes.slug}>
                <SingleNote note={note} i={i}/>
            </Link>
        ))}
    </div>
        </>
    )
}

async function getCategoryNotes(slug: string) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[categories][slug][$eq]=" + slug +"&populate=*";
    // console.log(URL)
    const res = await fetch(URL, { cache: 'no-store' } )
    return res.json();
}
async function getCategoryInfo(slug: string) {
    const URL = "https://cms.jsondelara.com/api/categories?filters[slug][$eq]=" + slug +"&populate=*";
    // console.log(URL)
    const res = await fetch(URL, { cache: 'no-store' } )
    return res.json();
}
async function getCategories() {
    const res = await fetch('https://cms.jsondelara.com/api/categories?populate=*', { cache: 'no-store' })
    return res.json();
}