import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact/contact-cta";
import { ContactExpect } from "@/components/sections/contact/contact-expect";
import { ContactFormSection } from "@/components/sections/contact/contact-form";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactOffices } from "@/components/sections/contact/contact-offices";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ScanMe Global. Contact our team for sales, support, or partnership inquiries. We're here to help transform your business.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Offices Section */}
      <ContactOffices />

      {/* Response Time Section */}
      <ContactExpect />

      {/* CTA Section */}
      <ContactCta />
    </>
  );
}
