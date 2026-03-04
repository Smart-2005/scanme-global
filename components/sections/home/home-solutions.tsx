import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const items = [
  {
    title: "Operational Visibility",
    description:
      "Consolidate data across teams into a single view. Track performance, identify bottlenecks, and make decisions with confidence.",
  },
  {
    title: "Automation at Scale",
    description:
      "Reduce manual work with workflow automation that fits your process. Improve consistency, reduce errors, and accelerate delivery.",
  },
  {
    title: "Secure by Design",
    description:
      "Enterprise-grade security, access controls, and auditability so you can meet compliance requirements without slowing down.",
  },
];

export function HomeSolutions() {
  return (
    <section className="py-14 md:py-20 relative">
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
                  Solution areas
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  Our Solutions
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  Simple, modern, and enterprise-grade building blocks designed to support the
                  full lifecycle of your business operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Operational clarity", "Automation", "Audit-ready", "Role-based access"].map((chip) => (
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

          <div className="space-y-8">
            {items.map((item, idx) => (
              <div
                key={item.title}
                className="group grid gap-6 rounded-2xl border border-border bg-background/70 p-6 md:p-8 md:grid-cols-2 md:items-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <Heading level={3} className="mb-3">
                    {item.title}
                  </Heading>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <div className="aspect-[16/9] rounded-xl border border-border bg-muted/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                    <div className="absolute bottom-4 left-4 h-9 w-24 rounded-full border border-border bg-background/70" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
