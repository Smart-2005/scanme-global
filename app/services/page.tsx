import type { Metadata } from "next";
import { ServicesCta } from "@/components/sections/services/services-cta";
import { ServicesGrid } from "@/components/sections/services/services-grid";
import { ServicesHero } from "@/components/sections/services/services-hero";
import { ServicesProcess } from "@/components/sections/services/services-process";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore ScanMe Global's comprehensive suite of SaaS solutions designed to streamline your business operations and drive growth.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Process Section */}
      <ServicesProcess />

      {/* CTA Section */}
      <ServicesCta />
    </>
  );
}
