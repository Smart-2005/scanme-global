import { BaseCta } from "@/components/ui/base-cta";

export function ContactCta() {
  return (
    <BaseCta
      title="Start the conversation"
      description="If you already know what you need, explore services or review product areas before reaching out."
      primaryCta={{ label: "View Services", href: "/services" }}
      secondaryCta={{ label: "View Products", href: "/" }}
      secondaryVariant="secondary"
    />
  );
}
