import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type CtaLink = {
  label: string;
  href: string;
};

type BaseCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  primaryVariant?: "default" | "secondary" | "outline" | "dark";
  secondaryVariant?: "default" | "secondary" | "outline" | "dark";
  children?: ReactNode;
  asSection?: boolean;
  className?: string;
};

function BaseCtaCard({
  eyebrow = "Next steps",
  title,
  description,
  primaryCta,
  secondaryCta,
  primaryVariant = "default",
  secondaryVariant = "secondary",
  children,
  className,
}: Omit<BaseCtaProps, "asSection">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background/70 p-8 md:p-10 shadow-sm relative overflow-hidden",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        {/* <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-2xl" /> */}
      </div>

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </div>
          <Heading level={2} className="mt-3 mb-2">
            {title}
          </Heading>
          <p className="text-muted-foreground max-w-2xl">{description}</p>

          {children ? <div className="mt-5">{children}</div> : null}
        </div>

        <div className="grid gap-3 md:flex md:justify-end md:items-center">
          <Button asChild variant={primaryVariant} className="w-full md:w-auto whitespace-nowrap">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta ? (
            <Button asChild variant={secondaryVariant} className="w-full md:w-auto whitespace-nowrap">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function BaseCta({ asSection = true, className, ...props }: BaseCtaProps) {
  if (!asSection) {
    return <BaseCtaCard {...props} className={className} />;
  }

  return (
    <section className="py-14 md:py-20 relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" /> */}
      </div>

      <Container>
        <div className="mx-auto max-w-7xl">
          <BaseCtaCard {...props} className={className} />
        </div>
      </Container>
    </section>
  );
}
