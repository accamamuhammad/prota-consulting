import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Values from "@/components/Values";
import Timeline from "@/components/Timeline";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="About"
        title="The story behind the strategy."
        description="Prota Consulting exists because too much strategy work never gets executed. Here's the story behind why we work differently."
      />
      <About />
      <Values />
      <Timeline />
      <CTABanner
        title="Curious if we're the right fit?"
        description="A 30-minute call is the fastest way to find out."
      />
    </main>
  );
}