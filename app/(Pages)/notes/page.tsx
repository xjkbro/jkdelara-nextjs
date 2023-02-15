import Link from "next/link"
export default async function Notes() {
    const notes = await getNotes();
    // console.log(notes.data);
  return (
    <>
    {notes.data.map((note) => (
        <Link key={note.id} href={"/notes/"+ note.attributes.slug}>
            <h3>{note.attributes.title}</h3>
        </Link>
    ))}</>
  )
}

async function getNotes() {
    const res = await fetch('https://cms.jsondelara.com/api/posts')
    return res.json();
}