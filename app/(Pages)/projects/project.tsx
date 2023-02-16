import Image from "next/image";
export default function SingleProject({project}) {
    const regex = /(<([^>]+)>)/ig;
    return (
        <div className="p-4 mb-2 transition-all border-2 rounded-xl border-third hover:bg-second">
        <div className="w-full h-[260px]">
            {/* <Image src={(!imgURL || imgURL == null ) ? "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" : imgURL} width={500} height={500} alt={project.attributes.name + " image"}/> */}
            {/* <Image src={project.attributes.image.data.attributes.url} alt={project.attributes.description.replace(regex,'').substring(0, 20)} width={500} height={500} /> */}
            <Image src="https://res.cloudinary.com/dryhha34v/image/upload/v1676571354/sbmc_959bdaca45.png" alt={project.attributes.description.replace(regex,'').substring(0, 20)} width={500} height={250} />
        
        </div>
        <div>
            <div className="">
                <span className="ml-8 text-lg font-bold">{project.attributes.name}</span>
                <span className="ml-2 text-sm text-fourth"></span>
            </div>
            <span className="mx-8 mb-2 text-sm font-bold">{project.attributes.title}</span>
            <p className="mx-8">{project.attributes.description.replace(regex,'').substring(0, 120)}...</p>
        </div>
    </div>
  )
}

