"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DỮ LIỆU SẢN PHẨM (Giữ nguyên) ================= */
const categories = [
  {
    id: "sua-chua",
    title: "Sữa Chua Thủ Công",
    description: "Lên men chậm tự nhiên, giữ trọn vi chất quý giá",
    items: [
      { name: "Vị Truyền Thống", price: "12.000đ", unit: "hũ", image: "/soyzi18.png" },
      { name: "Vị trứng gà ta", price: "15.000đ", unit: "hũ", image: "/suachuagt.png" },
      { name: "Vị phô mai", price: "15.000đ", unit: "hũ", image: "/suachuapm.png" },
      { name: "Vị cốm", price: "15.000đ", unit: "hũ", image: "/suachuac.png" },
      { name: "Vị nếp cẩm", price: "15.000đ", unit: "hũ", image: "/suachuapnc.png" },
      { name: "Sữa chua Hy Lạp", price: "30.000đ", unit: "hũ", image: "/suachuahl.png" },
      { name: "Sữa chua uống", price: "15.000đ", unit: "hũ", image: "/suachuauong.png" },
      { name: "Vị Nếp Cẩm", price: "15.000đ", unit: "hũ", image: "/soyzi2.png" },
      { name: "combo mix vị", price: "150.000đ", unit: "thùng", image: "/combo.png", isWholesale: true },
      { name: "Sỉ 50 Hũ (Giá tốt)", price: "400.000đ", unit: "thùng", image: "/soyzi1.png", isWholesale: true },
    ]
  },
  {
    id: "panna-cotta",
    title: "Panna Cotta",
    description: "Món tráng miệng chuẩn Ý, thanh mát dịu nhẹ",
    items: [
      { name: "Panna Cotta Dâu Tây", price: "20.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Xoài Cát", price: "20.000đ", unit: "hũ", image: "/soyzi14.png" },
      { name: "Panna Cotta Việt Quất", price: "22.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Chanh Dây", price: "20.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Matcha", price: "22.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Chocolate", price: "22.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Vani", price: "25.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Mix Vị", price: "25.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Sỉ 12 Hũ Panna", price: "210.000đ", unit: "hộp", image: "/soyzi13.png", isWholesale: true },
      { name: "Sỉ 24 Hũ Panna", price: "400.000đ", unit: "hộp", image: "/soyzi13.png", isWholesale: true },
    ]
  },
  {
    id: "cac-loai-hat",
    title: "Hạt Dinh Dưỡng",
    description: "Nguồn năng lượng xanh bền bỉ từ thiên nhiên",
    items: [
      { name: "Hạnh Nhân Rang Bơ", price: "45.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Hạt Điều Vỏ Lụa", price: "50.000đ", unit: "túi", image: "/soyzi11.png" },
      { name: "Hạt Macca Nứt Vỏ", price: "65.000đ", unit: "túi", image: "/soyzi12.png" },
      { name: "Hạt Óc Chó Vàng", price: "55.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Hạt Dẻ Cười Mỹ", price: "75.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Hạt Bí Xanh", price: "40.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Hạt Chia Úc", price: "35.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Ngũ Cốc Granola", price: "85.000đ", unit: "hũ", image: "/soyzi10.png" },
      { name: "Sỉ Thùng 10 Túi", price: "400.000đ", unit: "thùng", image: "/soyzi10.png", isWholesale: true },
      { name: "Combo 5 Loại Hạt", price: "220.000đ", unit: "set", image: "/soyzi10.png", isWholesale: true },
    ]
  }
];

