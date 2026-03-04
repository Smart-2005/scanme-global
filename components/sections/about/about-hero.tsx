import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function AboutHero() {
  return (
    <section className="py-16 md:py-24 relative border-b border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        {/* <div className="absolute left-1/2 -top-24 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" /> */}
      </div>

      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border bg-background/70 p-8 md:p-12 shadow-sm">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Company overview
                </div>

                <Heading level={1} className="mt-3 mb-4">
                  About
                  <span className="text-gradient-primary"> ScanMe Global</span>
                </Heading>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We build enterprise SaaS products that help business teams operate with clarity.
                  Our focus is reliable delivery, security, and a user experience that feels simple even
                  when the operations behind it are complex.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Global delivery", "Enterprise security", "Clean UX", "Guided onboarding"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Link href="/">View Products</Link>
                  </Button>
                </div>
              </div>

              <div className="w-full max-w-md">
                <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="font-medium text-foreground">Operating Principles</div>
                      <div className="text-muted-foreground">How we build and deliver</div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-secondary/20" />
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Security and trust first",
                      "Clarity over complexity",
                      "Reliable outcomes",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
