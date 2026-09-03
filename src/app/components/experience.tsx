import { getPortfolioData } from "@/app/lib/api";
import ExperienceLottieWrapper from "@/app/components/experience-lottie-wrapper";
import ExperienceCard from "@/app/components/experience-card";
import Image from "next/image";

async function Experience() {
  const data = await getPortfolioData();

  return (
    <div
      id="experience"
      className="rel ative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src={"/images/experience/section.svg"}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <ExperienceLottieWrapper />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {data.experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
