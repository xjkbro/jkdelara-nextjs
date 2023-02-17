import useSWR from "swr";

export default async function Note(
    { params, searchParams }:
        {
            params: { slug: string };
            searchParams?: { [key: string]: string | string[] | undefined };
        }
) {
    const slug: string = params.slug;
    const note = await getNote(slug);
    const postData = note.data[0]
    return (
        <>
            <div className="prose-invert" dangerouslySetInnerHTML={{ __html: postData.attributes.body }} />
        </>
    )
}

async function getNote(slug: string) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]=" + slug;
    // console.log(URL)
    const res = await fetch(URL, { cache: 'no-store' } )
    return res.json();
}