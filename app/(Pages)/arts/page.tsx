import Image from 'next/image'
import ImageModal from "./imageModal"

export default async function Art() {
    const arts = await getArt();
    const regex = /(<([^>]+)>)/ig;
    return (
        <>
    <div id="art-system" className="grid gap-4 md:grid-cols-4">
        {
            arts.data.map((art) => (
                <div key={art.id} className="w-full h-full">
                    <ImageModal art={art}/>
                </div>
            ))
        } 
        
        {/* <div className="w-full h-full">
            <Image src="https://res.cloudinary.com/dryhha34v/image/upload/v1676485634/medium_IMG_3447_0702205fec.jpg" width={200} height={200} alt="asdas"/>
            </div>
            <div className="w-full h-full">
            <Image src="https://res.cloudinary.com/dryhha34v/image/upload/v1676485418/large_IMG_3383_b2485e68e3.jpg" width={1000} height={1000} alt="asdas"/>
        </div> */}
    </div>
    </>
  )
}

async function getArt() {
    const res = await fetch('https://cms.jsondelara.com/api/photos?populate[photograph][fields][0]=url' , {cache: "no-store"})
    return res.json();
}

