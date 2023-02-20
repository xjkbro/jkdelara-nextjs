// "use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon as MoonOn} from "@fortawesome/free-solid-svg-icons";
import {faMoon as MoonOff}  from "@fortawesome/free-regular-svg-icons";
import {faBars}  from "@fortawesome/free-solid-svg-icons";
import {faX}  from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import {usePathname} from "next/navigation"
import Link from "next/link";

const navItems = {
    '/dashboard': {
      name: 'Dashboard',
    },
    '/work': {
        name: 'Work',
    },
    '/projects': {
        name: 'Projects',
    },
    '/notes': {
      name: 'Notes',
    },
    '/arts': {
        name: 'Art',
    },
  };

export default function Navigation({isDark, setIsDark, overlay, setOverlay}) {
    let pathname = usePathname() || '/';
    if (pathname.includes('/notes/')) {
        pathname = '/notes';
    }
    if (pathname.includes('/projects/')) {
        pathname = '/projects';
    }
    return (
        <>
            <DesktopNav  isDark={isDark} setIsDark={setIsDark} pathname={pathname} />
            <MobileNav  isDark={isDark} setIsDark={setIsDark} overlay={overlay} setOverlay={setOverlay} pathname={pathname} />
        </>
    )
  }
  
function DesktopNav({isDark, setIsDark, pathname}){
    return(
        <nav className="flex-row items-center justify-between hidden my-8 md:flex">
            <ul className="flex flex-row overflow-scroll md:overflow-auto gap-x-8 md:gap-12">
                <motion.li
                    initial={{ width:"0%", }}
                    animate={{ width:"100%"}}
                    transition={{ duration: 0.7 }}
                    className="text-xl font-light hover:text-sixth">
                    <a href="/">
                        <Image src="/favicon/android-chrome-192x192.png" width={30} height={30} alt='Logo'/>
                    </a>
                </motion.li>
                {
                    Object.entries(navItems).map(([path, { name }]) => {
                    const isActive = path === pathname;
                    return (<><li className={clsx("text-xl font-light hover:text-sixth",{ 'text-sixth': isActive,})}><Link href={path}>{name}</Link></li></>);
                    }
                )}
                 {/* <li className="text-xl font-light hover:text-sixth"><a href="/dashboard">Dashboard</a></li>
                 <li className="text-xl font-light hover:text-sixth"><a href="/work">Work</a></li>
                 <li className="text-xl font-light hover:text-sixth"><a href="/projects">Projects</a></li>
                 <li className="text-xl font-light hover:text-sixth"><a href="/notes">Notes</a></li>
                 <li className="text-xl font-light hover:text-sixth"><a href="/arts">Arts</a></li> */}
            </ul>
            <button className="hidden w-8 h-8 border-2 rounded-full shadow-md md:block" onClick={() => setIsDark(!isDark)}>{isDark ? <FontAwesomeIcon icon={MoonOn}/> : <FontAwesomeIcon icon={MoonOff}/>}</button>
        </nav>
    )
}
function MobileNav({isDark, setIsDark, overlay, setOverlay, pathname}){
    return(
        <>
            <nav className="flex justify-between my-8 md:hidden">
                <motion.a 
                    initial={{ width:"0%", }}
                    animate={{ width:"100%"}}
                    transition={{ duration: 1.5 }}
                    href="/"
                >
                    <Image src="/favicon/android-chrome-192x192.png" width={50} height={50} alt='Logo'/>
                </motion.a>
                <button className="md:block" onClick={()=> setOverlay(!overlay)}> <FontAwesomeIcon className="dark:text-white h-8 w-8" icon={faBars}/> </button>
            </nav>
            <AnimatePresence>
                {overlay && (<motion.div 
                    initial={{ width:"0%", }}
                    animate={{ width:"100%"}}
                    exit={{ width: "0%" }}
                    transition={{ duration: 0.5 }}
                    className={(overlay) ? ("flex fixed top-0 left-0 justify-center w-screen h-screen dark:bg-first bg-nineth z-2 align-center") : ("")}>
                    <ul className="flex flex-col justify-center text-center gap-x-8 md:gap-12">
                        <li className="flex justify-center mb-4 text-xl font-light hover:text-sixth"><a href="/"><Image className="" src="/favicon/android-chrome-192x192.png" width={30} height={30} alt='Logo'/></a></li>
                        <li className="text-xl font-light hover:text-sixth" onClick={()=> setOverlay(false)}><Link href="/dashboard">Dashboard</Link></li>
                        <li className="text-xl font-light hover:text-sixth" onClick={()=> setOverlay(false)}><Link href="/work">Work</Link></li>
                        <li className="text-xl font-light hover:text-sixth" onClick={()=> setOverlay(false)}><Link href="/projects">Projects</Link></li>
                        <li className="text-xl font-light hover:text-sixth" onClick={()=> setOverlay(false)}><Link href="/notes">Notes</Link></li>
                        <li className="text-xl font-light hover:text-sixth" onClick={()=> setOverlay(false)}><Link href="/arts">Arts</Link></li>
                        <li className="my-2 mt-12"><button className="w-8 h-8 border-2 dark:border-fifth border-first rounded-full shadow-md md:block" onClick={() => setIsDark(!isDark)}>{isDark ? <FontAwesomeIcon icon={MoonOn}/> : <FontAwesomeIcon icon={MoonOff}/>}</button></li>
                        <li className="my-2"><button className="w-8 h-8 md:block" onClick={() => setOverlay(false)}><FontAwesomeIcon icon={faX}/></button></li>
                    </ul>
                </motion.div>)}
            </AnimatePresence>
        </>
    )
}