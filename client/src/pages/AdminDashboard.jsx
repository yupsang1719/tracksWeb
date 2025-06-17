import React from "react";

export default function AdminDashboard() {
  return (
    <section className="min-h-screen bg-[#0F3C5C] text-white px-6 py-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
        <p className="text-lg mb-10 opacity-80">
          Welcome back, admin! Here's a quick overview of your event activity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#123b58] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Total Bookings</h2>
            <p className="text-4xl font-bold text-[#6D9999]">24</p>
          </div>

          <div className="bg-[#123b58] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
            <p className="text-4xl font-bold text-[#6D9999]">3</p>
          </div>

          <div className="bg-[#123b58] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Regular Events</h2>
            <p className="text-4xl font-bold text-[#6D9999]">7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
