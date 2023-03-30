import SpotifyPlaying from "./components/nowPlayingSpotify";
import TopArtistsSpotify from "./components/topArtistsSpotify";
import TopTracksSpotify from "./components/topTracksSpotify";
import UnsplashStatistics from "./components/unsplash";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Terminal from "@/components/Terminal";
import FramerBG from "@/components/FramerBG";

export const metadata = { title: "Dashboard" };

export default async function Dashboard() {
    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            {/* <h1 className="font-black text-[2rem] mb-4">Dashboard</h1> */}
            <div className="mb-4">
                <h1 className="font-bold text-[2rem]">Dashboard</h1>
                {/* <div className="text-sm">Featuring another passion of mine, Photography. While I still am fairly new and don&apos;t have the best equipment, you can <Link href="/contact" className="hover:underline text-eighth">contact</Link> me for any small inquiries.</div> */}
            </div>
            <div className="grid gap-2 mb-2 md:grid-cols-2">
                <AnimatedBorder
                    title={"Jason's Spotify Statistics"}
                    icon={faSpotify}
                >
                    <h4 className="mb-2 text-lg font-bold">
                        Currently Listening
                    </h4>
                    <SpotifyPlaying />
                    <h4 className="my-2 text-lg font-bold">Top Tracks</h4>
                    <TopTracksSpotify />
                    {/* <h4 className="my-2 text-lg font-bold">Top Artists</h4>
            <TopArtistsSpotify /> */}
                </AnimatedBorder>
                <AnimatedBorder
                    title={"Jason's Unsplash Statistics"}
                    icon={faUnsplash}
                >
                    <UnsplashStatistics />
                </AnimatedBorder>
            </div>
            <Terminal />
            {/* <FramerBG /> */}
        </div>
    );
}

function AnimatedBorder({ children, title, icon }) {
    return (
        <div className="animate-border rounded-xl h-full bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-1 transition bg-gradient-to-r">
            <div className=" p-4 transition-all h-full w-full rounded-[11px] dark:bg-first bg-fifth">
                <h2 className="mb-1 text-xl font-bold">
                    <FontAwesomeIcon
                        icon={icon}
                        className="mr-2"
                        width={25}
                        height={25}
                    />
                    {title}
                </h2>
                <div className="flex items-center w-full h-full ">
                    <div className="w-full pb-4">{children}</div>
                </div>
            </div>
        </div>
    );
}
