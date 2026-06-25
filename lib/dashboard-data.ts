export type RiskLevel = "high" | "medium" | "low";

export type Account = {
  name: string;
  initials: string;
  avatarColor: string;
  plan: string;
  mrr: string;
  owner: string;
  risk: RiskLevel;
  lastActive: string;
};

export const ACCOUNTS: Account[] = [
  { name: "Northbeam", initials: "NB", avatarColor: "bg-[#4FA0E9]", plan: "Growth", mrr: "$1,490", owner: "Dara O.", risk: "high", lastActive: "6 days ago" },
  { name: "Fluxwave", initials: "FW", avatarColor: "bg-[#5BC29A]", plan: "Enterprise", mrr: "$4,200", owner: "Jide A.", risk: "low", lastActive: "Today" },
  { name: "Cardinal Labs", initials: "CL", avatarColor: "bg-[#E97A4F]", plan: "Growth", mrr: "$1,490", owner: "Dara O.", risk: "medium", lastActive: "2 days ago" },
  { name: "Tendril", initials: "TD", avatarColor: "bg-[#9B7FE8]", plan: "Starter", mrr: "$490", owner: "Lara K.", risk: "low", lastActive: "Today" },
  { name: "Hatchway", initials: "HW", avatarColor: "bg-[#E9C84C]", plan: "Growth", mrr: "$1,490", owner: "Jide A.", risk: "high", lastActive: "9 days ago" },
  { name: "Driftline", initials: "DL", avatarColor: "bg-[#4FA0E9]", plan: "Enterprise", mrr: "$4,200", owner: "Lara K.", risk: "low", lastActive: "Yesterday" },
  { name: "Mosswell", initials: "MW", avatarColor: "bg-[#5BC29A]", plan: "Starter", mrr: "$490", owner: "Dara O.", risk: "medium", lastActive: "3 days ago" },
  { name: "Ardenfield", initials: "AF", avatarColor: "bg-[#E97A4F]", plan: "Growth", mrr: "$1,490", owner: "Jide A.", risk: "low", lastActive: "Today" },
  { name: "Pinegate", initials: "PG", avatarColor: "bg-[#9B7FE8]", plan: "Starter", mrr: "$490", owner: "Lara K.", risk: "high", lastActive: "11 days ago" },
  { name: "Westmark", initials: "WM", avatarColor: "bg-[#E9C84C]", plan: "Enterprise", mrr: "$4,200", owner: "Dara O.", risk: "low", lastActive: "Today" },
  { name: "Calloway", initials: "CW", avatarColor: "bg-[#4FA0E9]", plan: "Growth", mrr: "$1,490", owner: "Jide A.", risk: "medium", lastActive: "4 days ago" },
  { name: "Brightwell", initials: "BW", avatarColor: "bg-[#5BC29A]", plan: "Starter", mrr: "$490", owner: "Lara K.", risk: "low", lastActive: "Yesterday" },
];

export type AlertSeverity = "high" | "medium" | "info";

export type Alert = {
  account: string;
  avatarColor: string;
  initials: string;
  message: string;
  severity: AlertSeverity;
  time: string;
};

export const ALERTS: Alert[] = [
  { account: "Northbeam", avatarColor: "bg-[#4FA0E9]", initials: "NB", message: "Usage dropped 64% over the last 7 days", severity: "high", time: "2h ago" },
  { account: "Hatchway", avatarColor: "bg-[#E9C84C]", initials: "HW", message: "No login activity in 9 days", severity: "high", time: "5h ago" },
  { account: "Pinegate", avatarColor: "bg-[#9B7FE8]", initials: "PG", message: "Payment failed — card expired", severity: "high", time: "8h ago" },
  { account: "Cardinal Labs", avatarColor: "bg-[#E97A4F]", initials: "CL", message: "Key admin seat removed from workspace", severity: "medium", time: "1d ago" },
  { account: "Mosswell", avatarColor: "bg-[#5BC29A]", initials: "MW", message: "Support ticket flagged as \"considering alternatives\"", severity: "medium", time: "1d ago" },
  { account: "Calloway", avatarColor: "bg-[#4FA0E9]", initials: "CW", message: "Usage down 22% week-over-week", severity: "medium", time: "2d ago" },
  { account: "Driftline", avatarColor: "bg-[#4FA0E9]", initials: "DL", message: "Upgraded from Growth to Enterprise", severity: "info", time: "2d ago" },
  { account: "Ardenfield", avatarColor: "bg-[#E97A4F]", initials: "AF", message: "Added 3 new seats this week", severity: "info", time: "3d ago" },
  { account: "Westmark", avatarColor: "bg-[#E9C84C]", initials: "WM", message: "Hit 90% of plan usage limit", severity: "info", time: "4d ago" },
];

export const ALERT_SEVERITY_STYLES: Record<AlertSeverity, string> = {
  high: "bg-[#D14343]",
  medium: "bg-[#C99A2E]",
  info: "bg-indigo",
};

export const ALERT_SEVERITY_LABEL: Record<AlertSeverity, string> = {
  high: "Risk",
  medium: "Watch",
  info: "Update",
};

export const RISK_STYLES: Record<RiskLevel, string> = {
  high: "bg-[#FBE9E9] text-[#D14343]",
  medium: "bg-[#FBF3DE] text-[#9A6B12]",
  low: "bg-[#E7F5EE] text-[#2F9165]",
};

export const RISK_DOT: Record<RiskLevel, string> = {
  high: "bg-[#D14343]",
  medium: "bg-[#C99A2E]",
  low: "bg-[#2F9165]",
};

export const RISK_LABEL: Record<RiskLevel, string> = {
  high: "At risk",
  medium: "Watch",
  low: "Healthy",
};