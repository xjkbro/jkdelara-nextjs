import Link from "next/link"
import NoteHeading from "./NoteHeading";
import NoteNav from "./NoteNav";
import SingleNote from "./singleNote";
export default async function Notes() {
    const notes = await getNotes();
    const categories = await getCategories();
  return (
    <>
    <NoteHeading category={null} />
    <NoteNav categories={categories} results={notes.meta.pagination.total}/>
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
    const res = await fetch('https://cms.jsondelara.com/api/posts?populate=*', {next: {revalidate: 120}})
    return res.json();
}

async function getCategories() {
    const res = await fetch('https://cms.jsondelara.com/api/categories?populate=*', {next: {revalidate: 120}})
    return res.json();
}