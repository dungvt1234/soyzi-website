"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

/* ================= TYPES & INTERFACES ================= */
interface GiftSet {
  name: string;
  desc: string;
  image: string;
  price: string;
  longDesc: string;
  includes: string[];
}

const giftSets: GiftSet[] = [
  {
    name: "Set An Lành",
    desc: "6 hũ sữa chua vị tự nhiên & 1 túi hạt hạnh nhân.",
    image: "/sqsz1.png",
    price: "150.000đ",
    longDesc: "Set quà An Lành mang thông điệp về sự khởi đầu nhẹ nhàng và thanh khiết. Sự kết hợp hoàn hảo giữa vị sữa chua truyền thống mịn màng và hạt hạnh nhân sấy giòn tan, giàu vitamin E.",
    includes: ["06 Hũ sữa chua vị tự nhiên 100ml", "01 Túi hạt hạnh nhân hữu cơ (150g)", "Thiệp viết tay Soyzi", "Hộp quà Kraft thân thiện môi trường"]
  },
  {
    name: "Set Sức Khỏe",
    desc: "Mix sữa chua Hy Lạp, Panna Cotta và hạt Macca.",
    image: "/sqsz2.png",
    price: "250.000đ",
    longDesc: "Dành cho những người yêu thích lối sống lành mạnh. Sữa chua Hy Lạp giàu đạm kết hợp cùng Macca cao cấp giúp bổ sung dưỡng chất thiết yếu cho cơ thể mỗi ngày.",
    includes: ["03 Sữa chua Hy Lạp nguyên vị", "03 Panna Cotta dâu rừng", "01 Lọ hạt Macca Đắk Lắk", "Hộp quà trang trọng có quai xách"]
  },
  {
    name: "Hộp Cao Cấp",
    desc: "Thiết kế sang trọng với trọn bộ sản phẩm đặc trưng.",
    image: "/sqsz3.png",
    price: "450.000đ",
    longDesc: "Biểu tượng của sự tinh tế và đẳng cấp. Hộp quà được thiết kế riêng biệt, tập hợp những dòng sản phẩm tâm huyết nhất của Soyzi, thay lời tri ân sâu sắc tới người nhận.",
    includes: ["04 Hũ sữa chua vị thượng hạng", "02 Lọ hạt dinh dưỡng nhập khẩu", "01 Hũ mứt trái cây thủ công", "Hộp gỗ thông khắc logo Soyzi tinh xảo"]
  },
  {
    name: "Set Thuần Khiết",
    desc: "Sữa chua hạt sen kết hợp mứt trái cây nhiệt đới.",
    image: "/sqsz4.png",
    price: "180.000đ",
    longDesc: "Một sự kết hợp đậm chất Á Đông giữa hạt sen Đồng Tháp bùi ngậy và sữa chua mịn màng. Set quà mang lại cảm giác thư thái và nguồn năng lượng dồi dào từ thiên nhiên.",
    includes: ["04 Hũ sữa chua hạt sen", "02 Hũ mứt xoài cát Hòa Lộc", "01 Túi trà mộc quế hoa", "Túi vải Canvas bảo vệ môi trường"]
  },
  {
    name: "Năng Lượng Xanh",
    desc: "Sữa chua Hy Lạp, ngũ cốc và Granola mật ong.",
    image: "/sqsz5.png",
    price: "320.000đ",
    longDesc: "Giải pháp hoàn hảo cho bữa sáng hoặc bữa phụ năng động. Granola nướng mật ong hòa quyện cùng sữa chua Hy Lạp tạo nên hương vị bùng nổ, giúp duy trì vóc dáng và sức khỏe.",
    includes: ["04 Hũ sữa chua Hy Lạp", "01 Túi Granola mật ong (250g)", "01 Lọ mật ong hoa cà phê", "Thìa gỗ thủ công tinh tế"]
  },
  {
    name: "Set Signature",
    desc: "Các vị best-seller trong hộp gỗ thủ công.",
    image: "/sqsz6.png",
    price: "590.000đ",
    longDesc: "Lựa chọn hoàn hảo nhất để khám phá thế giới hương vị Soyzi. Từng sản phẩm trong set Signature đều là những món 'tủ' được khách hàng yêu thích nhất trong suốt hành trình 2019 đến nay.",
    includes: ["08 Hũ sữa chua tuyển chọn các vị", "02 Hũ hạt đặc sản vùng miền", "01 Khay gỗ phục vụ cao cấp", "Bộ thiệp và Catalogue nghệ thuật"]
  }
];

