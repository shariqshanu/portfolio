"use client";

import dynamic from "next/dynamic";
import type { PortfolioData } from "@/app/lib/api";

const SkillsMarquee = dynamic(() => import("./skills-marquee"), {
  ssr: false,
});

type Props = {
  skills: PortfolioData["skills"];
};

export default function SkillsMarqueeWrapper({ skills }: Props) {
  return <SkillsMarquee skills={skills} />;
}
