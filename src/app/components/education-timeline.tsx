"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";
import type { PortfolioData } from "@/app/lib/api";

// Cycled through by index since the database doesn't store an icon type per entry
const ICONS = [FaUniversity, FaSchool, FaGraduationCap];

type Props = {
  educations: PortfolioData["educations"];
};

// react-vertical-timeline-component isn't SSR-safe, so it has to stay inside
// a client component while the parent (education.tsx) handles the fetch.
function EducationTimeline({ educations }: Props) {
  return (
    <VerticalTimeline>
      {educations.map((education, index) => {
        const Icon = ICONS[index % ICONS.length];
        return (
          <VerticalTimelineElement
            key={education.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#161a2f", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "7px solid  #161a2f" }}
            date={education.date_range}
            visible={true}
            iconStyle={{ background: "#1a1443", color: "#fff" }}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title text-2xl text-[#16f2b3]">
              {education.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-md pt-2">
              {education.institution}
            </h4>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default EducationTimeline;
