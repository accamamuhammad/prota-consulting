import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

const FAQ_ITEMS = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, upgrade or downgrade anytime from your billing settings — changes are prorated automatically.",
  },
  {
    question: "What happens if I go over my account limit?",
    answer: "We'll give you a heads-up before you hit the cap, with the option to upgrade — we never cut off access mid-billing-cycle without warning.",
  },
  {
    question: "Do you offer discounts for startups?",
    answer: "Yes, reach out and we'll talk through a startup plan if you're pre-Series A.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees on any plan, including Enterprise.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Pricing"
        title="Pricing that scales with your account base."
        description="Pay for what you track, not for seats you don't use. No setup fees, cancel anytime."
      />
      <Pricing />
      <FAQ eyebrow="Pricing FAQ" title="Questions about plans and billing." items={FAQ_ITEMS} />
      <CTABanner title="Not sure which plan fits?" description="Book a demo and we'll help you figure out the right starting point." />
    </main>
  );
}