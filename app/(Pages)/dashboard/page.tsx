import SpotifyPlaying from "./components/nowPlayingSpotify";
import TopArtistsSpotify from "./components/topArtistsSpotify";
import TopTracksSpotify from "./components/topTracksSpotify";
import UnsplashStatistics from "./components/unsplash";
import Terminal from "@/components/Terminal";
import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedWindow from "./components/AnimatedWindow";

export const metadata = { title: "Dashboard" };

export default async function Dashboard() {
    return (
        <div className="w-[90vw] min-h-[80vh] md:w-2/3 mx-auto">
            {/* <h1 className="font-black text-[2rem] mb-4">Dashboard</h1> */}
            {/* <div className="mb-4">
                <h1 className="font-bold text-[2rem]">Dashboard</h1>
                <div className="text-sm">Featuring another passion of mine, Photography. While I still am fairly new and don&apos;t have the best equipment, you can <Link href="/contact" className="hover:underline text-eighth">contact</Link> me for any small inquiries.</div>
            </div> */}

            <div className="grid gap-2 mb-2 md:grid-cols-2">
                <AnimatedWindow
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
                </AnimatedWindow>
                <AnimatedWindow
                    title={"Jason's Unsplash Statistics"}
                    icon={faUnsplash}
                >
                    <UnsplashStatistics />
                </AnimatedWindow>
                <Terminal />
            </div>
            {/* <FramerBG /> */}
        </div>
    );
}
