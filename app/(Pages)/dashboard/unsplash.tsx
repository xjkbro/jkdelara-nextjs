'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

type unsplashData = {
  notFound?: boolean,
  downloads: number,
  views: number,
};

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function UnsplashStatistics() {
  const { data } = useSWR<unsplashData>('/api/unsplash', fetcher);
  if (data) {
    if(data?.notFound){
      return <>Data was not found</>
    }else{
      return (
        <>
          <div className="flex justify-between">
            <span>Downloads</span><span>{data?.downloads}</span>
          </div>
          <div className="flex justify-between">
            <span>Views</span><span>{data?.views}</span>
          </div>
        </>
      )
    }
  } else {
    return <>Loading...</>
  }
}
