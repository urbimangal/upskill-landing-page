"use client";

import { useState } from "react";
import Link from "next/link";

// Navbar component with mobile hamburger menu support
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          Accredian
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
          <li><Link href="/" className="hover:text-blue-600 transition">Pricing</Link></li>
          <li><Link href="#features" className="hover:text-blue-600 transition">Features</Link></li>
          <li><Link href="#programs" className="hover:text-blue-600 transition">Programs</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600 transition">Contact</Link></li>
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition">
            Login
          </button>
          <button className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Show X when open, bars when closed */}
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <ul className="flex flex-col gap-4 mt-4 text-sm text-gray-600 font-medium">
            <li><Link href="#features" onClick={toggleMenu} className="hover:text-blue-600">Features</Link></li>
            <li><Link href="#programs" onClick={toggleMenu} className="hover:text-blue-600">Programs</Link></li>
            <li><Link href="#pricing" onClick={toggleMenu} className="hover:text-blue-600">Pricing</Link></li>
            <li><Link href="#contact" onClick={toggleMenu} className="hover:text-blue-600">Contact</Link></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <button className="text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-md w-full">
              Login
            </button>
            <button className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
