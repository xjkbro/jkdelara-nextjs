import { getTopArtists } from '../../../lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res:  NextApiResponse) {
  const response = await getTopArtists();
  const { items } = await response.json();

    // console.log(items[2].images[0].url)
    const artists = items.slice(0, 5).map((artist) => ({
        artist: artist.name,
        followers: artist.followers.total,
        artistUrl: artist.external_urls.spotify,
        img: artist.images[0].url
      }));

      return res.status(200).json({ artists });

};