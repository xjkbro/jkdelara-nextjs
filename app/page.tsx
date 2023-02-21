"use client"
import Introduction from '../components/introduction'
import Typewriter from 'typewriter-effect';


export default function Home() {
    // const router = useRouter();
    
    return (
        <>
            <div className="h-fit md:h-screen">
                <Introduction />
                {/* <a className="" href="/notes">Notes</a>
                <h2 className="text-3xl font-bold underline"> Hello World!</h2> */}
                <div className="w-full p-2 mx-auto text-justify md:w-1/2 md:mb-96">
                    {/* <AnimatedBorder> */}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Hello, I'm Jason and I like to create things. ")
                                .pauseFor(500).
                                typeString('With the help of VS Code, Chrome, and a scoop of preworkout, I help transform businesses ideas into tangible full scale application. ')
                                .pauseFor(500)
                                .typeString("Let's build something together! =)")
                                .start();
                            }}
                            />
                    {/* </AnimatedBorder> */}
                </div>

            </div>

        </>

    )
}

function AnimatedBorder({children}){
    return (
        <div className="animate-border rounded-xl h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r">
            <div className=" p-4 md:p-12 transition-all h-full w-full rounded-[11px] dark:bg-second bg-fifth">
                {children}
            </div>
        </div>
    )
}