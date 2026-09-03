"use client";

import dynamic from "next/dynamic";

// ssr: false fully excludes this from server rendering — it will only ever
// run in the browser. This is what actually fixes the "document is not
// defined" crash; just having 'use client' on the inner component wasn't
// enough, because Next.js still renders client components once on the
// server to produce the initial HTML.
const ExperienceLottie = dynamic(() => import("./experience-lottie"), {
  ssr: false,
});

export default function ExperienceLottieWrapper() {
  return <ExperienceLottie />;
}
