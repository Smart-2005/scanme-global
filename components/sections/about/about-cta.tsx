import { BaseCta } from "@/components/ui/base-cta";

export function AboutCta() {
  return (
    <BaseCta
      title="Build your operational advantage"
      description="Explore services, review the solution areas, and see how ScanMe Global can fit your workflow."
      primaryCta={{ label: "View Services", href: "/services" }}
      secondaryCta={{ label: "View Products", href: "/" }}
      secondaryVariant="secondary"
    />
  );
}
