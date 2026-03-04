import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const values = [
  {
    title: "Innovation",
    description: "We iterate quickly and build solutions that stay practical, reliable, and modern.",
    icon: "/icons/about/innovation.svg",
  },
  {
    title: "Integrity",
    description: "We earn trust through transparent delivery, honest communication, and responsible design.",
    icon: "/icons/about/integrity.svg",
  },
  {
    title: "Excellence",
    description: "We hold a high bar for performance, usability, and long-term maintainability.",
    icon: "/icons/about/excellence.svg",
  },
  {
    title: "Customer focus",
    description: "We listen closely and build with real operational needs at the center.",
    icon: "/icons/about/customer.svg",
  },
];

export function AboutValues() {
  return (
    <section className="py-14 md:py-20 relative border-y border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" /> */}
      </div>

      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Values
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  Principles that guide our work
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  We aim for a consistent, enterprise-ready standard in the way we build, communicate, and support.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Trust", "Clarity", "Quality", "Outcomes"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-12 w-12 rounded-2xl border border-border bg-background flex items-center justify-center">
                  <img src={value.icon} alt={value.title} className="h-7 w-7 opacity-80" />
                </div>
                <Heading level={4} className="mt-4 mb-2">
                  {value.title}
                </Heading>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
