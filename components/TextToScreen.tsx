"use client";
import Typewriter from "typewriter-effect";
import { IBM_Plex_Mono } from "@next/font/google";
const typewriter = IBM_Plex_Mono({ weight: ["500"], subsets: ["latin"] });

TextToScreen.defaultProps = {
    text: [
        "Hello, I'm Jason and I like to create things. ",
        "With the help of VS Code, Chrome, and a scoop of preworkout, I help transform businesses ideas into tangible full scale application. ",
        "Let's build something together! =)",
    ],
};
export default function TextToScreen({ text }) {
    return (
        <div
            className={
                "w-full p-2 mx-auto text-justify md:w-full md:mb-96 " +
                typewriter.className
            }
        >
            <Typewriter
                onInit={(typewriter) => {
                    for (let i = 0; i < text.length; i++) {
                        typewriter.typeString(text[i]).pauseFor(500);
                    }
                    typewriter.start();
                }}
            />
        </div>
    );
}
