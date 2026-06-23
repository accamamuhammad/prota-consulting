import Nav from "@/components/Nav";
import BookedBanner from "@/components/BookedBanner";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Integrations from "@/components/Integrations";
import CaseStudies from "@/components/Casestudies";
import Booking from "@/components/Booking";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <BookedBanner />
      <Nav />
      <Hero />
      <LogosBar />
      <About />
      <Services />
      <Integrations />
      <CaseStudies />
      <Booking />
      <Pricing />
      <Contact />
    </main>
  );
}