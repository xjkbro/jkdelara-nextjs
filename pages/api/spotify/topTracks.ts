import { getTopTracks } from '../../../lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res:  NextApiResponse) {
  const response = await getTopTracks();
  const { items } = await response.json();

    // console.log(response)
    const tracks = items.slice(0, 3).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        imageUrl: track.album.images[0].url
      }));

      return res.status(200).json({ tracks });

};