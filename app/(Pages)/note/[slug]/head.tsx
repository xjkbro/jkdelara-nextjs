import {makeTitle} from "../../../../lib/utils"
export default async function Head({params}) {
    const slug: string = params.slug;
    const note = await getNote(slug);
  return (
    <>
      <title>{note?.data[0]?.attributes?.title + " | Jason Kyle De Lara"}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Jason-Kyle De Lara, A Full-Stack Developer based in Las Vegas, NV. I help transform businesses ideas into tangible full scale application. "
      />
      <meta
        name="keywords"
        content="HTML,CSS,JavaScript,ES6,TailwindCSS,Bootstrap,React,ReactJS,Redux,Context API,Typescript,Next,NextJS,Vercel,Netlify,Firebase,Google Firebase,Sanity,SanityIO,GROQ,Deployment,Angular,Heroku,git,github,nodejs,express,expressjs,npm,yarn,php,C++,c#,mongodb,nosql,sql,mysql,api,business,apps,application,projects,ios,mobile,landing pages,website"
      />
      <meta name="author" content="Jason-Kyle De Lara" />
      <meta property="og:site_name" content="jkdelara" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="robots" content="INDEX, FOLLOW" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" /> */}

    </>
  )
}

async function getNote(slug) {
    const URL = "https://cms.jsondelara.com/api/posts?filters[slug][$eq]=" + slug +"&fields[0]=title";
    const res = await fetch(URL, { cache: 'no-store' } )
    return res.json();
  }
