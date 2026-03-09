"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Order yours", href: "#order" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 gradient-bg">
        <div className="max-w-6xl mx-auto px-3 md:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-1.5">
            <Image
              src="/assets/logo.webp"
              alt="Kurinu E-Pets logo"
              width={52}
              height={52}
              className="rounded-md"
            />
            <div className="flex flex-col leading-none" style={{ fontFamily: "var(--font-dogica), monospace" }}>
              <span className="text-white font-bold text-sm tracking-widest uppercase">Kurinu</span>
              <span className="text-white font-bold text-sm tracking-widest uppercase">E-Pets</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div key={link.label} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-white text-sm font-medium px-4 hover:opacity-75 transition-opacity"
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="text-white/40 text-sm select-none">|</span>
                )}
              </div>
            ))}
            <Link href="#contact" className="btn-outline-white text-sm ml-2">
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1 z-[60] relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 gradient-bg flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-white text-2xl font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-70 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              fontFamily: "var(--font-dogica), monospace",
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
            }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className={`btn-outline-white mt-4 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            fontFamily: "var(--font-dogica), monospace",
            fontSize: "0.75rem",
            transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
          }}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </>
  );
}
