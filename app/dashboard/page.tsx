import Topbar from "@/components/dashboard/Topbar";
import KPICards from "@/components/dashboard/KPICards";
import AccountsTable from "@/components/dashboard/AccountsTable";
import AlertFeed from "@/components/dashboard/Alertfeed";
import CohortChart from "@/components/dashboard/CohortChart";

export default function DashboardOverviewPage() {
  return (
    <>
      <Topbar title="Overview" icon="◆" iconColor="bg-indigo" count="142 accounts" />
      <main className="flex-1 space-y-6 overflow-y-auto p-8">
        <KPICards />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
          <AccountsTable limit={7} />
          <AlertFeed limit={5} />
        </div>

        <CohortChart />
      </main>
    </>
  );
}