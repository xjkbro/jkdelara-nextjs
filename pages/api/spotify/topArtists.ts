import { getTopArtists } from '../../../lib/spotify';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res:  NextApiResponse) {
  const response = await getTopArtists();
  const { items } = await response.json();

    // console.log(response)
    const artists = items.slice(0, 5).map((artist) => ({
        artist: artist.name,
        followers: artist.followers.total,
        artistUrl: artist.external_urls.spotify,
      }));

      return res.status(200).json({ artists });

};