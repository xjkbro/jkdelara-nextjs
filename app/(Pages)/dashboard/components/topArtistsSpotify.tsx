'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type topArtists = {
  artist: string,
  followers: number,
  artistUrl: string
};

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function TopArtists() {
  const { data } = useSWR<topArtists>('/api/spotify/topArtists', fetcher);
    if(data) {
        return (<>{data.artist}</>)
    } else {
      return <>Loading...</>   
    }
}
