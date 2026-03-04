import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

type ContactInfo = {
  title: string;
  email: string;
  phone: string;
  description: string;
  icon: string;
};

const contactInfo: ContactInfo[] = [
  {
    title: "Sales inquiries",
    email: "sales@scanmeglobal.com",
    phone: "+1 (555) 123-4567",
    description: "Explore solutions and see how ScanMe Global can support your workflow.",
    icon: "/icons/contact/mail.svg",
  },
  {
    title: "Technical support",
    email: "support@scanmeglobal.com",
    phone: "+1 (555) 987-6543",
    description: "Get help with product questions, onboarding, and account support.",
    icon: "/icons/contact/phone.svg",
  },
  {
    title: "Partnerships",
    email: "partnerships@scanmeglobal.com",
    phone: "+1 (555) 246-8135",
    description: "Discuss integrations, reseller opportunities, and collaboration.",
    icon: "/icons/contact/partner.svg",
  },
];

export function ContactFormSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-background/70 p-7 md:p-8 shadow-sm">
                <Heading level={3} className="mb-2">
                  Send us a message
                </Heading>
                <p className="text-sm text-muted-foreground mb-6">
                  Share a bit of context and we will route you to the right team.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="sales">Sales inquiry</option>
                      <option value="support">Technical support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send message
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-background/70 p-7 md:p-8 shadow-sm">
                <Heading level={3} className="mb-2">
                  Contact information
                </Heading>
                <p className="text-sm text-muted-foreground mb-6">
                  Choose the best path and we will get back quickly.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.title}
                      className="rounded-2xl border border-border bg-background p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Heading level={4} className="mb-2">
                            {info.title}
                          </Heading>
                          <p className="text-sm text-muted-foreground leading-relaxed">{info.description}</p>
                        </div>
                        <div className="h-11 w-11 rounded-2xl border border-border bg-muted/20 flex items-center justify-center">
                          <img src={info.icon} alt={info.title} className="h-7 w-7 opacity-80" />
                        </div>
                      </div>

                      <div className="mt-4 grid gap-2">
                        <a href={`mailto:${info.email}`} className="text-sm text-primary hover:underline">
                          {info.email}
                        </a>
                        <a href={`tel:${info.phone}`} className="text-sm text-primary hover:underline">
                          {info.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
