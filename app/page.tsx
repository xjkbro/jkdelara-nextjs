// "use client"
import DisplayQuote from "@/components/DisplayQuote";
import TextToScreen from "@/components/TextToScreen";
import Introduction from "@/components/introduction";

import { meta } from "@/constants/meta";
import Terminal from "@/components/Terminal";
import IntroBlock from "@/components/IntroBlock";
import AboutBlock from "@/components/AboutBlock";
import RecentPostBlock from "@/components/RecentPostBlock";
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
            <RecentPostBlock notes={notes}/>
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
