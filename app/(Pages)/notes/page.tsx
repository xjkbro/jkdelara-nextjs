import Link from "next/link"
import SingleNote from "./singleNote";
export default async function Notes() {
    const notes = await getNotes();
    // console.log(notes.data);
  return (
    <>
    <div className="grid grid-cols-2 gap-2">
        {notes.data.map((note) => (
            <Link key={note.id} href={"/notes/"+ note.attributes.slug}>
                <SingleNote note={note}/>
            </Link>
        ))}
    </div>
    </>
  )
}

async function getNotes() {
    const res = await fetch('https://cms.jsondelara.com/api/posts?populate=*')
    return res.json();
}