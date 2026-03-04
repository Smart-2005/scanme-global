import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const logos = [
  { name: "Gateway", src: "/clients/gateway.svg" },
  { name: "Pinnacle", src: "/clients/pinnacle.svg" },
  { name: "Northstar", src: "/clients/northstar.svg" },
  { name: "Atlas", src: "/clients/atlas.svg" },
  { name: "Horizon", src: "/clients/horizon.svg" },
];

export function HomeClients() {
  const track = [...logos, ...logos];

  return (
    <section className="py-14 md:py-20 relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-transparent" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" /> */}
      </div>
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Trusted by business teams
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  Our Clients
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  Recognized by organizations that prioritize security, clarity, and operational reliability.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {[
                  "Enterprise-ready",
                  "99.9% uptime target",
                  "Secure by design",
                  "Guided onboarding",
                ].map((chip) => (
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

          <div className="marquee relative rounded-2xl border border-border bg-background/60 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />

            <div className="py-6">
              <div className="marquee-track gap-6 pr-6">
                {track.map((logo, idx) => (
                  <div
                    key={`${logo.name}-${idx}`}
                    className="group h-14 w-[180px] sm:w-[210px] flex items-center justify-center rounded-xl border border-border bg-background px-4 transition-shadow hover:shadow-md"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 w-auto opacity-70 grayscale transition-opacity group-hover:opacity-90"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
