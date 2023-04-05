"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutBlock() {
    // const text =
    //     "Hello, I'm Jason and I like to create things. With the help of VS Code, Chrome, and a scoop of preworkout, I help transform businesses ideas into tangible full scale application. Let's build something together! =)";
    // const text2 = [
    //     `Hello! My name is Jason! I'm a creative, outgoing, goal oriented individual who is always looking for ways to improve. My programming journey started back in middle school where I learned HTML from an elective course and was exposed to CSS due to a social media platform named GaiaOnline. On that platform, users were abled to customize their profiles by using CSS. I later took a halt in learning web development to learn a different beast in high school, Java. In high school, I had the opportunity to learn Java from my Computer Science I and AP courses. But with the knowledge, I found myself uninterested in subject because my initial thought about it as a career was "I don't want to have an office job where I would sit down all day." So I took on a different beast, Computer Engineering when I entered college.`,
    //     `Many challenges and sacrifices needed to be made and I had to find a new major. I fortunately found many reasons to come back to Computer Science, one of which was video game development and because of it I began tackling algorithms, theories and concepts. My studies in Web Development picked back up when I lost interest in wanting to develop video games and learning software development. I found more joy creating websites and seeing everything visually come together in web development. From there, I graduated College and took on a bootcamp where I learned more concepts and technologies in web development that helped provided the skills I need to deploy real world applications and start many big projects with front end technologies, backend technologies and deployment.`,
    //     `Besides programming, I enjoy going to the gym and being active by playing basketball, volleyball or hiking. I also enjoy taking care of aquatic life and aqua scaping.`,
    // ];
    // const text3 = [
    //     "Hello, my name is Jason-Kyle but I really go by Jason. I like to create things. Whether that be programs, apps, videos, food, gadgets, etc. I've always been a creative person with big ideas. I want to make an impact in the world and create something that will benefit many people.",
    //     "I started my coding journey at the age of 12 when I found out about a platform called GaiaOnline. A social media platform that catered to anime and video game lovers. They had great customization options for their profiles that gave me exposure to HTML and CSS.",
    //     "Today, I am fortunate enough to be working at ICP DAS USA as their web master. My main focus is to drive the company forward by bringing their ideas to real life with recent technologies. With the help of VS Code, Chrome, and a scoop of preworkout, I help transform businesses ideas into tangible full scale application. Let's build something together! =)",
    // ];
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, translateY: 25 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                exit={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.3 }}
                className="z-[5] flex flex-col items-center mx-auto md:justify-between h-fit py-12 px-2 md:px-8 lg:flex-row bg-white dark:bg-second"
            >
                <motion.div className="flex flex-wrap items-center justify-between mx-auto md:w-3/4">
                    <div className="order-2 w-full md:w-1/2 md:order-1">
                        <h3 className="text-[2rem] md:text-[3rem] font-black">
                            Who
                        </h3>
                        <p className="mb-2 font-light md:text-justify font-notosans">
                            Hello, my name is Jason-Kyle but I really go by
                            Jason. I like to create things. Whether that be
                            programs, apps, videos, food, gadgets, etc.
                            I&apos;ve always been a creative person with big
                            ideas. I want to make an impact in the world and
                            create something that will benefit many people.
                        </p>
                        <p className="mb-2 font-light md:text-justify font-notosans">
                            I started my coding journey at the age of 12 when I
                            found out about a platform called{" "}
                            <a
                                className="font-normal underline text-eighth"
                                href="https://www.gaiaonline.com/"
                            >
                                GaiaOnline
                            </a>
                            . A social media platform that catered to anime and
                            video game lovers. They had great customization
                            options for their profiles that gave me exposure to
                            HTML and CSS.
                        </p>
                        <p className="mb-2 font-light md:text-justify font-notosans">
                            Today, I am fortunate enough to be working at{" "}
                            <a
                                className="font-normal underline text-eighth"
                                href="https://www.icpdas-usa.com/"
                            >
                                ICP DAS USA
                            </a>{" "}
                            as their web master. My main focus is to drive the
                            company forward by bringing their ideas to real life
                            with recent technologies. With the help of VS Code,
                            Chrome, and a scoop of preworkout, I help transform
                            business ideas into tangible full scale
                            applications. Let&apos;s build something together!
                            😁
                        </p>
                        <p className="mb-2 font-light md:text-justify font-notosans">
                            Here are a few technologies I&apos;ve been working
                            with recently:
                        </p>
                        <ul className="grid grid-cols-2 font-mono text-sm font-light">
                            <li className="before:content-['\00BB'] before:mr-1">
                                Next.js
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                Typescript
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                Javascript/ES6+
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                PHP
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                Tailwind
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                Node.js
                            </li>
                        </ul>
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
            </motion.div>
        </section>
    );
}
