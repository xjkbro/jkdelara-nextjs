"use client";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
    faBriefcase,
    faGraduationCap,
    faBabyCarriage,
    faChild,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

export default function Timeline({ stories }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <VerticalTimeline lineColor={"#ED6C31"}>
                {stories.data.map((story, i) => (
                    <SingleTimeline key={story.id} story={story} />
                ))}
                <VerticalTimelineElement
                    contentStyle={{ display: "none" }}
                    iconStyle={{ background: "#ED6C31", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faChild} />}
                    visible={false}
                />
                <VerticalTimelineElement
                    contentStyle={{ display: "none" }}
                    iconStyle={{ background: "#ED6C31", color: "#fff" }}
                    icon={<FontAwesomeIcon icon={faBabyCarriage} />}
                    visible={false}
                />
            </VerticalTimeline>
            <div className="mt-12 text-sm text-center text-third dark:text-fourth">
                Powered by React Vertical Timeline Components
            </div>
        </motion.div>
    );
}
export function SingleTimeline({ story }) {
    const regex = /(<([^>]+)>)/gi;
    const getDateRange = (story) => {
        const startDate = new Date(story.attributes.started);
        const start = startDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        let end: Date | string = "Present";
        if (story.attributes.ended != null) {
            end = new Date(story.attributes.ended);
            end = end.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        }
        return "From " + start + " to " + end;
    };
    const getIconType = (story) => {
        if (story.attributes.type == "story")
            return <FontAwesomeIcon icon={faBriefcase} />;
        else return <FontAwesomeIcon icon={faGraduationCap} />;
    };
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--story"
            date={getDateRange(story)}
            // contentArrowStyle={{ borderRight: '7px solid #ED6C31' }}
            iconStyle={{ background: "#ED6C31", color: "#fff" }}
            dateClassName="dark:text-white text-third md:mx-4 m-0"
            icon={getIconType(story)}
        >
            <h3 className="vertical-timeline-element-title">
                {story.attributes.name}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                {story.attributes.title}
            </h4>
            <p className="!text-sm !font-normal">{story.attributes.summary}</p>
        </VerticalTimelineElement>
    );
}
