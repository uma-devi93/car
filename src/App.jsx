import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import CustomerLogin from "./pages/Login";
import CustomerRegister from "./pages/Register";
import CustomerCarBooking from "./pages/CarBooking";

import AdminLogin from "./pages/AdminLogin";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Affiliate from "./pages/Affiliate";
import Account from "./pages/Account";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Cancel from "./pages/Cancel";
import AdminDashboard from "./pages/AdminDashboard";

import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* CUSTOMER ROUTES */}
        <Route path="/register" element={<CustomerRegister />} />
        <Route path="/login" element={<CustomerLogin />} />

        {/* Protect CarBooking Route */}
        <Route
          path="/carbooking"
          element={
            localStorage.getItem("token") ? (
              <CustomerCarBooking />
            ) : (
              <CustomerLogin />
            )
          }
        />

        {/* ADMIN ROUTES */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            localStorage.getItem("adminLoggedIn") ? (
              <AdminDashboard />
            ) : (
              <AdminLogin />
            )
          }
        />

        {/* STATIC PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/account" element={<Account />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/cancel" element={<Cancel />} />
       
      </Routes>
    </Router>
  );
}

export default App;
