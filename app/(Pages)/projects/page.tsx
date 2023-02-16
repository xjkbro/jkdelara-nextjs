import SingleProject from "./project";
export default async function Projects() {
    const projects = await getProjects();
    // Sort response in decending order by start date
  return (
    <>
    <div className="">
        {projects.data.map((project) => (
            <SingleProject key={project.id} project={project}/>
        ))}
    </div>
    </>
  )
}

async function getProjects() {
    const res = await fetch('https://cms.jsondelara.com/api/projects?populate=*')
    return res.json();
}