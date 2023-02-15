// "use client";
// import "../../../pages/api/spotify"

export default async function Dashboard() {
    // const spotifyData = getSpotifyData();
    // const unsplashData = getUnsplashData();
    // const [spotify, unsplash] = await Promise.all([spotifyData, unsplashData]);

  return (
    <>
        <div className="h-12 bg-second w-full flex items-center">
            <div className="w-2/3 mx-auto ">
            {/* <SpotifyPlaying data={spotify} /> */}
            </div>
        </div>
    </>
  )
}
// function SpotifyPlaying({data}) {
//     if(data.isPlaying == false) {
//         return <a href="https://spotify.com"><i className="fa-brands fa-spotify mr-2"></i><span className="font-bold">Not Playing</span></a>
//     }
//     else
//         return <a href={data.songUrl}><i className="fa-brands fa-spotify mr-2"></i><span className="font-bold mr-2">Now Playing</span>{data.artist} - {data.title}</a>
// }
// async function getSpotifyData() {
//     const spotifyURL = "development" === process.env.NEXT_PUBLIC_ENV ? "http://localhost:3000/api/spotify" : "https://jkdelara-nextjs-production.up.railway.app/api/spotify"
//     const res = await fetch(spotifyURL, { next: { revalidate: 5 } })
//     return res.json()
// }
// async function getUnsplashData() {
//     const unsplashURL = "development" === process.env.NEXT_PUBLIC_ENV ? "http://localhost:3000/api/unsplash" : "https://jkdelara-nextjs-production.up.railway.app/api/unsplash"
//     const res = await fetch(unsplashURL, { next: { revalidate: 3600 } })
//     return res.json()
// }