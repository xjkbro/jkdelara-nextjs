export default function SingleNote({note}) {
    console.log(note)
    const regex = /(<([^>]+)>)/ig;
  return (
    <div className="p-4 transition-all border-2 rounded-lg md:rounded-full md:mb-2 border-third hover:bg-second">
        <div className="hidden md:block md:mb-2">
            <span className="px-2 py-1 text-sm rounded-full md:ml-8 bg-eighth text-fifth">{note.attributes?.categories?.data[0].attributes.title}</span>
            <span className="ml-2 text-lg font-bold">{note.attributes.title}</span>
            <span className="ml-2 text-sm text-fourth">8 views</span>
        </div>
        <div className="block md:hidden md:mb-2">
            <div className="mb-2">
                <span className="px-2 py-1 text-sm rounded-full md:ml-8 bg-eighth text-fifth">{note.attributes?.categories?.data[0].attributes.title}</span>
                <span className="ml-2 text-sm text-fourth">8 views</span>
            </div>
            <span className="block text-lg font-bold">{note.attributes.title}</span>
        </div>
        <p className="md:mx-8">{note.attributes.body.replace(regex,'').substring(0, 120)}...</p>
    </div>
  )
}
