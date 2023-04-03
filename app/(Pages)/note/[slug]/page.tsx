import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import NutritionLabel from "../../../../components/NutritionLabel/NutritionLabel";
import type { Metadata } from "next";
import { updateView } from "@/lib/views";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const note = await getNoteMetaData(params?.slug);
    const img = note?.data[0]?.attributes?.feature?.data?.attributes?.url
        ? note?.data[0]?.attributes?.feature?.data?.attributes?.url
        : "";
    return {
        title: note?.data[0]?.attributes?.title,
        description: note?.data[0]?.attributes?.summary,
        twitter: {
            card: "summary_large_image",
            title: note?.data[0]?.attributes?.title,
            description: note?.data[0]?.attributes?.summary,
            creator: "@json_delara",
            creatorId: "1640890839705718784",
            images: [img],
        },
    };
}

export default async function Note({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const slug: string = params.slug;
    const note = await getNote(slug);
    const views = await updateView("notes", slug);
    const postData = note.data[0];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        author: {
            "@type": "Person",
            name: "Jason-Kyle De Lara",
            url: "https://jkdelara.com",
        },
        creator: {
            "@type": "Person",
            name: "Jason-Kyle De Lara",
            url: "https://jkdelara.com",
        },
        headline: postData.attributes.title,
        image: postData?.attributes?.feature?.data?.attributes?.url,
        url: `http://jkdelara.com/note/${slug}`,
        description: postData?.attributes?.summary,
        dateCreated: postData.attributes.createdAt,
        datePublished: postData.attributes.publishedAt,
        dateModified: postData.attributes.updatedAt,
        inLanguage: "en-US",
    };

    return (
        <>
            <article className="mx-auto prose dark:prose-invert w-[90vw] md:w-2/3">
                {/* Add JSON-LD to your page */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {postData?.attributes?.feature?.data?.attributes?.url ? (
                    <Image
                        src={
                            postData?.attributes?.feature?.data?.attributes?.url
                        }
                        width={700}
                        height={400}
                        priority
                        alt={postData.attributes.title}
                    />
                ) : (
                    <></>
                )}
                <h1>{postData.attributes.title}</h1>
                <div className="flex mb-2">
                    {postData?.attributes?.categories?.data.map((cat) => {
                        return (
                            <Link
                                className="rounded-full !no-underline bg-eighth py-2 px-4 text-white hover:bg-seventh"
                                key={cat.id}
                                href={"/notes/" + cat.attributes.slug}
                            >
                                {cat.attributes.title}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex justify-between mb-2 border-b">
                    <div>
                        Published on{" "}
                        {new Date(
                            postData.attributes.publishedAt
                        ).toDateString()}
                    </div>
                    <div>{views} views</div>
                </div>
                <div
                    className="font-thin dangerousHTML"
                    dangerouslySetInnerHTML={{
                        __html: postData.attributes.body,
                    }}
                />
            </article>
            <aside>
                {postData?.attributes?.categories?.data[0].attributes.slug ==
                    "recipe" && postData?.attributes?.custom != null ? (
                    <div className="flex justify-center lg:block xl:fixed lg:left-1/4 lg:top-1/2 lg:translate-y-[-50%] lg:translate-x-[-100%]">
                        <NutritionLabel
                            servingSize={
                                postData?.attributes?.custom?.servingSize
                            }
                            servingsPerContainer={
                                postData?.attributes?.custom
                                    ?.servingsPerContainer
                            }
                            calories={postData?.attributes?.custom?.calories}
                            totalFat={postData?.attributes?.custom?.totalFat}
                            saturatedFat={
                                postData?.attributes?.custom?.saturatedFat
                            }
                            transFat={postData?.attributes?.custom?.transFat}
                            cholesterol={
                                postData?.attributes?.custom?.cholesterol
                            }
                            sodium={postData?.attributes?.custom?.sodium}
                            totalCarbs={
                                postData?.attributes?.custom?.totalCarbs
                            }
                            dietaryFiber={
                                postData?.attributes?.custom?.dietaryFiber
                            }
                            sugars={postData?.attributes?.custom?.sugars}
                            protein={postData?.attributes?.custom?.protein}
                            vitaminA={postData?.attributes?.custom?.vitaminA}
                            vitaminC={postData?.attributes?.custom?.vitaminC}
                            calcium={postData?.attributes?.custom?.calcium}
                            iron={postData?.attributes?.custom?.iron}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </aside>
        </>
    );
}

async function getNote(slug: string) {
    const res = await fetch(
        `https://cms.jkdelara.com/api/posts?filters[slug][$eq]=${slug}&populate=*`,
        { cache: "no-store" }
    );
    return res.json();
}
async function getNoteMetaData(slug: string) {
    const URL = `https://cms.jkdelara.com/api/posts?filters[slug][$eq]=${slug}&fields[0]=title&fields[1]=summary&populate[feature][fields][0]=url`;
    const res = await fetch(URL, { cache: "no-store" });
    return res.json();
}
