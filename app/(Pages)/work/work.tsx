"use client"
import { motion } from "framer-motion";

export default function SingleWork({ work , i }) {
    const regex = /(<([^>]+)>)/ig;
    const getDateRange = (work) => {
        const startDate = new Date(work.attributes.started);
        const start = startDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

        let end: Date | string = "Present";
        if (work.attributes.ended != null) {
            end = new Date(work.attributes.ended)
            end = end.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        }
        return "From " + start + " to " + end

    }
    
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <motion.div 
            initial={{
                opacity: 0,
                translateY: 50
            }}
            animate={{opacity:1, translateY:0}}
            transition={{duration: 0.5, delay: i * 0.2}}
            className="p-4 mb-2">
            <div className="">
                {/* <span className="ml-2 text-lg font-bold">{work.attributes.title}</span> */}
                <span className="text-lg font-bold md:ml-8">{work.attributes.name}</span>
                <span className="block text-sm md:inline md:ml-2 dark:text-fourth text-third">{getDateRange(work)}</span>
            </div>
            <span className="mb-2 text-sm font-bold md:mx-8">{work.attributes.title}</span>
            {/* <span className="px-2 py-1 ml-2 text-sm rounded-full bg-eighth text-fifth">{work.attributes.title}</span> */}
            <p className="md:mx-8">{work.attributes.summary}</p>
        </motion.div>
    )
}


