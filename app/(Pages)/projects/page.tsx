import SingleProject from "./project";

export const metadata = { title: "Projects" };

export default async function Projects() {
    const projects = await getProjects();
    // Sort response in descending order by start date
    projects.data.sort((project1, project2) =>
        project1.attributes.started < project2.attributes.started
            ? 1
            : project1.attributes.started > project2.attributes.started
            ? -1
            : 0
    );

    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <div className="mb-8 pb-16 px-6 mx-auto max-w-screen-xl ">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {projects.data.map((project, i) => (
                        <SingleProject
                            key={project.id}
                            project={project}
                            i={i}
                        />
                    ))}
                </div>
            </div>
        </div>
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
    // const res = await fetch('https://cms.jkdelara.com/api/projects?populate=*')
    const res = await fetch(
        "https://cms.jkdelara.com/api/projects?fields[0]=name&fields[1]=description&fields[3]=title&fields[3]=slug&fields[4]=started&populate[links]=*&populate[technologies][fields][0]=name&populate[image][fields][0]=url&sort=publishedAt:desc",
        { next: { revalidate: 120 } }
    );
    return res.json();
}
