import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Download,
  LayoutDashboard,
  LogOut,
  MoonStar,
  PanelLeftClose,
  PanelLeftOpen,
  RefreshCcw,
  Search,
  SlidersHorizontal,
  SunMedium,
  Trash2,
  UserRoundCheck,
  X,
} from "lucide-react";
import { adminRequest } from "../../lib/enquiryApi";

/* ─────────────────────────── TOKENS ─────────────────────────── */
// Single source of truth for the visual system. Change values here, not
// scattered utility strings throughout the JSX.

const T = {
  page: "bg-slate-50 dark:bg-[#0b1120]",
  surface: "bg-white dark:bg-[#0f172a]",
  surfaceMuted: "bg-slate-50 dark:bg-slate-900/40",
  border: "border-slate-200/80 dark:border-slate-800",
  divider: "divide-slate-200/80 dark:divide-slate-800",
  text: "text-slate-900 dark:text-slate-50",
  textMuted: "text-slate-500 dark:text-slate-400",
  textFaint: "text-slate-400 dark:text-slate-500",
  accent: "text-blue-600 dark:text-blue-400",
  accentBg: "bg-blue-600",
  accentBgHover: "hover:bg-blue-700",
  accentSoftBg: "bg-blue-50 dark:bg-blue-500/10",
  focusRing: "focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500",
};

const categories = [
  "contact",
  "foundation",
  "junior-college",
  "school-admissions",
  "mpc-iit",
  "bipc-neet",
  "test-prep",
  "iit-jee-short-term",
  "iit-jee-long-term",
  "neet-short-term",
  "neet-long-term",
];

const categoryGroups = [
  { title: "IIT Track", keys: ["mpc-iit", "iit-jee-short-term", "iit-jee-long-term"] },
  { title: "NEET Track", keys: ["bipc-neet", "neet-short-term", "neet-long-term"] },
  { title: "Foundation & General", keys: ["foundation", "junior-college", "school-admissions", "test-prep", "contact"] },
];

function formatLabel(category) {
  if (!category) return "-";
  return category.replaceAll("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function enquiryName(item) {
  return item.name || item.parentName || item.studentName || item.payload?.parentName || item.payload?.studentName || item.payload?.firstName || "-";
}

function enquiryCourse(item) {
  if (item.courseCategory) return `${item.courseCategory}${item.courseType ? ` · ${item.courseType}` : ""}`;
  return formatLabel(item.category);
}

function enquirySource(item) {
  return item.source === "chat" ? "💬 Chat" : "📝 Form";
}

function formatKey(key) {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatValue(value) {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.length ? value.join(", ") : "-";
  if (typeof value === "object") {
    return value;
  }
  return String(value);
}

function IconButton({ icon: Icon, onClick, title, tone = "default", size = 16 }) {
  const tones = {
    default: `${T.border} ${T.textMuted} hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400`,
    danger: `${T.border} ${T.textMuted} hover:border-rose-300 hover:text-rose-600 dark:hover:text-rose-400`,
    active: "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${tones[tone]}`}
    >
      <Icon size={size} />
    </button>
  );
}

function StatusDot({ status }) {
  const map = {
    completed: "bg-emerald-500",
    "in-progress": "bg-blue-500",
  };
  return <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${map[status] || "bg-slate-400"}`} />;
}

function StatusPill({ status }) {
  const label = status || "new";
  const toneMap = {
    completed: "text-emerald-700 dark:text-emerald-400",
    "in-progress": "text-blue-700 dark:text-blue-400",
  };
  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 text-xs font-medium ${toneMap[status] || `${T.textMuted}`}`}>
      <StatusDot status={status} />
      <span className="capitalize">{label}</span>
    </span>
  );
}

