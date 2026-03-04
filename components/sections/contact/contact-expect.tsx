import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const items = [
  {
    title: "Quick response",
    description: "We respond to all inquiries within 24 hours during business days.",
    icon: "/icons/contact/bolt.svg",
  },
  {
    title: "Expert consultation",
    description: "Get guidance from experienced consultants aligned to your use case.",
    icon: "/icons/contact/target.svg",
  },
  {
    title: "No obligation",
    description: "Explore options with no pressure and clear next steps.",
    icon: "/icons/contact/handshake.svg",
  },
];

export function ContactExpect() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Expectations
            </div>
            <Heading level={2} className="mt-3 mb-2">
              What to expect
            </Heading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A clear response process designed for busy business teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background/70 p-7 shadow-sm"
              >
                <div className="h-12 w-12 rounded-2xl border border-border bg-background flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="h-7 w-7 opacity-80" />
                </div>
                <Heading level={4} className="mt-4 mb-2">
                  {item.title}
                </Heading>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-background/70 p-7 md:p-8 shadow-sm">
            <Heading level={3} className="mb-3">
              Business hours
            </Heading>
            <p className="text-sm text-muted-foreground mb-2">
              Monday - Friday: 9:00 AM - 6:00 PM (Local time)
            </p>
            <p className="text-sm text-muted-foreground">
              Emergency support: Available 24/7 for all customers
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
