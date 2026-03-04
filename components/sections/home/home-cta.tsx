import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BaseCta } from "@/components/ui/base-cta";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function HomeCta() {
  return (
    <section className="py-14 md:py-20 relative border-t border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" /> */}
      </div>
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Let’s talk about your next step
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  Get started with ScanMe Global
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  Whether you need answers, a clear implementation plan, or a product walkthrough - our team will guide you.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Fast response", "Enterprise guidance", "No obligation", "Clear next steps"].map((chip) => (
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

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/70 p-7 md:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-2xl border border-border bg-primary/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4v8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <Heading level={3} className="mb-2">
                    Talk to our team
                  </Heading>
                  <p className="text-muted-foreground mb-6">
                    Share your goals and current process. We’ll respond with a clear plan and recommended next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/services">Browse Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/70 p-7 md:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-2xl border border-border bg-secondary/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <Heading level={3} className="mb-2">
                    Request a guided walkthrough
                  </Heading>
                  <p className="text-muted-foreground mb-6">
                    Get a short, focused demo aligned to your workflow - built for business stakeholders and teams.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <Link href="/contact">Request a Demo</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/about">Learn about us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <BaseCta
              asSection={false}
              eyebrow="Next steps"
              title="Ready to move faster?"
              description="Explore our services and start building your next operational advantage - without unnecessary complexity."
              primaryCta={{ label: "View Services", href: "/services" }}
              secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
              secondaryVariant="secondary"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
