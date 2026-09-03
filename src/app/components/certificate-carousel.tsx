"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import type { PortfolioData } from "@/app/lib/api";

type Props = {
  certificates: PortfolioData["certificates"];
};

// Swiper needs the browser, so this piece stays a client component while
// the parent (certificate.tsx) does the data fetching.
function CertificateCarousel({ certificates }: Props) {
  const paperStyle = {
    padding: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Swiper
      spaceBetween={20}
      freeMode={true}
      navigation={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay, FreeMode, Pagination, Navigation]}
      pagination={{ clickable: true }}
      className={"flex justify-center"}
      breakpoints={{
        1500: { slidesPerView: 3 },
        700: { slidesPerView: 2 },
        400: { slidesPerView: 1 },
      }}
    >
      {certificates.map((certificate) => (
        <SwiperSlide key={certificate.id}>
          <div style={paperStyle}>
            {certificate.image && (
              <Image
                className="transition-all duration-1000 hover:scale-110 cursor-pointer"
                src={certificate.image}
                alt={certificate.title}
                width={400}
                height={300}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
            <h1 className="text-lg sm:text-xl font-bold my-2 text-center">
              {certificate.title}
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-center">
              Issued by {certificate.issuer}
            </h2>
            {certificate.link && (
              <div className="flex justify-center">
                <Link
                  href={certificate.link}
                  target="_blank"
                  className="text-center inline pb-5 text-blue-500 hover:underline block cursor-pointer"
                >
                  View Certificate
                </Link>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CertificateCarousel;
