import Topbar from "@/components/dashboard/Topbar";
import AlertsView from "@/components/dashboard/AlertsView";

export default function AlertsPage() {
  return (
    <>
      <Topbar title="Alerts" icon="▲" iconColor="bg-[#E97A4F]" count="9 active" />
      <AlertsView />
    </>
  );
}