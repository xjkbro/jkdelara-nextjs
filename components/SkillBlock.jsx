"use client";
import { motion } from "framer-motion";

const skills = [
    { type: "HTML", level: 90 },
    { type: "CSS/Tailwind", level: 80 },
    { type: "Javascript", level: 85 },
    { type: "React/NextJS", level: 55 },
    { type: "PHP", level: 50 },
    { type: "NodeJS", level: 45 },
    { type: "Wordpress", level: 60 },
    { type: "MySQL/PostgreSQL", level: 75 },
];
export default function SkillBlock() {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, translateY: 25 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                exit={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.3 }}
                className="z-[5] flex flex-col items-center mx-auto md:justify-between h-fit py-12 px-2 md:px-8 lg:flex-row bg-fifth dark:bg-second"
            >
                <motion.div
                    initial={{ opacity: 0, translateY: 0, translateX: -20 }}
                    animate={{ opacity: 1, translateY: 0, translateX: -0 }}
                    exit={{ opacity: 0, translateY: 50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-wrap md:items-center justify-between w-11/12 mx-auto md:w-3/4"
                >
                    <h3 className="text-[2rem] md:text-[3rem] font-black">
                        What
                    </h3>
                    <p className="my-4 font-light md:text-center font-notosans md:w-3/4 tmx-auto">
                        My primary goal is to bring your ideas to reality on
                        time and on budget. I offer a wide variety of
                        development. A landing page, web application, Wordpress
                        site, blog, you name it, I will make your dream ideas
                        come true.
                    </p>
                    {/* <p className="w-3/4 mx-auto my-4 font-light text-center font-notosans">
                        Here is a list of my skills.
                    </p> */}
                    <div className="w-full">
                        <div className="mx-auto ">
                            {skills.map((skill, i) => (
                                <motion.div
                                    initial={{ opacity: 0, translateY: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        translateY: 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.2 * i,
                                    }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    className="flex w-full md:py-1"
                                    key={i}
                                >
                                    <div className="flex items-center justify-between w-full h-8 px-2 overflow-hidden font-mono text-xs rounded-l-sm md:w-1/6 md:justify-start">
                                        {skill.type}{" "}
                                        <span className="block text-sm font-light md:hidden">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 * i,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.8,
                                        }}
                                        className="hidden w-5/6 h-8 md:block"
                                    >
                                        <motion.div
                                            initial={{
                                                width: "0%",
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                width: `${skill.level}%`,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.2 * i,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.8,
                                            }}
                                            className="flex items-center justify-end h-8 pr-2 text-sm font-light bg-transparent border-2 rounded-r-lg border-nineth"
                                        >
                                            {skill.level}%
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
