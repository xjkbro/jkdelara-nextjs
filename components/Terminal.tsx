"use client";
import { IBM_Plex_Mono } from "@next/font/google";
import { useEffect, useRef, useState } from "react";
const consoleText = IBM_Plex_Mono({
    weight: ["400", "500"],
    subsets: ["latin"],
});
import { socials } from "@/constants/socials";

export const commandLibrary = [
    {
        name: "help",
        output: `
        <span>Available commands are: help, about, ls, pwd, onlyfans, socials, cv, resume, clear</span>
        <div class="grid grid-cols-[150px_minmax(0,_1fr)] gap-y-2">
            <span class="w-24">ls</span><span>Show files/folders in current directory</span>
            <span class="w-24">cd</span><span>Changes directory</span>
            <span class="w-24">pwd</span><span>Path of working directory</span>
            <span class="w-24">clear</span><span>Clears the command window</span>
            <span class="w-24">about</span><span>A quick summary of Jason-Kyle De Lara</span>
            <span class="w-24">socials</span><span>Links to all my socials</span>
            <span class="w-24">cv</span><span>Link to CV</span>
            <span class="w-24">resume</span><span>Link to Resume</span>
            <span class="w-24">onlyfans</span><span>Link to onlyfans</span>
        </ul>`,
    },
    {
        name: "about",
        output: "Jason is cool.",
    },
    {
        name: "ls",
        output: "<div class='flex gap-x-8 gap-y-2 flex-wrap'><span>home</span><span>dashboard</span><span>story</span><span>projects</span><span>notes</span><span>art</span><span>contact</span></div>",
    },
    {
        name: "pwd",
        output: "<a class='text-eighth hover:underline' href='https://jkdelara.com'>https://jkdelara.com</a>",
    },
    {
        name: "onlyfans",
        output: "HAHAHA YOU THOUGHT!",
    },
    {
        name: "socials",
        output: `${socials.data.map((social)=>{
            return `<a href='${social.attributes.url}'>${social.attributes.name}</a><br>`
        }).join('')}`
    },
    {
        name: "cv",
        output: "<a class='text-eighth hover:underline' href='https://jkdelara.com/resume2022b.pdf'>Jason-Kyle De Lara's CV</a>",
    },
    {
        name: "resume",
        output: "<a class='text-eighth hover:underline' href='https://jkdelara.com/resume2022b.pdf'>Jason-Kyle De Lara's Resume</a>",
    },
    {
        name: "cd",
        output: "Changing directory..."
    }
];

export default function Terminal() {
    const input = useRef<HTMLInputElement>(null);
    const [lastCmd, setLastCmd] = useState([])
    const terminalContainer = useRef<HTMLDivElement>(null);
    const [cmdCount, setCmdCount] = useState(0);
    useEffect(() => {
        input.current ? input.current.focus() : "";
    }, [cmdCount]);
    return (
        <>
            <div
                id="terminal"
                className="w-full h-64 mb-4 bg-black border border-gray-300 rounded-md shadow-md"
                onClick={() => {
                    input.current ? input.current.focus() : "";
                }}
            >
                <div className="flex w-full gap-2 p-1 rounded-t-sm bg-gradient-to-tr from-gray-300 to-gray-400 h-fit">
                    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                    <span className="w-4 h-4 bg-yellow-300 rounded-full"></span>
                    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
                <div
                    className={
                        "text-white h-56 w-full p-4 overflow-y-scroll " +
                        consoleText.className
                    }
                    ref={terminalContainer}
                >
                    {Array.from({ length: cmdCount+1 }).map((_, index) => (
                        <CommandLine
                            key={index}
                            refToInput={input}
                            cmdCount={cmdCount}
                            setCmdCount={setCmdCount}
                            terminalContainer={terminalContainer}
                            lastCmd={lastCmd}
                            setLastCmd={setLastCmd}
                        />
                    ))}
                </div>
            </div>
            <p className="mb-4 text-sm">Feel free to use this command window to get any quick information. Use &apos; help &apos; to see the available commands.</p>

        </>
    );
}

export function CommandLine({ refToInput, cmdCount, setCmdCount,terminalContainer, lastCmd, setLastCmd }) {
    const [output, setOutput] = useState("");
    const [historyCheck ,setHistoryCheck] = useState(cmdCount)
    const commandChecker = (e) => {
        console.log(e.code)
        if (e.code == "Enter") {
            let found = false;
            commandLibrary.map((cmd) => {
                if (cmd.name == e.target.value) {
                    setOutput(cmd.output);
                    found = true;
                } 
            });
            
            if (e.target.value == 'clear') {
                setOutput("");
                setCmdCount(0);
                while (terminalContainer.current.hasChildNodes()) {
                    terminalContainer.current.removeChild(terminalContainer.current.lastChild);
                }
            } 

            
            if(!found && e.target.value != "") {
                setOutput(`Invalid Command: ${e.target.value }`)
            }
            if(e.target.value.split(" ")[0] == "cd") {
                const arr = e.target.value.split(" ")
                const avail_routes=['dashboard', 'story', 'projects', 'notes', 'arts', 'contact']
                console.log(arr)
                if(arr.length < 2) 
                    setOutput("A second argument is required...");
                else {
                    if(avail_routes.includes(arr[1])){
                        setOutput("Changing directory...");
                        if(arr[1] == 'home')
                            window.location.href = "/";
                        else
                            window.location.href = "/"+arr[1];
                    }
                    else
                        setOutput("Folder not available...");
                }
            }
            setCmdCount(cmdCount + 1);
            setLastCmd([...lastCmd, e.target.value])
        }
        if(e.code == "ArrowUp") {
            refToInput.current.value = lastCmd[historyCheck-1]
            if(historyCheck > 1)
                setHistoryCheck(historyCheck-1)
        }
        if(e.code == "ArrowDown") {
            refToInput.current.value = lastCmd[historyCheck]
            if(historyCheck < cmdCount){
                setHistoryCheck(historyCheck+1)
            }else{
                refToInput.current.value = ""
            }
        }
        console.log(historyCheck)
        console.log(lastCmd)
    };
    refToInput.c
    return (
        <>
            <span className="text-green-400"> @jkdelara ~ &gt; </span>
            <input
                type="text"
                ref={refToInput}
                className="bg-black cursor-default text-white-400 focus:outline-none w-fit"
                onKeyDown={commandChecker}
            />
            <div dangerouslySetInnerHTML={{__html: output}} />
        </>
    );
}
