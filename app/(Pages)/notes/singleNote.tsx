export default function SingleNote({note}) {
    console.log(note)
    const regex = /(<([^>]+)>)/ig;
  return (
    <div className="p-4 mb-2 transition-all border-2 rounded-full border-third hover:bg-second">
        <div className="mb-2">
            <span className="px-2 py-1 ml-8 text-sm rounded-full bg-eighth text-fifth">{note.attributes?.categories?.data[0].attributes.title}</span>
            <span className="ml-2 text-lg font-bold">{note.attributes.title}</span>
            <span className="ml-2 text-sm text-fourth">8 views</span>
        </div>
        <p className="mx-8">{note.attributes.body.replace(regex,'').substring(0, 120)}...</p>
    </div>
  )
}