function PayloadDetails({ payload, hiddenKeys = [] }) {
  if (!payload || typeof payload !== "object" || Object.keys(payload).length === 0) {
    return <p className={`text-sm ${T.textMuted}`}>No additional details submitted.</p>;
  }

  return (
    <dl className={`divide-y ${T.divider}`}>
      {Object.entries(payload).filter(([key]) => !hiddenKeys.includes(key)).map(([key, rawValue]) => {
        const value = formatValue(rawValue);
        return (
          <div key={key} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-3 py-2.5 text-sm first:pt-0 last:pb-0">
            <dt className={`${T.textMuted} break-words`}>{formatKey(key)}</dt>
            {typeof value === "object" ? (
              <dd className={`min-w-0 rounded-lg border ${T.border} p-3`}>
                <PayloadDetails payload={value} />
              </dd>
            ) : (
              <dd className={`min-w-0 break-words font-medium ${T.text}`}>{value}</dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}

function MiniBar({ label, value, total }) {
  const width = total ? Math.max(6, (value / total) * 100) : 0;
  return (
    <div className="min-w-0 space-y-1.5">
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className={`${T.textMuted} min-w-0 truncate`}>{label}</span>
        <span className={`${T.text} shrink-0 font-semibold tabular-nums`}>{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
        <div className="h-1.5 rounded-full bg-blue-600 transition-all" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, note }) {
  return (
    <div className={`rounded-2xl border ${T.border} ${T.surface} p-5`}>
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium uppercase tracking-wide ${T.textFaint}`}>{title}</span>
        <Icon size={15} className={T.textFaint} />
      </div>
      <p className={`mt-3 text-[28px] font-semibold leading-none tracking-tight ${T.text} tabular-nums`}>{value}</p>
      {note && <p className={`mt-2 text-xs ${T.textMuted}`}>{note}</p>}
    </div>
  );
}

function RowActions({ item, updatingId, onView, onToggleComplete, onDelete }) {
  return (
    <div className="flex items-center gap-1.5">
      <button type="button" onClick={() => onView(item)} className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${T.accent} hover:underline`}>
        View
      </button>
      <IconButton
        icon={CheckCircle2}
        onClick={(event) => onToggleComplete(event, item)}
        title={item.status === "completed" ? "Unmark completed" : "Mark completed"}
        tone={item.status === "completed" ? "active" : "default"}
      />
      <IconButton icon={Trash2} onClick={(event) => onDelete(event, item._id)} title="Delete enquiry" tone="danger" />
    </div>
  );
}

function EnquiryCard({ item, updatingId, onView, onToggleComplete, onDelete }) {
  return (
    <div className={`rounded-xl border ${T.border} p-4`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{enquiryName(item)}</p>
          <p className={`mt-0.5 truncate text-xs ${T.textMuted}`}>{enquiryCourse(item)}</p>
        </div>
        <StatusPill status={item.status} />
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <span className={`${T.textFaint}`}>{item.phone || "-"}</span>
        <span className={`${T.textFaint}`}>{new Date(item.createdAt).toLocaleDateString()}</span>
      </div>
      <div className={`mt-3 flex items-center justify-between border-t ${T.border} pt-3`}>
        <RowActions item={item} updatingId={updatingId} onView={onView} onToggleComplete={onToggleComplete} onDelete={onDelete} />
      </div>
    </div>
  );
}

function SimpleEnquiryCard({ item, onView }) {
  return (
    <div className={`flex items-center justify-between gap-3 rounded-xl border ${T.border} p-4`}>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{enquiryName(item)}</p>
        <p className={`truncate text-xs ${T.textMuted}`}>{enquiryCourse(item)}</p>
      </div>
      <button type="button" onClick={() => onView(item)} className={`shrink-0 text-xs font-semibold ${T.accent} hover:underline`}>
        View
      </button>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        {eyebrow && <p className={`text-[11px] font-semibold uppercase tracking-wide ${T.textFaint}`}>{eyebrow}</p>}
        <h3 className={`mt-0.5 text-[15px] font-semibold ${T.text}`}>{title}</h3>
        {description && <p className={`mt-0.5 text-sm ${T.textMuted}`}>{description}</p>}
      </div>
      {action}
    </div>
  );
}

export default function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains("dark"));
  const [activeTab, setActiveTab] = useState("overview");
  const [summary, setSummary] = useState({ total: 0, completed: 0, pending: 0, byCategory: [] });
  const [monthly, setMonthly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [byCategory, setByCategory] = useState([]);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ from: "", to: "", category: "", source: "", userType: "", status: "" });
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const search = new URLSearchParams();
      if (filters.from) search.set("from", filters.from);
      if (filters.to) search.set("to", filters.to);
      if (filters.category) search.set("category", filters.category);
      if (filters.source) search.set("source", filters.source);
      if (filters.userType) search.set("userType", filters.userType);
      if (filters.status) search.set("status", filters.status);
      if (query) search.set("q", query);

      const [summaryData, rowsData, monthlyData, dailyData, categoryData] = await Promise.all([
        adminRequest("/enquiries/admin/summary"),
        adminRequest(`/enquiries/admin?${search.toString()}`),
        adminRequest("/enquiries/admin/analytics/monthly"),
        adminRequest("/enquiries/admin/analytics/daily"),
        adminRequest("/enquiries/admin/analytics/by-category"),
      ]);

      setSummary(summaryData);
      setRows(rowsData.enquiries || []);
      setMonthly(monthlyData.data || []);
      setDaily(dailyData.data || []);
      setByCategory(categoryData.data || []);
      if (selected) {
        const updated = (rowsData.enquiries || []).find((item) => item._id === selected._id);
        if (updated) setSelected(updated);
      }
    } catch (err) {
      setError(err?.response?.status === 401 ? "You are not logged in. Please sign in again." : (err.message || "Failed to load enquiries."));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const filteredRows = useMemo(() => rows, [rows]);

  const updateStatus = async (event, id, status) => {
    event?.preventDefault?.();
    setUpdatingId(id);
    setError("");
    try {
      const result = await adminRequest(`/enquiries/admin/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      setSelected(result.enquiry);
      setRows((current) => current.map((item) => (item._id === id ? result.enquiry : item)));
      await load();
    } catch (err) {
      console.error("updateStatus failed:", err);
      setError(err?.response?.status === 401 ? "You are not logged in. Please sign in again." : (err.message || "Failed to update status."));
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleCompletedStatus = async (event, item) => {
    const nextStatus = item.status === "completed" ? "new" : "completed";
    await updateStatus(event, item._id, nextStatus);
  };

  const deleteRow = async (event, id) => {
    event?.preventDefault?.();
    try {
      await adminRequest(`/enquiries/admin/${id}`, { method: "DELETE" });
      setRows((current) => current.filter((item) => item._id !== id));
      if (selected?._id === id) setSelected(null);
      await load();
    } catch (err) {
      console.error("deleteRow failed:", err);
      setError(err?.response?.status === 401 ? "You are not logged in. Please sign in again." : (err.message || "Failed to delete enquiry."));
    }
  };

  const totalMonthly = monthly.reduce((sum, item) => sum + item.total, 0);
  const maxMonthly = Math.max(1, ...monthly.map((item) => item.total));

  const navItems = [
    ["overview", "Overview", LayoutDashboard],
    ["analytics", "Analytics", BarChart3],
    ["completed", "Completed", CheckCircle2],
    ["pending", "Pending", UserRoundCheck],
  ];

  const tabTitles = {
    overview: ["Overview", "Snapshot of enquiry volume and category mix"],
    analytics: ["Analytics", "Monthly and daily submission trends"],
    completed: ["Completed", "Enquiries marked resolved"],
    pending: ["Pending", "Enquiries awaiting follow-up"],
  };

  const showSidebarLabels = sidebarOpen || mobileSidebarOpen;
  const completedRows = filteredRows.filter((item) => item.status === "completed");
  const pendingRows = filteredRows.filter((item) => item.status !== "completed");
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className={`min-h-screen overflow-x-hidden ${T.page} ${T.text} antialiased`}>
      <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">

        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-72 max-w-[85vw] flex-col border-r ${T.border} ${T.surface} transition-transform duration-200 ease-out lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:translate-x-0 ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } ${sidebarOpen ? "lg:w-64" : "lg:w-[72px]"}`}
        >
          <div className={`flex h-16 shrink-0 items-center gap-3 border-b ${T.border} px-4`}>
            {sidebarOpen ? <img src="/favicon_io (1)/android-chrome-512x512.png" alt="Ignite" className="h-8 w-8 shrink-0 rounded-lg object-contain" /> : null}
            
            {showSidebarLabels && (
              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-semibold">Ignite Admin</p>
                <p className={`truncate text-xs ${T.textFaint}`}>Enquiries</p>
              </div>
            )}
            <button
              type="button"
              onClick={() => setSidebarOpen((v) => !v)}
              className={`ml-auto hidden h-7 w-7 shrink-0 items-center justify-center rounded-md ${T.textFaint} hover:bg-slate-100 dark:hover:bg-slate-800 lg:flex`}
            >
              {sidebarOpen ? <PanelLeftClose size={15} /> : <PanelLeftOpen size={15} />}
            </button>
          </div>

          <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
            {navItems.map(([key, label, Icon]) => {
              const isActive = activeTab === key;
              return (
                <button
                  type="button"
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setMobileSidebarOpen(false);
                  }}
                  className={`relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    isActive ? `${T.accentSoftBg} ${T.accent}` : `${T.textMuted} hover:bg-slate-100 dark:hover:bg-slate-800/60`
                  }`}
                >
                  {isActive && <span className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-r-full bg-blue-600" />}
                  <Icon size={17} className="shrink-0" />
                  {showSidebarLabels && <span className="truncate">{label}</span>}
                </button>
              );
            })}
          </nav>

          <div className={`shrink-0 space-y-1 border-t ${T.border} p-3`}>
            <button
              type="button"
              onClick={() => setDarkMode((v) => !v)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${T.textMuted} transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/60`}
            >
              {darkMode ? <SunMedium size={17} /> : <MoonStar size={17} />}
              {showSidebarLabels && <span>{darkMode ? "Light mode" : "Dark mode"}</span>}
            </button>
            <button
              type="button"
              onClick={() => adminRequest("/admin/logout", { method: "POST" }).finally(() => { window.location.assign("/admin/login"); })}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10`}
            >
              <LogOut size={17} />
              {showSidebarLabels && <span>Log out</span>}
            </button>
          </div>
        </aside>

        {mobileSidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
          />
        )}

        <div className="relative z-0 flex min-h-0 min-w-0 flex-1 flex-col dark:bg">

          <header className={`sticky top-0 z-20 flex h-16 shrink-0 items-center gap-3 border-b ${T.border} ${T.surface}/95 ${T.accentSoftBg} px-4 backdrop-blur sm:px-6`}>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${T.textMuted} hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden`}
            >
              <PanelLeftOpen size={16} />
            </button>

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-[15px] font-semibold leading-none">{tabTitles[activeTab][0]}</h2>
            </div>

            <div className={`hidden items-center gap-2 rounded-lg border ${T.border} px-3 py-1.5 text-sm sm:flex ${T.focusRing.replace("focus:", "focus-within:")}`}>
              <Search size={14} className={T.textFaint} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && load()}
                placeholder="Search enquiries"
                className="w-40 bg-transparent outline-none placeholder:text-slate-400 lg:w-56"
              />
            </div>

            <IconButton icon={RefreshCcw} onClick={load} title="Refresh" />

            <a
              href={`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api"}/enquiries/admin/export`}
              className={`hidden items-center gap-1.5 rounded-lg border ${T.border} px-3 py-1.5 text-sm font-medium ${T.textMuted} transition-colors hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 sm:inline-flex`}
            >
              <Download size={14} /> Export
            </a>
          </header>

          <main className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:py-8">

              <p className={`-mt-1 text-sm ${T.textMuted}`}>{tabTitles[activeTab][1]}</p>

              {error && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900/60 dark:bg-rose-500/10 dark:text-rose-400">
                  {error}
                </div>
              )}



{activeTab === "overview" && (
  <section className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
    <StatCard title="Total" value={summary.total} icon={LayoutDashboard} note="All-time records" />
    <StatCard title="Completed" value={summary.completed} icon={CheckCircle2} note="Resolved by admin" />
    <StatCard title="Pending" value={summary.pending} icon={UserRoundCheck} note="Needs follow-up" />
    <StatCard title="Categories" value={summary.byCategory?.length || 0} icon={SlidersHorizontal} note="Active form sources" />
  </section>
)}

{(activeTab === "overview" || activeTab === "analytics") && (
  <section className={`rounded-2xl border ${T.border} ${T.surface} p-5`}>
    <SectionHeading eyebrow="Breakdown" title="By category" />
    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
      {categoryGroups.map((group) => {
        const items = summary.byCategory.filter((item) => group.keys.includes(item._id));
        return (
          <div key={group.title} className={`rounded-xl border ${T.border} p-4`}>
            <p className={`text-xs font-semibold uppercase tracking-wide ${T.textFaint}`}>{group.title}</p>
            <div className="mt-3 space-y-3">
              {items.length === 0 && <p className={`text-sm ${T.textMuted}`}>No records yet.</p>}
              {items.map((item) => (
                <MiniBar key={item._id} label={formatLabel(item._id)} value={item.count} total={summary.total} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
)}
{(activeTab === "overview" || activeTab === "analytics") && (
  <section className={`rounded-2xl border ${T.border} ${T.surface} p-5`}>
    <SectionHeading
      eyebrow="Filters"
      title="Narrow the record set"
      action={
        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
              <button type="button" onClick={() => setFilters({ from: "", to: "", category: "", source: "", userType: "", status: "" })} className={`text-xs font-medium ${T.textMuted} hover:underline`}>
              Clear ({activeFilterCount})
            </button>
          )}
          <button type="button" onClick={load} className={`rounded-lg ${T.accentBg} ${T.accentBgHover} px-3.5 py-1.5 text-xs font-semibold text-white transition-colors`}>
            Apply
          </button>
        </div>
      }
    />
    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
      <input
        type="date"
        value={filters.from}
        onChange={(e) => setFilters((prev) => ({ ...prev, from: e.target.value }))}
        className={`w-full rounded-lg border ${T.border} ${T.surface} px-3 py-2 text-sm ${T.focusRing}`}
      />
      <input
        type="date"
        value={filters.to}
        onChange={(e) => setFilters((prev) => ({ ...prev, to: e.target.value }))}
        className={`w-full rounded-lg border ${T.border} ${T.surface} px-3 py-2 text-sm ${T.focusRing}`}
      />
      <select
        value={filters.category}
        onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
        className={`w-full rounded-lg border ${T.border} ${T.surface} px-3 py-2 text-sm ${T.focusRing}`}
      >
        <option value="">All categories</option>
        {categories.map((category) => <option key={category} value={category}>{formatLabel(category)}</option>)}
      </select>
      <select value={filters.source} onChange={(e) => setFilters((prev) => ({ ...prev, source: e.target.value }))} className={`w-full rounded-lg border ${T.border} ${T.surface} px-3 py-2 text-sm ${T.focusRing}`}>
        <option value="">All sources</option>
        <option value="chat">💬 Chat</option>
        <option value="website-form">📝 Form</option>
      </select>
      <select value={filters.userType} onChange={(e) => setFilters((prev) => ({ ...prev, userType: e.target.value }))} className={`w-full rounded-lg border ${T.border} ${T.surface} px-3 py-2 text-sm ${T.focusRing}`}>
        <option value="">All types</option>
        <option value="parent">Parent</option>
        <option value="student">Student</option>
      </select>
      <select
        value={filters.status}
        onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
        className={`w-full rounded-lg border ${T.border} ${T.surface} px-3 py-2 text-sm ${T.focusRing}`}
      >
        <option value="">All statuses</option>
        <option value="new">New</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  </section>
)}

              {activeTab === "completed" && (
                <section className={`overflow-hidden rounded-2xl border ${T.border} ${T.surface}`}>
                  <div className="hidden md:block">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <tbody className={`divide-y ${T.divider}`}>
                        {completedRows.map((item) => (
                          <tr key={item._id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="px-5 py-3.5 font-medium">{item.name || "-"}</td>
                            <td className={`px-5 py-3.5 ${T.textMuted}`}>{formatLabel(item.category)}</td>
                            <td className="px-5 py-3.5 text-right">
                              <button type="button" onClick={() => setSelected(item)} className={`text-xs font-semibold ${T.accent} hover:underline`}>View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-2.5 p-4 md:hidden">
                    {completedRows.length === 0 && <p className={`text-sm ${T.textMuted}`}>No completed enquiries yet.</p>}
                    {completedRows.map((item) => (
                      <SimpleEnquiryCard key={item._id} item={item} onView={setSelected} />
                    ))}
                  </div>
                </section>
              )}

              {activeTab === "pending" && (
                <section className={`overflow-hidden rounded-2xl border ${T.border} ${T.surface}`}>
                  <div className="hidden md:block">
                    <table className="w-full min-w-[520px] text-left text-sm">
                      <tbody className={`divide-y ${T.divider}`}>
                        {pendingRows.map((item) => (
                          <tr key={item._id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="px-5 py-3.5 font-medium">{item.name || "-"}</td>
                            <td className={`px-5 py-3.5 ${T.textMuted}`}>{formatLabel(item.category)}</td>
                            <td className="px-5 py-3.5 text-right">
                              <button type="button" onClick={() => setSelected(item)} className={`text-xs font-semibold ${T.accent} hover:underline`}>View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-2.5 p-4 md:hidden">
                    {pendingRows.length === 0 && <p className={`text-sm ${T.textMuted}`}>Nothing pending right now.</p>}
                    {pendingRows.map((item) => (
                      <SimpleEnquiryCard key={item._id} item={item} onView={setSelected} />
                    ))}
                  </div>
                </section>
              )}

              <section className={`overflow-hidden rounded-2xl border ${T.border} ${T.surface}`}>
                <div className={`flex items-center justify-between border-b ${T.border} px-5 py-4`}>
                  <div>
                    <h3 className="text-[15px] font-semibold">All enquiries</h3>
                    <p className={`mt-0.5 text-sm ${T.textMuted}`}>{filteredRows.length} record{filteredRows.length === 1 ? "" : "s"}</p>
                  </div>
                </div>

                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[920px] text-left text-sm">
                    <thead>
                      <tr className={`border-b ${T.border} text-xs font-medium uppercase tracking-wide ${T.textFaint}`}>
                        <th className="px-5 py-3 font-medium">Date</th>
                        <th className="px-5 py-3 font-medium">Course</th>
                        <th className="px-5 py-3 font-medium">Name</th>
                        <th className="px-5 py-3 font-medium">Type</th>
                        <th className="px-5 py-3 font-medium">Source</th>
                        <th className="px-5 py-3 font-medium">Phone</th>
                        <th className="px-5 py-3 font-medium">Status</th>
                        <th className="px-5 py-3 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${T.divider}`}>
                      {filteredRows.map((item) => (
                        <tr key={item._id} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td className={`px-5 py-3.5 ${T.textMuted} tabular-nums`}>{new Date(item.createdAt).toLocaleDateString()}</td>
                          <td className={`px-5 py-3.5 ${T.textMuted}`}>{enquiryCourse(item)}</td>
                          <td className="px-5 py-3.5 font-medium">{enquiryName(item)}</td>
                          <td className={`px-5 py-3.5 ${T.textMuted}`}>{item.userType ? formatLabel(item.userType) : "—"}</td>
                          <td className={`px-5 py-3.5 ${T.textMuted}`}>{enquirySource(item)}</td>
                          <td className={`px-5 py-3.5 ${T.textMuted} tabular-nums`}>{item.phone || "-"}</td>
                          <td className="px-5 py-3.5"><StatusPill status={item.status} /></td>
                          <td className="px-5 py-3.5">
                            <div className="flex justify-end">
                              <RowActions item={item} updatingId={updatingId} onView={setSelected} onToggleComplete={toggleCompletedStatus} onDelete={deleteRow} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2.5 p-4 md:hidden">
                  {filteredRows.length === 0 && <p className={`text-sm ${T.textMuted}`}>No enquiries found.</p>}
                  {filteredRows.map((item) => (
                    <EnquiryCard
                      key={item._id}
                      item={item}
                      updatingId={updatingId}
                      onView={setSelected}
                      onToggleComplete={toggleCompletedStatus}
                      onDelete={deleteRow}
                    />
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/30">
          <div className={`flex h-full w-full max-w-none flex-col border-l ${T.border} ${T.surface} shadow-2xl sm:max-w-md`}>
            <div className={`flex shrink-0 items-center justify-between border-b ${T.border} px-5 py-4`}>
              <div className="min-w-0">
                <p className={`text-[11px] font-semibold uppercase tracking-wide ${T.textFaint}`}>Enquiry details</p>
                <h3 className="mt-0.5 truncate text-base font-semibold">{selected.name || "Enquiry"}</h3>
              </div>
              <button type="button" onClick={() => setSelected(null)} className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${T.textMuted} hover:bg-slate-100 dark:hover:bg-slate-800`}>
                <X size={16} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
              <div className="grid grid-cols-2 gap-3">
                <div className={`rounded-xl border ${T.border} p-3`}>
                  <p className={`text-[11px] uppercase tracking-wide ${T.textFaint}`}>Type</p>
                  <p className="mt-1 truncate text-sm font-semibold">{selected.userType ? formatLabel(selected.userType) : "—"}</p>
                </div>
                <div className={`rounded-xl border ${T.border} p-3`}>
                  <p className={`text-[11px] uppercase tracking-wide ${T.textFaint}`}>Source</p>
                  <p className="mt-1 truncate text-sm font-semibold">{enquirySource(selected)}</p>
                </div>
              </div>

              <div className="mt-5">
                <p className={`text-[11px] font-semibold uppercase tracking-wide ${T.textFaint}`}>Submitted details</p>
                <div className={`mt-2 rounded-xl border ${T.border} p-4`}>
                  <PayloadDetails payload={selected.payload} hiddenKeys={selected.source === "chat" ? ["campus"] : []} />
                </div>
              </div>
            </div>

            <div className={`shrink-0 border-t ${T.border} p-4`}>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={(event) => updateStatus(event, selected._id, "new")}
                  disabled={updatingId === selected._id}
                  className={`rounded-lg border ${T.border} px-3 py-2.5 text-sm font-medium ${T.textMuted} transition-colors hover:border-blue-400 hover:text-blue-600 disabled:opacity-50 dark:hover:text-blue-400`}
                >
                  Mark new
                </button>
                <button
                  type="button"
                  onClick={(event) => updateStatus(event, selected._id, "in-progress")}
                  disabled={updatingId === selected._id}
                  className={`rounded-lg border ${T.border} px-3 py-2.5 text-sm font-medium ${T.textMuted} transition-colors hover:border-blue-400 hover:text-blue-600 disabled:opacity-50 dark:hover:text-blue-400`}
                >
                  In progress
                </button>
              </div>
              <button
                type="button"
                onClick={(event) => toggleCompletedStatus(event, selected)}
                disabled={updatingId === selected._id}
                className={`mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-white transition-colors disabled:opacity-50 ${
                  selected.status === "completed" ? "bg-emerald-600 hover:bg-emerald-700" : `${T.accentBg} ${T.accentBgHover}`
                }`}
              >
                {selected.status === "completed" ? (
                  "Unmark completed"
                ) : (
                  <>
                    Mark completed <ArrowUpRight size={14} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border ${T.border} ${T.surface} px-4 py-2 text-sm font-medium shadow-lg`}>
          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-blue-600" />
          Loading
        </div>
      )}
    </div>
  );
}
