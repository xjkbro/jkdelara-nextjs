import useSWR from "swr";
import { registerView } from "@/pages/api/strapi/viewCounter";
import Image from "next/image";
import Link from "next/link";
import NutritionLabel from "../../../../components/NutritionLabel/NutritionLabel";
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
    const note = await getNoteMetaData(params?.slug);
    return {
        title: note?.data[0]?.attributes?.title + " | Jason Kyle De Lara", description: note?.data[0]?.attributes?.summary
    };
}

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
    // console.log(postData)
    registerView(slug)
    return (
        <>
            <div className="mx-auto prose dark:prose-invert">
                {(postData?.attributes?.feature?.data?.attributes?.url) ? <Image src={postData?.attributes?.feature?.data?.attributes?.url} width={700} height={400} alt={postData.attributes.title} /> : <></>}
                <h1>{postData.attributes.title}</h1>
                <div className="flex mb-2">
                    {postData?.attributes?.categories?.data.map((cat) => {
                        return (<Link className="rounded-full !no-underline bg-eighth py-2 px-4 text-white hover:bg-seventh" key={cat.id} href={"/notes/" + cat.attributes.slug}>{cat.attributes.title}</Link>)
                    })}
                </div>
                <div className="flex justify-between mb-2 border-b">
                    <div>Published on {new Date(postData.attributes.publishedAt).toDateString()}</div>
                    <div>{postData.attributes.views} views</div>
                </div>
                <div className="dangerousHTML" dangerouslySetInnerHTML={{ __html: postData.attributes.body }} />
            </div>
            <div>
                {postData?.attributes?.categories?.data[0].attributes.slug == 'recipe' && postData?.attributes?.custom != null ?
                    <div className="flex justify-center lg:block lg:fixed lg:left-1/4 lg:top-1/2 lg:translate-y-[-50%] lg:translate-x-[-100%]">
                        <NutritionLabel
                            servingSize={postData?.attributes?.custom?.servingSize}
                            servingsPerContainer={postData?.attributes?.custom?.servingsPerContainer}
                            calories={postData?.attributes?.custom?.calories}
                            totalFat={postData?.attributes?.custom?.totalFat}
                            saturatedFat={postData?.attributes?.custom?.saturatedFat}
                            transFat={postData?.attributes?.custom?.transFat}
                            cholesterol={postData?.attributes?.custom?.cholesterol}
                            sodium={postData?.attributes?.custom?.sodium}
                            totalCarbs={postData?.attributes?.custom?.totalCarbs}
                            dietaryFiber={postData?.attributes?.custom?.dietaryFiber}
                            sugars={postData?.attributes?.custom?.sugars}
                            protein={postData?.attributes?.custom?.protein}
                            vitaminA={postData?.attributes?.custom?.vitaminA}
                            vitaminC={postData?.attributes?.custom?.vitaminC}
                            calcium={postData?.attributes?.custom?.calcium}
                            iron={postData?.attributes?.custom?.iron}
                        />
                    </div> :
                    <></>}
            </div>

        </>
    )
}

async function getNote(slug: string) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]=" + slug + "&populate=*";
    // console.log(URL)
    const res = await fetch(URL, { cache: 'no-store' })
    // const res = await fetch(URL,{ next: { revalidate: 60 } })
    return res.json();
}
async function getNoteMetaData(slug: string) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]=" + slug + "&fields[0]=title&fields[1]=summary";
    const res = await fetch(URL, { cache: 'no-store' })
    return res.json();
}