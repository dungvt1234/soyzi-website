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
    id: "tau-hu",
    title: "Tàu Hũ Tươi",
    description: "Mềm mịn, tan ngay đầu lưỡi",
    items: [
      { name: "Trân châu đường đen", price: "15.000đ", unit: "hũ", image: "/sctr.png" },
      { name: "Vị Truyền thống", price: "12.000đ", unit: "hũ", image: "/scuong.png" },
      { name: "Tàu hũ cốt dừa", price: "15.000đ", unit: "hũ", image: "/soyzi8.png" },
      { name: "Tàu hũ lá dứa", price: "15.000đ", unit: "hũ", image: "/soyzi8.png" },
      { name: "Tàu hũ gừng ấm", price: "12.000đ", unit: "hũ", image: "/soyzi8.png" },
      { name: "Mix 5 vị đặc biệt", price: "70.000đ", unit: "set", image: "/soyzi8.png" },
      { name: "Tàu hũ trân châu trắng", price: "15.000đ", unit: "hũ", image: "/soyzi8.png" },
      { name: "Tàu hũ sầu riêng", price: "20.000đ", unit: "hũ", image: "/soyzi8.png" },
      { name: "Tàu hũ trái cây", price: "18.000đ", unit: "hũ", image: "/soyzi8.png" },
      { name: "Sỉ 20 Hũ Tàu Hũ", price: "200.000đ", unit: "khay", image: "/soyzi8.png", isWholesale: true },
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
      { name: "Panna Cotta Phúc Bồn Tử", price: "25.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Matcha", price: "22.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Chocolate", price: "22.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Panna Cotta Vani Hạnh Nhân", price: "25.000đ", unit: "hũ", image: "/soyzi13.png" },
      { name: "Sỉ 12 Hũ Panna Mix", price: "210.000đ", unit: "hộp", image: "/soyzi13.png", isWholesale: true },
      { name: "Sỉ 24 Hũ Panna (Giá sỉ)", price: "400.000đ", unit: "hộp", image: "/soyzi13.png", isWholesale: true },
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
      { name: "Hạt Bí Xanh Ấn Độ", price: "40.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Hạt Chia Úc", price: "35.000đ", unit: "túi", image: "/soyzi10.png" },
      { name: "Ngũ Cốc Granola", price: "85.000đ", unit: "hũ", image: "/soyzi10.png" },
      { name: "Sỉ Thùng 10 Túi Hạt", price: "400.000đ", unit: "thùng", image: "/soyzi10.png", isWholesale: true },
      { name: "Combo 5 Loại Hạt", price: "220.000đ", unit: "set", image: "/soyzi10.png", isWholesale: true },
    ]
  }
];

export default function ProductsPage() {
  const scrollIntoView = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#F8F6F1] min-h-screen pb-20 font-sans selection:bg-[#4E6F3D] selection:text-white">
      
      {/* Header */}
      <section className="pt-24 pb-10 md:pt-40 md:pb-24 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-[#4E6F3D] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 block">
            Soyzi Natural Food
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-[#4E6F3D] mb-6 tracking-tight">
            Thực đơn <span className="italic font-serif font-light text-[#2F2F2A]">Sản phẩm</span>
          </h1>
          <div className="w-20 h-1 bg-[#4E6F3D]/20 mx-auto rounded-full mb-6"></div>
          <p className="text-[#5A5A55] max-w-xs md:max-w-lg mx-auto text-sm md:text-lg font-light leading-relaxed">
            Tinh hoa nông sản Việt được chế biến thủ công, giữ trọn hương vị nguyên bản.
          </p>
        </motion.div>
      </section>

      {/* Sub-menu Navigation */}
      <nav className="sticky top-[60px] md:top-[70px] z-30 bg-[#F8F6F1]/80 backdrop-blur-xl border-b border-[#4E6F3D]/10 py-4 overflow-x-auto no-scrollbar">
        <div className="flex justify-start md:justify-center gap-4 px-6 min-w-max">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href={`#${cat.id}`}
              onClick={(e) => scrollIntoView(e, cat.id)}
              className="px-6 py-2.5 rounded-full border border-[#4E6F3D]/10 text-[#4E6F3D] text-[11px] md:text-sm font-bold bg-white/50 hover:bg-[#4E6F3D] hover:text-white transition-all duration-300 shadow-sm"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Product Sections */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 mt-16 space-y-24 md:space-y-40">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-40">
            <div className="mb-12 text-center md:text-left px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-[#4E6F3D] mb-2">{category.title}</h2>
              <p className="text-[#5A5A55] text-sm md:text-xl italic font-serif opacity-80">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
              {category.items.map((product, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white p-3 md:p-5 rounded-[24px] md:rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-[#4E6F3D]/5 flex flex-col group"
                >
                  <div className="relative w-full aspect-square rounded-[18px] md:rounded-[30px] overflow-hidden bg-white mb-4 shadow-inner flex items-center justify-center border border-gray-50">
                    <div className="absolute inset-0 z-0 scale-125 blur-3xl opacity-10">
                        <Image src={product.image} alt="" fill className="object-cover" />
                    </div>
                    <div className="relative w-4/5 h-4/5 z-10">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                    </div>
                    {product.isWholesale && (
                      <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#4E6F3D] text-white text-[8px] md:text-[10px] font-black px-2 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest z-20 shadow-lg">
                        Giá Sỉ
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow text-center">
                    <h3 className="text-[#2F2F2A] font-bold text-sm md:text-lg mb-2 line-clamp-1 group-hover:text-[#4E6F3D] transition-colors">
                      {product.name}
                    </h3>
                    <div className="mt-auto flex flex-col items-center gap-1 mb-4">
                      <span className="text-[#4E6F3D] font-black text-base md:text-2xl">
                        {product.price}
                      </span>
                      <span className="text-[#5A5A55]/40 text-[9px] md:text-xs font-bold uppercase tracking-tighter">
                        Đơn vị: {product.unit}
                      </span>
                    </div>
                    <Link 
                      href="tel:0528912222"
                      className="w-full bg-[#4E6F3D] text-white py-3 md:py-4 rounded-xl md:rounded-[20px] text-[10px] md:text-xs uppercase font-black tracking-widest hover:bg-[#2F2F2A] transition-all duration-300 shadow-lg shadow-[#4E6F3D]/20 active:scale-95"
                    >
                      Đặt hàng ngay
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}