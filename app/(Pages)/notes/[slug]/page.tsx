import Link from "next/link"
export default async function Notes(props) {
    const slug = props.params.slug
    const note = await getNote(slug);
    console.log(note);
    const postData = note.data[0]
  return (
    <>
    <div dangerouslySetInnerHTML={{ __html: postData.attributes.body }} />
    </>
  )
}

async function getNote(slug) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]="+slug;
    console.log(URL)
    const res = await fetch(URL)
    return res.json();
}