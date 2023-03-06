import { Catamaran } from "@next/font/google"
const QuoteFont = Catamaran({ weight: ['500', '700', '900'], subsets: ['latin'] })


export default function DisplayQuote({quote, quotee}) {
  return (
    <div className="flex items-center justify-center py-16 h-fit">
        <div className={"grid grid-cols-3 md:grid-cols-[200px_minmax(900px,_1fr)_100px] mx-auto text-center align-middle " + QuoteFont.className}>
            <div className="text-[5rem] md:text-[10rem] h-16 md:h-32 text-eighth font-black">&ldquo;</div>
            <div className="col-span-2"></div>
            <div className="hidden md:block md:col-span-1"></div>
            <div className="col-span-3 text-center md:col-span-1">
                <div className="text-lg md:text-[2.4rem] break-normal font-bold md:leading-9">{quote}</div>
                <div className="mt-2 text-sm italic font-normal md:mt-8 md:text-1rem text-first dark:text-fourth">- {quotee}</div>
            </div>
            <div className="hidden md:block md:col-span-1"></div>
            <div className="col-span-2"></div>
            <div className="text-[5rem] md:text-[10rem] h-32 md:h-64 text-eighth font-black">&rdquo;</div>
        </div>
    </div>
  )
}
