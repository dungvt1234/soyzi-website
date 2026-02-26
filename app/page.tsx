"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* ================= 1. KHAI BÁO BIẾN HIỆU ỨNG (VARIANTS) ================= */
// Đặt ở đây để toàn bộ các hàm bên dưới đều nhận diện được, tránh lỗi gạch đỏ.
const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ================= 2. TRANG CHÍNH (HOME) ================= */
export default function Home() {
  return (
    <main className="bg-[#EAF7E6] text-[#2F2F2A] scroll-smooth min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}

/* ================= 3. CÁC THÀNH PHẦN NỘI BỘ (INTERNAL COMPONENTS) ================= */

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-[#E8E5D8]"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-soyzi.png"
            alt="Soyzi Logo"
            width={38}
            height={38}
            className="w-8 h-8 md:w-[38px] md:h-[38px] object-contain"
          />
          <span className="text-xl tracking-[3px] font-medium text-[#4E6F3D]">
            SOYZI
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm tracking-wide">
          <a href="#products" className="hover:text-[#4E6F3D] transition font-medium">SẢN PHẨM</a>
          <a href="#gifts" className="hover:text-[#4E6F3D] transition font-medium">SET QUÀ</a>
          <a href="#contact" className="hover:text-[#4E6F3D] transition font-medium">LIÊN HỆ</a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 text-[#4E6F3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E8E5D8] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-center">
              <a href="#products" className="py-2 text-sm" onClick={() => setIsOpen(false)}>SẢN PHẨM</a>
              <a href="#gifts" className="py-2 text-sm" onClick={() => setIsOpen(false)}>SET QUÀ</a>
              <a href="#contact" className="py-2 text-sm" onClick={() => setIsOpen(false)}>LIÊN HỆ</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="pt-44 pb-36 px-6 bg-gradient-to-br from-[#F6F4EC] to-[#ECE9DD]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p custom={0} initial="hidden" animate="visible" variants={heroTextVariants} className="uppercase tracking-[6px] text-sm text-[#7A8B4E] mb-6">
            ORGANIC · FRESH · SELECTED
          </motion.p>
          <motion.h1 custom={1} initial="hidden" animate="visible" variants={heroTextVariants} className="text-4xl md:text-6xl font-light leading-tight mb-6 text-[#4E6F3D]">
            Tươi từ thiên nhiên lành cho cơ thể mỗi ngày
          </motion.h1>
          <motion.p custom={2} initial="hidden" animate="visible" variants={heroTextVariants} className="text-lg text-[#2F2F2A]/70 mb-10 leading-relaxed">
            Soyzi mang đến sữa chua thủ công, tàu hũ tươi và các loại hạt tuyển chọn chất lượng nhất.
          </motion.p>
          <motion.div custom={3} initial="hidden" animate="visible" variants={heroTextVariants}>
            <Link
  href="/about"
  className="bg-[#4E6F3D] text-white px-10 py-4 rounded-full"
>
  Khám phá ngay
</Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="relative h-[300px] md:h-[480px] bg-[#D8E2D1] rounded-[40px] overflow-hidden shadow-2xl"
        >
          <Image 
            src="/soyzi2.png" 
            alt="Sản phẩm Soyzi" 
            fill 
            className="object-cover" 
            priority 
          />
        </motion.div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-light mb-6 text-[#4E6F3D]">Giữ trọn vị tự nhiên</h2>
        <p className="text-[#2F2F2A]/70 leading-relaxed italic">
          "Mỗi sản phẩm Soyzi được làm tươi mỗi ngày, không phụ gia – không chất bảo quản."
        </p>
      </div>
    </section>
  );
}

function Products() {
  return (
<section id="products" className="py-20 px-6 bg-[#F6F4EC]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16">Danh mục sản phẩm</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <ProductCard title="Sữa chua thủ công" desc="Ủ truyền thống – không phụ gia – giữ trọn vị tự nhiên." />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <ProductCard title="Tàu hũ tươi mỗi ngày" desc="Làm mới trong ngày từ đậu nành chọn lọc, mịn màng thơm béo." />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
            <ProductCard title="Các loại hạt" desc="Tuyển chọn từ nhà sản xuất uy tín, giàu dinh dưỡng." />
          </motion.div>
        </div>

        <div id="gifts" className="bg-[#4E6F3D] rounded-[40px] p-10 text-white text-center shadow-xl">
          <h3 className="text-2xl mb-4 font-light">Set quà Organic cao cấp</h3>
          <p className="mb-6 opacity-90 text-sm max-w-lg mx-auto">
            Kết hợp sữa chua và đặc sản tuyển chọn cho các dịp lễ tết và quà biếu sức khỏe.
          </p>
          <button className="bg-white text-[#4E6F3D] px-8 py-3 rounded-full hover:scale-105 transition font-medium">
            Xem bộ sưu tập
          </button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-center border-t border-[#F0EFE9]">
      <h2 className="text-3xl font-light mb-10 text-[#4E6F3D]">Liên hệ với Soyzi</h2>
      <div className="text-[#2F2F2A]/70 space-y-4 max-w-md mx-auto">
        <p className="flex justify-between border-b pb-2"><span>Email:</span> <b>contact@soyzi.vn</b></p>
        <p className="flex justify-between border-b pb-2"><span>Hotline:</span> <b>0528912222</b></p>
        <p className="text-sm pt-4">Địa chỉ: 9G1 Ngô Đức Kế, Phường Tam Thắng, TP. Hồ Chí Minh</p>
      </div>
    </section>
  );
}

function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="py-10 text-center text-sm text-[#2F2F2A]/60 border-t border-[#E8E5D8] bg-[#F9F8F3]">
      © {year ?? "2026"} Soyzi. All rights reserved.
    </footer>
  );
}

function ProductCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-[30px] p-8 shadow-sm border border-[#E8E5D8] hover:shadow-xl transition-all h-full">
      <h3 className="text-xl text-[#4E6F3D] mb-4 font-medium">{title}</h3>
<p className="text-sm text-[#2F2F2A]/70 leading-relaxed">{desc}</p>
    </div>
  );
}
