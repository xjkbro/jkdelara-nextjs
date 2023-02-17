// "use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMoon as MoonOn} from "@fortawesome/free-solid-svg-icons";
import {faMoon as MoonOff}  from "@fortawesome/free-regular-svg-icons";

export default function Navigation({isDark, setIsDark}) {
    return (
    <nav className="flex flex-row items-center justify-between my-8">
        <ul className="flex flex-row overflow-scroll md:overflow-auto gap-x-8 md:gap-16">
            <li className="text-lg font-bold hover:text-sixth"><a href="/">Home</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/dashboard">Dashboard</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/work">Work</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/projects">Projects</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/notes">Notes</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/arts">Arts</a></li>
        </ul>
        <button className="hidden md:block" onClick={() => setIsDark(!isDark)}>{isDark ? <FontAwesomeIcon icon={MoonOn}/> : <FontAwesomeIcon icon={MoonOff}/>}</button>
    </nav>
    )
  }
  