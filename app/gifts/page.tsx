"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const giftSets = [
  {
    name: "Set An Lành", // Rút gọn tên cho Mobile đỡ nhảy dòng
    desc: "6 hũ sữa chua vị tự nhiên & 1 túi hạt hạnh nhân.",
    image: "/gift-set-1.png",
    price: "150.000đ"
  },
  {
    name: "Set Sức Khỏe",
    desc: "Mix sữa chua Hy Lạp, Panna Cotta và hạt Macca.",
    image: "/gift-set-2.png",
    price: "250.000đ"
  },
  {
    name: "Hộp Cao Cấp",
    desc: "Thiết kế sang trọng với trọn bộ sản phẩm đặc trưng.",
    image: "/gift-set-3.png",
    price: "450.000đ"
  },
  {
    name: "Set Thuần Khiết",
    desc: "Sữa chua hạt sen kết hợp mứt trái cây nhiệt đới.",
    image: "/gift-set-4.png",
    price: "180.000đ"
  },
  {
    name: "Năng Lượng Xanh",
    desc: "Sữa chua Hy Lạp, ngũ cốc và Granola mật ong.",
    image: "/gift-set-5.png",
    price: "320.000đ"
  },
  {
    name: "Set Signature",
    desc: "Các vị best-seller trong hộp gỗ thủ công.",
    image: "/gift-set-6.png",
    price: "590.000đ"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function GiftCatalogue() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F6F1] px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Căn chỉnh lại cho Mobile */}
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

        {/* Grid: 2 cột trên Mobile, 3 cột trên Desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-10 md:gap-y-16"
        >
          {giftSets.map((set, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="group flex flex-col"
              whileTap={{ scale: 0.98 }} // Hiệu ứng nhấn trên Mobile
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[24px] md:rounded-[40px] overflow-hidden mb-4 md:mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-white">
                <Image 
                  src={set.image} 
                  alt={set.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Tag giá luôn hiện trên Mobile để khách dễ thấy */}
                <div className="absolute top-3 left-3 md:top-6 md:left-6">
                  <span className="bg-white/90 backdrop-blur-md text-[#4E6F3D] px-3 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-bold shadow-sm">
                    {set.price}
                  </span>
                </div>

                {/* Overlay chỉ hiện nút khi Hover (Desktop) */}
                <div className="hidden md:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                  <button className="bg-white text-[#2F2F2A] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    Xem chi tiết
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-1">
                <h3 className="text-base md:text-2xl font-bold text-[#2F2F2A] mb-1 md:mb-3 group-hover:text-[#4E6F3D] transition-colors line-clamp-1">
                  {set.name}
                </h3>
                <p className="text-[10px] md:text-base text-[#5A5A55] leading-relaxed line-clamp-2 font-light">
                  {set.desc}
                </p>
                
                {/* Nút giả cho Mobile (vì Mobile không có Hover) */}
                <button className="mt-3 text-[9px] md:hidden font-bold uppercase tracking-widest text-[#4E6F3D] border-b border-[#4E6F3D] pb-0.5">
                  Chi tiết →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}