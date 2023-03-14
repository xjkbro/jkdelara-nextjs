// "use client"
import DisplayQuote from "@/components/DisplayQuote";
import TextToScreen from "@/components/TextToScreen";
import Introduction from "@/components/introduction";

import { meta } from "@/constants/meta";
import Terminal from "@/components/Terminal";
import IntroBlock from "@/components/IntroBlock";
import AboutBlock from "@/components/AboutBlock";
import Link from "next/link";
export const metadata = { ...meta, title: "Home" };

export default async function Home() {
    const data = await getQuote();
    const notes = await getNotes();
    const { quote, quotee } = data;
    return (
        <div className="">
            <IntroBlock />
            <AboutBlock />
            <DisplayQuote quote={quote} quotee={quotee} />
            {/* <div className="bg-red-500 -ml-[5%] -mr-[5%] md:-ml-[100%] md:-mr-[100%] overflow-hidden h-12">
                lkjalsd
            </div> */}

            {/* <Terminal /> */}
            {/* <div className="z-[5] flex flex-col items-center mx-auto md:justify-between py-12 px-8 lg:flex-row bg-sixth dark:bg-second -ml-[5%] -mr-[5%] md:-ml-[25%] md:-mr-[25%]">
                <TextToScreen />
            </div> */}
            <div className="z-[5] md:justify-between pt-12 pb-4 px-[15vw] bg-fifth dark:bg-second -ml-[5%] -mr-[5%] md:-ml-[25%] md:-mr-[25%]">
                <h3 className="text-[2rem] md:text-[3rem] font-black mb-2">
                    Featured Notes
                </h3>
            </div>
            <div className="z-[5] md:justify-between pb-12 pt-4 px-[10vw] bg-fifth dark:bg-second -ml-[5%] -mr-[5%] md:-ml-[25%] md:-mr-[25%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto my-8">
                    <Link
                        href={"/note/" + notes.data[0].attributes.slug}
                        className="border-4 border-eighth rounded-full p-4 h-32 flex justify-center items-center"
                    >
                        {notes.data[0].attributes.title}
                        <span className="before:absolute -mt-[9.5rem] absolute inline-block">
                            <span className="absolute rounded-full left-[2rem] bg-eighth py-1 px-2 text-white whitespace-nowrap">{notes.data[0].attributes.views} views</span>
                        </span>
                    </Link>
                    <Link
                        href={"/note/" + notes.data[1].attributes.slug}
                        className="border-4 border-eighth rounded-full p-4 h-32 flex justify-center items-center"
                    >
                        {notes.data[1].attributes.title}
                        <span className="before:absolute -mt-[9.5rem] absolute inline-block">
                            <span className="absolute rounded-full left-[2rem] bg-eighth py-1 px-2 text-white whitespace-nowrap">{notes.data[0].attributes.views} views</span>
                        </span>
                    </Link>
                    <Link
                        href={"/note/" + notes.data[2].attributes.slug}
                        className="border-4 border-eighth rounded-full p-4 h-32 flex justify-center items-center"
                    >
                        {notes.data[2].attributes.title}
                        <span className="before:absolute -mt-[9.5rem] absolute inline-block">
                            <span className="absolute rounded-full left-[2rem] bg-eighth py-1 px-2 text-white whitespace-nowrap">{notes.data[0].attributes.views} views</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
function AnimatedBorderFixed({ children }) {
    return (
        <div className="border-4 border-eighth rounded-full p-4 flex justify-center items-center">
            {children}
        </div>
    );
}

function AnimatedBorder({ children }) {
    return (
        <div className="animate-border rounded-xl h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r">
            <div className=" p-4 md:p-12 transition-all h-full w-full rounded-[11px] dark:bg-second bg-fifth">
                {children}
            </div>
        </div>
    );
}
const getQuote = async () => {
    const res = await fetch("http://jkdelara.com/api/quotes");
    const data = await res.json();
    return data;
};

async function getNotes() {
    const res = await fetch(
        "https://cms.jsondelara.com/api/posts?populate=*&sort=publishedAt:desc&pagination[pageSize]=3&pagination[page]=1",
        { next: { revalidate: 120 } }
    );
    return res.json();
}
