"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

// Khai báo Variants chuẩn
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Cảm ơn bạn! Soyzi đã nhận được thông tin và sẽ phản hồi sớm nhất.", {
      duration: 4000,
      position: "bottom-center",
      style: {
        background: "#4E6F3D",
        color: "#fff",
        borderRadius: "16px",
        padding: "16px",
      },
    });
    
    setIsSubmitting(false);
    e.currentTarget.reset(); 
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1] pt-24 md:pt-32 pb-16 px-4 md:px-6 selection:bg-[#4E6F3D] selection:text-white">
      <Toaster />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#4E6F3D] mb-4">Liên hệ với Soyzi</h1>
          <p className="text-[#5A5A55] max-w-xl mx-auto font-light">Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành trình dinh dưỡng tinh khiết.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {[
                { icon: <FiMapPin />, title: "Địa chỉ", content: "9G1 Ngô Đức Kế, F.Tam Thắng, TP. Hồ Chí Minh" },
                { icon: <FiPhone />, title: "Hotline", content: "0528 912 222" },
                { icon: <FiMail />, title: "Email", content: "info@soyzi.vn" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 hover:bg-white transition-all duration-300 border border-transparent hover:border-[#4E6F3D]/10">
                  <div className="p-3 bg-white rounded-xl text-[#4E6F3D] shadow-sm">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#4E6F3D] text-sm md:text-base">{item.title}</h3>
                    <p className="text-[#5A5A55] text-sm md:text-base">{item.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Sửa lỗi triệt để tại đây */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full h-[300px] md:h-[350px] rounded-[32px] overflow-hidden shadow-sm border-4 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1772208328683!6m8!1m7!1s_V_KRh4a9jskyCnsF6rckQ!2m2!1d10.36614253501133!2d107.0826730100905!3f147.19722113809067!4f-7.991557149753476!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[32px] shadow-[0_20px_50px_-20px_rgba(78,111,61,0.15)] order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-[#5A5A55] ml-1 uppercase tracking-wider">Họ và tên</label>
                <input
                  required
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-[#FBFBF9] border border-[#E5E2D9] rounded-2xl px-5 py-4 focus:border-[#4E6F3D] focus:ring-1 focus:ring-[#4E6F3D] transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-[#5A5A55] ml-1 uppercase tracking-wider">Email liên hệ</label>
                <input
                  required
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-[#FBFBF9] border border-[#E5E2D9] rounded-2xl px-5 py-4 focus:border-[#4E6F3D] focus:ring-1 focus:ring-[#4E6F3D] transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-[#5A5A55] ml-1 uppercase tracking-wider">Nội dung trao đổi</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Soyzi có thể giúp gì cho bạn?"
                  className="w-full bg-[#FBFBF9] border border-[#E5E2D9] rounded-2xl px-5 py-4 focus:border-[#4E6F3D] focus:ring-1 focus:ring-[#4E6F3D] transition-all outline-none resize-none"
                />
              </div>

              <motion.button
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#4E6F3D] text-white py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#4E6F3D]/20 disabled:opacity-70 transition-all uppercase text-xs md:text-sm tracking-widest"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend size={16} />
                    Gửi lời nhắn ngay
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}