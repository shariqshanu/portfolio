"use client";

import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import type { PortfolioData } from "@/app/lib/api";

const COLLAPSED_COUNT = 3;

type Props = {
  experience: PortfolioData["experiences"][number];
};

function ExperienceCard({ experience }: Props) {
  const [expanded, setExpanded] = useState(false);
  const bullets = experience.description;
  const hasMore = bullets.length > COLLAPSED_COUNT;
  const visible = expanded ? bullets : bullets.slice(0, COLLAPSED_COUNT);

  return (
    <div className="border border-[#2a2e5a] ">
      <div className="p-3 relative">
        <Image
          src={"/images/experience/blur-23.svg"}
          alt="Hero"
          width={1080}
          height={200}
          className="absolute bottom-0 opacity-80"
        />
        <div className="flex justify-center">
          <p className="text-xs sm:text-sm text-[#16f2b3]">{experience.date_range}</p>
        </div>
        <div className="flex items-center gap-x-8 px-3 py-5">
          <div className="text-violet-500  transition-all duration-300 hover:scale-125">
            <BsPersonWorkspace size={36} />
          </div>
          <div>
            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
              {experience.title}
            </p>
            <p className="text-base sm:text-md mb-2 font-medium ">
              {experience.company}{" "}
            </p>
            {visible.map((des, index) => (
              <p className="text-sm sm:text-base" key={index}>
                {des}
              </p>
            ))}
            {hasMore && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="flex items-center gap-1 text-[#16f2b3] text-sm font-medium mt-2 hover:underline"
              >
                {expanded ? "Show less" : "Read more"}
                {expanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
