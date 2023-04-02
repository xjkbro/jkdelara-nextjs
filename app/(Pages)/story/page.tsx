import Timeline from "./timeline";

export const metadata = { title: "Story" };

export default async function Story() {
    const stories = await getStories();
    // Sort response in decending order by start date
    stories.data.sort((one, two) =>
        one.attributes.started < two.attributes.started
            ? 1
            : one.attributes.started > two.attributes.started
            ? -1
            : 0
    );
    return (
        <div className="w-[90vw] md:w-2/3 mx-auto">
            <Timeline stories={stories} />
        </div>
    );
}
async function getStories() {
    const res = await fetch(
        "https://cms.jkdelara.com/api/experiences?populate=*"
    );
    return res.json();
}
