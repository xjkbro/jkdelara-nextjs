import SingleProject from "./project";
export default async function Projects() {
    const projects = await getProjects();
    // Sort response in decending order by start date
    return (
        <>
    <div id="project-system" className="grid grid-cols-3 gap-4">
        {projects.data.map((project) => (
            <SingleProject key={project.id} project={project}/>
        ))}
    </div>
    </>
  )
}

async function getProjects() {
    // const res = await fetch('https://cms.jsondelara.com/api/projects?populate=*')
    const res = await fetch('https://cms.jsondelara.com/api/projects?fields[0]=name&fields[1]=description&fields[3]=title&populate[links]=*&populate[technologies][fields][0]=name&populate[image][fields][0]=url',{ cache: 'no-store' })
    return res.json();
}