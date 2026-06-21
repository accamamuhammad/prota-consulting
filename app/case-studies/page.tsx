import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function CaseStudiesPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Case Studies"
        title="Proof, not promises."
        description="A look at the kind of outcomes we aim for — and what clients say about getting there."
      />
      <CaseStudies />
      <Testimonials />
      <CTABanner
        title="Want results like these?"
        description="Tell us what you're working on and we'll tell you honestly if we can help."
      />
    </main>
  );
}