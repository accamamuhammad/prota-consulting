import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

const FAQ_ITEMS = [
  {
    question: "What's included in the Growth Sprint?",
    answer:
      "Weekly working sessions, a full written strategy document, direct Slack/email access during the engagement, and check-ins on implementation — not just planning.",
  },
  {
    question: "Can I upgrade from Intro Session to a Sprint later?",
    answer:
      "Yes — the Intro Session fee is credited toward a Growth Sprint if you book one within 30 days.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "For the Retainer tier, yes. Growth Sprints and Intro Sessions are paid upfront to secure the slot.",
  },
  {
    question: "What currency are prices in?",
    answer:
      "Pricing is processed in Naira (NGN) via Paystack. International clients can pay with major cards through the same checkout.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing."
        description="From a single working session to ongoing advisory — transparent pricing, no surprise scope creep."
      />
      <Pricing />
      <FAQ eyebrow="Pricing FAQ" title="Questions about cost and scope." items={FAQ_ITEMS} />
      <CTABanner
        title="Not sure which tier fits?"
        description="Book a free intro call and we'll help you figure out the right starting point."
      />
    </main>
  );
}