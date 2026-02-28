"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ================= TYPES & INTERFACES ================= */
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
  href?: string;
}

/* ================= ANIMATION VARIANTS ================= */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

const imageReveal: Variants = {
  hidden: { clipPath: "inset(10% 10% 10% 10% round 40px)", opacity: 0, scale: 1.1 },
  visible: { 
    clipPath: "inset(0% 0% 0% 0% round 40px)", 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] } 
  }
};

/* ================= COMPONENT CHÍNH ================= */
export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="bg-[#F7F9F5] text-[#2F2F2A] overflow-x-hidden selection:bg-[#4E6F3D] selection:text-white scroll-smooth antialiased">
      
      {/* --- PHẦN 1: HERO --- */}
      <section className="relative min-h-screen flex items-center px-6 py-24 md:py-0">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 z-10 space-y-10 md:space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-5"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image src="/logo-soyzi.png" alt="Soyzi Logo" fill className="object-contain brightness-90" />
              </div>
              <span className="h-[1px] w-12 bg-[#4E6F3D]/20"></span>
              <span className="text-[10px] tracking-[0.4em] font-bold text-[#4E6F3D] uppercase">Since 2019</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-6xl md:text-[7.5rem] font-extralight leading-[0.9] tracking-tighter"
            >
              Hành trình <br />
              <span className="font-serif italic text-[#4E6F3D] font-light">từ tâm sạch</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="max-w-md text-lg md:text-xl text-[#2F2F2A]/60 font-light leading-relaxed border-l-[1px] border-[#4E6F3D]/30 pl-8"
            >
              Soyzi ra đời từ khát vọng kết nối con người với những gì thuần túy nhất. Chúng tôi bảo tồn những giá trị thủ công quý giá của nông sản Việt bằng khoa học hiện đại.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
               <PremiumButton href="/#products" variant="primary">Khám phá sản phẩm</PremiumButton>
            </motion.div>
          </div>

          <motion.div 
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 relative h-[500px] md:h-[800px] w-full shadow-[0_50px_100px_-20px_rgba(78,111,61,0.15)] flex items-center justify-center p-8 md:p-16 rounded-[40px] bg-[#EDF1E8]/20"
          >
            {/* 1. Blurred Shadow Background Layer */}
            <div className="absolute inset-0 z-0 scale-105 blur-2xl opacity-30">
                <Image 
                    src="/soyzi3.png" 
                    alt="" 
                    fill 
                    className="object-cover" 
                    aria-hidden="true"
                />
            </div>
            
            {/* 2. Main Image - object-contain - Không bị cắt */}
            <div className="relative z-10 w-full h-full">
                <Image 
                  src="/soyzi3.png" 
                  alt="Soyzi Philosophy" 
                  fill 
                  className="object-contain transition-transform duration-[4s] ease-out group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PHẦN 2: TRIẾT LÝ SÂU --- */}
      <section className="py-32 md:py-48 px-6 bg-white rounded-[60px] md:rounded-[120px] shadow-sm relative z-10 -mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-24 md:mb-40 space-y-8"
          >
            <h3 className="text-[#4E6F3D]/40 text-[10px] tracking-[0.6em] font-bold uppercase text-center">Brand Foundation</h3>
            <h2 className="text-4xl md:text-7xl font-extralight tracking-tight leading-tight">
              Cân bằng giữa <br />
              <span className="text-[#4E6F3D] font-serif italic">Trí tuệ & Tâm hồn</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#4E6F3D]/20 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-32 gap-y-24">
            <div className="space-y-24">
              <ValueItem number="01" title="Sự Minh Bạch" content="Mọi hạt đậu Non-GMO tại Soyzi đều có nguồn gốc rõ ràng từ các trang trại VietGAP. Chúng tôi công khai mọi khâu từ nông trường đến tay bạn." />
              <ValueItem number="02" title="Kỹ Nghệ Hiện Đại" content="Hệ thống tiệt trùng khép kín và công nghệ lên men chuẩn Thụy Sĩ giúp sản phẩm giữ trọn dinh dưỡng tự nhiên." />
            </div>
            <div className="md:mt-48 space-y-24">
              <ValueItem number="03" title="Khởi Nguồn Tinh Khiết" content="Từ nguyên liệu tuyển chọn đến quy trình chuẩn mực, Soyzi gìn giữ sự thanh khiết tuyệt đối trong từng hũ sản phẩm nhỏ." />
              <ValueItem number="04" title="Giá Trị Bền Vững" content="Chất lượng thật sự bắt đầu từ sự tôn trọng thiên nhiên. Soyzi cam kết sử dụng bao bì xanh và quy trình sản xuất giảm phát thải." />
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN: SOYZI & COMMUNITY --- */}
      <section className="py-32 md:py-64 px-6 bg-[#F7F9F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-24 md:mb-40 space-y-6"
          >
            <h3 className="text-[#4E6F3D]/40 text-[10px] tracking-[0.6em] font-bold uppercase">Our Social Footprint</h3>
            <h2 className="text-4xl md:text-7xl font-extralight tracking-tight">
              Góp tinh khiết - <span className="font-serif italic text-[#4E6F3D]">Dựng tương lai</span>
            </h2>
          </motion.div>

          <div className="space-y-48 md:space-y-72">
            <CommunityBlock 
              title="Thiện nguyện từ Tâm"
              desc="Hành trình hàng tháng mang những sản phẩm dinh dưỡng lành mạnh đến các mái ấm tình thương và trung tâm dưỡng lão."
              images={["/sztn1.png", "/sytn2.png", "/sztn3.png", "/szytn8.png", "/szytn5.png", "/szytn6.png"]}
            />
            <CommunityBlock 
              title="Đồng hành & Tài trợ"
              desc="Chúng tôi tự hào tiếp sức cho các dự án giáo dục cộng đồng và các sự kiện lan tỏa lối sống xanh, bền vững cho thế hệ trẻ."
              images={["/sztc1.jpg", "/sztc2.jpg", "/sztc9.jpg", "/sztc4.jpg", "/sztc10.jpg", "/sztc6.jpg"]}
              reverse={true}
            />
            <CommunityBlock 
              title="Gian hàng Trải nghiệm"
              desc="Nơi không gian Soyzi hiện hữu gần gũi nhất, để chúng tôi được trực tiếp lắng nghe và thấu hiểu mong đợi của khách hàng."
              images={["/szbh1.jpg", "/szbh2.jpg", "/szbh3.jpg", "/szbh4.jpg", "/szbh5.jpg", "/szbh6.jpg"]}
            />
          </div>
        </div>
      </section>

      {/* --- PHẦN: GIFTING EXPERIENCE --- */}
      <section className="py-32 md:py-56 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-[#4E6F3D] text-[10px] tracking-[0.6em] font-bold uppercase">The Art of Gifting</h3>
              <h2 className="text-4xl md:text-[5.5rem] font-extralight leading-[0.95] tracking-tight">Gói trọn <span className="font-serif italic text-[#4E6F3D] font-light">tinh hoa</span></h2>
              <p className="text-[#2F2F2A]/60 font-light text-lg max-w-md leading-relaxed border-l-[1px] border-[#4E6F3D]/20 pl-8">
                Mỗi set quà tặng từ Soyzi không chỉ là sản phẩm, mà là sự trân trọng chân thành dành cho những mối quan hệ bền chặt theo thời gian.
              </p>
            </div>
            <PremiumButton variant="outline" href="/gifts#gift-catalogue">Catalogue Quà Tặng</PremiumButton>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <ScrollRevealImage src="/soyzi8.png" className="h-56 md:h-72" />
              <ScrollRevealImage src="/soyzi10.png" className="h-64 md:h-96" />
            </div>
            <div className="space-y-4 md:space-y-6 pt-12 md:pt-20">
              <ScrollRevealImage src="/soyzi16.png" className="h-64 md:h-96" />
              <ScrollRevealImage src="/soyzi17.png" className="h-56 md:h-72" />
            </div>
          </div>
        </div>
      </section>

      {/* --- THE PROCESS --- */}
      <section className="py-32 md:py-48 bg-[#F7F9F5] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
          <ProcessCard src="/soyzi13.png" step="tự nhiên" title="Thuần khiết" offset={true} />
          <ProcessCard src="/tauhusz1.png" step="thiên nhiên" title="Lành mạnh" offset={false} />
          <ProcessCard src="/soyzi15.png" step="tinh tế" title="Dịu nhẹ" offset={true} />
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-48 md:py-72 px-6 text-center bg-white">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto space-y-12"
        >
          <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-tight">
            Vẻ đẹp từ <br />
            <span className="italic text-[#4E6F3D] font-serif font-light">Sự thuần khiết.</span>
          </h2>
          <Link href="/#products" className="group inline-flex items-center gap-6 text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-700">
            <span className="opacity-60 group-hover:opacity-100 group-hover:text-[#4E6F3D]">Trải nghiệm sản phẩm</span>
            <div className="w-12 h-[1px] bg-[#4E6F3D]/30 group-hover:w-24 group-hover:bg-[#4E6F3D] transition-all duration-700"></div>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

