import Topbar from "@/components/dashboard/Topbar";
import AccountsView from "@/components/dashboard/AccountsView";

export default function AccountsPage() {
  return (
    <>
      <Topbar title="Accounts" icon="▣" iconColor="bg-[#4FA0E9]" count="142 accounts" />
      <AccountsView />
    </>
  );
}