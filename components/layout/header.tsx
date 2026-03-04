"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                <div className="h-full w-full rounded-[11px] bg-background flex items-center justify-center">
                  <span className="text-sm font-semibold tracking-tight text-foreground">SG</span>
                </div>
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-foreground">ScanMe Global</div>
              <div className="text-xs text-muted-foreground">Global Solutions</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2 rounded-full border border-border bg-muted/20 p-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="dark" size="sm">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="dark"
              size="sm"
              onClick={() => setIsMenuOpen(true)}
              className="h-10 w-10 p-0 rounded-full"
              aria-label="Open menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </Container>

      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <div
          className="absolute w-screen h-screen inset-0 bg-foreground/30"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        ></div>
        <div className="absolute rounded-lg right-0 top-0 w-[86%] max-w-sm bg-background border-l border-border">
          <div className="flex items-center justify-between p-3 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                <div className="h-full w-full rounded-[11px] bg-background flex items-center justify-center">
                  <span className="text-sm font-semibold tracking-tight text-foreground">SG</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">ScanMe Global</div>
                <div className="text-xs text-muted-foreground">Global Solutions</div>
              </div>
            </div>
            <Button
              variant="dark"
              size="sm"
              onClick={() => setIsMenuOpen(false)}
              className="h-10 w-10 p-0 rounded-full mr-1 sm:mr-3"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          <div className="p-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-muted/40 text-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <Button asChild variant="dark" className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Talk to Sales
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Request a Demo
                </Link>
              </Button>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-muted/20 p-4">
              <div className="text-xs font-medium text-foreground">Enterprise-ready</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Security, auditability, and scale designed for modern business teams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