/* --- COMPONENTS CON --- */

function CommunityBlock({ title, desc, images, reverse = false }: CommunityBlockProps) {
  return (
    <div className="space-y-12 md:space-y-16 px-4 md:px-0">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className={`max-w-2xl ${reverse ? "ml-auto text-right" : ""}`}
      >
        <h4 className="text-3xl md:text-5xl font-extralight mb-6 tracking-tight italic font-serif text-[#4E6F3D]">{title}</h4>
        <p className="text-[#2F2F2A]/50 font-light text-lg md:text-xl leading-relaxed">{desc}</p>
      </motion.div>

      <div className="relative group">
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 md:gap-10 pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={imageReveal}
              transition={{ delay: index * 0.1 }}
              className={`relative flex-none w-[85vw] md:w-full h-[450px] md:h-[550px] snap-center shadow-2xl shadow-black/5 flex items-center justify-center p-6 bg-white rounded-[40px]
                ${index % 2 !== 0 ? "lg:translate-y-16" : ""}
              `}
            >
              {/* 1. Blurred Shadow Layer */}
              <div className="absolute inset-0 z-0 scale-110 blur-xl opacity-30">
                  <Image src={img} alt="" fill className="object-cover" aria-hidden="true" sizes="(max-width: 768px) 85vw, 33vw" />
              </div>
              
              {/* 2. Main Image - object-contain - Không bị cắt */}
              <div className="relative z-10 w-full h-full">
                  <Image src={img} alt={title} fill className="object-contain transition-transform duration-[3s] group-hover:scale-105" sizes="(max-width: 768px) 85vw, 33vw" />
              </div>

              <div className="absolute inset-0 bg-[#4E6F3D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
      className={`relative rounded-[30px] md:rounded-[50px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group flex items-center justify-center p-4 bg-white ${className}`}
    >
        {/* 1. Blurred Shadow Layer */}
        <div className="absolute inset-0 z-0 scale-105 blur-lg opacity-20">
            <Image src={src} alt="" fill className="object-cover" aria-hidden="true" />
        </div>
        
        {/* 2. Main Image - object-contain - Không bị cắt */}
        <div className="relative z-10 w-full h-full p-2">
            <Image src={src} alt="Soyzi" fill className="object-contain transition-transform duration-[2s] group-hover:scale-110" sizes="(max-width: 768px) 45vw, 25vw" />
        </div>
    </motion.div>
  );
}

