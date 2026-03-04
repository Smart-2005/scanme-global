import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const steps = [
  {
    step: "01",
    title: "Discovery and analysis",
    description: "We align on goals, constraints, and workflow reality before we recommend a path.",
  },
  {
    step: "02",
    title: "Configuration",
    description: "We tailor the solution to match how your teams operate, with the right roles and controls.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We deploy with clear milestones and minimal disruption, supported by documentation.",
  },
  {
    step: "04",
    title: "Training and support",
    description: "We onboard teams, measure adoption, and provide ongoing optimization support.",
  },
];

export function ServicesProcess() {
  return (
    <section className="py-14 md:py-20 relative border-y border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" /> */}
      </div>

      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Implementation
            </div>
            <Heading level={2} className="mt-3 mb-2">
              Our implementation process
            </Heading>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A practical methodology designed to ensure successful rollout, adoption, and measurable outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-border bg-background/70 p-7 shadow-sm"
              >
                <div className="text-2xl font-semibold tracking-tight">
                  <span className="text-gradient-primary">{s.step}</span>
                </div>
                <Heading level={4} className="mt-4 mb-2">
                  {s.title}
                </Heading>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
