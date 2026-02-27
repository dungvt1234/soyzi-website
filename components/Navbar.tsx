"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TRANG CHỦ", href: "/" },
    { name: "CÂU CHUYỆN", href: "/about" },
    { name: "SET QUÀ", href: "/gifts" },
    { name: "SẢN PHẨM", href: "/product" },
    { name: "LIÊN HỆ", href: "/contact" },
  ];

  const isWhiteBg = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 w-full h-[88px] z-[100] flex items-center transition-all duration-500 ${
        isWhiteBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full relative flex items-center justify-between px-6">
        
        {/* Logo bên trái */}
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors ${
            isWhiteBg ? "text-[#4E6F3D]" : "text-white"
          }`}
        >
        </Link>

        {/* Menu nằm chính giữa */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-all duration-300 ${
                  active
                    ? "text-[#4E6F3D] font-semibold border-b-2 border-[#4E6F3D] pb-1"
                    : isWhiteBg
                    ? "text-[#2F2F2A] hover:text-[#4E6F3D]"
                    : "text-white hover:text-green-200"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}