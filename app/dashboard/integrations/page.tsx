import Topbar from "@/components/dashboard/Topbar";
import IntegrationsGrid from "@/components/dashboard/IntegrationsGrid";

export default function IntegrationsPage() {
  return (
    <>
      <Topbar
        title="Integrations"
        icon="◈"
        iconColor="bg-[#9B7FE8]"
        count="3 connected"
        rightAction={
          <button className="rounded-sharp bg-ink px-3 py-1.5 font-mono text-[11px] uppercase text-bg">
            + Add integration
          </button>
        }
      />
      <main className="flex-1 overflow-y-auto p-8">
        <IntegrationsGrid />
      </main>
    </>
  );
}