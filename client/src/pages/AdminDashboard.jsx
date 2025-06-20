import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("/api/admin/bookings"); // Adjust URL as needed
        setBookings(res.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Vikrum Fest Bookings", 14, 15);

    const tableData = bookings.map((b, i) => [
      i + 1,
      b.name,
      b.email,
      b.tickets,
      b.ticketNumber || "N/A",
      b.event,
      b.paymentIntentId,
      new Date(b.createdAt).toLocaleString(),
    ]);

    autoTable(doc, {
      startY: 20,
      head: [["#", "Name", "Email", "Tickets", "Ticket No.", "Event", "Payment ID", "Date"]],
      body: tableData,
    });

    doc.save("bookings.pdf");
  };

  return (
    <div className="p-6 bg-[#0F3C5C] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <button
        onClick={downloadPDF}
        className="mb-4 bg-[#6D9999] hover:bg-[#5b8686] text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>

      <div className="overflow-x-auto bg-white text-black rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#6D9999] text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Tickets</th>
              <th className="px-4 py-2">Ticket No.</th>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Payment ID</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr key={b._id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{b.name}</td>
                <td className="px-4 py-2">{b.email}</td>
                <td className="px-4 py-2">{b.tickets}</td>
                <td className="px-4 py-2">{b.ticketNumber}</td>
                <td className="px-4 py-2">{b.event}</td>
                <td className="px-4 py-2">{b.paymentIntentId}</td>
                <td className="px-4 py-2">{new Date(b.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
