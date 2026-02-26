"use client";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2F3E2A] text-[#F6F8F2] pt-20 pb-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto border-b border-[#5F6F5A]/30 pb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[#6BAE44] rounded-full flex items-center justify-center">
            <Leaf size={16} className="text-white"/>
          </div>
          <span className="text-xl font-serif font-bold italic">Soyzi</span>
        </div>
        <p className="text-[#5F6F5A] text-sm">📍 9G1 Ngô Đức Kế, TP. Vũng Tàu | 📞 0528 912 222</p>
      </div>
      <p className="max-w-7xl mx-auto pt-8 text-[#5F6F5A] text-xs">© 2026 Soyzi Vietnam.</p>
    </footer>
  );
}