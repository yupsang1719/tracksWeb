import React from "react";
import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-100 px-4">
      <h1 className="text-4xl font-bold text-red-700 mb-4">❌ Payment Cancelled</h1>
      <p className="text-lg text-red-800 mb-6">
        You cancelled the payment. If this was a mistake, feel free to try again.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
