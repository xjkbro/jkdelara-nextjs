'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import { numberWithCommas } from '@/lib/utils';
import LineChart from './LineChart';


type unsplashData = {
  notFound?: boolean,
  downloads: number,
  views: number,
  downloadValues: any,
  viewValues: any

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
            <span>Downloads</span><span>{numberWithCommas(data?.downloads)}</span>
          </div>
          {/* <LineChart data={data?.downloadValues} label="Downloads"/> */}
          <div className="flex justify-between">
            <span>Views</span><span>{numberWithCommas(data?.views)}</span>
          </div>
          <LineChart data={data?.viewValues} label="Views"/>
        </>
      )
    }
  } else {
    return <>Loading...</>
  }
}
