import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/admin/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Failed to fetch bookings", err));
  }, []);

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.event === filter);

  const totalTickets = filteredBookings.reduce((sum, b) => sum + b.tickets, 0);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`${filter} Bookings`, 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Name", "Email", "Tickets", "Ticket No", "Payment ID"]],
      body: filteredBookings.map((b) => [
        b.name,
        b.email,
        b.tickets,
        b.ticketNumber,
        b.paymentIntentId,
      ]),
      styles: { fontSize: 10 },
    });

    doc.save(`${filter}-bookings.pdf`);
  };

  return (
    <section className="p-6 bg-[#0F3C5C] min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-4">📋 Admin Ticket Dashboard</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded shadow"
        >
          <option value="All">All Events</option>
          {[...new Set(bookings.map((b) => b.event))].map((event) => (
            <option key={event} value={event}>{event}</option>
          ))}
        </select>

        {filter !== "All" && (
          <button
            onClick={downloadPDF}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Download PDF
          </button>
        )}
      </div>

      <p className="text-lg mb-4">
        🎟️ Total Tickets Sold: <span className="font-bold">{totalTickets}</span>
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded bg-white shadow-md text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Event</th>
              <th className="p-2 border">Tickets</th>
              <th className="p-2 border">Ticket Number</th>
              <th className="p-2 border">Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((b) => (
              <tr
                key={b._id}
                className={`border ${
                  b.event === "Vikrum Fest 2025"
                    ? "bg-yellow-50"
                    : b.event === "RUN THE TRACKS"
                    ? "bg-blue-50"
                    : "bg-white"
                }`}
              >
                <td className="p-2 border">{b.name}</td>
                <td className="p-2 border">{b.email}</td>
                <td className="p-2 border">{b.event}</td>
                <td className="p-2 border">{b.tickets}</td>
                <td className="p-2 border">{b.ticketNumber}</td>
                <td className="p-2 border">{b.paymentIntentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
