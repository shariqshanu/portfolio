import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer";
import { getPortfolioData } from "@/app/lib/api";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPortfolioData();
  const name = data.personal_info?.name ?? "Shariq";

  return {
    title: `${name}'s Portfolio`,
    description: data.personal_info?.about?.slice(0, 160) || `Portfolio showcasing ${name}'s projects and skills.`,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getPortfolioData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-white">
          <Navbar personalInfo={data.personal_info} />
          {children}
          <Footer personalInfo={data.personal_info} />
        </div>
      </body>
    </html>
  );
}
