import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const stats = [
  { number: "10,000+", label: "Business users supported" },
  { number: "50+", label: "Countries served" },
  { number: "99.9%", label: "Uptime target" },
];

export function AboutStats() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Impact
            </div>
            <Heading level={2} className="mt-3 mb-2">
              Our impact by numbers
            </Heading>
            <p className="text-muted-foreground max-w-2xl">
              Metrics that reflect our commitment to reliable delivery and enterprise readiness.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-background/70 p-7 shadow-sm"
              >
                <div className="text-3xl font-semibold tracking-tight text-foreground">
                  <span className="text-gradient-primary">{s.number}</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
