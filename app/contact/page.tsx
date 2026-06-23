import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

const FAQ_ITEMS = [
  {
    question: "What's the fastest way to reach the team?",
    answer: "For anything sales-related, booking a demo is faster than email. For support questions on an existing account, use the in-app chat once you're logged in.",
  },
  {
    question: "How quickly do you respond to messages?",
    answer: "Within one business day, usually faster during US/EU business hours.",
  },
  {
    question: "Do you work with companies outside the US?",
    answer: "Yes — Loopline is used by teams across North America, Europe, and Africa. Billing supports both USD and NGN.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Contact"
        title="Questions before you start a trial?"
        description="Send us a message, or book a demo directly if you'd rather walk through it live."
      />
      <Contact />
      <FAQ eyebrow="Before you write in" title="A few things people usually ask." items={FAQ_ITEMS} />
    </main>
  );
}