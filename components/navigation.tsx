// "use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon as MoonOn} from "@fortawesome/free-solid-svg-icons";
import {faMoon as MoonOff}  from "@fortawesome/free-regular-svg-icons";
import {faBars}  from "@fortawesome/free-solid-svg-icons";
import {faX}  from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Navigation({isDark, setIsDark, overlay, setOverlay}) {
    return (
        <>
            <nav className="flex-row items-center justify-between hidden my-8 md:flex">
                <ul className="flex flex-row overflow-scroll md:overflow-auto gap-x-8 md:gap-12">
                    <li className="text-xl font-light hover:text-sixth"><a href="/"><Image src="/favicon/android-chrome-192x192.png" width={30} height={30} alt='Logo'/></a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/dashboard">Dashboard</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/work">Work</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/projects">Projects</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/notes">Notes</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/arts">Arts</a></li>
                </ul>
                <button className="hidden w-8 h-8 border-2 rounded-full shadow-md md:block" onClick={() => setIsDark(!isDark)}>{isDark ? <FontAwesomeIcon icon={MoonOn}/> : <FontAwesomeIcon icon={MoonOff}/>}</button>
            </nav>
            <nav className="flex justify-between my-8 md:hidden">
                <a href="/"><Image src="/favicon/android-chrome-192x192.png" width={50} height={50} alt='Logo'/></a>
                {/* <button className="w-8 h-8 border-2 rounded-full shadow-md md:block" onClick={() => setIsDark(!isDark)}>{isDark ? <FontAwesomeIcon icon={MoonOn}/> : <FontAwesomeIcon icon={MoonOff}/>}</button> */}
                <button className="w-12 h-12 border-2 rounded-lg shadow-md border-second md:block" onClick={()=> setOverlay(!overlay)}> <FontAwesomeIcon className="text-white" icon={faBars}/> </button>
            </nav>
            <div className={(overlay) ? ("flex absolute top-0 left-0 flex justify-center w-screen h-screen dark:bg-first bg-nineth z-2 align-center") : ("hidden absolute top-0 left-0 flex justify-center w-screen h-screen dark:bg-first bg-nineth z-2 align-center")}>
                <ul className="flex flex-col justify-center text-center gap-x-8 md:gap-12">
                    <li className="flex justify-center mb-4 text-xl font-light hover:text-sixth"><a href="/"><Image className="" src="/favicon/android-chrome-192x192.png" width={30} height={30} alt='Logo'/></a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/dashboard">Dashboard</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/work">Work</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/projects">Projects</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/notes">Notes</a></li>
                    <li className="text-xl font-light hover:text-sixth"><a href="/arts">Arts</a></li>
                    <li className="my-2 mt-12"><button className="w-8 h-8 border-2 rounded-full shadow-md md:block" onClick={() => setIsDark(!isDark)}>{isDark ? <FontAwesomeIcon icon={MoonOn}/> : <FontAwesomeIcon icon={MoonOff}/>}</button></li>
                    <li className="my-2"><button className="w-8 h-8 md:block" onClick={() => setOverlay(false)}><FontAwesomeIcon icon={faX}/></button></li>
                </ul>
            </div>
        </>
    )
  }
  