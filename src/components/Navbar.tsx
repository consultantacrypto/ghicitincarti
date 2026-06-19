"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/cartomantie", label: "Ghicit în cărți" },
  { href: "/tarot", label: "Ghicit în tarot" },
  { href: "/cafea", label: "Ghicit în cafea" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="group inline-flex items-baseline py-3"
        >
          <span className="font-serif text-3xl font-bold tracking-tighter text-[#1d1d1f]">
            Cătălina
          </span>
          <span className="text-4xl text-[#0071e3] transition-colors duration-300 group-hover:text-[#FF007F]">
            .
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center py-3 text-sm text-gray-500 transition-colors duration-300 hover:text-apple-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-3 transition-colors duration-300 hover:bg-gray-100/80 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
        >
          <span className="relative block h-5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-[#1d1d1f] transition-all duration-300 ease-out ${
                isOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-2 left-0 block h-0.5 w-6 rounded-full bg-[#1d1d1f] transition-all duration-300 ease-out ${
                isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 rounded-full bg-[#1d1d1f] transition-all duration-300 ease-out ${
                isOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <ul
          className={`flex flex-col items-center gap-1 px-6 transition-all duration-300 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="inline-flex items-center py-4 text-2xl font-medium tracking-tight text-[#1d1d1f] transition-colors duration-300 hover:text-[#0071e3]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