export default function ProductsPage() {
  const [buyingProduct, setBuyingProduct] = useState<any>(null);

  return (
    <main className="bg-[#F7F9F5] min-h-screen pb-32 font-sans selection:bg-[#4E6F3D] selection:text-white antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION REFINED --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#4E6F3D_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.05] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#4E6F3D]/5 border border-[#4E6F3D]/10">
             <span className="w-1.5 h-1.5 rounded-full bg-[#4E6F3D] animate-pulse" />
             <span className="text-[#4E6F3D] font-bold tracking-[0.4em] uppercase text-[9px]">Soyzi Culinary Arts</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter text-[#1A1A1A] leading-tight">
            Thực đơn <span className="font-serif italic text-[#4E6F3D]">Vị Lành</span>
          </h1>
          <p className="text-[#2F2F2A]/60 max-w-xl mx-auto text-base md:text-xl font-light leading-relaxed">
            Nơi hương vị thủ công hòa quyện cùng giá trị dinh dưỡng thuần khiết, mang đến trải nghiệm ẩm thực tinh tế.
          </p>
        </motion.div>
      </section>

      {/* --- PRODUCT LIST REFINED --- */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-32">
        {categories.map((category, catIdx) => (
          <section key={category.id} className="scroll-mt-40">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12 border-b border-[#4E6F3D]/10 pb-8"
            >
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-[#1A1A1A]">
                  {category.title}
                </h2>
                <p className="text-sm md:text-base text-[#2F2F2A]/40 font-light italic">{category.description}</p>
              </div>
              <span className="hidden md:block text-[10px] font-bold tracking-[0.5em] text-[#4E6F3D]/30 uppercase">Collection 0{catIdx + 1}</span>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10">
              {category.items.map((product, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-[32px] md:rounded-[48px] p-4 md:p-6 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(78,111,61,0.15)] border border-[#4E6F3D]/5 flex flex-col"
                >
                  {/* Container Ảnh - Aura Effect & object-contain - Không bị cắt */}
                  <div className="relative aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#EDF1E8]/30 mb-6 flex items-center justify-center group-hover:bg-[#EDF1E8]/50 transition-colors duration-500">
                    {/* 1. Blurred Shadow Layer */}
                    <div className="absolute inset-0 z-0 scale-125 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000">
                        <Image src={product.image} alt="" fill className="object-cover" aria-hidden="true" />
                    </div>
                    
                    {/* 2. Main Image - object-contain - Không bị cắt */}
                    <div className="relative z-10 w-full h-full p-4 md:p-8">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-contain transition-transform duration-[1s] ease-out group-hover:scale-110" 
                        />
                    </div>
                    {product.isWholesale && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#4E6F3D] text-white text-[8px] font-bold tracking-widest uppercase rounded-full z-20">Wholesale</div>
                    )}
                  </div>

                  <div className="flex flex-col flex-grow text-center px-2 z-10">
                    <h3 className="text-[#1A1A1A] font-medium text-sm md:text-base mb-2 group-hover:text-[#4E6F3D] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="text-[#4E6F3D] font-bold text-lg md:text-2xl mb-6 mt-auto tracking-tighter">
                      {product.price}
                    </div>
                    
                    <button 
                      onClick={() => setBuyingProduct(product)}
                      className="relative overflow-hidden w-full bg-[#1A1A1A] text-white py-4 rounded-full text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-500 hover:bg-[#4E6F3D] active:scale-95 shadow-xl shadow-black/5"
                    >
                      <span className="relative z-10">Mua ngay</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* --- PREMIUM MODAL (Luxury Refined) --- */}
      <AnimatePresence>
        {buyingProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setBuyingProduct(null)} 
              className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 40 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl bg-[#F7F9F5] rounded-[48px] md:rounded-[64px] shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)] p-10 md:p-16 text-center max-h-[90svh] overflow-y-auto no-scrollbar"
            >
              <button 
                onClick={() => setBuyingProduct(null)} 
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/50 backdrop-blur shadow-sm flex items-center justify-center text-[#1A1A1A] hover:bg-white transition-all z-50"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>

              <div className="mb-10 space-y-6">
                <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto bg-white rounded-[40px] p-8 md:p-10 shadow-2xl shadow-[#4E6F3D]/10 flex items-center justify-center p-6 border border-[#4E6F3D]/5">
                    {/* 1. Blurred Shadow Layer */}
                    <div className="absolute inset-0 z-0 scale-110 blur-xl opacity-30">
                        <Image src={buyingProduct.image} alt="" fill className="object-cover" aria-hidden="true" />
                    </div>
                    
                    {/* 2. Main Image - object-contain - Không bị cắt */}
                    <div className="relative z-10 w-full h-full p-4 md:p-8">
                        <Image src={buyingProduct.image} alt={buyingProduct.name} fill className="object-contain p-2 md:p-4 transition-transform duration-[5s] hover:scale-105" sizes="(max-width: 768px) 100vw, 30vw" />
                    </div>
                </div>
                <div className="space-y-2 z-10 relative">
                  <h3 className="text-2xl md:text-4xl font-extralight tracking-tight text-[#1A1A1A]">{buyingProduct.name}</h3>
                  <p className="text-[#4E6F3D] font-bold text-2xl md:text-3xl">{buyingProduct.price}</p>
                </div>
              </div>

              <div className="space-y-4 z-10 relative">
                <a 
                  href={`https://zalo.me/0528912222?text=${encodeURIComponent(`Chào Soyzi, mình muốn đặt mua sản phẩm: ${buyingProduct.name}`)}`} 
                  target="_blank" rel="noopener noreferrer" 
                  className="group flex items-center justify-center gap-4 w-full bg-[#0068FF] text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-[#0068FF]/10 hover:brightness-110 transition-all active:scale-95"
                >
                  Kết nối qua Zalo
                </a>
                <a 
                  href="https://m.me/soyzi.vn" 
                  target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-4 w-full bg-[#0084FF] text-white py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-[#0084FF]/10 hover:brightness-110 transition-all active:scale-95"
                >
                  Facebook Messenger
                </a>
                <Link 
                  href="tel:0528912222"
                  className="flex items-center justify-center gap-4 w-full border border-[#4E6F3D]/20 text-[#4E6F3D] py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-[#4E6F3D] hover:text-white transition-all active:scale-95 shadow-xl shadow-[#4E6F3D]/5"
                >
                  Gọi Hotline: 052 891 2222
                </Link>
              </div>
              
              <p className="mt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-[#2F2F2A]/30 italic z-10 relative">Soyzi Vietnam · Handcrafted with love</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}