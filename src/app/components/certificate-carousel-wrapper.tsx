"use client";

import dynamic from "next/dynamic";
import type { PortfolioData } from "@/app/lib/api";

const CertificateCarousel = dynamic(() => import("./certificate-carousel"), {
  ssr: false,
});

type Props = {
  certificates: PortfolioData["certificates"];
};

export default function CertificateCarouselWrapper({ certificates }: Props) {
  return <CertificateCarousel certificates={certificates} />;
}
