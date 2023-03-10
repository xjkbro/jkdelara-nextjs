"use client"
import { motion } from "framer-motion";

export default function SingleStory({ story , i }) {
    const regex = /(<([^>]+)>)/ig;
    const getDateRange = (story) => {
        const startDate = new Date(story.attributes.started);
        const start = startDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

        let end: Date | string = "Present";
        if (story.attributes.ended != null) {
            end = new Date(story.attributes.ended)
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
            className="py-4 mb-2 border-l-4 border-eighth">
            <div className="">
                {/* <span className="ml-2 text-lg font-bold">{story.attributes.title}</span> */}
                <span className="text-lg font-bold md:ml-8">{story.attributes.name}</span>
                <span className="block text-sm md:inline md:ml-2 dark:text-fourth text-third">{getDateRange(story)}</span>
            </div>
            <span className="mb-2 text-sm font-bold md:mx-8">{story.attributes.title}</span>
            {/* <span className="px-2 py-1 ml-2 text-sm rounded-full bg-eighth text-fifth">{story.attributes.title}</span> */}
            <p className="md:mx-8">{story.attributes.summary}</p>
        </motion.div>
    )
}


