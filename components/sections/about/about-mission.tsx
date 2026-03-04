import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function AboutMission() {
  return (
    <section className="py-14 md:py-20 relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" /> */}
      </div>

      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Mission
              </div>

              <Heading level={2} className="mt-3 mb-2">
                Built for modern business operations
              </Heading>

              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower teams with software that simplifies complex operations and
                makes execution predictable. We focus on clarity, measurable outcomes, and security that
                scales as your organization grows.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Operational visibility", "Workflow automation", "Audit-ready controls", "Team alignment"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-background/70 px-5 py-4 shadow-sm"
                    >
                      <div className="text-xs font-medium text-foreground">Focus</div>
                      <div className="mt-1 text-sm text-muted-foreground">{item}</div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-background/70 p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Heading level={3} className="mb-2">
                      Global impact
                    </Heading>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Serving distributed teams with consistent delivery practices and clear implementation paths.
                    </p>
                  </div>
                  <div className="h-11 w-11 rounded-2xl border border-border bg-muted/20 flex items-center justify-center">
                    <img src="/icons/about/globe.svg" alt="Global" className="h-7 w-7 opacity-80" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-background px-4 py-4">
                    <div className="text-sm font-semibold text-foreground">50+</div>
                    <div className="text-xs text-muted-foreground">Countries served</div>
                  </div>
                  <div className="rounded-xl border border-border bg-background px-4 py-4">
                    <div className="text-sm font-semibold text-foreground">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime target</div>
                  </div>
                  <div className="rounded-xl border border-border bg-background px-4 py-4">
                    <div className="text-sm font-semibold text-foreground">Enterprise</div>
                    <div className="text-xs text-muted-foreground">Security posture</div>
                  </div>
                  <div className="rounded-xl border border-border bg-background px-4 py-4">
                    <div className="text-sm font-semibold text-foreground">Guided</div>
                    <div className="text-xs text-muted-foreground">Onboarding</div>
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
