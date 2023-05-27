"use client";
import { motion } from "framer-motion";
import { skills } from "@/constants/skills";
import clsx from "clsx";
const service = [
    {
        title: "Web Applications",
        description:
            "I specialize in creating custom web applications using the latest JavaScript technologies. With a focus on delivering visually stunning interfaces and building robust back-end systems, I empower businesses in the digital era to achieve their goals.",
    },
    {
        title: "Responsive Design",
        description:
            "I offer a responsive design service that guarantees your website will look and function seamlessly on all devices. This ensures an optimal user experience and maximizes engagement with your audience.",
    },
    {
        title: "Business Oriented",
        description:
            "I leverage visual identity, SEO optimization, and business development techniques to promote your company, expand outreach, and effectively grow your brand. Together, we can enhance your online presence and achieve your business goals.",
    },
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
                    className=" w-11/12 mx-auto md:w-3/4"
                >
                    <h3 className="text-[2rem] md:text-[3rem] font-black">
                        What
                    </h3>
                    <p className="my-4 mb-8 font-light font-notosans">
                        My primary goal is to bring your ideas to life. On time
                        and on budget. I possess a wide variety of development
                        technologies to build with. A landing page, web
                        application, Wordpress site, blog, you name it, I will
                        make your dream ideas come true.
                    </p>

                    {/* <div className="my-4 grid md:grid-cols-3 gap-4">
                        {service.map((item, i) => (
                            <div key={i} className="">
                                <h4 className="font-bold text-xl">
                                    {item.title}
                                </h4>
                                <p className="font-light mt-2 text-justify text-md font-notosans">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div> */}
                    <div className=" my-8 font-mono font-light flex gap-2 justify-center flex-wrap">
                        {skills.map((item) => {
                            const level = item.level - 115;
                            return (
                                <div
                                    key={item.type}
                                    className="w-32 h-32 bg-third rounded-full flex items-center justify-center relative overflow-hidden"
                                >
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            translateY: 115,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            translateY: -level,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 30,
                                            duration: 1,
                                            delay: 0.7,
                                        }}
                                        className="w-32 h-32  bg-eighth"
                                    ></motion.div>
                                    <div
                                        className="w-32 h-32 z-10 flex items-center justify-center text-sm absolute text-white"
                                        title={`My knowledge on ${item.type} is around ${item.level}%`}
                                    >
                                        <div>
                                            {item.type}
                                            <hr />
                                            {item.level}%
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className="w-full">
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
                    </div> */}
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
