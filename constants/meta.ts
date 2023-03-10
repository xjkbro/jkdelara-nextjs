import { Metadata } from 'next'
export const meta : Metadata = {
    title: "Home | Jason-Kyle De Lara",
    description: "A Full-Stack Developer based in Southern California. I help transform businesses ideas into tangible full scale application. ",
    keywords: ["HTML","CSS","JavaScript","ES6","TailwindCSS","Bootstrap","React","ReactJS","Redux","Context API","Typescript","Next","NextJS","Vercel","Netlify","Firebase","Google Firebase","Sanity","SanityIO","GROQ","Deployment","Angular","Heroku","git","github","nodejs","express","expressjs","npm","yarn","php","C++","c#","mongodb","nosql","sql","mysql","api","business","apps","application","projects","ios","mobile","landing pages","website"],
    creator: "Jason-Kyle De Lara",
    authors: [{
        name: "Jason-Kyle De Lara",
        url: "https://jkdelara.com",
    }],
    generator: "Next.js",
    applicationName: "JKDELARA",
    referrer: "origin-when-cross-origin",
    colorScheme: "dark",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
        },
    },
    openGraph: {
        title: 'Jason-Kyle De Lara',
        description: 'A Full-Stack Developer based in Southern California. I help transform businesses ideas into tangible full scale application. ',
        url: 'https://jkdelara.com',
        siteName: 'JKDELARA',
        locale: 'en-US',
        type: 'website',
    },
    icons: {
        icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', 'https://jkdelara.com')],
        shortcut: ['/favicon.ico'],
        apple: [
          { url: '/apple-touch-icon.png' },
          { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
      },
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
      ],
}

