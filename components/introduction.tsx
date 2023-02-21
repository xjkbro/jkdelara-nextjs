"use client";
import {motion} from "framer-motion"
import Image from "next/image"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Introduction() {
  return (
    <>
        <motion.div drag 
            initial={{opacity: 0, translateY: 50}} 
            animate={{opacity: 1, translateY: 0}} 
            exit={{opacity: 0, translateY: 50}} 
            transition={{duration: 0.5}}
            className="z-[5] flex flex-col items-center mx-auto md:justify-between md:h-screen lg:flex-row">
            <div className="w-full mx-auto my-12 md:w-2/3" id="title">
                <h1 className="text-[2rem] md:text-[3rem] font-black">Jason-Kyle De Lara</h1>
                <h3 className="text-[1.3rem] md:text-[2rem] font-bold">Full Stack Web Developer at ICP DAS USA.</h3>
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="font-bold text-[1.5rem] bg-eighth hover:bg-seventh rounded-full p-2 w-24 text-center mt-2">
                    <a href="/resume2022b.pdf" download><FontAwesomeIcon icon={faAngleDoubleDown} className="mr-2" />CV</a>
                </motion.div>
            </div>
            <div id="home-avatar" className="w-full mx-auto my-12 md:w-1/3 h-1/3 " >
                <Image className="mx-auto bg-transparent rounded-full" src="/me.JPG" priority width={300} height={300} alt="Photo of Jason Kyle De Lara" />
            </div>
        </motion.div>
        {/* <div className="overflow-hidden z-[2] ">
            <motion.div 
                initial={{opacity: 0, rotate: -70, translateY: 50, scale: 1, translateX: -200}} 
                animate={{opacity: .3, rotate: 40, translateY: 0, scale: 2, translateX: 0}} 
                exit={{opacity: 0, translateY: 50}} 
                transition={{duration:1}}
                className="w-[30vw] h-[10vh] bg-seventh top-96 left-0 absolute">
            </motion.div>
            <motion.div 
                initial={{opacity: 0, rotate: -70, translateY: 100, scale: 1, translateX: 2200}} 
                animate={{opacity: .1, rotate: 40, translateY: -200, scale: 2, translateX: 1100}} 
                exit={{opacity: 0, translateY: 50}} 
                transition={{duration:1}}
                className="absolute left-0 w-64 h-64 rounded-full bg-seventh top-96">
            </motion.div>
        </div> */}
        
    </>
  )
}

