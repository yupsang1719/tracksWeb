import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  LayoutDashboard,
  Ticket,
  Star,
  CalendarDays,
  LogOut,
  Menu,
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  Plus,
  Download,
  Upload,
} from "lucide-react";

// ── Constants & helpers ───────────────────────────────────────

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
});

const BLANK_MAJOR = { title: "", date: "", time: "", tag: "", image: "", description: "", deadline: "" };
const BLANK_REGULAR = { day: "", title: "", host: "", flyer: "", description: "", order: 0 };

const NAV = [
  { id: 0, label: "Overview",        icon: LayoutDashboard },
  { id: 1, label: "Bookings",        icon: Ticket },
  { id: 2, label: "Major Events",    icon: Star },
  { id: 3, label: "Regular Events",  icon: CalendarDays },
];

const inputCls  = "w-full p-2 rounded-lg bg-[#0a1929] border border-[#1e3a52] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#6D9999]";
const labelCls  = "block text-xs text-[#6D9999] mb-1 font-medium";

// ── Image upload ──────────────────────────────────────────────
function ImageUpload({ value, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setError("");
    setUploading(true);
    const form = new FormData();
    form.append("image", file);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
        body: form,
      });
      const data = await res.json();
      if (!res.ok) return setError(data.message || "Upload failed");
      onChange(data.url);
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      {value && (
        <img src={value} alt="preview" className="w-full h-40 object-cover rounded-lg border border-[#1e3a52]" />
      )}
      <label className={`flex items-center gap-2 cursor-pointer w-full p-2 rounded-lg border border-dashed border-[#2A5B8A] hover:border-[#6D9999] transition text-sm text-gray-400 hover:text-white ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
        <Upload size={16} />
        {uploading ? "Uploading..." : value ? "Replace image" : "Upload image"}
        <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </label>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}

// ── Stat card ─────────────────────────────────────────────────
function StatCard({ label, value, sub, color = "#6D9999" }) {
  return (
    <div className="bg-[#0d2d45] rounded-xl p-5 border border-[#1e3a52]">
      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
      {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

// ── Event form ────────────────────────────────────────────────
function EventForm({ form, setForm, onSubmit, onCancel, isEditing, error, fields }) {
  return (
    <form onSubmit={onSubmit} className="bg-[#0a1929] border border-[#1e3a52] rounded-xl p-6 mb-6 space-y-4">
      <h4 className="font-semibold text-[#6D9999] text-sm uppercase tracking-wider">
        {isEditing ? "Edit Event" : "New Event"}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map(({ key, label, placeholder, type, required, span }) => (
          <div key={key} className={span ? "sm:col-span-2" : ""}>
            <label className={labelCls}>{label}{required ? " *" : ""}</label>
            {type === "image" ? (
              <ImageUpload value={form[key]} onChange={(url) => setForm({ ...form, [key]: url })} />
            ) : type === "textarea" ? (
              <textarea
                className={`${inputCls} h-28 resize-y`}
                placeholder={placeholder}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                required={required}
              />
            ) : (
              <input
                type={type || "text"}
                className={inputCls}
                placeholder={placeholder}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                required={required}
              />
            )}
          </div>
        ))}
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <div className="flex gap-3 pt-1">
        <button type="submit" className="bg-[#6D9999] text-white px-5 py-2 rounded-lg hover:bg-[#5b8686] transition text-sm font-medium">
          {isEditing ? "Save Changes" : "Create Event"}
        </button>
        <button type="button" onClick={onCancel} className="bg-[#1e3a52] text-white px-5 py-2 rounded-lg hover:bg-[#2A5B8A] transition text-sm">
          Cancel
        </button>
      </div>
    </form>
  );
}

// ── Main component ────────────────────────────────────────────
export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // ── Bookings ────────────────────────────────────────────────
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/admin/bookings")
      .then((r) => r.json())
      .then(setBookings)
      .catch(console.error);
  }, []);

  const filteredBookings = filter === "All" ? bookings : bookings.filter((b) => b.event === filter);
  const totalTickets = filteredBookings.reduce((sum, b) => sum + b.tickets, 0);
  const allTickets   = bookings.reduce((sum, b) => sum + b.tickets, 0);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`${filter} Bookings`, 14, 20);
    autoTable(doc, {
      startY: 30,
      head: [["Name", "Email", "Tickets", "Ticket No", "Payment ID"]],
      body: filteredBookings.map((b) => [b.name, b.email, b.tickets, b.ticketNumber, b.paymentIntentId]),
      styles: { fontSize: 10 },
    });
    doc.save(`${filter}-bookings.pdf`);
  };

  // ── Major Events ────────────────────────────────────────────
  const [majorEvents, setMajorEvents] = useState([]);
  const [majorForm, setMajorForm] = useState(BLANK_MAJOR);
  const [editingMajor, setEditingMajor] = useState(null);
  const [showMajorForm, setShowMajorForm] = useState(false);
  const [majorError, setMajorError] = useState("");

  useEffect(() => {
    fetch("/api/events/major/all", { headers: authHeaders() })
      .then((r) => r.json())
      .then(setMajorEvents)
      .catch(console.error);
  }, []);

  const saveMajor = async (e) => {
    e.preventDefault();
    setMajorError("");
    const url = editingMajor ? `/api/events/major/${editingMajor}` : "/api/events/major";
    const method = editingMajor ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: authHeaders(), body: JSON.stringify(majorForm) });
      const data = await res.json();
      if (!res.ok) return setMajorError(data.message || "Save failed");
      setMajorEvents((prev) => editingMajor ? prev.map((e) => (e._id === editingMajor ? data : e)) : [...prev, data]);
      setMajorForm(BLANK_MAJOR);
      setEditingMajor(null);
      setShowMajorForm(false);
    } catch { setMajorError("Server error"); }
  };

  const deleteMajor = async (id) => {
    if (!window.confirm("Permanently delete this event?")) return;
    const res = await fetch(`/api/events/major/${id}`, { method: "DELETE", headers: authHeaders() });
    if (res.ok) setMajorEvents((prev) => prev.filter((e) => e._id !== id));
  };

  const toggleMajor = async (id) => {
    const res = await fetch(`/api/events/major/${id}/toggle`, { method: "PUT", headers: authHeaders() });
    const data = await res.json();
    if (res.ok) setMajorEvents((prev) => prev.map((e) => (e._id === id ? data : e)));
  };

  const startEditMajor = (event) => {
    setMajorForm({ title: event.title, date: event.date, time: event.time || "", tag: event.tag || "", image: event.image, description: event.description, deadline: event.deadline });
    setEditingMajor(event._id);
    setShowMajorForm(true);
    setMajorError("");
  };

  const cancelMajorForm = () => { setMajorForm(BLANK_MAJOR); setEditingMajor(null); setShowMajorForm(false); setMajorError(""); };

  // ── Regular Events ──────────────────────────────────────────
  const [regularEvents, setRegularEvents] = useState([]);
  const [regularForm, setRegularForm] = useState(BLANK_REGULAR);
  const [editingRegular, setEditingRegular] = useState(null);
  const [showRegularForm, setShowRegularForm] = useState(false);
  const [regularError, setRegularError] = useState("");

  useEffect(() => {
    fetch("/api/events/regular/all", { headers: authHeaders() })
      .then((r) => r.json())
      .then(setRegularEvents)
      .catch(console.error);
  }, []);

  const saveRegular = async (e) => {
    e.preventDefault();
    setRegularError("");
    const url = editingRegular ? `/api/events/regular/${editingRegular}` : "/api/events/regular";
    const method = editingRegular ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: authHeaders(), body: JSON.stringify({ ...regularForm, order: Number(regularForm.order) }) });
      const data = await res.json();
      if (!res.ok) return setRegularError(data.message || "Save failed");
      setRegularEvents((prev) => editingRegular ? prev.map((e) => (e._id === editingRegular ? data : e)) : [...prev, data]);
      setRegularForm(BLANK_REGULAR);
      setEditingRegular(null);
      setShowRegularForm(false);
    } catch { setRegularError("Server error"); }
  };

  const deleteRegular = async (id) => {
    if (!window.confirm("Permanently delete this event?")) return;
    const res = await fetch(`/api/events/regular/${id}`, { method: "DELETE", headers: authHeaders() });
    if (res.ok) setRegularEvents((prev) => prev.filter((e) => e._id !== id));
  };

  const toggleRegular = async (id) => {
    const res = await fetch(`/api/events/regular/${id}/toggle`, { method: "PUT", headers: authHeaders() });
    const data = await res.json();
    if (res.ok) setRegularEvents((prev) => prev.map((e) => (e._id === id ? data : e)));
  };

  const startEditRegular = (event) => {
    setRegularForm({ day: event.day, title: event.title, host: event.host, flyer: event.flyer, description: event.description, order: event.order });
    setEditingRegular(event._id);
    setShowRegularForm(true);
    setRegularError("");
  };

  const cancelRegularForm = () => { setRegularForm(BLANK_REGULAR); setEditingRegular(null); setShowRegularForm(false); setRegularError(""); };

  // ── Major event form fields ─────────────────────────────────
  const majorFields = [
    { key: "title",       label: "Title",             placeholder: "Pinks - Drum & Bass Night",                    required: true },
    { key: "date",        label: "Date (display)",     placeholder: "April 17, Friday",                             required: true },
    { key: "time",        label: "Time (display)",     placeholder: "8:00 PM" },
    { key: "tag",         label: "Tag",                placeholder: "Live DJ" },
    { key: "image",       label: "Image",              type: "image",                                               required: true },
    { key: "deadline",    label: "Countdown deadline", placeholder: "",  type: "datetime-local",                    required: true },
    { key: "description", label: "Description",        placeholder: "Event description...", type: "textarea",       required: true, span: true },
  ];

  // ── Regular event form fields ───────────────────────────────
  const regularFields = [
    { key: "day",         label: "Day(s)",          placeholder: "Wednesday & Thursday",                          required: true },
    { key: "title",       label: "Title",            placeholder: "Discount Night",                                required: true },
    { key: "host",        label: "Host",             placeholder: "DJ MDK",                                        required: true },
    { key: "flyer",       label: "Flyer image",      type: "image",                                               required: true },
    { key: "order",       label: "Display order",    placeholder: "0", type: "number" },
    { key: "description", label: "Description",      placeholder: "Event description...", type: "textarea",        required: true, span: true },
  ];

  // ── Sidebar nav item ────────────────────────────────────────
  const NavItem = ({ item }) => {
    const Icon = item.icon;
    const active = activeTab === item.id;
    return (
      <button
        onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
          active ? "bg-[#6D9999]/20 text-[#6D9999] border border-[#6D9999]/30" : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <Icon size={18} />
        {item.label}
      </button>
    );
  };

  // ── Render ──────────────────────────────────────────────────
  return (
    <div className="flex h-screen bg-[#071e2e] text-white overflow-hidden">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#041D2F] border-r border-[#1e3a52] flex flex-col transition-transform duration-200 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}>
        {/* Brand */}
        <div className="px-6 py-5 border-b border-[#1e3a52]">
          <h1 className="text-xl font-bold text-white tracking-tight">Tracks</h1>
          <p className="text-xs text-[#6D9999] mt-0.5">Admin Panel</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((item) => <NavItem key={item.id} item={item} />)}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-[#1e3a52]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Top bar */}
        <header className="h-14 bg-[#041D2F] border-b border-[#1e3a52] flex items-center px-4 gap-4 flex-shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-400 hover:text-white">
            <Menu size={20} />
          </button>
          <h2 className="text-sm font-semibold text-gray-300">
            {NAV.find((n) => n.id === activeTab)?.label}
          </h2>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">

          {/* ── Overview ── */}
          {activeTab === 0 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">Welcome back</h3>
                <p className="text-gray-400 text-sm">Here's what's happening at Tracks.</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Bookings"    value={bookings.length}  sub="all time" />
                <StatCard label="Tickets Sold"      value={allTickets}       sub="all events" color="#4ade80" />
                <StatCard label="Major Events"      value={majorEvents.length}   sub={`${majorEvents.filter(e => e.isVisible).length} visible`} color="#facc15" />
                <StatCard label="Regular Events"    value={regularEvents.length} sub={`${regularEvents.filter(e => e.isVisible).length} visible`} color="#c084fc" />
              </div>

              {/* Recent bookings */}
              <div className="bg-[#0d2d45] rounded-xl border border-[#1e3a52] overflow-hidden">
                <div className="px-5 py-4 border-b border-[#1e3a52] flex items-center justify-between">
                  <h4 className="font-semibold text-sm">Recent Bookings</h4>
                  <button onClick={() => setActiveTab(1)} className="text-xs text-[#6D9999] hover:underline">View all</button>
                </div>
                {bookings.length === 0 ? (
                  <p className="p-5 text-gray-500 text-sm">No bookings yet.</p>
                ) : (
                  <div className="divide-y divide-[#1e3a52]">
                    {bookings.slice(0, 5).map((b) => (
                      <div key={b._id} className="px-5 py-3 flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm font-medium truncate">{b.name}</p>
                          <p className="text-xs text-gray-400 truncate">{b.email}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs text-[#6D9999]">{b.event}</p>
                          <p className="text-xs text-gray-400">{b.tickets} ticket{b.tickets !== 1 ? "s" : ""}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button onClick={() => setActiveTab(2)} className="bg-[#0d2d45] border border-[#1e3a52] rounded-xl p-5 text-left hover:border-[#6D9999] transition group">
                  <Star size={20} className="text-yellow-400 mb-2" />
                  <p className="font-semibold text-sm">Manage Major Events</p>
                  <p className="text-xs text-gray-400 mt-1">Add, edit or hide upcoming events</p>
                </button>
                <button onClick={() => setActiveTab(3)} className="bg-[#0d2d45] border border-[#1e3a52] rounded-xl p-5 text-left hover:border-[#6D9999] transition group">
                  <CalendarDays size={20} className="text-purple-400 mb-2" />
                  <p className="font-semibold text-sm">Manage Regular Events</p>
                  <p className="text-xs text-gray-400 mt-1">Control weekly recurring events</p>
                </button>
              </div>
            </div>
          )}

          {/* ── Bookings ── */}
          {activeTab === 1 && (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">Ticket Bookings</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{totalTickets} ticket{totalTickets !== 1 ? "s" : ""} · {filteredBookings.length} booking{filteredBookings.length !== 1 ? "s" : ""}</p>
                </div>
                <div className="flex gap-3">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-[#0d2d45] border border-[#1e3a52] text-white text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-[#6D9999]"
                  >
                    <option value="All">All Events</option>
                    {[...new Set(bookings.map((b) => b.event))].map((event) => (
                      <option key={event} value={event}>{event}</option>
                    ))}
                  </select>
                  {filter !== "All" && (
                    <button onClick={downloadPDF} className="flex items-center gap-2 bg-[#6D9999] text-white px-4 py-2 rounded-lg hover:bg-[#5b8686] transition text-sm">
                      <Download size={14} /> PDF
                    </button>
                  )}
                </div>
              </div>

              <div className="bg-[#0d2d45] rounded-xl border border-[#1e3a52] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#1e3a52] text-gray-400 text-xs uppercase tracking-wider">
                        <th className="px-5 py-3 text-left font-medium">Name</th>
                        <th className="px-5 py-3 text-left font-medium">Email</th>
                        <th className="px-5 py-3 text-left font-medium">Event</th>
                        <th className="px-5 py-3 text-left font-medium">Tickets</th>
                        <th className="px-5 py-3 text-left font-medium">Ticket No.</th>
                        <th className="px-5 py-3 text-left font-medium">Payment ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1e3a52]">
                      {filteredBookings.length === 0 ? (
                        <tr><td colSpan={6} className="px-5 py-8 text-center text-gray-500">No bookings found.</td></tr>
                      ) : filteredBookings.map((b) => (
                        <tr key={b._id} className="hover:bg-white/5 transition">
                          <td className="px-5 py-3 font-medium">{b.name}</td>
                          <td className="px-5 py-3 text-gray-400">{b.email}</td>
                          <td className="px-5 py-3">
                            <span className="bg-[#6D9999]/20 text-[#6D9999] text-xs px-2 py-0.5 rounded-full">{b.event}</span>
                          </td>
                          <td className="px-5 py-3">{b.tickets}</td>
                          <td className="px-5 py-3 text-gray-400 font-mono text-xs">{b.ticketNumber}</td>
                          <td className="px-5 py-3 text-gray-400 font-mono text-xs truncate max-w-[140px]">{b.paymentIntentId}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── Major Events ── */}
          {activeTab === 2 && (
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Major & Upcoming Events</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Appears on Events page and Home page Upcoming section.</p>
                </div>
                {!showMajorForm && (
                  <button onClick={() => setShowMajorForm(true)} className="flex items-center gap-2 bg-[#6D9999] text-white px-4 py-2 rounded-lg hover:bg-[#5b8686] transition text-sm font-medium flex-shrink-0">
                    <Plus size={16} /> Add Event
                  </button>
                )}
              </div>

              {showMajorForm && (
                <EventForm
                  form={majorForm}
                  setForm={setMajorForm}
                  onSubmit={saveMajor}
                  onCancel={cancelMajorForm}
                  isEditing={!!editingMajor}
                  error={majorError}
                  fields={majorFields}
                />
              )}

              {majorEvents.length === 0 ? (
                <div className="bg-[#0d2d45] rounded-xl border border-[#1e3a52] p-10 text-center text-gray-500">
                  No major events yet. Add one to get started.
                </div>
              ) : (
                <div className="space-y-3">
                  {majorEvents.map((event) => (
                    <div
                      key={event._id}
                      className={`rounded-xl border p-4 flex gap-4 items-center transition ${
                        event.isVisible ? "bg-[#0d2d45] border-[#1e3a52]" : "bg-[#0a1929] border-[#1e3a52] opacity-50"
                      }`}
                    >
                      <img src={event.image} alt={event.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-semibold text-sm">{event.title}</p>
                          {event.tag && <span className="bg-yellow-400/20 text-yellow-300 text-xs px-2 py-0.5 rounded-full">{event.tag}</span>}
                          {!event.isVisible && <span className="bg-gray-600/40 text-gray-400 text-xs px-2 py-0.5 rounded-full">Hidden</span>}
                        </div>
                        <p className="text-xs text-[#6D9999] mt-0.5">{event.date}{event.time ? ` · ${event.time}` : ""}</p>
                        <p className="text-xs text-gray-500 mt-1 truncate">{event.description}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button onClick={() => toggleMajor(event._id)} title={event.isVisible ? "Hide" : "Show"} className="p-2 rounded-lg bg-[#1e3a52] hover:bg-[#2A5B8A] transition text-gray-300 hover:text-white">
                          {event.isVisible ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                        <button onClick={() => startEditMajor(event)} title="Edit" className="p-2 rounded-lg bg-[#1e3a52] hover:bg-[#2A5B8A] transition text-gray-300 hover:text-white">
                          <Pencil size={15} />
                        </button>
                        <button onClick={() => deleteMajor(event._id)} title="Delete" className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition text-red-400 hover:text-red-300">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Regular Events ── */}
          {activeTab === 3 && (
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">Regular Events</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Weekly recurring events shown on the Events page.</p>
                </div>
                {!showRegularForm && (
                  <button onClick={() => setShowRegularForm(true)} className="flex items-center gap-2 bg-[#6D9999] text-white px-4 py-2 rounded-lg hover:bg-[#5b8686] transition text-sm font-medium flex-shrink-0">
                    <Plus size={16} /> Add Event
                  </button>
                )}
              </div>

              {showRegularForm && (
                <EventForm
                  form={regularForm}
                  setForm={setRegularForm}
                  onSubmit={saveRegular}
                  onCancel={cancelRegularForm}
                  isEditing={!!editingRegular}
                  error={regularError}
                  fields={regularFields}
                />
              )}

              {regularEvents.length === 0 ? (
                <div className="bg-[#0d2d45] rounded-xl border border-[#1e3a52] p-10 text-center text-gray-500">
                  No regular events yet. Add one to get started.
                </div>
              ) : (
                <div className="space-y-3">
                  {regularEvents.map((event) => (
                    <div
                      key={event._id}
                      className={`rounded-xl border p-4 flex gap-4 items-center transition ${
                        event.isVisible ? "bg-[#0d2d45] border-[#1e3a52]" : "bg-[#0a1929] border-[#1e3a52] opacity-50"
                      }`}
                    >
                      <img src={event.flyer} alt={event.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="bg-[#6D9999]/20 text-[#6D9999] text-xs px-2 py-0.5 rounded-full font-medium">{event.day}</span>
                          {!event.isVisible && <span className="bg-gray-600/40 text-gray-400 text-xs px-2 py-0.5 rounded-full">Hidden</span>}
                        </div>
                        <p className="font-semibold text-sm mt-1">{event.title}</p>
                        <p className="text-xs text-gray-400">Hosted by {event.host}</p>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{event.description}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button onClick={() => toggleRegular(event._id)} title={event.isVisible ? "Hide" : "Show"} className="p-2 rounded-lg bg-[#1e3a52] hover:bg-[#2A5B8A] transition text-gray-300 hover:text-white">
                          {event.isVisible ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                        <button onClick={() => startEditRegular(event)} title="Edit" className="p-2 rounded-lg bg-[#1e3a52] hover:bg-[#2A5B8A] transition text-gray-300 hover:text-white">
                          <Pencil size={15} />
                        </button>
                        <button onClick={() => deleteRegular(event._id)} title="Delete" className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition text-red-400 hover:text-red-300">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
