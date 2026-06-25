import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

const FAQ_ITEMS = [
  {
    question: "How long does setup take?",
    answer: "Most teams are live within a day. Connecting Stripe and your product analytics takes about 10 minutes; the rest is Loopline scoring your existing accounts.",
  },
  {
    question: "Do you require a minimum number of accounts?",
    answer: "No — Starter works for teams with a few hundred tracked accounts, and you can upgrade as you grow.",
  },
  {
    question: "What data sources does Loopline need?",
    answer: "At minimum, billing data from Stripe. Product usage data (via Segment or a direct API) makes the risk scoring meaningfully more accurate.",
  },
  {
    question: "Is the free trial really free?",
    answer: "Yes, 14 days, full access, no card required to start. You'll only be asked for billing details if you choose to continue after the trial.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Product"
        title="Everything you need to see churn coming."
        description="Three core pieces, built to work together — risk scoring, real-time alerts, and the dashboards your leadership team actually asks for."
      />
      <Services />
      <Process />
      <FAQ title="Common questions about the product." items={FAQ_ITEMS} />
      <CTABanner title="Ready to see your own data in it?" description="Start a free trial or book a demo — either way, no commitment." />
    </main>
  );
}