"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Đảm bảo đã chạy: npm install framer-motion

/* ================= COMPONENT CHÍNH ================= */
export default function AboutPage() {
  return (
    <main className="bg-[#F2F4F0] text-[#2F2F2A] overflow-x-hidden selection:bg-[#4E6F3D] selection:text-white">
      
      {/* --- PHẦN 1: HERO --- */}
      <section className="relative min-h-[90vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 z-10 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <Image src="/logo.png" alt="Soyzi Logo" width={45} height={45} className="brightness-90" />
              <span className="h-[1px] w-12 bg-[#4E6F3D]/40"></span>
              <span className="text-[10px] tracking-[5px] font-bold text-[#4E6F3D] uppercase">Est. 2019</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-light leading-[0.9] tracking-tighter"
            >
              Hành trình <br />
              <span className="font-serif italic text-[#4E6F3D] drop-shadow-sm">từ tâm sạch</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-md text-lg text-[#2F2F2A]/70 font-light leading-relaxed border-l-2 border-[#4E6F3D]/20 pl-6"
            >
              Soyzi ra đời từ khát vọng kết nối con người với những gì thuần túy nhất. Chúng tôi chọn công nghệ hiện đại để bảo tồn những giá trị thủ công quý giá nhất của nông sản Việt.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:col-span-6 relative h-[500px] md:h-[750px] w-full rounded-[100px_20px_100px_20px] overflow-hidden shadow-2xl shadow-[#4E6F3D]/10"
          >
            <Image 
              src="/soyzi3.png" 
              alt="Soyzi Philosophy" 
              fill 
              className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
              priority
            />
            <div className="absolute inset-0 bg-[#4E6F3D]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* --- PHẦN 2: TRIẾT LÝ SÂU --- */}
      <section className="py-40 px-6 bg-white rounded-[60px] md:rounded-[100px] shadow-sm relative z-10 -mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-32 space-y-6">
            <h3 className="text-[#4E6F3D] text-[10px] tracking-[6px] font-bold uppercase">Our Philosophy</h3>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">Cân bằng giữa <span className="text-[#4E6F3D] font-serif italic">Trí & Tâm</span></h2>
            <div className="w-16 h-1 bg-[#4E6F3D] mx-auto opacity-10"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">
            <div className="space-y-20">
              <ValueItem 
                number="01"
                title="Sự Minh Bạch"
                content="Mọi hạt đậu Non-GMO tại Soyzi đều có nguồn gốc rõ ràng từ các trang trại VietGAP. Chúng tôi công khai mọi khâu sản xuất để bạn luôn an tâm khi trải nghiệm."
              />
              <ValueItem 
                number="02"
                title="Kỹ Nghệ Hiện Đại"
                content="Chúng tôi ứng dụng hệ thống tiệt trùng khép kín và kiểm soát nhiệt độ bằng công nghệ, giúp sản phẩm giữ trọn dinh dưỡng mà không cần chất bảo quản."
              />
            </div>
            <div className="md:mt-32 space-y-20">
              <ValueItem 
                number="03"
                title="Khởi Nguồn Tinh Khiết"
                content="Từ nguyên liệu tự nhiên tuyển chọn đến quy trình chế biến chuẩn mực,
                     Soyzi giữ trọn sự tinh khiết trong từng hũ nhỏ ,mềm mịn, thanh dịu và chân thật như chính nguồn gốc của nó."
              />
              <ValueItem 
                number="04"
                title="Giá Trị Bền Vững"
                content="Chất lượng thật sự bắt đầu từ nguồn gốc rõ ràng và sự tôn trọng tự nhiên.
Soyzi giữ trọn tinh khiết hôm nay, gìn giữ giá trị cho ngày mai.."
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN 2.5: GIFTING EXPERIENCE --- */}
      <section className="py-32 px-6 bg-[#EDF1E8]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-[#4E6F3D] text-[10px] tracking-[6px] font-bold uppercase">Gifting Experience</h3>
              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Gói trọn <span className="font-serif italic text-[#4E6F3D]">tinh hoa</span> <br /> 
                thay lời tri ân
              </h2>
              <p className="text-lg text-[#2F2F2A]/60 font-light leading-relaxed max-w-md">
                Mỗi set quà của Soyzi không chỉ là thực phẩm dinh dưỡng, mà là sự trân trọng dành cho những mối quan hệ bền chặt. Chúng tôi chăm chút từ chất liệu hộp gỗ đến tấm thiệp viết tay.
              </p>
              <div className="pt-4">
                <PremiumButton variant="outline">Xem Catalogue Quà Tặng</PremiumButton>
              </div>
            </motion.div>

            {/* Grid 4 ảnh giỏ quà */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-[40px] overflow-hidden shadow-lg group">
                  <Image src="/soyzi8.png" alt="Gift Detail 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-80 rounded-[40px] overflow-hidden shadow-lg group">
                  <Image src="/soyzi10.png" alt="Gift Detail 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative h-80 rounded-[40px] overflow-hidden shadow-lg group">
                  <Image src="/soyzi16.png" alt="Gift Detail 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-64 rounded-[40px] overflow-hidden shadow-lg group">
                  <Image src="/soyzi17.png" alt="Gift Detail 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN 3: THE PROCESS --- */}
      <section className="py-32 bg-[#F2F4F0] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <ProcessCard src="/soyzi13.png" step="tự nhiên" title="thuần khiết mỗi ngày" offset={true} />
          <ProcessCard src="/soyzi14.png" step="tươi từ thiên nhiên" title="lành cho cơ thể  " offset={false} />
          <ProcessCard src="/soyzi15.png" step="tinh tế từ vị" title="dịu nhẹ từ tâm" offset={true} />
        </div>
      </section>

      {/* --- PHẦN 4: CTA --- */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="mx-auto grayscale opacity-20" />
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            Vẻ đẹp đích thực đến từ <br />
            <span className="italic text-[#4E6F3D] font-serif">Sự thuần khiết.</span>
          </h2>
          <div className="pt-8">
            <Link href="/#products" className="group relative inline-flex items-center gap-6 text-xs font-bold tracking-[3px] uppercase">
              <span className="relative z-10 group-hover:text-[#4E6F3D] transition-colors">Quay lại trải nghiệm sản phẩm</span>
              <div className="w-12 h-[1px] bg-[#4E6F3D]/30 group-hover:w-20 group-hover:bg-[#4E6F3D] transition-all duration-500"></div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- COMPONENT BỔ TRỢ (PHẢI CÓ ĐỂ FIX LỖI) --- */

function PremiumButton({ children, variant = "primary" }: { children: React.ReactNode, variant?: "primary" | "outline" }) {
  const styles = {
    primary: "bg-[#4E6F3D] text-white",
    outline: "border border-[#4E6F3D] text-[#4E6F3D] hover:bg-[#4E6F3D] hover:text-white"
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 rounded-full font-bold tracking-widest text-[10px] uppercase transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
}

function ValueItem({ number, title, content }: { number: string, title: string, content: string }) {
  return (
    <div className="group space-y-5">
      <div className="flex items-center gap-5">
        <span className="text-4xl font-serif italic text-[#4E6F3D]/10 group-hover:text-[#4E6F3D]/100 transition-all duration-700">{number}</span>
        <h3 className="text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
      </div>
      <p className="text-[#2F2F2A]/60 leading-[1.8] font-light pl-14 border-l border-[#4E6F3D]/5">{content}</p>
    </div>
  );
}

function ProcessCard({ src, step, title, offset }: { src: string, step: string, title: string, offset: boolean }) {
  return (
    <div className={`relative h-[500px] rounded-[40px] overflow-hidden group shadow-2xl shadow-black/5 ${offset ? "md:translate-y-12" : ""}`}>
      <Image src={src} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4E6F3D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-10 left-10 text-white z-10 space-y-2">
        <p className="text-[10px] tracking-[4px] uppercase opacity-70 font-bold">{step}</p>
        <h4 className="text-2xl font-light italic font-serif">{title}</h4>
      </div>
    </div>
  );
}