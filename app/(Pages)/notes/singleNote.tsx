
import { getViews } from "@/pages/api/strapi/viewCounter";

export default function SingleNote({note}) {
    // console.log(note)
    const regex = /(<([^>]+)>)/ig;
  return (
    // <div className="p-4 transition-all border-2 rounded-xl xl:rounded-full md:mb-2 border-third md:border-sixth dark:hover:bg-second hover:bg-sixth">
    <div className="p-4 transition-all rounded-[11px] dark:bg-first dark:hover:bg-second bg-fifth hover:bg-sixth">
        <div className="hidden md:block md:mb-2">
            <span className="px-2 py-1 text-sm rounded-full bg-eighth text-fifth">{note.attributes?.categories?.data[0].attributes.title}</span>
            <span className="ml-2 text-lg font-bold">{note.attributes.title}</span>
            <span className="ml-2 text-sm dark:text-fourth whitespace-nowrap">{note.attributes.views} views</span>
        </div>
        <div className="block md:hidden md:mb-2">
            <div className="mb-2">
                <span className="px-2 py-1 text-sm rounded-full bg-eighth text-fifth">{note.attributes?.categories?.data[0].attributes.title}</span>
                <span className="ml-2 text-sm text-second dark:text-fourth">{note.attributes.views} views</span>
            </div>
            <span className="block text-lg font-bold">{note.attributes.title}</span>
        </div>
        <p className="prose dark:prose-invert">{note.attributes.summary.substring(0, 120)}</p>
    </div>
  )
}
