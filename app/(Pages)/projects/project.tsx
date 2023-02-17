import Link from "next/link";
import Image from "next/image";
export default function SingleProject({ project }) {
    const regex = /(<([^>]+)>)/ig;
    return (
        <Link href={"/projects/" + project.attributes.slug} className="p-4 mb-2 transition-all border-2 rounded-xl dark:border-third border-fourth hover:bg-second">
            <div className="w-full h-[260px]">
                <Image src={project?.attributes?.image?.data?.attributes?.url} alt={project.attributes.name} width={500} height={250} />
            </div>
            <div>
                <div className="md:ml-2">
                    <span className="text-lg font-bold ">{project.attributes.name}</span>
                    <span className="ml-2 text-sm text-fourth"></span>
                </div>
                <div className="md:mx-4">
                    <span className="mb-2 text-sm font-bold">{project.attributes.title}</span>
                    <p className="">{project.attributes.description.replace(regex, '').substring(0, 120)}...</p>
                </div>
            </div>
        </Link>
    )
}

