import SingleProject from "./project";

export const metadata = { title: "Projects" };

export default async function Projects() {
    const projects = await getProjects();
    // Sort response in decending order by start date
    projects.data.sort((project1, project2) =>
        project1.attributes.started < project2.attributes.started
            ? 1
            : project1.attributes.started > project2.attributes.started
            ? -1
            : 0
    );
    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <div
                id="project-system"
                className="grid grid-cols-1 gap-4 lg:grid-cols-3"
            >
                {projects.data.map((project, i) => (
                    <SingleProject key={project.id} project={project} i={i} />
                ))}
            </div>
        </div>
    );
}

async function getProjects() {
    // const res = await fetch('https://cms.jsondelara.com/api/projects?populate=*')
    const res = await fetch(
        "https://cms.jsondelara.com/api/projects?fields[0]=name&fields[1]=description&fields[3]=title&fields[3]=slug&fields[4]=started&populate[links]=*&populate[technologies][fields][0]=name&populate[image][fields][0]=url",
        { next: { revalidate: 120 } }
    );
    return res.json();
}