function ValueItem({ number, title, content }: ValueItemProps) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      className="group space-y-6 md:space-y-8"
    >
      <div className="flex items-center gap-6">
        <span className="text-5xl md:text-7xl font-serif italic text-[#4E6F3D]/5 group-hover:text-[#4E6F3D]/20 transition-all duration-1000">{number}</span>
        <h3 className="text-2xl md:text-3xl font-extralight tracking-tight">{title}</h3>
      </div>
      <p className="text-[#2F2F2A]/50 leading-relaxed font-light pl-16 md:pl-24 border-l border-[#4E6F3D]/10 text-lg group-hover:text-[#2F2F2A]/70 transition-colors duration-700">{content}</p>
    </motion.div>
  );
}

function ProcessCard({ src, step, title, offset }: ProcessCardProps) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }}
      variants={imageReveal}
      whileHover={{ y: -15 }}
      className={`relative h-[500px] md:h-[650px] overflow-hidden group shadow-[0_40px_80px_-20px_rgba(78,111,61,0.2)] rounded-[40px] ${offset ? "md:translate-y-16" : ""} flex items-center justify-center p-8 bg-white border border-[#4E6F3D]/5`}
    >
        {/* 1. Blurred Shadow Layer */}
        <div className="absolute inset-0 z-0 scale-105 blur-xl opacity-30">
            <Image src={src} alt="" fill className="object-cover" aria-hidden="true" />
        </div>
        
        {/* 2. Main Image - object-contain - Không bị cắt */}
        <div className="relative z-10 w-full h-full p-6 md:p-12">
            <Image src={src} alt={title} fill className="object-contain transition-transform duration-[5s] group-hover:scale-110" sizes="(max-width: 768px) 100vw, 30vw" />
        </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#4E6F3D]/80 via-[#4E6F3D]/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700 z-0"></div>
      <div className="absolute bottom-10 left-10 text-white z-20 space-y-2">
        <p className="text-[10px] tracking-[0.4em] uppercase opacity-70 font-bold mb-1">{step}</p>
        <h4 className="text-2xl md:text-4xl font-extralight italic font-serif leading-none">{title}</h4>
      </div>
    </motion.div>
  );
}

function PremiumButton({ children, variant = "primary", href }: PremiumButtonProps) {
  const styles = {
    primary: "bg-[#4E6F3D] text-white shadow-xl shadow-[#4E6F3D]/20 hover:bg-[#3D5A30]",
    outline: "border-[1px] border-[#4E6F3D]/30 text-[#4E6F3D] hover:bg-[#4E6F3D] hover:text-white"
  };

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`px-10 md:px-12 py-4 md:py-5 rounded-full font-bold tracking-[0.3em] text-[10px] md:text-[11px] uppercase transition-all duration-500 flex items-center justify-center gap-4 ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}