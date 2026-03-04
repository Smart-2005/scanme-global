import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        {/* <div className="absolute left-1/2 -top-24 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" /> */}
      </div>
      <Container>
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-border bg-background/70 p-8 md:p-12 shadow-sm">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Enterprise SaaS for business teams
                  </div>
                  <Heading level={1} className="mb-4">
                    Global Solutions for
                    <span className="text-gradient-primary"> Modern Business</span>
                  </Heading>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    ScanMe Global – Global Solutions delivers enterprise-grade SaaS products
                    built for clarity, scale, and trust. Streamline operations, improve
                    visibility, and move faster with software your teams actually enjoy.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Secure by design", "Scalable", "Clear UX", "Fast onboarding"].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" className="w-full sm:w-auto">
                      Request a Demo
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                      <Link href="/services">Explore Services</Link>
                    </Button>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="font-semibold text-foreground">99.9%</div>
                      <div className="text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Enterprise</div>
                      <div className="text-muted-foreground">Security</div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Global</div>
                      <div className="text-muted-foreground">Coverage</div>
                    </div>
                  </div>
                </div>

                <div className="lg:pl-6">
                  <div className="rounded-2xl border border-border bg-background/60 p-6 shadow-sm">
                    <div className="relative w-full aspect-[4/3] rounded-xl border border-border bg-muted/30">
                      <Image 
                        src="/images/home/scanme-dashboard.png" 
                        alt="Dashboard preview" 
                        className="object-cover rounded-xl"
                        fill
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        <div className="font-medium text-foreground">Operational Dashboard</div>
                        <div className="text-muted-foreground">Example preview</div>
                      </div>
                      <div className="h-10 w-10 rounded-2xl border border-border bg-gradient-to-br from-primary/20 to-secondary/20" />
                    </div>
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
