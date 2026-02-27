"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ================= DỮ LIỆU SẢN PHẨM ================= */
const categories = [
  {
    id: "sua-chua",
    title: "Sữa Chua Thủ Công",
    description: "Lên men tự nhiên, thuần khiết",
    items: [
      { name: "Vị Truyền Thống", price: "10.000đ", unit: "hũ", image: "/scth.png" },
      { name: "Vị Nha Đam", price: "12.000đ", unit: "hũ", image: "/soyzi2.png" },
      { name: "Vị Việt Quất", price: "15.000đ", unit: "hũ", image: "/soyzi3.png" },
      { name: "Vị Chanh Leo", price: "12.000đ", unit: "hũ", image: "/soyzi4.png" },
      { name: "Vị Dâu Tây", price: "15.000đ", unit: "hũ", image: "/soyzi5.png" },
      { name: "Sữa chua Hy Lạp", price: "25.000đ", unit: "hũ", image: "/soyzi6.png" },
      { name: "Vị Hạt Sen", price: "18.000đ", unit: "hũ", image: "/soyzi1.png" },
      { name: "Vị Nếp Cẩm", price: "15.000đ", unit: "hũ", image: "/soyzi2.png" },
      { name: "Sỉ 30 Hũ (Mix)", price: "270.000đ", unit: "thùng", image: "/soyzi1.png", isWholesale: true },
      { name: "Sỉ 50 Hũ (Giá tốt)", price: "400.000đ", unit: "thùng", image: "/soyzi1.png", isWholesale: true },
    ]
  },
  {
    id: "panna-cotta",
    title: "Panna Cotta",
    description: "Món tráng miệng chuẩn Ý, thanh mát",
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
    title: "Các Loại Hạt Dinh Dưỡng",
    description: "Nguồn năng lượng xanh từ thiên nhiên",
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
    <main className="bg-[#F8F6F1] min-h-screen pb-20 font-sans selection:bg-[#4E6F3D] selection:text-white">
      
      {/* Header */}
      <section className="pt-24 pb-10 md:pt-40 md:pb-24 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#4E6F3D] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Soyzi Natural Food</span>
          <h1 className="text-4xl md:text-7xl font-bold text-[#4E6F3D] mb-6 tracking-tight">Thực đơn Sản phẩm</h1>
          <p className="text-[#5A5A55] max-w-lg mx-auto text-sm md:text-lg font-light">
            Tinh hoa nông sản Việt được chế biến thủ công, giữ trọn hương vị nguyên bản.
          </p>
        </motion.div>
      </section>

      {/* Danh sách sản phẩm */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 space-y-24">
        {categories.map((category) => (
          <section key={category.id} className="scroll-mt-40">
            <h2 className="text-3xl md:text-5xl font-bold text-[#4E6F3D] mb-8">{category.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
              {category.items.map((product, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white p-3 md:p-5 rounded-[24px] md:rounded-[40px] shadow-sm border border-[#4E6F3D]/5 flex flex-col group"
                >
                  {/* Container Ảnh chống cắt */}
                  <div className="relative w-full aspect-square rounded-[18px] md:rounded-[30px] overflow-hidden bg-white mb-4 flex items-center justify-center border border-gray-50">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-2 transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="text-center flex flex-col flex-grow">
                    <h3 className="text-[#2F2F2A] font-bold text-sm md:text-lg mb-2 line-clamp-1">{product.name}</h3>
                    <div className="text-[#4E6F3D] font-black text-base md:text-2xl mb-4 mt-auto">{product.price}</div>
                    
                    {/* Nút Mua Ngay */}
                    <button 
                      onClick={() => setBuyingProduct(product)}
                      className="w-full bg-[#4E6F3D] text-white py-3 md:py-4 rounded-xl md:rounded-[20px] text-[10px] md:text-xs uppercase font-black tracking-widest hover:bg-[#2F2F2A] transition-all duration-300 shadow-lg shadow-[#4E6F3D]/20 active:scale-95"
                    >
                      Mua ngay
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* --- MODAL LIÊN HỆ ĐẶT HÀNG --- */}
      <AnimatePresence>
        {buyingProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setBuyingProduct(null)} 
              className="absolute inset-0 bg-[#2F2F2A]/85 backdrop-blur-sm" 
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              className="relative w-full max-w-md bg-[#F8F6F1] rounded-[32px] md:rounded-[50px] overflow-hidden shadow-2xl p-8 md:p-12 text-center"
            >
              <button 
                onClick={() => setBuyingProduct(null)} 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#2F2F2A] hover:bg-red-50"
              >✕</button>

              <div className="mb-6">
                <div className="relative w-32 h-32 mx-auto bg-white rounded-3xl p-4 shadow-sm border border-gray-100 mb-4">
                    <Image src={buyingProduct.image} alt={buyingProduct.name} fill className="object-contain p-2" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2F2F2A]">{buyingProduct.name}</h3>
                <p className="text-[#4E6F3D] font-black text-lg">{buyingProduct.price}</p>
              </div>

              <p className="text-sm text-[#5A5A55] font-light mb-8">
                Bạn muốn đặt hàng qua kênh nào? <br /> Soyzi sẽ hỗ trợ bạn ngay lập tức.
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href={`https://zalo.me/0528912222?text=${encodeURIComponent(`Chào Soyzi, mình muốn đặt mua sản phẩm: ${buyingProduct.name}`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-[#0068FF] text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-lg shadow-[#0068FF]/20 active:scale-95 transition-all"
                >
                  Kết nối qua Zalo
                </a>
                <a 
                  href="https://m.me/soyzi.vn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-[#0084FF] text-white py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-lg shadow-[#0084FF]/20 active:scale-95 transition-all"
                >
                  Kết nối qua Messenger
                </a>
                <Link 
                  href="tel:0528912222"
                  className="w-full border border-[#4E6F3D] text-[#4E6F3D] py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs active:scale-95 transition-all"
                >
                  Gọi hotline trực tiếp
                </Link>
              </div>
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