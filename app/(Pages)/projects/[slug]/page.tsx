import useSWR from "swr";
import Image from "next/image";
import type { Metadata } from "next";
import { updateView } from "@/lib/views";
import Link from "next/link";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const note = await getProjectMetaData(params?.slug);
    const img = note?.data[0]?.attributes?.image?.data?.attributes?.url
        ? note?.data[0]?.attributes?.image?.data?.attributes?.url
        : "";

    return {
        title: note?.data[0]?.attributes?.name,
        description: note?.data[0]?.attributes?.title,
        twitter: {
            card: "summary_large_image",
            title: note?.data[0]?.attributes?.name,
            description: note?.data[0]?.attributes?.title,
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
    const res = await getProject(slug);
    const views = await updateView("projects", slug);

    const project = res.data[0];
    return (
        <article className="w-[90vw] md:w-2/3 mx-auto mb-12">
            <Image
                src={project?.attributes?.image?.data?.attributes?.url}
                width={800}
                height={800}
                className="object-contain object-top w-full md:h-[50vh] mb-4"
                alt={project.attributes.title}
            />
            <div
                id="feature-image"
                className="mx-auto font-thin prose dark:prose-invert"
            >
                <h1 className="">
                    {project.attributes.title}
                    <span className="text-sm align-middle ml-2 font-light dark:text-fourth text-third">
                        {views} views
                    </span>
                </h1>
                <ul className="flex flex-wrap gap-1 list-none pl-0">
                    {project.attributes.technologies.data.map((tech) => (
                        <li
                            className="px-4 py-2 mr-1 text-sm font-semibold text-white rounded-full whitespace-nowrap dark:text-white bg-seventh"
                            key={tech.id}
                        >
                            {tech.attributes.name}
                        </li>
                    ))}
                </ul>
                <div
                    className=""
                    dangerouslySetInnerHTML={{
                        __html: project.attributes.description,
                    }}
                />
                <h2>Links</h2>
                {project.attributes.links.map((source) => (
                    <Link className="mr-4" key={source.id} href={source.link}>
                        {source.name}
                    </Link>
                ))}
            </div>
        </article>
    );
}

async function getProject(slug: string) {
    const URL =
        "https://cms.jkdelara.com/api/projects?filters[slug][$eq]=" +
        slug +
        "&fields[0]=name&fields[1]=description&fields[3]=title&fields[3]=slug&populate[links]=*&populate[technologies][fields][0]=name&populate[image][fields][0]=url";
    // const res = await fetch(URL, { next: { revalidate: 60 } })
    const res = await fetch(URL, { cache: "no-store" });

    return res.json();
}
async function getProjectMetaData(slug: string) {
    const URL =
        "https://cms.jkdelara.com/api/projects?filters[slug][$eq]=" +
        slug +
        "&fields[0]=name&fields[1]=description&fields[3]=title&populate[image][fields][0]=url";
    const res = await fetch(URL, { cache: "no-store" });
    return res.json();
}
