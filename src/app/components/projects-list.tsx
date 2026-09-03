"use client";

import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import type { PortfolioData } from "@/app/lib/api";

const DEFAULT_VISIBLE = 4;

type Props = {
  projects: PortfolioData["projects"];
};

function ProjectsList({ projects }: Props) {
  const [showAll, setShowAll] = useState(false);
  const hasMore = projects.length > DEFAULT_VISIBLE;
  const visible = showAll ? projects : projects.slice(0, DEFAULT_VISIBLE);

  return (
    <div>
      <div className="grid grid-cols-1   rounded-lg md:grid-cols-2 lg:grid-cols-2  md:gap-10 gap-4 lg:gap-16 md:mx-4 mx-0 lg:mx-8">
        {visible.map((item) => (
          <div key={item.id}>
            <div
              className="bg-[#161a2f] rounded-lg shadow-md flex flex-col h-full"
              style={{ borderRadius: "15px" }}
            >
              {item.image && (
                <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-lg shrink-0">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-4 flex flex-col flex-1">
                <h3 className="  text-base sm:text-xl mb-2 font-medium ">
                  {item.heading}
                </h3>

                <p className="   text-base sm:text-md mb-2 font-medium">
                  {item.detail}
                </p>

                <div className="mt-4">
                  <h2 className="text-lg  md:text-xl  font-semibold mb-2">
                    Tech Used:
                  </h2>
                  <p className="mb-1">
                    {item.techused
                      .map((tech) => tech.charAt(0).toUpperCase() + tech.slice(1))
                      .join(", ")}
                  </p>
                </div>

                <div className="mt-4 flex  gap-3">
                  {item.demo && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
                    >
                      Live Demo
                    </a>
                  )}

                  {item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center px-2 py-2 gap-1 bg-gray-800 text-white rounded-lg shadow-md">
                        <BsGithub size={20} />
                        Source Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8 mb-4">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-2 bg-[#1a1443] hover:bg-[#241a5e] border border-[#2a2e5a] text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            {showAll ? "Show Less" : `Show More (${projects.length - DEFAULT_VISIBLE} more)`}
            {showAll ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
