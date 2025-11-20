// ===== Navbar.jsx =====
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "../assets/logo_bgremove.png";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full px-10 py-6 flex justify-between items-center bg-transparent text-white">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 w-40 object-cover" />
        </div>

        {/* NavLinks (Desktop) */}
        <nav className="hidden md:flex gap-10 text-lg font-medium">
          <a href="#home" className="hover:text-teal-300">Home</a>
          <a href="#services" className="hover:text-teal-300">Services</a>
          <a href="#about" className="hover:text-teal-300">About</a>
          <a href="#pricing" className="hover:text-teal-300">Pricing</a>
        </nav>

        {/* Search (Desktop) */}
        <div className="relative hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border border-teal-400 rounded-xl px-4 py-2 text-sm focus:outline-none"
          />
          <Search className="absolute right-3 h-4 w-4 text-teal-300" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(true)} className="md:hidden">
          <Menu className="h-7 w-7 text-white" />
        </button>
      </header>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30" onClick={() => setOpen(false)}></div>
      )}

      {/* ===== MOBILE SLIDING MENU ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl z-40 p-6 transform transition-all duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button onClick={() => setOpen(false)} className="mb-6">
          <X className="h-7 w-7 text-white" />
        </button>

        {/* Mobile NavLinks */}
        <nav className="flex flex-col gap-6 text-lg font-medium">
          <a href="#home" onClick={() => setOpen(false)} className="hover:text-teal-300">Home</a>
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-teal-300">Services</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-teal-300">About</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-teal-300">Pricing</a>
        </nav>
      </div>
    </>
  );
}
