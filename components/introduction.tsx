"use client";
import {motion} from "framer-motion"
import Image from "next/image"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Introduction() {
  return (
    <>
        <motion.div 
            initial={{opacity: 0, translateY: 50}} 
            animate={{opacity: 1, translateY: 0}} 
            exit={{opacity: 0, translateY: 50}} 
            transition={{duration: 0.5}}
            className="flex flex-col items-center mx-auto md:justify-between md:h-screen lg:flex-row">
            <div className="w-full mx-auto my-12 md:w-2/3" id="title">
                <h1 className="text-[2rem] md:text-[3rem] font-black">Jason-Kyle De Lara</h1>
                <h3 className="text-[1.3rem] md:text-[2rem] font-bold">Full Stack Web Developer at ICP DAS USA.</h3>
                <div className="font-bold text-[1.5rem] bg-eighth hover:bg-seventh rounded-full p-2 w-24 text-center mt-2">
                    <a href="/resume2022b.pdf" download><FontAwesomeIcon icon={faAngleDoubleDown} className="mr-2" />CV</a>
                </div>
            </div>
            <div id="home-avatar" className="w-full mx-auto my-12 md:w-1/3 h-1/3 " >
                <Image className="bg-transparent rounded-full mx-auto" src="/me.JPG" priority width={300} height={300} alt="Photo of Jason Kyle De Lara" />
            </div>
        </motion.div>
        
    </>
  )
}

