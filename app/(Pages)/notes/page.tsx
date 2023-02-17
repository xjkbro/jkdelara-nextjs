import Link from "next/link"
import SingleNote from "./singleNote";
export default async function Notes() {
    const notes = await getNotes();
    // console.log(notes.data);
  return (
    <>
    <div className="grid gap-2 md:grid-cols-2">
        {notes.data.map((note) => (
            <Link
                className="animate-border rounded-xl bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r" 
                key={note.id} 
                href={"/notes/"+ note.attributes.slug}>
                <SingleNote note={note}/>
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