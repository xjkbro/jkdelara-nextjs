import Image from 'next/image'

export default async function Art() {
    const arts = await getArt();
    // console.log(arts.data);
    const regex = /(<([^>]+)>)/ig;
  return (
    <>
    <div id="grid-system" className="grid grid-cols-4 gap-4">
        {
            arts.data.map((art) => (
                <div key={art.id} className="w-full h-full">
                    <Image src={art.attributes.photograph.data.attributes.formats.medium.url} alt={art.attributes.summary.replace(regex,'')} width={500} height={500} />
                </div>
            ))
        } 
        
        <div className="w-full h-full">
            <Image src="https://res.cloudinary.com/dryhha34v/image/upload/v1676485634/medium_IMG_3447_0702205fec.jpg" width={500} height={500} alt="asdas"/>
        </div>
        <div className="w-full h-full">
            <Image src="https://res.cloudinary.com/dryhha34v/image/upload/v1676485418/large_IMG_3383_b2485e68e3.jpg" width={500} height={500} alt="asdas"/>
        </div>
    </div>
    </>
  )
}

async function getArt() {
    const res = await fetch('https://cms.jsondelara.com/api/photos?populate=photograph')
    return res.json();
}