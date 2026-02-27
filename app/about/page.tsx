"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* ================= TYPES & INTERFACES (Sửa lỗi gạch đỏ) ================= */
interface CommunityBlockProps {
  title: string;
  desc: string;
  images: string[];
  reverse?: boolean;
}

interface ValueItemProps {
  number: string;
  title: string;
  content: string;
}

interface ProcessCardProps {
  src: string;
  step: string;
  title: string;
  offset: boolean;
}

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

/* ================= ANIMATION VARIANTS ================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

const imageReveal: Variants = {
  hidden: { clipPath: "inset(10% 10% 10% 10% round 40px)", opacity: 0, scale: 1.1 },
  visible: { 
    clipPath: "inset(0% 0% 0% 0% round 40px)", 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
  }
};

/* ================= COMPONENT CHÍNH ================= */
export default function AboutPage() {
  return (
    <main className="bg-[#F2F4F0] text-[#2F2F2A] overflow-x-hidden selection:bg-[#4E6F3D] selection:text-white scroll-smooth">
      
      {/* --- PHẦN 1: HERO --- */}
      <section className="relative min-h-[90vh] flex items-center px-4 md:px-6 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 z-10 space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <Image src="/logo.png" alt="Soyzi Logo" width={40} height={40} className="brightness-90 md:w-[45px]" />
              <span className="h-[1px] w-8 md:w-12 bg-[#4E6F3D]/40"></span>
              <span className="text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] font-bold text-[#4E6F3D] uppercase">Est. 2019</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-light leading-[1] tracking-tighter"
            >
              Hành trình <br />
              <span className="font-serif italic text-[#4E6F3D] drop-shadow-sm">từ tâm sạch</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-md text-base md:text-lg text-[#2F2F2A]/70 font-light leading-relaxed border-l-2 border-[#4E6F3D]/20 pl-6"
            >
              Soyzi ra đời từ khát vọng kết nối con người với những gì thuần túy nhất. Chúng tôi bảo tồn những giá trị thủ công quý giá của nông sản Việt.
            </motion.p>
          </div>

          <motion.div 
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="md:col-span-6 relative h-[400px] md:h-[750px] w-full shadow-2xl shadow-[#4E6F3D]/10"
          >
            <Image 
              src="/soyzi3.png" 
              alt="Soyzi Philosophy" 
              fill 
              className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#4E6F3D]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* --- PHẦN 2: TRIẾT LÝ SÂU --- */}
      <section className="py-24 md:py-40 px-4 md:px-6 bg-white rounded-[40px] md:rounded-[100px] shadow-sm relative z-10 -mt-10 md:-mt-20">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16 md:mb-32 space-y-6"
          >
            <h3 className="text-[#4E6F3D] text-[10px] tracking-[6px] font-bold uppercase">Our Philosophy</h3>
            <h2 className="text-3xl md:text-6xl font-light tracking-tight">Cân bằng giữa <span className="text-[#4E6F3D] font-serif italic">Trí & Tâm</span></h2>
            <div className="w-12 md:w-16 h-1 bg-[#4E6F3D] mx-auto opacity-10"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16 md:gap-y-20">
            <div className="space-y-16 md:space-y-20">
              <ValueItem number="01" title="Sự Minh Bạch" content="Mọi hạt đậu Non-GMO tại Soyzi đều có nguồn gốc rõ ràng từ các trang trại VietGAP. Chúng tôi công khai mọi khâu sản xuất." />
              <ValueItem number="02" title="Kỹ Nghệ Hiện Đại" content="Hệ thống tiệt trùng khép kín giúp sản phẩm giữ trọn dinh dưỡng tự nhiên mà không cần chất bảo quản." />
            </div>
            <div className="md:mt-32 space-y-16 md:space-y-20">
              <ValueItem number="03" title="Khởi Nguồn Tinh Khiết" content="Từ nguyên liệu tuyển chọn đến quy trình chuẩn mực, Soyzi giữ trọn sự tinh khiết trong từng hũ nhỏ." />
              <ValueItem number="04" title="Giá Trị Bền Vững" content="Chất lượng thật sự bắt đầu từ sự tôn trọng tự nhiên. Soyzi gìn giữ giá trị xanh cho ngày mai." />
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN: SOYZI & COMMUNITY --- */}
      <section className="py-24 md:py-48 px-4 md:px-6 bg-[#F2F4F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20 md:mb-32 space-y-4"
          >
            <h3 className="text-[#4E6F3D] text-[10px] tracking-[6px] font-bold uppercase">Soyzi & Community</h3>
            <h2 className="text-3xl md:text-6xl font-light">Góp tinh khiết - <span className="font-serif italic text-[#4E6F3D]">Dựng tương lai</span></h2>
          </motion.div>

          <div className="space-y-32 md:space-y-56">
            <CommunityBlock 
              title="Thiện nguyện từ Tâm"
              desc="Hành trình mang dinh dưỡng lành mạnh đến các mái ấm và người cao tuổi."
              images={["/sztn1.png", "/sytn2.png", "/sztn3.png", "/szytn8.png", "/szytn5.png", "/szytn6.png"]}
            />
            <CommunityBlock 
              title="Đồng hành & Tài trợ"
              desc="Ủng hộ các dự án giáo dục và sự kiện lan tỏa lối sống xanh bền vững."
              images={["/sztc1.jpg", "/sztc2.jpg", "/sztc9.jpg", "/sztc4.jpg", "/sztc10.jpg", "/sztc6.jpg"]}
              reverse={true}
            />
            <CommunityBlock 
              title="Gian hàng Trải nghiệm"
              desc="Nơi chúng tôi kết nối trực tiếp và lắng nghe câu chuyện từ khách hàng."
              images={["/szbh1.jpg", "/szbh2.jpg", "/szbh3.jpg", "/szbh4.jpg", "/szbh5.jpg", "/szbh6.jpg"]}
            />
          </div>
        </div>
      </section>

      {/* --- PHẦN: GIFTING --- */}
      <section className="py-24 md:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-[#4E6F3D] text-[10px] tracking-[6px] font-bold uppercase">Gifting Experience</h3>
            <h2 className="text-3xl md:text-6xl font-light">Gói trọn <span className="font-serif italic text-[#4E6F3D]">tinh hoa</span></h2>
            <p className="text-[#2F2F2A]/60 font-light max-w-md">Mỗi set quà của Soyzi là sự trân trọng dành cho những mối quan hệ bền chặt.</p>
            <PremiumButton variant="outline">Catalogue Quà Tặng</PremiumButton>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4">
              <ScrollRevealImage src="/soyzi8.png" className="h-48 md:h-64" />
              <ScrollRevealImage src="/soyzi10.png" className="h-60 md:h-80" />
            </div>
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <ScrollRevealImage src="/soyzi16.png" className="h-60 md:h-80" />
              <ScrollRevealImage src="/soyzi17.png" className="h-48 md:h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* --- THE PROCESS --- */}
      <section className="py-24 md:py-32 bg-[#F2F4F0] px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
          <ProcessCard src="/soyzi13.png" step="tự nhiên" title="thuần khiết" offset={true} />
          <ProcessCard src="/soyzi14.png" step="thiên nhiên" title="lành mạnh" offset={false} />
          <ProcessCard src="/soyzi15.png" step="tinh tế" title="dịu nhẹ" offset={true} />
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32 md:py-56 px-6 text-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-10"
        >
          <h2 className="text-4xl md:text-7xl font-light">Vẻ đẹp từ <br /><span className="italic text-[#4E6F3D] font-serif">Sự thuần khiết.</span></h2>
          <Link href="/#products" className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-[3px] uppercase">
            <span>Trải nghiệm sản phẩm</span>
            <div className="w-8 h-[1px] bg-[#4E6F3D] group-hover:w-16 transition-all duration-500"></div>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

/* --- COMPONENTS CON (Đã tối ưu kiểu dữ liệu) --- */

function CommunityBlock({ title, desc, images, reverse = false }: CommunityBlockProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className={`max-w-2xl ${reverse ? "ml-auto text-right px-4" : "px-4"}`}
      >
        <h4 className="text-2xl md:text-4xl font-light mb-4">{title}</h4>
        <p className="text-[#2F2F2A]/60 font-light text-base md:text-lg">{desc}</p>
      </motion.div>

      <div className="relative group">
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0 pb-6 md:pb-0 no-scrollbar snap-x snap-mandatory">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={imageReveal}
              transition={{ delay: index * 0.1 }}
              className={`relative flex-none w-[75vw] md:w-full h-[400px] md:h-[450px] snap-center
                ${index % 2 !== 0 ? "lg:translate-y-12" : ""}
              `}
            >
              <Image src={img} alt={title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 80vw, 33vw" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollRevealImage({ src, className }: { src: string, className: string }) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={imageReveal}
      className={`relative rounded-[30px] md:rounded-[40px] overflow-hidden ${className}`}
    >
      <Image src={src} alt="Soyzi" fill className="object-cover" />
    </motion.div>
  );
}

function ValueItem({ number, title, content }: ValueItemProps) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      className="group space-y-4 md:space-y-5 px-4 md:px-0"
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl md:text-5xl font-serif italic text-[#4E6F3D]/10 group-hover:text-[#4E6F3D] transition-all duration-700">{number}</span>
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
      </div>
      <p className="text-[#2F2F2A]/60 leading-relaxed font-light pl-12 md:pl-16 border-l border-[#4E6F3D]/10 text-sm md:text-base">{content}</p>
    </motion.div>
  );
}

function ProcessCard({ src, step, title, offset }: ProcessCardProps) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={imageReveal}
      whileHover={{ y: -10 }}
      className={`relative h-[450px] md:h-[550px] overflow-hidden group shadow-xl ${offset ? "md:translate-y-12" : ""}`}
    >
      <Image src={src} alt={title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4E6F3D]/90 via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-8 left-8 text-white z-10">
        <p className="text-[9px] tracking-[3px] uppercase opacity-70 font-bold mb-1">{step}</p>
        <h4 className="text-xl md:text-2xl font-light italic font-serif">{title}</h4>
      </div>
    </motion.div>
  );
}

function PremiumButton({ children, variant = "primary" }: PremiumButtonProps) {
  const styles = {
    primary: "bg-[#4E6F3D] text-white shadow-lg shadow-[#4E6F3D]/20",
    outline: "border border-[#4E6F3D] text-[#4E6F3D] hover:bg-[#4E6F3D] hover:text-white"
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-bold tracking-widest text-[9px] md:text-[10px] uppercase transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
}