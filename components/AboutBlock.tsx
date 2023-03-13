"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutBlock() {
    const text = "Hello, I'm Jason and I like to create things. With the help of VS Code, Chrome, and a scoop of preworkout, I help transform businesses ideas into tangible full scale application. Let's build something together! =)"
    const text2 = [`Hello! My name is Jason! I'm a creative, outgoing, goal oriented individual who is always looking for ways to improve. My programming journey started back in middle school where I learned HTML from an elective course and was exposed to CSS due to a social media platform named GaiaOnline. On that platform, users were abled to customize their profiles by using CSS. I later took a halt in learning web development to learn a different beast in high school, Java. In high school, I had the opportunity to learn Java from my Computer Science I and AP courses. But with the knowledge, I found myself uninterested in subject because my initial thought about it as a career was "I don't want to have an office job where I would sit down all day." So I took on a different beast, Computer Engineering when I entered college.`, `Many challenges and sacrifices needed to be made and I had to find a new major. I fortunately found many reasons to come back to Computer Science, one of which was video game development and because of it I began tackling algorithms, theories and concepts. My studies in Web Development picked back up when I lost interest in wanting to develop video games and learning software development. I found more joy creating websites and seeing everything visually come together in web development. From there, I graduated College and took on a bootcamp where I learned more concepts and technologies in web development that helped provided the skills I need to deploy real world applications and start many big projects with front end technologies, backend technologies and deployment.`, `Besides programming, I enjoy going to the gym and being active by playing basketball, volleyball or hiking. I also enjoy taking care of aquatic life and aqua scaping.`]
    return (
        <>
            <div
                
                className="z-[5] flex flex-col items-center mx-auto md:justify-between h-fit py-12 px-8 lg:flex-row bg-sixth dark:bg-second -ml-[5%] -mr-[5%] md:-ml-[25%] md:-mr-[25%]"
            >
                <motion.div 
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: 50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap items-center justify-between mx-auto md:w-3/4"
                >
                    <div className="order-2 w-full md:w-1/2 md:order-1">
                        <h3 className="text-[2rem] md:text-[3rem] font-black">About</h3>
                        {/* {text2.map((p,i) =>  <p className="mb-1 text-sm md:text-normal md:text-justify" key={i}>{p}</p> )} */}
                        {text}
                    </div>
                    <div className="order-1 hidden w-full md:w-96 md:order-2 md:block">
                        <div
                            id="home-avatar"
                            className="mx-auto my-8 w-[300px] h-[300px]"
                        >
                            {/* <AnimatedBorder> */}
                                <Image
                                    className="mx-auto bg-transparent rounded-full"
                                    src="/feature.png"
                                    priority
                                    width={300}
                                    height={300}
                                    alt="Photo of Jason Kyle De Lara"
                                />
                            {/* </AnimatedBorder> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

function AnimatedBorder({ children }) {
    return (
        <div className="animate-border rounded-full h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r">
            <div className="w-full h-full transition-all rounded-full dark:bg-second bg-fifth">
                {children}
            </div>
        </div>
    );
}
