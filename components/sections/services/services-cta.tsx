import { BaseCta } from "@/components/ui/base-cta";

export function ServicesCta() {
  return (
    <BaseCta
      title="Ready to get started?"
      description="Tell us what you're trying to achieve and we'll recommend the best service path."
      primaryCta={{ label: "Schedule Consultation", href: "/services" }}
      secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      secondaryVariant="secondary"
    />
  );
}
