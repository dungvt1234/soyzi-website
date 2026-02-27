"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TRANG CHỦ", href: "/" },
    { name: "CÂU CHUYỆN", href: "/about" },
    { name: "SET QUÀ", href: "/gifts" },
    { name: "SẢN PHẨM", href: "/products" },
    { name: "LIÊN HỆ", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-[#F4F7F2] shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-light tracking-[6px] text-[#4E6F3D]">
          SOYZI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm tracking-[3px] uppercase text-[#4E6F3D]"
              >
                {link.name}

                {/* Gạch chân active */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#4E6F3D]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`w-6 h-0.5 bg-[#4E6F3D] transition-all ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#4E6F3D] transition-all ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#4E6F3D] transition-all ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#F2F4F0] z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-[4px] text-[#4E6F3D] uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
