import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function ContactHero() {
  return (
    <section className="py-16 md:py-24 relative border-b border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
        <div className="absolute left-1/2 -top-24 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-border bg-background/70 p-8 md:p-12 shadow-sm text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Contact
            </div>

            <Heading level={1} className="mt-3 mb-4">
              Get in <span className="text-gradient-primary">Touch</span>
            </Heading>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Our team is here to help you find the right path.
              Reach out and we will respond within one business day.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["Sales", "Support", "Partnerships", "Global offices"].map((chip) => (
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
      </Container>
    </section>
  );
}
