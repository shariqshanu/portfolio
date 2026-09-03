"use client";

import dynamic from "next/dynamic";
import type { PortfolioData } from "@/app/lib/api";

const EducationTimeline = dynamic(() => import("./education-timeline"), {
  ssr: false,
});

type Props = {
  educations: PortfolioData["educations"];
};

export default function EducationTimelineWrapper({ educations }: Props) {
  return <EducationTimeline educations={educations} />;
}
