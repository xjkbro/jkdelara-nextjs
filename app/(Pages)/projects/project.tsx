export default function SingleProject({project}) {
    const regex = /(<([^>]+)>)/ig;
    
  return (
    <div className="p-4 mb-2 transition-all border-2 rounded-full border-third hover:bg-second">
        <div className="">
            {/* <span className="ml-2 text-lg font-bold">{work.attributes.title}</span> */}
            <span className="ml-8 text-lg font-bold">{project.attributes.name}</span>
            <span className="ml-2 text-sm text-fourth"></span>
        </div>
        <span className="mx-8 mb-2 text-sm font-bold">{project.attributes.title}</span>
        {/* <span className="ml-2 px-2 py-1 text-sm rounded-full bg-eighth text-fifth">{work.attributes.title}</span> */}
        <p className="mx-8">{project.attributes.summary}</p>
    </div>
  )
}

