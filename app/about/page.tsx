"use client"; // Nếu dùng App Router, cần thêm directive này để dùng Framer Motion

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-[#EAF7E6] text-[#2F2F2A] scroll-smooth">
      <Hero />
      <Vision />
      <ImageBlock />
      <Standards />
      <Closing />
    </main>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm tracking-[4px] text-[#4A7B3B] mb-4 md:mb-6">
            VỀ SOYZI
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight mb-6 md:mb-8">
            Xây dựng một
            <br />
            tiêu chuẩn mới
            <br />
            cho thực phẩm sạch.
          </h1>
          <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-md">
            Soyzi không chỉ bán sản phẩm.
            Chúng tôi xây dựng một hệ tiêu chuẩn rõ ràng
            cho thực phẩm thủ công cao cấp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl"
        >
          <Image
            src="/soyzi7.png"
            alt="Sản phẩm Soyzi"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= VISION ================= */
function Vision() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#4A7B3B]">
            Tầm nhìn
          </h2>
          <p className="text-black/70 leading-relaxed text-base md:text-lg">
            Trở thành thương hiệu thực phẩm thủ công
            được tin cậy nhờ sự minh bạch và chất lượng ổn định.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#4A7B3B]">
            Sứ mệnh
          </h2>
          <p className="text-black/70 leading-relaxed text-base md:text-lg">
            Làm ra những sản phẩm tối giản về thành phần
            nhưng tối đa về giá trị dinh dưỡng và trải nghiệm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= IMAGE BLOCK ================= */
function ImageBlock() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[280px] sm:h-[360px] md:h-[420px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-lg group"
        >
          <Image
            src="/soyzi5.png"
            alt="Sản phẩm 1"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[280px] sm:h-[360px] md:h-[420px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-lg group"
        >
          <Image
            src="/soyzi6.png"
            alt="Sản phẩm 2"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ================= STANDARDS ================= */
function Standards() {
  const cards = [
    {
      title: "Nguyên liệu chọn lọc",
      desc: "Ưu tiên nguồn gốc rõ ràng và chất lượng ổn định.",
    },
    {
      title: "Sản xuất kiểm soát",
      desc: "Số lượng giới hạn để đảm bảo độ tươi mới.",
    },
    {
      title: "Không phụ gia dư thừa",
      desc: "Loại bỏ những thành phần không cần thiết.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-light mb-12 md:mb-16 text-center"
        >
          Tiêu chuẩn vận hành
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {cards.map((item, i) => (
            <motion.div
key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(0,50,0,0.15)" }}
              className="p-8 md:p-10 bg-white rounded-[20px] md:rounded-[24px] border border-black/5 shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-[#2F2F2A]">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-black/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CLOSING ================= */
function Closing() {
  return (
    <section className="py-24 md:py-36 px-4 md:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight"
        >
          Không phải để cạnh tranh về giá.
          <br />
          Mà để cạnh tranh về tiêu chuẩn.
        </motion.h2>
      </div>
    </section>
  );
}
