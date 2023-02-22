import Link from "next/link"
import NoteNav from "./NoteNav";
import SingleNote from "./singleNote";
export default async function Notes() {
    const notes = await getNotes();
    const categories = await getCategoryInfo();
    // console.log(notes.data);
  return (
    <>
    <div className="flex justify-between mb-4 items-end">
        <div className="">
            <h1 className="text-[2rem] font-bold">Notes</h1>
            <p className="text-sm">This is a blog about coding, food journeys, and other writings by Jason-Kyle De Lara.</p>
        </div>
        {/* <div>{categories.meta.pagination.total} results found</div> */}
    </div>
    <NoteNav categories={categories}/>
    <div className="grid gap-2 md:grid-cols-2 h-j min-h-[20vh]">
        {notes.data.map((note, i) => (
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

async function getNotes() {
    const res = await fetch('https://cms.jsondelara.com/api/posts?populate=*', { cache: 'no-store' })
    return res.json();
}

async function getCategoryInfo() {
    const res = await fetch('https://cms.jsondelara.com/api/categories?populate=*', { cache: 'no-store' })
    return res.json();
}