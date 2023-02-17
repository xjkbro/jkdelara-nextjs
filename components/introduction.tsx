"use client";
import {motion} from "framer-motion"
import Image from "next/image"
export default function Introduction() {
  return (
    <>
        <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{
                hidden: {
                    scale: .95,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                    duration: .4
                    }
                },
            }} className="flex flex-col items-center mx-auto md:justify-between md:h-screen lg:flex-row">
            <div className="w-full mx-auto my-12 md:w-2/3" id="title">
                <h1 className="text-[2rem] md:text-[3rem] font-black">Jason-Kyle De Lara</h1>
                <h3 className="text-[1.3rem] md:text-[2rem] font-bold">Full Stack Web Developer at ICP DAS USA.</h3>
            </div>
            <div id="home-avatar" className="w-full mx-auto my-12 md:w-1/3 h-1/3 " >
                <Image className="bg-transparent rounded-full mx-auto" src="/me.JPG" priority width={300} height={300} alt="Photo of Jason Kyle De Lara" />
            </div>
        </motion.div>
        
    </>
  )
}

