"use client";
import { motion, Variants } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* ================= TYPES & INTERFACES ================= */
interface ProductCardProps {
  title: string;
  desc: string;
}

/* ================= ANIMATION VARIANTS ================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

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

/* ================= NAVBAR (Giữ nguyên) ================= */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SẢN PHẨM", href: "/products" },
    { name: "SET QUÀ", href: "/gifts" },
    { name: "LIÊN HỆ", href: "/contact" },
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

/* ================= HERO (Giữ nguyên) ================= */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-[#4E6F3D]/10 text-[#4E6F3D] text-[10px] font-bold tracking-[3px] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#4E6F3D] animate-pulse" />
            FRESH FROM NATURE · CRAFTED BY SCIENCE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-light leading-[0.95] mb-8 text-[#1A1A1A] tracking-tighter"
          >
            Tươi từ thiên nhiên <br />
            <span className="italic font-serif text-[#4E6F3D]">Lành cho cơ thể</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[#2F2F2A]/70 leading-relaxed mb-10 max-w-md font-light"
          >
            Soyzi kết hợp nguồn nguyên liệu thuần khiết tạo nên những mẻ sữa chua và tàu hũ tươi mịn.
          </motion.p>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
          >
            <Link href="/about" className="bg-[#4E6F3D] text-white px-10 py-5 rounded-full shadow-xl hover:bg-[#3D5730] transition-all text-center font-bold tracking-widest text-xs uppercase">
              Tìm hiểu câu chuyện
            </Link>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="md:col-span-5 relative h-[500px] md:h-[700px] rounded-[100px_40px_100px_40px] overflow-hidden shadow-2xl"
        >
          <Image src="/soyzi2.png" alt="Sản phẩm Soyzi" fill className="object-cover transition-transform duration-[3s] hover:scale-110" priority />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= PHILOSOPHY ================= */
function Philosophy() {
  return (
    <section className="py-32 px-6 bg-white rounded-[60px] md:rounded-[100px] relative z-20 -mt-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto text-center space-y-10"
      >
        <h3 className="uppercase tracking-[6px] text-[10px] font-bold text-[#7A8B4E]">TRIẾT LÝ SẢN XUẤT</h3>
        <h2 className="text-4xl md:text-5xl font-light italic leading-tight text-[#1A1A1A]">
          "Minh bạch để tin tưởng, <br /> Tiêu chuẩn để vươn xa"
        </h2>
        <div className="w-16 h-1 bg-[#4E6F3D] mx-auto opacity-20" />
      </motion.div>
    </section>
  );
}

/* ================= PRODUCTS & GIFTS (Đã sửa hiển thị ảnh trọn khung) ================= */
function Products() {
  return (
    <section id="products" className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-b border-[#4E6F3D]/10 pb-10">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">Danh mục tuyển chọn</h2>
          <p className="text-[#2F2F2A]/50 font-light">Làm mới mỗi ngày tại phòng Lab của Soyzi</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40">
          <ProductCard title="Sữa chua thủ công" desc="Lên men chậm trong môi trường tiệt trùng, kết cấu sánh mịn tự nhiên." />
          <ProductCard title="Tàu hũ tươi" desc="Chắt lọc từ đậu nành hữu cơ cao cấp đạt chuẩn dinh dưỡng." />
          <ProductCard title="Hạt & Panna Cotta" desc="Sự kết hợp giữa nghệ thuật Âu và nguồn hạt dinh dưỡng." />
        </div>

        {/* --- MỤC MÓN QUÀ (HIỂN THỊ TRỌN KHUNG ẢNH) --- */}
        <motion.div 
          id="gifts" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto relative overflow-hidden bg-[#4E6F3D] rounded-[30px] md:rounded-[60px] shadow-2xl"
        >
          <div className="grid md:grid-cols-12 items-center overflow-hidden">
            <div className="md:col-span-5 p-8 md:p-16 text-white space-y-6 md:space-y-8 z-10">
              <h3 className="text-3xl md:text-5xl font-light leading-tight">
                Món quà từ <br />
                <span className="italic font-serif text-[#EDF1E8]">Sự chân thành</span>
              </h3>
              <p className="text-base opacity-80 font-light leading-relaxed">
                Những set quà organic mang tính biểu tượng cho sự tinh tế dành cho những mối quan hệ trân quý.
              </p>
              <div className="pt-2">
                <Link href="/gifts" className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-[3px] uppercase border-b border-white/20 pb-2 hover:border-white transition-all">
                  Khám phá bộ sưu tập <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Cập nhật: h-[400px] md:h-[550px], dùng object-contain để thấy toàn bộ khung */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:col-span-7 relative h-[400px] md:h-[550px] overflow-hidden bg-white/5 md:bg-transparent"
            >
              <Image 
                src="/szq1.png" 
                alt="Soyzi Premium Gift Set" 
                fill 
                className="object-contain p-4 md:p-8 transition-transform duration-[5s] hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
            <Image src="/logo.png" alt="pattern" fill className="object-cover scale-150 rotate-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= CONTACT & FOOTER (Giữ nguyên) ================= */
function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white border-t border-[#E8E5D8]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5 space-y-10">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-[#4E6F3D]">Ghé thăm <br /><span className="text-[#2F2F2A]">không gian Soyzi</span></h2>
          <div className="space-y-8 text-sm md:text-base">
            <div>
              <p className="text-[9px] font-bold tracking-[4px] text-[#7A8B4E] mb-3 uppercase">Cửa hàng trải nghiệm</p>
              <p className="font-light leading-relaxed">9G1 Ngô Đức Kế, P. Tam Thắng <br />TP. Vũng Tàu</p>
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-[4px] text-[#7A8B4E] mb-3 uppercase">Đường dây nóng</p>
              <a href="tel:0528912222" className="text-xl font-serif italic hover:text-[#4E6F3D] transition-colors">052 891 2222</a>
            </div>
          </div>
        </div>
        <form className="md:col-span-7 bg-[#EDF1E8]/30 p-8 md:p-12 rounded-[30px] border border-[#4E6F3D]/5 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Tên" className="bg-transparent border-b border-[#4E6F3D]/20 py-3 focus:border-[#4E6F3D] outline-none transition-all" />
            <input type="email" placeholder="Email" className="bg-transparent border-b border-[#4E6F3D]/20 py-3 focus:border-[#4E6F3D] outline-none transition-all" />
          </div>
          <textarea placeholder="Nội dung tư vấn..." rows={3} className="w-full bg-transparent border-b border-[#4E6F3D]/20 py-3 focus:border-[#4E6F3D] outline-none transition-all" />
          <button className="bg-[#4E6F3D] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[9px] shadow-lg">Gửi yêu cầu</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-20 px-6 bg-[#EDF1E8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
             <Image src="/logo.png" alt="Soyzi" width={28} height={28} />
             <span className="text-lg font-bold tracking-[4px] text-[#4E6F3D]">SOYZI</span>
          </div>
          <p className="text-xs opacity-50 font-light">Dinh dưỡng minh bạch cho người Việt.</p>
        </div>
        <div className="flex gap-8 uppercase text-[9px] font-bold tracking-[3px]">
          <a href="#" className="hover:text-[#4E6F3D]">Facebook</a>
          <a href="#" className="hover:text-[#4E6F3D]">Instagram</a>
          <a href="#" className="hover:text-[#4E6F3D]">TikTok</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-[#4E6F3D]/10 text-[9px] font-bold opacity-30 tracking-[4px] uppercase text-center md:text-left">
        <p>© {new Date().getFullYear()} Soyzi Vietnam. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* --- PRODUCT CARD COMPONENT --- */
function ProductCard({ title, desc }: ProductCardProps) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="group bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 transition-all duration-700 hover:shadow-xl border border-[#4E6F3D]/5 hover:border-[#4E6F3D]/20 relative overflow-hidden flex flex-col justify-between min-h-[300px] md:min-h-[350px]"
    >
      <div className="relative z-10">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#EDF1E8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#4E6F3D] group-hover:text-white transition-all duration-500">
           <span className="text-xs">🌿</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-light mb-4 md:mb-6 text-[#1A1A1A] group-hover:text-[#4E6F3D] transition-colors">{title}</h3>
        <p className="text-sm md:text-base text-[#2F2F2A]/60 font-light leading-relaxed">{desc}</p>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#4E6F3D]/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700" />
    </motion.div>
  );
}