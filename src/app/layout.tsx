import type { Metadata, Viewport } from "next";
import "@fontsource-variable/jost";
import "@fontsource-variable/cinzel";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kalemcare.com"),
  title: {
    default: "KALEM Home Care Services · Non-medical home care in Ontario",
    template: "%s · KALEM Home Care Services",
  },
  description:
    "Compassionate, dependable non-medical home care and support across Ontario. Companionship, personal support, meal and home support, respite and flexible care.",
  openGraph: {
    title: "KALEM Home Care Services",
    description: "Care You Can Count On. Dignity You Can Feel.",
    url: "https://kalemcare.com",
    siteName: "KALEM Home Care Services",
    locale: "en_CA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4A0868",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Browser extensions (e.g. focus-visible helpers) add attributes to <html> before React loads.
    // This only silences attribute mismatches on this one element, not on the rest of the page.
    <html lang="en-CA" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
