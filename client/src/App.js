import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Events from "./pages/Events"
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/protectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
// import Menu from "./pages/Menu";
// import Events from "./pages/Events";
// import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import BookTable from "./pages/BookTable";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0F3C5C] text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<ComingSoon />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<ComingSoon />} />
            <Route path="/about" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
            <Route path="/book" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
