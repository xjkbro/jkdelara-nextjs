'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
interface track {
  artist: string,
    songUrl: string,
    title: string,
    imageUrl: string,
}
type topArtists = {
  tracks: Array<track>
};
async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function TopTracksSpotify() {
  const { data } = useSWR<topArtists>('/api/spotify/topTracks', fetcher);
    if(data) {
       return (
        <>
          {
            data.tracks.map((track)=> (
              <div key={track.title} className="flex gap-2 mb-2">
                <Image src={track.imageUrl} alt={track.title} width={50} height={50} />
                <a href={track.songUrl}>{track.artist} - {track.title}</a>
              </div>
            ))
          }
        </>
       )
    } else {
      return <>Loading...</>   
    }
}
