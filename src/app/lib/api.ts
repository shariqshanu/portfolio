// app/lib/api.ts
// Fetches all portfolio content from the Laravel admin backend.
// Set NEXT_PUBLIC_API_URL in .env.local, e.g.:
// NEXT_PUBLIC_API_URL=https://your-laravel-backend-url.com

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type PersonalInfo = {
  name: string;
  about: string;
  profile_image: string | null;
  email: string;
  phone: string;
  location: string;
  github_url: string;
  linkedin_url: string;
  resume_url: string | null;
  typewriter_roles: string[];
};

export type PortfolioData = {
  personal_info: PersonalInfo | null;
  skills: { id: number; name: string; image: string | null }[];
  experiences: {
    id: number;
    title: string;
    company: string;
    description: string[];
    date_range: string;
  }[];
  educations: { id: number; title: string; institution: string; date_range: string }[];
  projects: {
    id: number;
    heading: string;
    detail: string;
    image: string | null;
    techused: string[];
    demo: string;
    github: string;
  }[];
  certificates: { id: number; title: string; issuer: string; image: string | null; link: string }[];
};

// revalidate: 60 -> Next.js refetches every 60 seconds (ISR), so content
// edited in the admin panel shows up without a redeploy.

export async function getPortfolioData(): Promise<PortfolioData> {
  const res = await fetch(`${API_URL}/api/portfolio`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch portfolio data");
  }

  return res.json();
}
