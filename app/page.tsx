// "use client"
import DisplayQuote from '@/components/DisplayQuote';
import TextToScreen from '@/components/TextToScreen';
import Introduction from '@/components/introduction'

import {meta} from '@/constants/meta';
export const metadata = {...meta, title:"Home"}

export default async function Home() {
    const data = await getQuote();
    const {quote, quotee} = data;
    return (
        <div className="">
            <Introduction />
            <DisplayQuote quote={quote} quotee={quotee} />
            <TextToScreen />
        </div>
    )
}

function AnimatedBorder({ children }) {
    return (
        <div className="animate-border rounded-xl h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r">
            <div className=" p-4 md:p-12 transition-all h-full w-full rounded-[11px] dark:bg-second bg-fifth">
                {children}
            </div>
        </div>
    )
}
const getQuote = async () => {
    const res = await fetch("http://jkdelara.com/api/quotes");
    const data = await res.json();
    return data
}