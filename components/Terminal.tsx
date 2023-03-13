"use client";
import { IBM_Plex_Mono } from "@next/font/google";
import { useEffect, useRef, useState } from "react";
const consoleText = IBM_Plex_Mono({
    weight: ["400", "500"],
    subsets: ["latin"],
});
import { socials } from "@/constants/socials";

export const commandList = ["about", "ls"];
export const commandLibrary = [
    {
        name: "help",
        output: "Available commands are: help, about, ls, pwd, onlyfans, socials, cv, resume",
    },
    {
        name: "about",
        output: "Jason is cool.",
    },
    {
        name: "ls",
        output: "Nothing in directory",
    },
    {
        name: "pwd",
        output: "<a class='text-sixth hover:underline' href='https://jkdelara.com'>https://jkdelara.com</a>",
    },
    {
        name: "onlyfans",
        output: "HAHA YOU THOUGHT!",
    },
    {
        name: "socials",
        output: `${socials.data.map((social)=>{
            return `<a href='${social.attributes.url}'>${social.attributes.name}</a><br>`
        }).join('')}`
    },
    {
        name: "cv",
        output: "<a class='text-sixth hover:underline' href='https://jkdelara.com/resume2022b.pdf'>Jason-Kyle De Lara's CV</a>",
    },
    {
        name: "resume",
        output: "<a class='text-sixth hover:underline' href='https://jkdelara.com/resume2022b.pdf'>Jason-Kyle De Lara's Resume</a>",
    },
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
                className="h-64 w-full rounded-md border bg-black border-gray-300 mb-8 shadow-md"
                onClick={() => {
                    input.current ? input.current.focus() : "";
                }}
            >
                <div className="bg-gradient-to-tr from-gray-300 to-gray-400 rounded-t-sm h-fit p-1 w-full flex gap-2">
                    <span className="h-4 w-4 rounded-full bg-red-500"></span>
                    <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
                    <span className="h-4 w-4 rounded-full bg-green-500"></span>
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
            <p className="mb-2 text-sm">Feel free to use this command window to get any quick information. Use &apos; help &apos; to see the available commands.</p>

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
            <span className="text-green-400"> &gt; </span>
            <input
                type="text"
                ref={refToInput}
                className="bg-black text-white-400 focus:outline-none w-fit cursor-default"
                onKeyDown={commandChecker}
            />
            <div dangerouslySetInnerHTML={{__html: output}} />
        </>
    );
}
