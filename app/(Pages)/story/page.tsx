import SingleStory from "./story";
import {motion} from "framer-motion"
import Timeline from "./timeline";
export default async function Story() {
    const stories = await getStories();
    // Sort response in decending order by start date
    stories.data.sort((one, two)=>(one.attributes.started < two.attributes.started) ? 1 : (one.attributes.started > two.attributes.started) ? -1 : 0);
  return (
    <>
    <div className="">
        {/* {stories.data.map((story, i) => (
            <SingleStory key={story.id} story={story} i={i}/>
        ))} */}
        <Timeline stories={stories} />
    </div>
    </>
  )
}

async function getStories() {
    const res = await fetch('https://cms.jsondelara.com/api/experiences?populate=*')
    return res.json();
}
