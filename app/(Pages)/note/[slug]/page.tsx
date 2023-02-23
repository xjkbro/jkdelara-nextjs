import useSWR from "swr";
import { registerView } from "@/pages/api/strapi/viewCounter";
import Image from "next/image";
import Link from "next/link";
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
    console.log(postData)
    registerView(slug)
    return (
        <>
        <div className="mx-auto prose dark:prose-invert">
            {(postData?.attributes?.feature?.data?.attributes?.url) ? <Image src={postData?.attributes?.feature?.data?.attributes?.url} width={700} height={400} alt={postData.attributes.title}/>: <></>}
            <h1>{postData.attributes.title}</h1>
            <div className="flex mb-2">
                {postData?.attributes?.categories?.data.map((cat)=> {
                    return(<Link className="rounded-full !no-underline bg-eighth py-2 px-4 hover:bg-seventh" key={cat.id} href={"/notes/"+ cat.attributes.slug}>{cat.attributes.title}</Link>)
                })}
            </div>
            <div className="flex justify-between mb-2 border-b">
                <div>Published on {new Date(postData.attributes.publishedAt).toDateString()}</div>
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
    const res = await fetch(URL, {cache: 'no-store'})
    // const res = await fetch(URL,{ next: { revalidate: 60 } })
    return res.json();
}