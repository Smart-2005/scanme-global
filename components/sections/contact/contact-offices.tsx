import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
 
type Office = {
  city: string;
  address: string;
  state: string;
  country: string;
};
 
const offices: Office[] = [
  {
    city: "New York",
    address: "123 Business Ave, Suite 100",
    state: "New York, NY 10001",
    country: "United States",
  },
  {
    city: "London",
    address: "456 Tech Park, Building 2",
    state: "London, EC1A 1BB",
    country: "United Kingdom",
  },
  {
    city: "Singapore",
    address: "789 Innovation Hub, Level 15",
    state: "Singapore 238873",
    country: "Singapore",
  },
];
 
export function ContactOffices() {
  return (
    <section className="py-14 md:py-20 relative border-y border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
        {/* <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" /> */}
      </div>
 
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Locations
                </div>
                <Heading level={2} className="mt-3 mb-2">
                  Global offices
                </Heading>
                <p className="text-muted-foreground max-w-2xl">
                  Find us at our global locations. We are always happy to connect with clients and partners.
                </p>
              </div>
 
              <div className="h-12 w-12 rounded-2xl border border-border bg-background flex items-center justify-center">
                <img src="/icons/contact/pin.svg" alt="Locations" className="h-7 w-7 opacity-80" />
              </div>
            </div>
          </div>
 
          <div className="grid gap-6 md:grid-cols-3">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl border border-border bg-background/70 p-7 shadow-sm"
              >
                <Heading level={4} className="mb-2">
                  {office.city}
                </Heading>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {office.address}
                  <br />
                  {office.state}
                  <br />
                  {office.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}