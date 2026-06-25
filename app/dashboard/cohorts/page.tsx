import Topbar from "@/components/dashboard/Topbar";
import NRRTrend from "@/components/dashboard/NRRTrend";
import NRRBreakdown from "@/components/dashboard/NRRBreakdown";
import CohortChart from "@/components/dashboard/CohortChart";

export default function CohortsPage() {
  return (
    <>
      <Topbar title="Cohorts" icon="▦" iconColor="bg-[#5BC29A]" count="6 active cohorts" />
      <main className="flex-1 space-y-6 overflow-y-auto p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <NRRTrend />
          <NRRBreakdown />
        </div>

        <CohortChart />
      </main>
    </>
  );
}