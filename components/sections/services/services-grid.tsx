"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

type Service = {
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
};

const services: Service[] = [
  {
    title: "Enterprise Resource Planning",
    description:
      "Comprehensive ERP solution that integrates finance, operations, and supply chain management.",
    features: [
      "Real-time analytics and reporting",
      "Multi-location inventory management",
      "Automated workflow processes",
      "Custom dashboard creation",
    ],
    icon: "/icons/services/erp.svg",
    category: "Core Business",
  },
  {
    title: "Customer Relationship Management",
    description:
      "A CRM platform to manage customer interactions, pipelines, and lifecycle engagement.",
    features: [
      "360-degree customer view",
      "Sales automation tools",
      "Email and marketing integration",
      "Performance analytics",
    ],
    icon: "/icons/services/crm.svg",
    category: "Customer Success",
  },
  {
    title: "Cloud Infrastructure Management",
    description:
      "Scalable cloud infrastructure management focused on security, resilience, and cost efficiency.",
    features: [
      "Auto-scaling capabilities",
      "Advanced security protocols",
      "24/7 monitoring",
      "Disaster recovery planning",
    ],
    icon: "/icons/services/cloud.svg",
    category: "Infrastructure",
  },
  {
    title: "Data Analytics Platform",
    description:
      "Analytics that turns operational data into insights your teams can act on quickly.",
    features: [
      "Machine learning integration",
      "Custom report generation",
      "Real-time data processing",
      "Interactive visualization tools",
    ],
    icon: "/icons/services/analytics.svg",
    category: "Analytics",
  },
  {
    title: "Project Management Suite",
    description:
      "Project management tools designed for cross-functional collaboration and consistent delivery.",
    features: [
      "Agile methodology support",
      "Resource allocation tools",
      "Time tracking capabilities",
      "Team collaboration features",
    ],
    icon: "/icons/services/project.svg",
    category: "Productivity",
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade controls to protect data and support audit-ready compliance programs.",
    features: [
      "Compliance tooling and governance",
      "Advanced threat detection",
      "Access management systems",
      "Audit trail capabilities",
    ],
    icon: "/icons/services/security.svg",
    category: "Security",
  },
];

const categories = [
  "All",
  "Core Business",
  "Customer Success",
  "Infrastructure",
  "Analytics",
  "Productivity",
  "Security",
];

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return services;
    return services.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="services" className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Offerings
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  Service areas designed to scale
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  Pick a category to quickly explore the service areas we deliver most often.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === activeCategory ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="h-12 w-12 rounded-2xl border border-border bg-background flex items-center justify-center">
                    <img src={service.icon} alt={service.title} className="h-7 w-7 opacity-80" />
                  </div>

                  <span className="text-xs font-medium text-muted-foreground rounded-full border border-border bg-background px-3 py-1">
                    {service.category}
                  </span>
                </div>

                <Heading level={4} className="mt-4 mb-2">
                  {service.title}
                </Heading>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
