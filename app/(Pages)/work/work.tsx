export default function SingleWork({work}) {
    const regex = /(<([^>]+)>)/ig;
    const getDateRange = (work) => {
        const startDate = new Date(work.attributes.started);
        const start = startDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

        let end: Date | string = "Present";
        if(work.attributes.ended != null) {
            end =  new Date(work.attributes.ended)
            end = end.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        }
        return "From " + start + " to " + end

    }
  return (
    <div className="p-4 mb-2 transition-all border-2 rounded-full border-third hover:bg-second">
        <div className="">
            {/* <span className="ml-2 text-lg font-bold">{work.attributes.title}</span> */}
            <span className="ml-8 text-lg font-bold">{work.attributes.name}</span>
            <span className="ml-2 text-sm text-fourth">{getDateRange(work)}</span>
        </div>
        <span className="mx-8 mb-2 text-sm font-bold">{work.attributes.title}</span>
        {/* <span className="ml-2 px-2 py-1 text-sm rounded-full bg-eighth text-fifth">{work.attributes.title}</span> */}
        <p className="mx-8">{work.attributes.summary}</p>
    </div>
  )
}

