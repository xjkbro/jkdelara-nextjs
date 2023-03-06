import type { NextApiRequest, NextApiResponse } from 'next';
export const quotes = [
    // {
    //     "quote": "Whatever makes you uncomfortable is your biggest opportunity for growth.",
    //     "quotee": "Bryant McGill",
    // },
    // {
    //     "quote": "Simplicity is the ultimate sophistication.",
    //     "quotee": "Leonardo da Vinci",
    // },
    {
        "quote": "One day you will tell your story of how you overcame what you went through and it will be someone else's survival guide.",
        "quotee": "Brian Weiner",
    }
]

export default async function handler(req: NextApiRequest, res:  NextApiResponse) {

    const number = Math.floor(Math.random() * quotes.length);
    // console.log(quotes[number])
    return res.status(200).json( quotes[number]);

};