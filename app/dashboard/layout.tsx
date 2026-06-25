import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-bg">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-line bg-indigo-soft px-8 py-2.5">
          <span className="font-mono text-[11px] uppercase text-indigo">
            ◆ You're viewing sample data — this is what your own dashboard would look like
          </span>
          <Link href="/checkout" className="font-mono text-[11px] uppercase text-indigo underline-offset-2 hover:underline">
            Start free trial →
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}