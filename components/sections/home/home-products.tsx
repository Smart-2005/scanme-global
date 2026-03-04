import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const products = [
  {
    title: "ScanMe",
    description:
      "A streamlined platform for managing operations and visibility across teams.",
  },
  {
    title: "Choices",
    description:
      "A configurable suite to standardize workflows and approvals at scale.",
  },
  {
    title: "Peoples",
    description:
      "A people-first module to organize roles, access, and operational ownership.",
  },
  {
    title: "Complex",
    description:
      "A compliance-focused product to support audit trails, controls, and reporting.",
  },
];

export function HomeProducts() {
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
                  Product suite
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  Our Products
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  A focused set of SaaS products designed to deliver measurable outcomes with a clean,
                  modern user experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Modular", "Secure", "Scalable", "Enterprise UX"].map((chip) => (
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

          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-border bg-background/70 p-6 md:p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Heading level={3} className="mb-2">
                      {p.title}
                    </Heading>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center">
                    <div className="h-5 w-5 rounded-full bg-foreground/10" />
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                  <Button size="sm" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                    <Link href="/contact">Talk to Sales</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
