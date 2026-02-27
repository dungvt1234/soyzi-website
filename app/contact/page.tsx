"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Giả lập gửi form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Giả lập delay 1.5s
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
    (e.target as HTMLFormElement).reset();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#F8F6F1] pt-24 md:pt-32 pb-16 px-4 md:px-6">
      {/* Thư viện thông báo */}
      <Toaster />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#4E6F3D] mb-4">Liên hệ với Soyzi</h1>
          <p className="text-[#5A5A55] max-w-xl mx-auto">Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Cột 1: Thông tin & Map */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: <FiMapPin />, title: "Địa chỉ", content: "Quận 1, TP. Hồ Chí Minh, Việt Nam" },
                { icon: <FiPhone />, title: "Hotline", content: "0528 912 222" },
                { icon: <FiMail />, title: "Email", content: "info@soyzi.vn" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors">
                  <div className="p-3 bg-white rounded-xl text-[#4E6F3D] shadow-sm">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#4E6F3D]">{item.title}</h3>
                    <p className="text-[#5A5A55]">{item.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Google Map Iframe */}
            <motion.div 
              {...fadeInUp}
              className="w-full h-[300px] rounded-[32px] overflow-hidden shadow-sm border-4 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m14!1m8!1m3!1d15677.21735956037!2d106.7001337!3d10.7818227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f49581729bb%3A0x69c3a700868f7734!2zUXXhuq1uIDEsIFRowpuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Cột 2: Form liên hệ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[32px] shadow-[0_20px_50px_-20px_rgba(78,111,61,0.15)] order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#5A5A55] ml-1">Họ và tên</label>
                <input
                  required
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-[#FBFBF9] border border-[#E5E2D9] rounded-2xl px-5 py-3.5 focus:border-[#4E6F3D] transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#5A5A55] ml-1">Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-[#FBFBF9] border border-[#E5E2D9] rounded-2xl px-5 py-3.5 focus:border-[#4E6F3D] transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#5A5A55] ml-1">Nội dung</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Chúng tôi có thể giúp gì cho bạn?"
                  className="w-full bg-[#FBFBF9] border border-[#E5E2D9] rounded-2xl px-5 py-3.5 focus:border-[#4E6F3D] transition-all outline-none resize-none"
                />
              </div>

              <motion.button
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#4E6F3D] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#4E6F3D]/20 disabled:opacity-70 transition-all"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend size={18} />
                    Gửi lời nhắn
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