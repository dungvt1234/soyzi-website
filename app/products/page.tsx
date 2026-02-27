"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    id: "sua-chua",
    title: "Sữa Chua Thủ Công",
    description: "Lên men tự nhiên, thuần khiết",
    items: [
      { name: "Vị Truyền Thống", price: "10.000đ", unit: "hũ", image: "/soyzi1.png" },
      { name: "Vị Nha Đam", price: "12.000đ", unit: "hũ", image: "/soyzi2.png" },
      { name: "Vị Việt Quất", price: "15.000đ", unit: "hũ", image: "/soyzi3.png" },
      { name: "Vị Chanh Leo", price: "12.000đ", unit: "hũ", image: "/soyzi4.png" },
      { name: "Vị Dâu Tây", price: "15.000đ", unit: "hũ", image: "/soyzi5.png" },
      { name: "Sữa chua Hy Lạp", price: "25.000đ", unit: "hũ", image: "/soyzi6.png" },
      { name: "Sỉ 30 Hũ (Mix)", price: "270.000đ", unit: "thùng", image: "/soyzi1.png", isWholesale: true },
      { name: "Sỉ 50 Hũ (Giá tốt)", price: "400.000đ", unit: "thùng", image: "/soyzi1.png", isWholesale: true },
    ]
  },
  {
    id: "tau-hu",
    title: "Tàu Hũ Tươi",
    description: "Mềm mịn, tan ngay đầu lưỡi",
    items: [
      { name: "Trân châu đường đen", price: "15.000đ", unit: "hũ", image: "/soyzi8.png" },
      { name: "Vị Truyền thống", price: "12.000đ", unit: "hũ", image: "/soyzi9.png" },
      { name: "Sỉ 20 Hũ Tàu Hũ", price: "200.000đ", unit: "khay", image: "/soyzi8.png", isWholesale: true },
    ]
  },
  {
    id: "panna-cotta",
    title: "Panna Cotta",
    description: "Món tráng miệng chuẩn Ý",
    items: [
      { name: "Panna Cotta Dâu", price: "20.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Xoài", price: "20.000đ", unit: "hũ", image: "/soyzi14.png" },
      { name: "Sỉ 12 Hũ Panna", price: "210.000đ", unit: "hộp", image: "/soyzi13.png", isWholesale: true },
    ]
  },
  {
    id: "hat",
    title: "Các Loại Hạt",
    description: "Hạt dinh dưỡng tuyển chọn",
    items: [
      { name: "Hạnh nhân rang bơ", price: "45.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Hạt điều vỏ lụa", price: "50.000đ", unit: "túi", image: "/soyzi11.png" },
      { name: "Hạt Macca nứt vỏ", price: "65.000đ", unit: "túi", image: "/soyzi12.png" },
    ]
  }
];

export default function ProductsPage() {
  const scrollIntoView = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="bg-[#F8F6F1] min-h-screen pb-20 font-sans">
      
      {/* Header - Tối ưu khoảng cách cho Mobile */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-16 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-[#4E6F3D] font-bold tracking-[0.2em] uppercase text-[9px] mb-2 block">
            Soyzi Natural Food
          </span>
          <h1 className="text-3xl md:text-6xl font-bold text-[#4E6F3D] mb-4">
            Thực đơn <span className="italic font-serif font-light text-[#2F2F2A]">Sản phẩm</span>
          </h1>
          <p className="text-[#5A5A55] max-w-xs md:max-w-lg mx-auto text-xs md:text-base font-light">
            Thủ công - Tự nhiên - Sức khỏe
          </p>
        </motion.div>
      </section>

      {/* Sub-menu - Ẩn thanh cuộn ngang trên Mobile */}
      <div className="sticky top-[60px] md:top-[70px] z-30 bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#4E6F3D]/5 py-3 overflow-x-auto scrollbar-hide">
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <div className="flex justify-start md:justify-center gap-3 px-6 min-w-max">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href={`#${cat.id}`}
              onClick={(e) => scrollIntoView(e, cat.id)}
              className="px-4 py-2 rounded-full border border-[#4E6F3D]/20 text-[#4E6F3D] text-[10px] md:text-xs font-bold bg-white/50 active:scale-95 transition-all"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 space-y-16 md:space-y-28">
        {categories.map((category) => (
          <section key={category.id} id={category.id}>
            <div className="mb-8 px-2">
              <h2 className="text-2xl md:text-4xl font-bold text-[#4E6F3D]">{category.title}</h2>
              <p className="text-[#5A5A55] text-xs md:text-base italic font-serif opacity-70">{category.description}</p>
            </div>

            {/* Grid 2 cột trên Mobile, 4 cột trên Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10">
              {category.items.map((product, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-2 md:p-4 rounded-[32px] md:rounded-[56px] shadow-sm border border-[#4E6F3D]/5 flex flex-col items-center text-center"
                >
                  <div className="relative w-full aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#FBFBFB] mb-3 md:mb-5">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.isWholesale && (
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#4E6F3D] text-white text-[7px] md:text-[9px] font-black px-2 py-1 md:px-3 md:py-1 rounded-full uppercase tracking-widest">
                        Giá Sỉ
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-[#2F2F2A] font-bold text-[11px] md:text-base mb-1 px-1 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-col items-center gap-0.5 md:gap-1 mb-3">
                    <span className="text-[#4E6F3D] font-black text-xs md:text-xl">
                      {product.price}
                    </span>
                    <span className="text-[#5A5A55]/50 text-[8px] md:text-[10px] font-bold uppercase">
                      /{product.unit}
                    </span>
                  </div>
                  
                  <Link 
                    href="tel:0528912222"
                    className="w-full bg-[#4E6F3D] text-white py-2 md:py-3.5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] uppercase font-black tracking-widest hover:bg-[#3f5c32] active:scale-95 transition-all shadow-md shadow-[#4E6F3D]/10"
                  >
                    Đặt ngay
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}