import { getPortfolioData } from "@/app/lib/api";
import ProjectsList from "@/app/components/projects-list";

async function Projects() {
  const data = await getPortfolioData();

  return (
    <div>
      <div
        id="projects"
        className="rela tive z-50 border-t my-12 lg:my-24 border-[#25213b]"
      >
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>
      <div>
        <div className="  mx-auto mb-8">
          <ProjectsList projects={data.projects} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
