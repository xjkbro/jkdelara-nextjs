import useSWR from "swr";
import { registerView } from "@/pages/api/strapi/viewCounter";
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
    registerView(slug)
    return (
        <>
            <div className="flex justify-between mx-auto mb-2 prose border-b dark:prose-invert">
                <div>Publish On {new Date(postData.attributes.publishedAt).toDateString()}</div>
                <div>{postData.attributes.views} views</div>
            </div>
            <div className="mx-auto prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: postData.attributes.body }} />
        </>
    )
}

async function getNote(slug: string) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]=" + slug +"&populate=*";
    // console.log(URL)
    const res = await fetch(URL, { cache: 'no-store' } )
    return res.json();
}