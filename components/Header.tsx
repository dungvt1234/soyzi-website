"use client";
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <nav className="px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-[#6BAE44] rounded-full flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
          <Leaf className="text-white" size={20} strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-serif font-bold text-[#2F3E2A] tracking-tighter">Soyzi</span>
      </Link>
      
      <div className="flex gap-8 text-sm font-bold text-[#5F6F5A]">
        <Link href="/about" className="hover:text-[#6BAE44] transition-colors">Câu chuyện</Link>
        <Link href="/products" className="hover:text-[#6BAE44] transition-colors">Sản phẩm</Link>
      </div>
    </nav>
  );
}