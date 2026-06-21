import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

const FAQ_ITEMS = [
  {
    question: "What's the fastest way to reach you?",
    answer:
      "For anything time-sensitive, booking a call directly is faster than email — you'll get a response in the call itself rather than waiting on a thread.",
  },
  {
    question: "How quickly do you respond to messages?",
    answer:
      "Within one business day, usually faster. If it's urgent, mention that in your message.",
  },
  {
    question: "Do you take on projects outside Nigeria?",
    answer:
      "Yes — we work with clients globally and are fully remote-friendly. Time zone overlap is the only real constraint.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk it through."
        description="Send a few lines about what you're working on, or book a free call directly if you'd rather talk it through."
      />
      <Contact />
      <FAQ eyebrow="Before you write in" title="A few things people usually ask." items={FAQ_ITEMS} />
    </main>
  );
}