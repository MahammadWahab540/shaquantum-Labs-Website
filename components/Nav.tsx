"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/pathwisse", label: "Pathwisse" },
  { href: "/sectors", label: "Sectors" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-100"
            : "bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" size="lg" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  pathname === link.href
                    ? "text-teal-700 bg-teal-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/pathwisse"
              className="px-4 py-2 text-sm font-semibold text-teal-700 border border-teal-200 rounded-lg hover:bg-teal-50 transition-all duration-150"
            >
              Explore Pathwisse
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-white bg-teal-700 rounded-lg hover:bg-teal-800 transition-all duration-150 active:-translate-y-[1px]"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white pt-16"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      pathname === link.href
                        ? "text-teal-700 bg-teal-50"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/pathwisse"
                  className="py-3 text-center font-semibold text-teal-700 border border-teal-200 rounded-xl hover:bg-teal-50 transition-colors"
                >
                  Explore Pathwisse
                </Link>
                <Link
                  href="/contact"
                  className="py-3 text-center font-semibold text-white bg-teal-700 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Talk to ShaQuantum Labs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
