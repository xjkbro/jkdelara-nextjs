import Link from "next/link";

export default function RecentPostBlock({ notes }) {
    return (
        <>
            <div className="z-[5] md:justify-between pt-12 pb-4 px-[15vw] bg-fifth dark:bg-second -ml-[5%] -mr-[5%] md:-ml-[25%] md:-mr-[25%]">
                <h3 className="text-[2rem] md:text-[3rem] font-black mb-2">
                    Featured Notes
                </h3>
            </div>
            <div className="z-[5] md:justify-between pb-12 pt-4 px-[10vw] bg-fifth dark:bg-second -ml-[5%] -mr-[5%] md:-ml-[25%] md:-mr-[25%]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto my-8">
                    {/* {notes.data.map((note, i) => (
                        <Link
                            key={i}
                            href={"/note/" + note.attributes.slug}
                            className="border-4 border-eighth rounded-full p-4 px-8 h-32 flex justify-center items-center"
                        >
                            <div className="flex flex-col justify-center items-start w-full">
                                <span className="text-left font-bold">
                                    {
                                        note.attributes.categories.data[0]
                                            .attributes.title
                                    }
                                </span>
                                <span className="text-left font-thin">
                                    {note.attributes.title}
                                </span>
                            </div>
                            <span className="before:absolute -mt-[9.5rem] absolute inline-block">
                                <span className="absolute rounded-full left-[2rem] bg-eighth py-1 px-2 text-white whitespace-nowrap">
                                    {note.attributes.views} views
                                </span>
                            </span>
                        </Link>
                    ))} */}
                    {notes.data.map((note, i) => (
                        <Link
                            key={i}
                            href={"/note/" + note.attributes.slug}
                            // className="border-4 border-eighth rounded-full p-4 h-32 flex justify-center items-center"
                            className="border-l-4 border-eighth p-4 h-32 flex flex-col justify-center items-start hover:translate-x-1 transition-all hover:bg-third"
                        >
                            <span className="text-left font-bold">
                                {
                                    note.attributes.categories.data[0]
                                        .attributes.title
                                }
                            </span>
                            <span className="text-left font-thin">
                                {note.attributes.title}
                            </span>
                            {/* <span className="before:absolute -mt-[9.5rem] absolute inline-block">
                    <span className="absolute rounded-full left-[2rem] bg-eighth py-1 px-2 text-white whitespace-nowrap">{note.attributes.views} views</span>
                </span> */}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
