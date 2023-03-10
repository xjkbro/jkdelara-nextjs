import Timeline from "./timeline";

export const metadata = { title: "Story" }

export default async function Story() {
    const stories = await getStories();
    // Sort response in decending order by start date
    stories.data.sort((one, two)=>(one.attributes.started < two.attributes.started) ? 1 : (one.attributes.started > two.attributes.started) ? -1 : 0);
  return (
    <div className="">
        <Timeline stories={stories} />
    </div>
  )
}
async function getStories() {
    const res = await fetch('https://cms.jsondelara.com/api/experiences?populate=*')
    return res.json();
}
