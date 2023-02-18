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
        <div className="mx-auto prose dark:prose-invert">
            
            <h1>{postData.attributes.title}</h1>
            <div className="flex justify-between mb-2 border-b">
                <div>Publish On {new Date(postData.attributes.publishedAt).toDateString()}</div>
                <div>{postData.attributes.views} views</div>
            </div>
            <div className="" dangerouslySetInnerHTML={{ __html: postData.attributes.body }} />
        </div>
        </>
    )
}

async function getNote(slug: string) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]=" + slug +"&populate=*";
    // console.log(URL)
    const res = await fetch(URL, { cache: 'no-store' } )
    return res.json();
}