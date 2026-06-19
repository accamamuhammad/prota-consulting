import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/Casestudies";
import Booking from "@/components/Booking";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Booking />
      <Pricing />
      <Contact />
    </main>
  );
}