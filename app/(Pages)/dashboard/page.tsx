import SpotifyPlaying from "./spotify"

export default async function Dashboard() {
  return (
    <>
        <div className="flex items-center w-full h-12">
            <div className="w-2/3 mx-auto ">
            <SpotifyPlaying />
            </div>
        </div>
    </>
  )
}
