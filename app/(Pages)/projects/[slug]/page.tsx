import useSWR from "swr";
import Image from "next/image";

import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
    const note = await getProjectMetaData(params?.slug);
    return {
        title: note?.data[0]?.attributes?.name + " | Jason Kyle De Lara", description: note?.data[0]?.attributes?.title
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
    const res = await getProject(slug);
    const project = res.data[0]
    return (
            <div className="w-[90vw] md:w-2/3 mx-auto">
            <Image src={project?.attributes?.image?.data?.attributes?.url} width={1920} height={500} className="object-contain object-top w-full h-[50vh] mb-4" alt={project.attributes.title} />
                <div id="feature-image" className="mx-auto font-thin prose dark:prose-invert">
                    <h1 className="">{project.attributes.title}</h1>
                    <div className="flex flex-wrap gap-1">
                        {project.attributes.technologies.data.map((tech) => (
                            <span className="px-4 py-2 mr-1 text-sm font-semibold text-white rounded-full whitespace-nowrap dark:text-white bg-seventh" key={tech.id}>{tech.attributes.name}</span>
                        )
                        )}
                    </div>
                    <div className="" dangerouslySetInnerHTML={{ __html: project.attributes.description }} />
                    <h3>Links</h3>
                    {project.attributes.links.map((source) => (<a className="mr-4" key={source.id} href={source.link}>{source.name}</a>))}
                </div>
            </div>
    )
}

async function getProject(slug: string) {
    const URL = "https://cms.jsondelara.com/api/projects?filters[slug][$eq]=" + slug + "&fields[0]=name&fields[1]=description&fields[3]=title&fields[3]=slug&populate[links]=*&populate[technologies][fields][0]=name&populate[image][fields][0]=url";
    // const res = await fetch(URL, { next: { revalidate: 60 } })
    const res = await fetch(URL, { cache: 'no-store' })

    return res.json();
}
async function getProjectMetaData(slug: string) {
    const URL = "https://cms.jsondelara.com/api/projects?filters[slug][$eq]=" + slug + "&fields[0]=name&fields[1]=description&fields[3]=title";
    const res = await fetch(URL, { cache: 'no-store' })
    return res.json();
}