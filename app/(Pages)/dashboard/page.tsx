import SpotifyPlaying from "./components/nowPlayingSpotify"
import TopArtistsSpotify from "./components/topArtistsSpotify"
import TopTracksSpotify from "./components/topTracksSpotify"
import UnsplashStatistics from "./components/unsplash"
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import {faUnsplash} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default async function Dashboard() {
  return (
    <>
      {/* <h1 className="font-black text-[2rem] mb-4">Dashboard</h1> */}
      <div className="grid gap-2 md:grid-cols-2">
        <AnimateBorderWrapper>
          <AnimateBorderBG>
            <h2 className="mb-2 text-xl font-bold"><FontAwesomeIcon icon={faSpotify} className="mr-2"/>Now Playing</h2>
           <SpotifyPlaying />
          </AnimateBorderBG>
        </AnimateBorderWrapper>
        <AnimateBorderWrapper>
          <AnimateBorderBG>
            <h2 className="mb-2 text-xl font-bold"><FontAwesomeIcon icon={faSpotify} className="mr-2"/>Top Tracks</h2>
           <TopTracksSpotify />
          </AnimateBorderBG>
        </AnimateBorderWrapper>
        <AnimateBorderWrapper>
          <AnimateBorderBG>
            <h2 className="mb-2 text-xl font-bold"><FontAwesomeIcon icon={faSpotify} className="mr-2"/>Top Artists</h2>
           <TopArtistsSpotify />
          </AnimateBorderBG>
        </AnimateBorderWrapper>
        <AnimateBorderWrapper>
          <AnimateBorderBG>
            <h2 className="mb-2 text-xl font-bold">Unsplash</h2>
           <UnsplashStatistics />
          </AnimateBorderBG>
        </AnimateBorderWrapper>
      </div>
    </>
  )
}
function AnimateBorderWrapper({children}) {
  return <div className="animate-border rounded-xl h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r">
    {children}
  </div>
}
function AnimateBorderBG({children}){
  return <div className=" p-4 transition-all h-full w-full rounded-[11px] dark:bg-first dark:hover:bg-second bg-fifth hover:bg-sixth">
    {children}
  </div>
}