"use client";
import Lottie from "lottie-react";
import lottieFile from "@/app/lottie/code.json";

// Small client-only wrapper — Lottie needs the browser, so it can't live
// directly inside the async server component that fetches the data.
function ExperienceLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
}

export default ExperienceLottie;
