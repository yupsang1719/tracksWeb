import React, { useState } from "react";

export default function AdminLogin({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        onLogin(data.token); // Callback to set token in parent/global state
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F3C5C] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0F3C5C]">Admin1 Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#6D9999] text-white py-2 rounded hover:bg-[#5b8686] transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
