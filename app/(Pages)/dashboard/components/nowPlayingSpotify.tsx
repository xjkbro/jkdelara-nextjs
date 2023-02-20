'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import useSWR from 'swr';


type playingOnSpotify = {
    isPlaying: boolean;
    album?: string,
    albumImageUrl?: string,
    artist?: string,
    songUrl?: string,
    title?: string
};

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function SpotifyPlaying() {
  const { data } = useSWR<playingOnSpotify>('/api/spotify/nowPlaying', fetcher);
    if(data) {
        if(data?.isPlaying == false) {
            return (
              <>
                <a href="https://spotify.com"><span className="font-bold dark:text-fourth text-first">Not Playing</span></a>
              </>
            )
        }else if(data.album && data.artist && data.title && data.albumImageUrl)
            return (
              <>
                <a href={data.songUrl}>
                    <div className="mb-2 font-bold dark:text-fourth text-first">Now Playing</div>
                    <div className="flex items-center gap-4">
                        <Image src={data.albumImageUrl} alt={data.title} width={50} height={50} /> {data.artist} - {data.title}
                    </div>
                </a>
              </>
            )
    } else {
      return <>Loading...</>   
    }
    return <></>
}
