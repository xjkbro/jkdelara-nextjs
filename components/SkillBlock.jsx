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
        <motion.section
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            exit={{ opacity: 0, translateY: 50 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-full top-0 left-0 overflow-hidden leading-none rotate-180">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[101%] h-[150px]"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        className="dark:fill-second fill-white"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        className="dark:fill-second fill-white"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="dark:fill-second fill-white"
                    ></path>
                </svg>
            </div>
            <div className="z-[5] flex flex-col items-center mx-auto md:justify-between h-fit py-12 px-2 md:px-8 lg:flex-row bg-white dark:bg-second">
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
            </div>
            <div className="w-full top-0 left-0 overflow-hidden leading-none rotate-180 ">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[101%] h-[150px]"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="dark:fill-second fill-white"
                    ></path>
                </svg>
            </div>
        </motion.section>
    );
}
