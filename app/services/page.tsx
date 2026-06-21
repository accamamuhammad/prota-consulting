import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

const FAQ_ITEMS = [
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most engagements run 4-8 weeks for a focused sprint, or ongoing for retainer clients. We scope timeline based on what we find during the diagnostic phase.",
  },
  {
    question: "Do you work with early-stage companies?",
    answer:
      "Yes — we work with founders pre-seed through Series B+, as well as established operators looking to fix a specific bottleneck.",
  },
  {
    question: "What industries do you typically work in?",
    answer:
      "Mostly DTC/retail, B2B SaaS, and professional services, but the underlying problems — unclear priorities, broken handoffs, pricing that doesn't match value — show up everywhere.",
  },
  {
    question: "Is the intro call really free?",
    answer:
      "Yes. It's 30 minutes to understand what's going on and tell you honestly whether we're the right fit — no obligation either way.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Services"
        title="Three ways we can help."
        description="Three focused offerings, each built to end in something you can actually run — not just a deck you file away."
      />
      <Services />
      <Process />
      <FAQ title="Common questions about working together." items={FAQ_ITEMS} />
      <CTABanner
        title="Let's find the bottleneck."
        description="Book a free intro call and we'll talk through where things stand today."
      />
    </main>
  );
}