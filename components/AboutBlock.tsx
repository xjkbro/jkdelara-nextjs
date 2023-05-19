"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutBlock() {
    return (
        <motion.section
            initial={{ opacity: 0, translateY: 25 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            exit={{ opacity: 0, translateY: 50 }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-full bottom-0 left-0 overflow-hidden leading-none ">
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
            <div className="z-[5] flex flex-col items-center mx-auto md:justify-between h-fit py-12 px-2 md:px-8 lg:flex-row bg-white dark:bg-second">
                <div className="flex flex-wrap items-center justify-between mx-auto md:w-3/4">
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
                                PHP/Laravel
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                TailwindCSS
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                Node.js
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                AWS
                            </li>
                            <li className="before:content-['\00BB'] before:mr-1">
                                Astro
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 hidden w-full md:w-96 md:order-2 md:block">
                        <div
                            id="home-avatar"
                            className="mx-auto my-8 w-[300px] h-[300px] rounded-full p-2 outline outline-4 shadow-md outline-eighth"
                        >
                            <Image
                                className="mx-auto bg-transparent rounded-full w-[300px] h-[300px]"
                                src="/feature.png"
                                priority
                                width={300}
                                height={300}
                                alt="Photo of Jason Kyle De Lara"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full top-0 left-0 overflow-hidden leading-none ">
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
        </motion.section>
    );
}
