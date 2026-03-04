import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const steps = [
  {
    title: "Discover",
    description: "We learn your workflow, constraints, and goals to define what success looks like.",
  },
  {
    title: "Design",
    description: "We map the solution path with the right controls, roles, and operational visibility.",
  },
  {
    title: "Deliver",
    description: "We implement with clarity and provide onboarding so teams can move with confidence.",
  },
];

export function AboutProcess() {
  return (
    <section className="py-14 md:py-20 relative border-y border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" /> */}
      </div>

      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Delivery approach
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  A process designed for business teams
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  A straightforward approach that balances speed, security, and long-term maintainability.
                </p>
              </div>

              <div className="h-12 w-12 rounded-2xl border border-border bg-background flex items-center justify-center">
                <img src="/icons/about/process.svg" alt="Process" className="h-7 w-7 opacity-80" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-background/70 p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-muted-foreground">Step {idx + 1}</div>
                  <div className="h-8 w-8 rounded-2xl border border-border bg-gradient-to-br from-primary/15 to-secondary/15" />
                </div>
                <Heading level={4} className="mt-4 mb-2">
                  {step.title}
                </Heading>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
