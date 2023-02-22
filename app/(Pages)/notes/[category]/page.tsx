import Link from "next/link";
import NoteNav from "../NoteNav";
import SingleNote from "../singleNote";

export default async function Category({ params, searchParams }) {
    console.log(params)
    const category: string = params.category;
    const catInfo = await getCategoryInfo(category);
    const catNotes = await getCategoryNotes(category);
    const postData = catNotes.data[0]
    console.log(catInfo)
    return (
        <>
        <div className="flex justify-between mb-4 items-end">
            <div className="">
                <h1 className="text-[2rem] font-bold">{catInfo.data[0]?.attributes?.title}</h1>
                <p className="text-sm">{catInfo.data[0]?.attributes?.description}</p>
            </div>
            {/* <div>{catInfo.meta.pagination.total} results found</div> */}
        </div>
        <NoteNav categories={catInfo} />
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