'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numberWithCommas } from '@/lib/utils';


interface artist {
  artist: string,
  followers: number,
  artistUrl: string
};

type topArtists = {
    artists: Array<artist>
};

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function TopArtists() {
  const { data } = useSWR<topArtists>('/api/spotify/topArtists', fetcher);
    if(data) {
        return (
            <>
                {/* <div className="flex justify-between mb-2"> */}
                    <div  className="flex justify-between mb-2">
                        <div className="text-sm font-semibold dark:text-fourth text-first">Artist</div>
                        <div className="text-sm font-semibold dark:text-fourth text-first">Followers</div>
                    </div>
                {
                data.artists.map((artist) => (
                    <div key={artist.artist} className="flex justify-between mb-2">
                        <a href={artist.artistUrl}>{artist.artist}</a>
                        <div>{numberWithCommas(artist.followers)}</div>
                    </div>
                  ))
                }
                {/* </div> */}
          </>
        )
    } else {
      return <>Loading...</>   
    }
}
