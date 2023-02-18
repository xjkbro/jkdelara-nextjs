import SpotifyPlaying from "./spotify"
import UnsplashStatistics from "./unsplash"

export default async function Dashboard() {
  return (
    <>
      {/* <h1 className="font-black text-[2rem] mb-4">Dashboard</h1> */}
      <div className="grid md:grid-cols-2 gap-2">
        <AnimateBorderWrapper>
          <AnimateBorderBG>
            <h2 className="font-bold text-xl mb-2">Spotify</h2>
           <SpotifyPlaying />
          </AnimateBorderBG>
        </AnimateBorderWrapper>
        <AnimateBorderWrapper>
          <AnimateBorderBG>
            <h2 className="font-bold text-xl mb-2">Unsplash</h2>
           <UnsplashStatistics />
          </AnimateBorderBG>
        </AnimateBorderWrapper>
      </div>
    </>
  )
}
function AnimateBorderWrapper({children}) {
  return <div className="animate-border rounded-xl h-32 bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r">
    {children}
  </div>
}
function AnimateBorderBG({children}){
  return <div className=" p-4 transition-all h-full w-full rounded-[11px] dark:bg-first dark:hover:bg-second bg-fifth hover:bg-sixth">
    {children}
  </div>
}