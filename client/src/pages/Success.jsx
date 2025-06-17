import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-100 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg text-green-800 mb-6">
        Thank you for your booking! A confirmation email has been sent to you.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
