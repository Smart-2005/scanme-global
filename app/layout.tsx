import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ScanMe Global - Global Solutions for Modern Business",
    template: "%s | ScanMe Global",
  },
  description: "ScanMe Global provides cutting-edge SaaS products designed to transform your enterprise operations and drive growth. Discover our comprehensive business solutions.",
  keywords: ["SaaS", "Business Solutions", "Enterprise Software", "Global Solutions", "Digital Transformation"],
  authors: [{ name: "ScanMe Global" }],
  creator: "ScanMe Global",
  publisher: "ScanMe Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scanmeglobal.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scanmeglobal.com",
    title: "ScanMe Global - Global Solutions for Modern Business",
    description: "ScanMe Global provides cutting-edge SaaS products designed to transform your enterprise operations and drive growth.",
    siteName: "ScanMe Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScanMe Global - Global Solutions for Modern Business",
    description: "ScanMe Global provides cutting-edge SaaS products designed to transform your enterprise operations and drive growth.",
    creator: "@scanmeglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
