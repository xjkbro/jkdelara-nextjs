import Link from "next/link"
import SingleNote from "./singleNote";
export default async function Notes() {
    const notes = await getNotes();
    // console.log(notes.data);
  return (
    <>
    <div className="grid gap-2 md:grid-cols-2 h-j min-h-[20vh]">
        {notes.data.map((note, i) => (
            <Link
                key={note.id} 
                href={"/notes/"+ note.attributes.slug}>
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