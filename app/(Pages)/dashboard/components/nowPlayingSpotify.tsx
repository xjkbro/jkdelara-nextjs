'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                <a href="https://spotify.com"><FontAwesomeIcon icon={faSpotify}/><span className="mx-2 font-bold">Not Playing</span></a>
              </>
            )
        }
        else
            return (
              <>
                <a href={data.songUrl}><FontAwesomeIcon icon={faSpotify}/><span className="mx-2 font-bold">Now Playing</span><div>{data.artist} - {data.title}</div></a>
              </>
            )
    } else {
      return <>Loading...</>   
    }
}
