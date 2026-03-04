import type { Metadata } from "next";
import { HomeClients } from "@/components/sections/home/home-clients";
import { HomeCta } from "@/components/sections/home/home-cta";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeProducts } from "@/components/sections/home/home-products";
import { HomeSolutions } from "@/components/sections/home/home-solutions";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Transform your business with ScanMe Global's cutting-edge SaaS solutions. Discover enterprise-grade software designed for modern businesses.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeProducts />
      <HomeClients />
      <HomeCta />
    </>
  );
}
