"use client"
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion"
export default function SingleProject({ project , option = 1 , i  }) {
    const regex = /(<([^>]+)>)/ig;
    switch(option){
        case 1: 
            return (
                <Link href={"/projects/" + project.attributes.slug} className="p-4 mb-2 transition-all border-2 rounded-xl dark:border-third border-fourth hover:bg-sixth dark:hover:bg-second">
                {/* <Link href={"/projects/" + project.attributes.slug} className="animate-border rounded-xl bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r"> */}
                    <div className="transition-all rounded-[11px] h-full">
                        <div className="w-full h-[260px]">
                            <Image src={project?.attributes?.image?.data?.attributes?.url} alt={project.attributes.name} width={500} height={250} className="ounded-[11px]" />
                        </div><div className="m-2 md:m-0">
                            <div className="md:ml-2">
                                <span className="text-lg font-bold ">{project.attributes.name}</span>
                                <span className="ml-2 text-sm text-fourth"></span>
                            </div>
                            <div className="md:mx-4">
                                <span className="mb-2 text-sm font-bold">{project.attributes.title}</span>
                                <p className="">{project.attributes.description.replace(regex, '').substring(0, 120)}...</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        case 2: 
            return (
                <Link href={"/projects/" + project.attributes.slug} className="p-4 mb-2 transition-all hover:scale-[101%] ">
                    <div className="transition-all rounded-[11px] h-full">
                        <div className="w-full h-[260px]">
                            <Image src={project?.attributes?.image?.data?.attributes?.url} alt={project.attributes.name} width={500} height={250} className="ounded-[11px]" />
                        </div>
                        <div className="flex flex-col justify-center mx-auto">
                            <span className="text-lg font-semibold text-center">{project.attributes.name}</span>
                            <span className="text-sm font-light text-center">{project.attributes.title}</span>  
                        </div>
                    </div>
                </Link>
            )
        case 3: 
            return (
                <motion.div 
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{opacity:1, translateY:0}}
                    transition={{duration: 0.3, delay: i * 0.1}}>
                    <Link href={"/projects/" + project.attributes.slug} className="p-4 mb-2 transition-all hover:scale-[101%] ">
                        <div className="transition-all rounded-[11px] h-full">
                            <div className="w-full h-[260px] ">
                                <Image src={project?.attributes?.image?.data?.attributes?.url} alt={project.attributes.name} width={500} height={250} className="ounded-[11px]" />
                            </div>
                            <div className="flex flex-col justify-center mx-auto">
                                {/* <span className="text-lg font-semibold text-center">{project.attributes.name}</span> */}
                                <span className="text-sm font-light text-center">{project.attributes.title}</span>  
                            </div>
                        </div>
                    </Link>
                </motion.div>
            )
        default: return (<></>)
    }
    return (
        <Link href={"/projects/" + project.attributes.slug} className="p-4 mb-2 transition-all hover:scale-[101%] ">
        {/* <Link href={"/projects/" + project.attributes.slug} className="p-4 mb-2 transition-all border-2 rounded-xl dark:border-third border-fourth hover:bg-sixth dark:hover:bg-second"> */}
        {/* <Link href={"/projects/" + project.attributes.slug} className="animate-border rounded-xl bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r"> */}
            <div className="transition-all rounded-[11px] h-full">
                <div className="w-full h-[260px]">
                    <Image src={project?.attributes?.image?.data?.attributes?.url} alt={project.attributes.name} width={500} height={250} className="ounded-[11px]" />
                </div>
                <div className="flex flex-col justify-center mx-auto">
                    <span className="text-lg font-semibold text-center">{project.attributes.name}</span>
                    <span className="text-sm font-light text-center">{project.attributes.title}</span>  
                </div>
                {/* <div className="m-2 md:m-0">
                    <div className="md:ml-2">
                        <span className="text-lg font-bold ">{project.attributes.name}</span>
                        <span className="ml-2 text-sm text-fourth"></span>
                    </div>
                    <div className="md:mx-4">
                        <span className="mb-2 text-sm font-bold">{project.attributes.title}</span>
                        <p className="">{project.attributes.description.replace(regex, '').substring(0, 120)}...</p>
                    </div>
                </div> */}
            </div>
        </Link>
    )
}

