"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#EDF1E8] text-[#2F2F2A] scroll-smooth selection:bg-[#4E6F3D] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}

/* ================= NAVBAR (Glassmorphism & Mobile Optimized) ================= */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SẢN PHẨM", href: "#products" },
    { name: "SET QUÀ", href: "#gifts" },
    { name: "LIÊN HỆ", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "bg-[#EDF1E8]/80 backdrop-blur-xl py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1.5 rounded-xl shadow-sm group-hover:rotate-12 transition-transform">
            <Image src="/logo.png" alt="Soyzi Logo" width={32} height={32} />
          </div>
          <span className="text-xl tracking-[4px] font-bold text-[#4E6F3D]">SOYZI</span>
        </Link>

        <nav className="hidden md:flex gap-12 text-[10px] font-bold tracking-[3px]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#4E6F3D] transition-colors uppercase relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#4E6F3D] hover:after:w-full after:transition-all">
              {link.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-0.5 bg-[#4E6F3D] mb-1.5 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#4E6F3D] mb-1.5 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#4E6F3D] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#EDF1E8] z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible uppercase"}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-light tracking-[4px] text-[#4E6F3D]">
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}

/* ================= HERO (Depth & Visual Impact) ================= */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#4E6F3D]/10 text-[#4E6F3D] text-[10px] font-bold tracking-[3px] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4E6F3D] animate-pulse" />
            FRESH FROM NATURE · CRAFTED BY SCIENCE
          </div>
          <h1 className="text-4xl md:text-7xl font-light leading-[0.95] mb-8 text-[#1A1A1A] tracking-tighter">
            Tươi từ thiên nhiên <br />
            <span className="italic font-serif text-[#4E6F3D]">Lành cho cơ thể</span>
          </h1>
          <p className="text-lg text-[#2F2F2A]/70 leading-relaxed mb-10 max-w-md font-light">
            Soyzi kết hợp nguồn nguyên liệu thuần khiết với công nghệ lên men hiện đại, tạo nên những mẻ sữa chua và tàu hũ tươi mịn, thanh lành và an tâm mỗi ngày.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about" className="bg-[#4E6F3D] text-white px-10 py-5 rounded-full shadow-xl hover:bg-[#3D5730] transition-all text-center font-bold tracking-widest text-xs uppercase">
              Tìm hiểu câu chuyện
            </Link>
            <a href="#products" className="bg-white text-[#4E6F3D] px-10 py-5 rounded-full border border-[#4E6F3D]/10 hover:border-[#4E6F3D] transition-all text-center font-bold tracking-widest text-xs uppercase">
              Thực đơn hôm nay
            </a>
          </div>
        </div>
        <div className="md:col-span-5 relative h-[500px] md:h-[700px] rounded-[100px_40px_100px_40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000">
          <Image src="/soyzi2.png" alt="Sản phẩm Soyzi" fill className="object-cover transition-transform duration-[3s] hover:scale-110" priority />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4E6F3D]/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ================= PHILOSOPHY (Editorial Style) ================= */
function Philosophy() {
  return (
    <section className="py-40 px-6 bg-white rounded-[60px] md:rounded-[100px] relative z-20 -mt-10">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h3 className="uppercase tracking-[6px] text-[10px] font-bold text-[#7A8B4E]">TRIẾT LÝ SẢN XUẤT</h3>
        <h2 className="text-4xl md:text-6xl font-light italic leading-tight text-[#1A1A1A]">
          "Minh bạch để tin tưởng, <br /> Tiêu chuẩn để vươn xa"
        </h2>
        <div className="w-16 h-1 bg-[#4E6F3D] mx-auto opacity-20" />
        <p className="text-xl text-[#2F2F2A]/60 font-light leading-relaxed max-w-2xl mx-auto">
          Tại Soyzi, chúng tôi không chọn con đường thủ công thô sơ. Chúng tôi chọn công nghệ khép kín để đảm bảo 
          <b> độ sạch tuyệt đối</b>, đồng thời giữ trọn tâm hồn trong việc tuyển lựa hạt giống thuần chủng Non-GMO.
        </p>
      </div>
    </section>
  );
}

/* ================= PRODUCTS (Premium Grid) ================= */
function Products() {
  return (
    <section id="products" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-[#4E6F3D]/10 pb-10">
          <div>
            <h2 className="text-5xl font-light tracking-tighter mb-4">Danh mục tuyển chọn</h2>
            <p className="text-[#2F2F2A]/50 font-light">Làm mới mỗi ngày tại phòng Lab của Soyzi</p>
          </div>
          <a href="#" className="text-xs font-bold tracking-widest text-[#4E6F3D] uppercase mt-6 md:mt-0 group flex items-center gap-2">
            Xem thực đơn đầy đủ 
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <ProductCard 
            title="Sữa chua thủ công" 
            desc="Lên men chậm trong môi trường tiệt trùng, kết cấu sánh mịn tự nhiên không dùng chất tạo đặc." 
          />
          <ProductCard 
            title="Tàu hũ tươi" 
            desc="Chắt lọc từ đậu nành hữu cơ, ứng dụng công nghệ xay lạnh để giữ nguyên hàm lượng protein cao." 
          />
          <ProductCard 
            title="Dòng hạt & Panna Cotta" 
            desc="Sự kết hợp giữa nghệ thuật làm bánh Âu và nguồn hạt dinh dưỡng cao cấp đạt chuẩn VietGAP." 
          />
        </div>

        {/* Gift Set Banner */}
        <div id="gifts" className="relative overflow-hidden bg-[#4E6F3D] rounded-[60px] p-12 md:p-24 text-white shadow-3xl">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-4xl md:text-6xl font-light mb-8 leading-tight">Món quà từ <br /><span className="italic opacity-80">Sự chân thành</span></h3>
            <p className="text-lg opacity-70 mb-12 font-light leading-relaxed">
              Thiết kế dành riêng cho doanh nghiệp và các dịp trọng đại. Những set quà organic mang tính biểu tượng cho sự tinh tế và sức khỏe bền vững.
            </p>
            <button className="bg-[#EDF1E8] text-[#4E6F3D] px-12 py-5 rounded-full hover:scale-105 transition-all font-bold uppercase tracking-widest text-[10px]">
              Tải Catalogue quà tặng
            </button>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] border border-white/5 rounded-full" />
          <div className="absolute bottom-10 right-10 hidden md:block opacity-20">
             <Image src="/logo.png" alt="Watermark" width={300} height={300} className="grayscale brightness-200" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT (Editorial Layout) ================= */
function Contact() {
  return (
    <section id="contact" className="py-40 px-6 bg-white border-t border-[#E8E5D8]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20">
        <div className="md:col-span-5 space-y-12">
          <h2 className="text-5xl font-light tracking-tighter text-[#4E6F3D]">Ghé thăm <br /><span className="text-[#2F2F2A]">không gian Soyzi</span></h2>
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-bold tracking-[4px] text-[#7A8B4E] mb-4 uppercase">Cửa hàng trải nghiệm</p>
              <p className="text-xl font-light leading-relaxed">9G1 Ngô Đức Kế, P. Tam Thắng <br />TP. Hồ Chí Minh</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[4px] text-[#7A8B4E] mb-4 uppercase">Đường dây nóng</p>
              <a href="tel:0528912222" className="text-2xl font-serif italic hover:text-[#4E6F3D] transition-colors">052 891 2222</a>
              <p className="text-sm opacity-50 mt-2 font-light">Mở cửa: 06:00 - 21:00 hàng ngày</p>
            </div>
          </div>
        </div>
        <form className="md:col-span-7 bg-[#EDF1E8]/30 p-10 md:p-16 rounded-[40px] border border-[#4E6F3D]/5 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input type="text" placeholder="Tên của bạn" className="bg-transparent border-b border-[#4E6F3D]/20 py-4 focus:border-[#4E6F3D] outline-none transition-all placeholder:text-[#2F2F2A]/30" />
            <input type="email" placeholder="Email" className="bg-transparent border-b border-[#4E6F3D]/20 py-4 focus:border-[#4E6F3D] outline-none transition-all placeholder:text-[#2F2F2A]/30" />
          </div>
          <textarea placeholder="Bạn cần chúng tôi tư vấn gì?" rows={4} className="w-full bg-transparent border-b border-[#4E6F3D]/20 py-4 focus:border-[#4E6F3D] outline-none transition-all placeholder:text-[#2F2F2A]/30" />
          <button className="bg-[#4E6F3D] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] w-full md:w-auto shadow-lg hover:bg-[#3D5730] transition-all">Gửi yêu cầu</button>
        </form>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="py-24 px-6 bg-[#EDF1E8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
             <Image src="/logo.png" alt="Soyzi" width={32} height={32} />
             <span className="text-xl font-bold tracking-[4px] text-[#4E6F3D]">SOYZI</span>
          </div>
          <p className="text-sm opacity-50 max-w-xs font-light">Vì một thế hệ dinh dưỡng minh bạch và bền vững cho người Việt.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 uppercase text-[10px] font-bold tracking-[3px]">
          <a href="#" className="hover:text-[#4E6F3D]">Facebook</a>
          <a href="#" className="hover:text-[#4E6F3D]">Instagram</a>
          <a href="#" className="hover:text-[#4E6F3D]">TikTok</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-[#4E6F3D]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold opacity-30 tracking-[4px] uppercase">
        <p>© {new Date().getFullYear()} Soyzi Vietnam. All rights reserved.</p>
        <p>Made with heart in Saigon</p>
      </div>
    </footer>
  );
}

/* ================= PRODUCT CARD ================= */
function ProductCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group bg-white rounded-[40px] p-12 transition-all duration-700 hover:shadow-2xl border border-[#4E6F3D]/5 hover:border-[#4E6F3D]/20 relative overflow-hidden flex flex-col justify-between min-h-[350px]">
      <div className="relative z-10">
        <div className="w-12 h-12 bg-[#EDF1E8] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#4E6F3D] group-hover:text-white transition-all duration-500">
           <span className="text-xs">🌿</span>
        </div>
        <h3 className="text-3xl font-light mb-6 text-[#1A1A1A] group-hover:text-[#4E6F3D] transition-colors">
          {title}
        </h3>
        <p className="text-base text-[#2F2F2A]/60 font-light leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#4E6F3D]/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700" />
    </div>
  );
}
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function PremiumButton({ children, href, variant = "primary", className = "" }: ButtonProps) {
  // Định nghĩa các phong cách nút
  const variants = {
    primary: "bg-[#4E6F3D] text-white",
    secondary: "bg-[#EDF1E8] text-[#4E6F3D]",
    outline: "bg-transparent border border-[#4E6F3D] text-[#4E6F3D]",
  };

  const content = (
    <motion.div
      // Hiệu ứng khi di chuột vào (Hover)
      whileHover={{ 
        scale: 1.03, // Phóng to nhẹ
        y: -3,       // Nhấc lên 3px
        transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } 
      }}
      // Hiệu ứng khi nhấn (Click)
      whileTap={{ scale: 0.97 }}
      className={`relative px-10 py-5 rounded-full font-bold tracking-[2px] text-[10px] uppercase shadow-sm overflow-hidden group cursor-pointer text-center ${variants[variant]} ${className}`}
    >
      {/* Hiệu ứng Shimmer (Ánh sáng lướt qua) */}
      <motion.div
        initial={{ left: "-100%" }}
        whileHover={{ left: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
      />
      
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}