/* ================= ANIMATIONS ================= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function GiftCatalogue() {
  const [selectedSet, setSelectedSet] = useState<GiftSet | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#F8F6F1] px-4 md:px-6 overflow-hidden selection:bg-[#4E6F3D] selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <span className="text-[#4E6F3D] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 block">
              Gửi trao yêu thương
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-[#2F2F2A] leading-tight">
              Catalogue <span className="italic font-serif font-light text-[#4E6F3D]">Quà Tặng</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#4E6F3D] mt-4 mx-auto md:mx-0"></div>
          </motion.div>
        </div>

        {/* Grid Quà Tặng */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 md:gap-x-10 md:gap-y-16"
        >
          {giftSets.map((set, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="group flex flex-col cursor-pointer"
              onClick={() => setSelectedSet(set)}
            >
              {/* --- IMAGE CONTAINER ĐÃ CHỈNH SỬA --- */}
              <div className="relative aspect-[1/1] md:aspect-[4/5] rounded-[20px] md:rounded-[40px] overflow-hidden mb-4 md:mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-white bg-white">
                
                {/* 1. Nền mờ (Blurred Background) - Ôm trọn khung hình */}
                <div className="absolute inset-0 z-0 scale-110 blur-2xl opacity-30">
                    <Image 
                      src={set.image} 
                      alt=""
                      fill
                      className="object-cover"
                      aria-hidden="true"
                    />
                </div>

                {/* 2. Ảnh chính - object-contain - Không bị cắt */}
                <div className="absolute inset-0 z-10 p-2 md:p-6">
                  <Image 
                    src={set.image} 
                    alt={set.name} 
                    fill 
                    priority={idx < 3}
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>

                {/* Price Tag */}
                <div className="absolute top-2 left-2 md:top-6 md:left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-[#4E6F3D] px-2.5 py-1 md:px-4 md:py-2 rounded-full text-[9px] md:text-sm font-bold shadow-sm">
                    {set.price}
                  </span>
                </div>
                {/* Desktop Overlay */}
                <div className="hidden md:flex absolute inset-0 bg-[#4E6F3D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center z-20">
                  <span className="bg-white text-[#2F2F2A] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Xem chi tiết
                  </span>
                </div>
              </div>

              <div className="px-1 z-10">
                <h3 className="text-sm md:text-2xl font-bold text-[#2F2F2A] mb-1 group-hover:text-[#4E6F3D] transition-colors line-clamp-1">
                  {set.name}
                </h3>
                <p className="text-[10px] md:text-base text-[#5A5A55] font-light line-clamp-2 leading-relaxed">
                  {set.desc}
                </p>
                <div className="mt-2.5 md:hidden">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#4E6F3D] border-b border-[#4E6F3D]">
                    Chi tiết →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- MODAL CHI TIẾT --- */}
      <AnimatePresence>
        {selectedSet && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSet(null)}
              className="absolute inset-0 bg-[#2F2F2A]/85 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#F8F6F1] rounded-[24px] md:rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              {/* Nút đóng */}
              <button 
                onClick={() => setSelectedSet(null)}
                className="absolute top-3 right-3 md:top-8 md:right-8 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-lg text-[#2F2F2A] hover:bg-[#4E6F3D] hover:text-white transition-colors"
              >
                ✕
              </button>

              {/* Bên trái: Ảnh - CŨNG CHỈNH SỬA ĐỂ ÔM TRỌN */}
              <div className="relative w-full md:w-1/2 aspect-[1.1/1] md:aspect-auto h-auto md:h-[650px] bg-white md:bg-transparent p-4 md:p-0">
                 {/* Nền mờ cho Modal Image trên Desktop */}
                 <div className="hidden md:block absolute inset-0 z-0 scale-110 blur-3xl opacity-20">
                    <Image 
                      src={selectedSet.image} 
                      alt=""
                      fill
                      className="object-cover"
                      aria-hidden="true"
                    />
                </div>
                
                {/* Ảnh chính contain */}
                <div className="relative w-full h-full z-10 md:p-12">
                    <Image 
                        src={selectedSet.image} 
                        alt={selectedSet.name} 
                        fill 
                        className="object-contain" 
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
              </div>

              {/* Bên phải: Thông tin */}
              <div className="w-full md:w-1/2 p-6 md:p-14 flex flex-col justify-center bg-[#F8F6F1]">
                <span className="text-[#4E6F3D] font-bold tracking-[0.2em] uppercase text-[9px] md:text-[10px] mb-2 md:mb-3 block">Premium Gift Set</span>
                <h2 className="text-2xl md:text-5xl font-bold text-[#2F2F2A] mb-3 md:mb-4 leading-tight">{selectedSet.name}</h2>
                <div className="text-xl md:text-2xl text-[#4E6F3D] font-serif italic mb-5 md:mb-6">{selectedSet.price}</div>
                
                <p className="text-[#5A5A55] leading-relaxed mb-6 md:mb-8 font-light text-sm md:text-base">
                  {selectedSet.longDesc}
                </p>

                <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  <h4 className="font-bold text-[#2F2F2A] text-xs md:text-sm uppercase tracking-widest">Set quà bao gồm:</h4>
                  <ul className="grid grid-cols-1 gap-1.5 md:gap-2">
                    {selectedSet.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 md:gap-3 text-sm text-[#5A5A55] leading-snug">
                        <span className="text-[#4E6F3D] mt-1 text-xs">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-[#4E6F3D] text-white py-3.5 md:py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-[#3D5A30] transition-all shadow-lg shadow-[#4E6F3D]/20">
                  Đặt mua giỏ quà
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}