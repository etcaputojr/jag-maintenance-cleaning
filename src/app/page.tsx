import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Proof } from "@/components/Proof";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JAG Maintenance & Cleaning LLC",
  url: "https://www.jagmaintenance.com/",
  logo: "https://www.jagmaintenance.com/jag-logo.png",
  description:
    "Brooklyn-based street cleaning, power washing, and window cleaning serving Business Improvement Districts across New York City.",
  foundingDate: "1999",
  telephone: "+1-917-416-6472",
  email: "jwren859@aol.com",
  areaServed: [
    "Manhattan",
    "Brooklyn",
    "Queens",
    "The Bronx",
    "Staten Island",
  ],
  knowsAbout: [
    "Commercial street cleaning",
    "Sidewalk power washing",
    "Commercial window cleaning",
    "Business Improvement District maintenance",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-917-416-6472",
    email: "jwren859@aol.com",
    contactType: "sales",
    areaServed: "New York City",
    availableLanguage: "English",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
