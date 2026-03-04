import type { Metadata } from "next";
import { AboutCta } from "@/components/sections/about/about-cta";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutMission } from "@/components/sections/about/about-mission";
import { AboutProcess } from "@/components/sections/about/about-process";
import { AboutStats } from "@/components/sections/about/about-stats";
import { AboutValues } from "@/components/sections/about/about-values";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ScanMe Global's mission, values, and the team behind our innovative SaaS solutions for modern businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <AboutHero />

      {/* Mission Section */}
      <AboutMission />

      {/* Values Section */}
      <AboutValues />

      {/* Stats Section */}
      <AboutStats />

      {/* Process Section */}
      <AboutProcess />

      {/* CTA Section */}
      <AboutCta />
    </>
  );
}
