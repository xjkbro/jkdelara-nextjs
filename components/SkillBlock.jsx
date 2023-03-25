"use client";
import { motion } from "framer-motion";

const skills = [{ type: "javascript", level: 85 }];
export default function SkillBlock() {
    return (
        <>
            <div className="z-[5] flex flex-col items-center mx-auto md:justify-between h-fit py-12 px-8 lg:flex-row bg-fifth dark:bg-second">
                <motion.div
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap items-center justify-between mx-auto md:w-3/4"
                >
                    <div className="w-full  !transition-none">
                        <div className=" mx-auto ">
                            {skills.map((skill, i) => (
                                <div className="w-full flex py-1" key={i}>
                                    <div className="w-1/6 h-8 bg-nineth rounded-l-sm flex items-center justify-center">
                                        {skill.type}
                                    </div>
                                    <div className="w-5/6 h-8">
                                        <motion.div
                                            initial={{
                                                opacity: 1,
                                                width: "0%",
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                width: `${skill.level}%`,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                translateY: 50,
                                            }}
                                            transition={{ duration: 1 }}
                                            className="bg-eighth h-8 rounded-r-lg flex items-center justify-end pr-2"
                                        >
                                            {skill.level}%
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
