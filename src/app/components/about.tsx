import Image from "next/image";
import { getPortfolioData } from "@/app/lib/api";

async function AboutSection() {
  const data = await getPortfolioData();
  const info = data.personal_info;

  return (
    <div id="about" className="   my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">{info?.about}</p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          {info?.profile_image && (
            <Image
              src={info.profile_image}
              width={280}
              height={280}
              alt={info.name}
              className="rounded-lg transition-all duration-1000 grayscale  hover:scale-110 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
