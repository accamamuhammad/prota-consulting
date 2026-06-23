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
        title="The story behind Loopline."
        description="We built Loopline after watching the same churn story play out across teams that had the data the whole time — it just wasn't anywhere they could see it."
      />
      <About />
      <Values />
      <Timeline />
      <CTABanner
        title="Curious if Loopline fits your stack?"
        description="A 15-minute demo is the fastest way to find out."
        buttonLabel="Book a demo →"
      />
    </main>
  );
}