"use client";
import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faBriefcase, faGraduationCap, faBabyCarriage, faChild } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Timeline({ works }) {
    return (
        <>
            <VerticalTimeline lineColor={"#ED6C31"}>
                {works.data.map((work, i) => (
                    <SingleTimeline key={work.id} work={work}/>
                ))}
                <VerticalTimelineElement 
                    contentStyle={{ display: 'none'}}
                    iconStyle={{ background: '#ED6C31', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faChild}/>}
                    visible={false}
                />
                <VerticalTimelineElement 
                    contentStyle={{ display: 'none'}}
                    iconStyle={{ background: '#ED6C31', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBabyCarriage}/>}
                    visible={false}
                />
            </VerticalTimeline>
            <div className="mt-12 text-third dark:text-fourth text-center text-sm">Powered by React Vertical Timeline Components</div>
        </>
    )
} 
export function SingleTimeline({work}) {
    const regex = /(<([^>]+)>)/ig;
    const getDateRange = (work) => {
        const startDate = new Date(work.attributes.started);
        const start = startDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

        let end: Date | string = "Present";
        if (work.attributes.ended != null) {
            end = new Date(work.attributes.ended)
            end = end.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        }
        return "From " + start + " to " + end

    }
    const getIconType = (work) =>{ 
        if(work.attributes.type == "work")
            return (<FontAwesomeIcon icon={faBriefcase}/>)
        else 
            return (<FontAwesomeIcon icon={faGraduationCap}/>)
    }
    return(
        <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={getDateRange(work)}
                // contentArrowStyle={{ borderRight: '7px solid #ED6C31' }}
                iconStyle={{ background: '#ED6C31', color: '#fff' }}
                dateClassName="dark:text-white text-third md:mx-4 m-0"
                icon={getIconType(work)}
            >
                <h3 className="vertical-timeline-element-title">{work.attributes.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{work.attributes.title}</h4>
                <p className="!text-sm !font-normal">{work.attributes.summary}</p>
        </VerticalTimelineElement>
    )

}