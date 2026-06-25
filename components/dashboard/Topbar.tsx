"use client";

export default function Topbar({
  title = "Overview",
  icon = "◆",
  iconColor = "bg-indigo",
  count,
  rightAction,
}: {
  title?: string;
  icon?: string;
  iconColor?: string;
  count?: string;
  rightAction?: React.ReactNode;
}) {
  return (
    <div className="border-b border-line bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2 font-mono text-xs text-ink-soft">
          <span className={`flex h-4 w-4 items-center justify-center rounded-[3px] text-[9px] text-white ${iconColor}`}>
            {icon}
          </span>
          {title}
          <span className="text-ink-soft/50">⌄</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-sharp border border-line bg-bg px-3 py-1.5 font-mono text-[11px] text-ink-soft">
            ⌘K &nbsp; Search accounts
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo font-mono text-xs text-white">
            JD
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-line px-8 py-3">
        <div className="flex items-center gap-1.5 font-mono text-[12px] text-ink">
          All {title} {count && <span className="text-ink-soft">· {count}</span>}
          <span className="text-ink-soft/50">⌄</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase text-ink-soft">
          {rightAction ?? (
            <>
              <button className="hover:text-ink">Filter</button>
              <button className="hover:text-ink">Sort</button>
              <button className="hover:text-ink">Options</button>
              <span className="text-line">|</span>
              <button className="rounded-sharp bg-ink px-3 py-1.5 text-bg">+ New</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}