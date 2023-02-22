import SingleWork from "./work";
import {motion} from "framer-motion"
import Timeline from "./timeline";
export default async function Work() {
    const works = await getWork();
    // Sort response in decending order by start date
    works.data.sort((work1, work2)=>(work1.attributes.started < work2.attributes.started) ? 1 : (work1.attributes.started > work2.attributes.started) ? -1 : 0);
  return (
    <>
    <div className="">
        {/* {works.data.map((work, i) => (
            <SingleWork key={work.id} work={work} i={i}/>
        ))} */}
        <Timeline works={works} />
    </div>
    </>
  )
}

async function getWork() {
    const res = await fetch('https://cms.jsondelara.com/api/experiences?populate=*')
    return res.json();
}
