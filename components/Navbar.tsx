"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Xử lý hiệu ứng scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Câu chuyện", href: "/about" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Set quà", href: "/gifts" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        scrolled ? "pt-4 px-4 md:px-0" : "pt-0 px-0"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-3 px-8 rounded-full border border-white/20"
            : "bg-transparent py-8 px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* LOGO SOYZI (Updated) */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-9 h-9 md:w-10 md:h-10"
            >
              <Image 
                src="/logo.png" 
                alt="Soyzi Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </motion.div>
            <span className={`text-xl md:text-2xl font-black tracking-[4px] uppercase transition-colors duration-300 ${scrolled ? "text-[#4E6F3D]" : "text-[#4E6F3D]"}`}>
              Soyzi
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`relative px-4 py-2 text-[11px] font-bold tracking-[2px] uppercase transition-colors duration-300 ${
                    isActive ? "text-[#4E6F3D]" : "text-[#2F2F2A]/60 hover:text-[#4E6F3D]"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Hiệu ứng Hover nền (Magnetic) */}
                  {hoveredPath === link.href && (
                    <motion.div
                      layoutId="nav-hover-bg"
                      className="absolute inset-0 bg-[#4E6F3D]/5 rounded-full -z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  {/* Gạch chân Active mượt mà */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#4E6F3D] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-[110] w-8 h-8 flex flex-col justify-center gap-1.5 items-center"
          >
            <span className={`h-0.5 bg-[#4E6F3D] transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`h-0.5 bg-[#4E6F3D] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4 self-end"}`} />
            <span className={`h-0.5 bg-[#4E6F3D] transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-0 bg-[#EDF1E8] z-[105] flex flex-col items-center justify-center gap-8 md:hidden shadow-2xl"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-light tracking-[6px] text-[#4E6F3D] uppercase italic font-serif hover:font-bold transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}