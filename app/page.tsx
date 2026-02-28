"use client";
import { motion, Variants, AnimatePresence, useScroll, useSpring } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* ================= ANIMATION VARIANTS ================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const imageReveal: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className="bg-[#F7F9F5] text-[#2F2F2A] scroll-smooth selection:bg-[#4E6F3D] selection:text-white overflow-x-hidden font-sans antialiased">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#4E6F3D] origin-left z-[110]" style={{ scaleX }} />
      <Hero />
      <Philosophy />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}

/* ================= NAVBAR (Updated with Interactive Logo) ================= */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sản phẩm", href: "/products" },
    { name: "Set quà", href: "/gifts" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
      scrolled ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)]" : "bg-transparent py-6 md:py-10"
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center">
        
        {/* --- CẬP NHẬT LOGO TẠI ĐÂY --- */}
        <Link href="/logo-soyzi.png" className="flex items-center gap-3 group">
          {/* Khối biểu tượng Logo với hiệu ứng xoay nhẹ khi hover */}
          <motion.div 
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative w-9 h-9"
          >
            <Image 
              src="/logo.png" // Đảm bảo file logo.png của bạn là tệp trong suốt (PNG/SVG)
              alt="Soyzi Logo" 
              fill 
              className="object-contain" // Giữ nguyên tỷ lệ mầm cây
            />
          </motion.div>
          {/* Chữ Soyzi giữ nguyên phong cách tinh tế */}
          <span className="text-xl md:text-2xl tracking-[0.4em] font-extralight text-[#4E6F3D] uppercase">
            Soyzi
          </span>
        </Link>

        <nav className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[10px] font-bold tracking-[0.3em] text-[#2F2F2A]/50 hover:text-[#4E6F3D] transition-all relative group uppercase">
              {link.name}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#4E6F3D] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button className="md:hidden z-[120] w-10 h-10 flex flex-col items-center justify-center gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }} className="w-5 h-[1.2px] bg-[#4E6F3D] block" />
          <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="w-5 h-[1.2px] bg-[#4E6F3D] block" />
          <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }} className="w-5 h-[1.2px] bg-[#4E6F3D] block" />
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 200 }} className="fixed inset-0 bg-[#EDF1E8] z-[115] flex flex-col items-center justify-center gap-10 md:hidden">
            {navLinks.map((link, i) => (
              <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-extralight tracking-[8px] text-[#4E6F3D] uppercase italic font-serif">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center px-5 overflow-hidden pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 md:gap-16 items-center w-full">
        <div className="lg:col-span-7 z-10 pt-10 md:pt-0">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 md:mb-10">
            <span className="w-8 h-[1px] bg-[#4E6F3D]/30" />
            <span className="text-[#4E6F3D] text-[9px] font-bold tracking-[0.4em] uppercase">Soyzi Laboratory Original</span>
          </motion.div>
          
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-[12vw] lg:text-[7rem] font-extralight leading-[0.9] text-[#1A1A1A] tracking-tighter mb-8">
            Tươi từ <br />
            <span className="font-serif italic font-light text-[#4E6F3D]">Thiên nhiên</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-base md:text-xl text-[#2F2F2A]/60 leading-relaxed max-w-md font-light mb-12">
            Nâng tầm nông sản Việt bằng khoa học hiện đại, giữ trọn sự tinh khiết trong từng mẻ sản phẩm thủ công.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex items-center gap-8">
            <Link href="/about" className="group relative text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-4">
              Khám phá câu chuyện
              <div className="w-12 h-[1px] bg-[#4E6F3D] group-hover:w-20 transition-all duration-700" />
            </Link>
          </motion.div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={imageReveal} className="lg:col-span-5 relative h-[450px] md:h-[700px] w-full flex items-center justify-center">
            {/* --- HERO IMAGE OPTIMIZATION --- */}
            <div className="absolute inset-0 bg-[#EDF1E8] rounded-[100px_30px_100px_30px] overflow-hidden">
                {/* 1. Blurred Background - Tối ưu cho ảnh nhỏ/khung lớn */}
                <div className="absolute inset-0 z-0 scale-110 blur-2xl opacity-30">
                    <Image 
                        src="/soyzi2.png" 
                        alt="" 
                        fill 
                        className="object-cover" 
                        aria-hidden="true"
                    />
                </div>
                {/* 2. Main Image - object-contain - Không bị cắt */}
                <div className="relative z-10 w-full h-full p-6 md:p-12">
                    <Image 
                        src="/soyzi2.png" 
                        alt="Sản phẩm Soyzi" 
                        fill 
                        className="object-contain transition-transform duration-[4s] hover:scale-105" 
                        priority 
                        sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                </div>
            </div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#4E6F3D]/10 rounded-full animate-spin-slow hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= PHILOSOPHY ================= */
function Philosophy() {
  return (
    <section className="py-32 md:py-56 px-5 bg-white rounded-[40px] md:rounded-[150px] relative z-20 -mt-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp} className="max-w-4xl mx-auto text-center">
        <h3 className="uppercase tracking-[0.6em] text-[9px] font-bold text-[#4E6F3D]/30 mb-8 md:mb-12">Philosophical Foundation</h3>
        <h2 className="text-3xl md:text-7xl font-extralight leading-[1.1] text-[#1A1A1A] mb-10">
          "Minh bạch để <span className="font-serif italic text-[#4E6F3D]">tin tưởng</span>, <br className="hidden md:block" /> Tiêu chuẩn để vươn xa"
        </h2>
        <div className="w-10 h-[1px] bg-[#4E6F3D]/20 mx-auto" />
      </motion.div>
    </section>
  );
}

/* ================= PRODUCTS ================= */
function Products() {
  return (
    <section id="products" className="py-32 md:py-48 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4E6F3D]/10 pb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter italic font-serif leading-tight">
              Bản Giao Hưởng <br /> <span className="text-[#4E6F3D] not-italic font-sans font-light">Vị Lành</span>
            </h2>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-40 mt-4">Nghệ thuật chắt lọc dinh dưỡng</p>
          </div>
          <Link href="/products" className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#4E6F3D] hover:opacity-60 transition-opacity border-b border-[#4E6F3D]/20 pb-1">
            Xem trọn bộ sưu tập
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 mb-32 md:mb-48">
          <ProductCard 
            num="01"
            title="Sữa chua" 
            desc="Lên men tự nhiên từ nguồn sữa lành, tạo nên kết cấu mịn mượt như lụa." 
            image="/soyzi13.png"
          />
          <ProductCard 
            num="02"
            title="Tàu hũ tươi" 
            desc="Sự thanh khiết nguyên bản từ hạt đậu nành hữu cơ tuyển chọn." 
            image="/tauhusz1.png"
          />
          <ProductCard 
            num="03"
            title="Pana cotta" 
            desc="Kết tinh giá trị dinh dưỡng cho một lối sống cân bằng và bền vững." 
            image="/soyzi15.png"
          />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageReveal} className="bg-[#4E6F3D] rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 md:p-24 text-[#EDF1E8]">
              <h3 className="text-4xl md:text-6xl font-extralight leading-tight mb-8 text-white">Quà tặng từ <br /><span className="italic font-serif opacity-60">Sự chân thành</span></h3>
              <p className="text-base md:text-lg font-light opacity-80 mb-12 max-w-sm leading-relaxed">
                Những bộ sưu tập quà tặng Organic mang tính biểu tượng thay lời tri ân sâu sắc nhất dành cho đối tác và người thân.
              </p>
              <Link href="/gifts" className="group inline-flex items-center gap-6 px-10 py-4 border border-[#EDF1E8]/30 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#EDF1E8] hover:text-[#4E6F3D] transition-all duration-500">
                Xem Catalogue <span>→</span>
              </Link>
            </div>
            {/* --- GIFT IMAGE OPTIMIZATION --- */}
            <div className="relative h-[350px] md:h-[650px] bg-white/5 overflow-hidden flex items-center justify-center">
                {/* 1. Blurred Background */}
                <div className="absolute inset-0 z-0 scale-110 blur-xl opacity-20">
                    <Image src="/sqsz1.png" alt="" fill className="object-cover" aria-hidden="true" />
                </div>
                {/* 2. Main Image - object-contain - Không bị cắt */}
                <div className="relative z-10 w-full h-full p-8 md:p-16">
                    <Image 
                        src="/sqsz1.png" 
                        alt="Gifts" 
                        fill 
                        className="object-contain hover:scale-105 transition-transform duration-1000" 
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-5 bg-white border-t border-[#EDF1E8]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight">Cùng kết nối <br /><span className="text-[#4E6F3D] font-serif italic">với Soyzi</span></h2>
          <div className="space-y-8">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#4E6F3D]/40">Đường dây nóng</p>
            <a href="tel:0528912222" className="text-3xl md:text-5xl font-extralight hover:text-[#4E6F3D] transition-colors duration-500 tracking-tighter">052 891 2222</a>
          </div>
        </div>
        <form className="bg-[#F7F9F5] p-8 md:p-16 rounded-[40px] md:rounded-[80px] space-y-10 border border-[#4E6F3D]/5 shadow-sm">
           <input type="text" placeholder="HỌ TÊN" className="w-full bg-transparent border-b border-[#4E6F3D]/20 py-4 focus:border-[#4E6F3D] outline-none text-[10px] tracking-[0.3em]" />
           <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-[#4E6F3D]/20 py-4 focus:border-[#4E6F3D] outline-none text-[10px] tracking-[0.3em]" />
           <textarea placeholder="LỜI NHẮN" rows={2} className="w-full bg-transparent border-b border-[#4E6F3D]/20 py-4 focus:border-[#4E6F3D] outline-none text-[10px] tracking-[0.3em]" />
           <button className="w-full bg-[#2F2F2A] text-white py-5 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#4E6F3D] transition-all duration-500 shadow-xl">Gửi đi</button>
        </form>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="py-20 px-5 bg-[#EDF1E8]/40 border-t border-[#4E6F3D]/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="text-[10px] tracking-[0.3em] font-bold uppercase text-[#4E6F3D]/40">Soyzi © {new Date().getFullYear()}</p>
        <div className="flex gap-8">
           {["Facebook", "Instagram", "TikTok"].map(social => (
             <a key={social} href="#" className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#2F2F2A]/60 hover:text-[#4E6F3D] transition-colors">{social}</a>
           ))}
        </div>
      </div>
    </footer>
  );
}

/* --- PRODUCT CARD COMPONENT (With Optimized Images) --- */
function ProductCard({ num, title, desc, image }: { num: string, title: string, desc: string, image: string }) {
  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeInUp} 
      className="group bg-white rounded-[40px] border border-[#4E6F3D]/5 hover:shadow-[0_40px_80px_-20px_rgba(78,111,61,0.15)] transition-all duration-700 flex flex-col overflow-hidden"
    >
      {/* Hình ảnh đại diện - Tối ưu contain */}
      <div className="relative h-72 w-full overflow-hidden bg-[#EDF1E8]/20 flex items-center justify-center p-4">
        {/* 1. Blurred Shadow Layer */}
        <div className="absolute inset-0 z-0 scale-105 blur-lg opacity-40 group-hover:opacity-20 transition-opacity duration-1000">
            <Image 
                src={image} 
                alt="" 
                fill 
                className="object-cover" 
                aria-hidden="true"
            />
        </div>
        
        {/* 2. Main Image - object-contain - Không bị cắt */}
        <div className="relative z-10 w-full h-full">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-contain transition-transform duration-1000 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 30vw"
            />
        </div>
        
        <div className="absolute top-6 left-6 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest text-[#4E6F3D] shadow-sm">
          {num}
        </div>
      </div>
      
      {/* Nội dung text */}
      <div className="p-10 flex-grow flex flex-col justify-between space-y-6 bg-white z-20">
        <div className="space-y-4">
          <h3 className="text-3xl font-extralight tracking-tight group-hover:text-[#4E6F3D] transition-colors duration-500 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-[#2F2F2A]/40 font-light leading-relaxed">
            {desc}
          </p>
        </div>
        
        {/* Decorative element */}
        <div className="pt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#4E6F3D]">Chi tiết</span>
           <div className="h-[1px] w-8 bg-[#4E6F3D]" />
        </div>
      </div>
    </motion.div>
  );
}