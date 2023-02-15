// "use client";

// import { useState } from "react";

export default function Navigation({isDark, setIsDark}) {
    return (
    <nav className="flex flex-row items-center justify-between my-8">
        <ul className="flex flex-row gap-16">
            <li className="text-lg font-bold hover:text-sixth"><a href="/">Home</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/dashboard">Dashboard</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/work">Work</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/projects">Projects</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/notes">Notes</a></li>
            <li className="text-lg font-bold hover:text-sixth"><a href="/arts">Arts</a></li>
        </ul>
        <button onClick={() => setIsDark(!isDark)}>{isDark ? 'ON' : 'OFF'}</button>
    </nav>
    )
  }
  