// import "../../../pages/api/spotify"

export default async function Dashboard() {
    const {unsplash_data, spotify_data} = await getPageProps();
    console.log(spotify_data)

  return (
    <>
        <div className="h-12 bg-second w-full flex items-center">
            <div className="w-2/3 mx-auto ">
            <SpotifyPlaying spotify_data={spotify_data} />
            </div>
        </div>
    </>
  )
}
function SpotifyPlaying({spotify_data}) {
    // console.log(spotify_data);
    if(spotify_data.isPlaying == false) {
        return <a href="https://spotify.com"><i className="fa-brands fa-spotify mr-2"></i><span className="font-bold">Not Playing</span></a>
    }
    else
        return <a href={spotify_data.songUrl}><i className="fa-brands fa-spotify mr-2"></i><span className="font-bold mr-2">Now Playing</span>{spotify_data.artist} - {spotify_data.title}</a>
}
async function getPageProps() {
    // Fetch data from external API
    const unsplash = await fetch(`${process.env.URL}/api/unsplash`)
    const spotify = await fetch(`${process.env.URL}/api/spotify`)
    
    const unsplash_data = await unsplash.json()
    const spotify_data = await spotify.json()
    
  
    // Pass data to the page via props
    return { unsplash_data, spotify_data }
  }
