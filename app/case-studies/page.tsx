import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import CaseStudies from "@/components/Casestudies";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function CaseStudiesPage() {
  return (
    <main>
      <Nav />
      <PageHeader
        eyebrow="Customers"
        title="What teams see after switching on Loopline."
        description="Real outcomes from teams who went from finding out about churn at renewal to catching it weeks earlier."
      />
      <CaseStudies />
      <Testimonials />
      <CTABanner title="Want results like these?" description="See what Loopline would flag in your own accounts — free for 14 days." />
    </main>
  );
}