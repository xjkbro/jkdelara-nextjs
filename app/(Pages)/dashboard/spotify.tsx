'use client';

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

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function SpotifyPlaying() {
  const { data } = useSWR<playingOnSpotify[]>('/api/spotify', fetcher);
    if(data) {
        // @ts-ignore
        if(data?.isPlaying == false) {
            return <a href="https://spotify.com"><i className="mr-2 fa-brands fa-spotify"></i><span className="font-bold">Not Playing</span></a>
        }
        else
        // @ts-ignore
            return <a href={data.songUrl}><i className="mr-2 fa-brands fa-spotify"></i><span className="mr-2 font-bold">Now Playing</span>{data.artist} - {data.title}</a>
    } else 
    return <></>   
}
