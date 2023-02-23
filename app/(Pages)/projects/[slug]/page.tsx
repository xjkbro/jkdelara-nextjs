import useSWR from "swr";
import Image from "next/image";
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
        <div id="feature-image" className="mx-auto prose dark:prose-invert">
            <Image src={project?.attributes?.image?.data?.attributes?.url} width={1000} height={1000} alt={project.attributes.title}/>
            <h1 className="">{project.attributes.title}</h1>
            <div className="flex flex-wrap gap-1">
                {project.attributes.technologies.data.map((tech)=>(
                    <span className="px-4 py-2 mr-1 text-sm font-semibold text-white rounded-full whitespace-nowrap dark:text-white bg-seventh" key={tech.id}>{tech.attributes.name}</span>
                    )
                )}
            </div>
            <div className="" dangerouslySetInnerHTML={{ __html: project.attributes.description }} />
            <h3>Links</h3>
            {project.attributes.links.map((source)=>(<a className="mr-4" key={source.id} href={source.link}>{source.name}</a>))}
        </div>
    )
}

async function getProject(slug: string) {
    const URL = "https://cms.jsondelara.com/api/projects?filters[slug][$eq]=" + slug + "&fields[0]=name&fields[1]=description&fields[3]=title&fields[3]=slug&populate[links]=*&populate[technologies][fields][0]=name&populate[image][fields][0]=url";
    // const res = await fetch(URL, { next: { revalidate: 60 } })
    const res = await fetch(URL, {cache: 'no-store'})

    return res.json();
}