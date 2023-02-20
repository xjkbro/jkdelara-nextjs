import Image from 'next/image'
import Link from 'next/link';
import ImageModal from "./imageModal" 
import "../../../public/spinner.svg"

export default async function Art() {
    const arts = await getArt();
    const regex = /(<([^>]+)>)/ig;
    return (
    <>
        <div className="mb-4">
            <h1 className="font-bold text-[2rem]">Arts</h1>
            <div className="text-sm">Featuring another passion of mine, Photography. While I still am fairly new and don&apos;t have the best equipment, you can <Link href="/contact" className="hover:underline text-eighth">contact</Link> me for any small inquiries.</div>
            </div>
        <div id="art-system" className="grid gap-4 md:grid-cols-4">
            {
                arts.data.map((art, i) => (
                    <div key={art.id} className="w-full h-full">
                        <ImageModal art={art} i={i}/>
                    </div>
                ))
            } 
            
            {/* <div className="w-full h-full">
                <Image src="/spinner.svg" width={200} height={200} alt="asdas"/>
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

