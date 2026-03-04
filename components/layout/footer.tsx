import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
    products: [
      { name: "ScanMe", href: "/services" },
      { name: "Choices", href: "/services" },
      { name: "Peoples", href: "/services" },
      { name: "Compx", href: "/services" },
    ],
    resources: [
      { name: "Support", href: "/contact" },
      { name: "Security", href: "/services" },
      { name: "Implementation", href: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-muted/25">
      <Container>
        <div className="py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                  <div className="h-full w-full rounded-[15px] bg-background flex items-center justify-center">
                    <span className="text-sm font-semibold tracking-tight text-foreground">SG</span>
                  </div>
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-foreground">ScanMe Global</div>
                  <div className="text-xs text-muted-foreground">Global Solutions</div>
                </div>
              </Link>

              <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
                Enterprise SaaS solutions designed for clarity, trust, and operational scale.
                Built to help teams streamline processes and move faster.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="text-xs font-medium text-foreground">Contact</div>
                  <div className="mt-2 text-sm text-muted-foreground">sales@scanmeglobal.com</div>
                  <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
                  <ul className="space-y-2">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Products</h3>
                  <ul className="space-y-2">
                    {navigation.products.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
                  <ul className="space-y-2">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
                  <ul className="space-y-2">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-background p-5 sm:p-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-medium text-foreground">Security</div>
                    <div className="mt-1 text-sm text-muted-foreground">Enterprise-grade controls</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Reliability</div>
                    <div className="mt-1 text-sm text-muted-foreground">99.9% uptime target</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">Support</div>
                    <div className="mt-1 text-sm text-muted-foreground">Guided onboarding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-muted-foreground">
                © {currentYear} ScanMe Global. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
