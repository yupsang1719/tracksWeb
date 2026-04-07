import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import ScrollToTop from "./components/utils/ScrollToTop";
import OffersModal from "./components/utils/OffersModal";

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
import CocktailMenu from "./pages/CocktailMenu";
import WineMenu from "./pages/WineMenu";
// import Menu from "./pages/Menu";
// import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import BookTable from "./pages/BookTable";
import OffersPage from "./pages/OffersPage";
import OpeningTimesPage from "./pages/OpeningTimesPage";
import DiscountNight from "./pages/DiscountNight";
import ExclusiveTuesday from "./pages/ExclusiveTuesday";
import TracksHour from "./pages/TracksHour";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin routes — no Header/Footer */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Public routes — with Header/Footer */}
        <Route
          path="*"
          element={
            <div className="flex flex-col min-h-screen bg-[#0F3C5C] text-white">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu/cocktails" element={<CocktailMenu />} />
                  <Route path="/menu/wines" element={<WineMenu />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/book" element={<ComingSoon />} />
                  <Route path="/offers" element={<OffersPage />} />
                  <Route path="/offers/discount-night" element={<DiscountNight />} />
                  <Route path="/offers/exclusive-tuesday" element={<ExclusiveTuesday />} />
                  <Route path="/offers/tracks-hour" element={<TracksHour />} />
                  <Route path="/opening-times" element={<OpeningTimesPage />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/cancel" element={<Cancel />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <OffersModal />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
