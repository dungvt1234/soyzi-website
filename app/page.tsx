"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[#EAF7E6] text-[#2F2F2A] scroll-smooth">

      <Navbar />
      <Hero />
      <Philosophy />
      <Products />
      <Contact />
      <Footer />

    </main>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-[#E8E5D8]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Soyzi Logo" width={38} height={38} />
          <span className="text-xl tracking-[3px] font-medium text-[#4E6F3D]">
            SOYZI
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-sm tracking-wide">
          <a href="#products" className="hover:text-[#4E6F3D] transition">SẢN PHẨM</a>
          <a href="#gifts" className="hover:text-[#4E6F3D] transition">SET QUÀ</a>
          <a href="#contact" className="hover:text-[#4E6F3D] transition">LIÊN HỆ</a>
        </nav>

      </div>
    </header>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="pt-44 pb-36 px-6 bg-gradient-to-br from-[#F6F4EC] to-[#ECE9DD]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="uppercase tracking-[6px] text-sm text-[#7A8B4E] mb-6">
            ORGANIC · FRESH · SELECTED
          </p>

          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Tươi từ thiên nhiên lành cho cơ thể<br /> mỗi ngày
          </h1>

          <p className="text-lg text-[#2F2F2A]/70 leading-relaxed mb-10">
            Soyzi mang đến sữa chua thủ công, tàu hũ tươi
            các loại hạt và pana cota được tuyển chọn kỹ lưỡng.
          </p>

          <Link
  href="/about"
  className="bg-[#4E6F3D] text-white px-10 py-4 rounded-full shadow-xl hover:scale-105 transition inline-block"
>
  Khám phá ngay
</Link>
        </div>

        <div className="relative h-[480px] rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src="/soyzi2.png"
            alt="Sản phẩm Soyzi"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= PHILOSOPHY ================= */

function Philosophy() {
  return (
    <section className="py-32 px-6 bg-white text-center">
      <div className="max-w-3xl mx-auto">

        <p className="uppercase tracking-[4px] text-sm text-[#7A8B4E] mb-6">
          OUR PHILOSOPHY
        </p>

        <h2 className="text-4xl font-light mb-10">
          Giữ trọn vị tự nhiên
        </h2>

        <p className="text-lg text-[#2F2F2A]/70 leading-relaxed">
          Chúng tôi tin rằng thực phẩm ngon bắt đầu từ nguyên liệu sạch.
          Mỗi sản phẩm Soyzi được làm tươi mỗi ngày,
          không phụ gia – không chất bảo quản – giữ nguyên giá trị dinh dưỡng.
        </p>

      </div>
    </section>
  );
}

/* ================= PRODUCTS ================= */

function Products() {
  return (
    <section id="products" className="py-32 px-6 bg-[#F6F4EC]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl font-light">
            Danh mục sản phẩm
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-28">

          <ProductCard
            title="Sữa chua thủ công"
            desc="Ủ truyền thống – không phụ gia – giữ trọn vị tự nhiên."
          />

          <ProductCard
            title="Tàu hũ tươi mỗi ngày"
            desc="Làm mới trong ngày từ đậu nành chọn lọc."
          />

          <ProductCard
            title="Các loại hạt và pana cota"
            desc="Tuyển chọn từ nhà sản xuất uy tín."
          />

        </div>

        <div id="gifts" className="bg-gradient-to-br from-[#6E8B4E] to-[#4E6F3D] rounded-[40px] p-20 text-white shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            Set quà Organic cao cấp
          </h3>

          <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-8">
            Giỏ quà kết hợp sữa chua và đặc sản tuyển chọn.
            Phù hợp biếu tặng doanh nghiệp và các dịp đặc biệt.
          </p>

          <button className="bg-white text-[#4E6F3D] px-8 py-3 rounded-full hover:scale-105 transition">
            Xem bộ sưu tập
          </button>
        </div>

      </div>
    </section>
  );
}

/* ================= CONTACT ================= */

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[4px] text-sm text-[#7A8B4E] mb-6">
          CONTACT
        </p>

        <h2 className="text-4xl font-light mb-10">
          Liên hệ với Soyzi
        </h2>

        <div className="space-y-4 text-lg text-[#2F2F2A]/70">
          <p>Email: contact@soyzi.vn</p>
          <p>Hotline:0528912222</p>
          <p>Địa chỉ:9G1 Ngô Đức Kế Phường Tam Thắng TP. Hồ Chí Minh</p>
        </div>

        <button className="mt-10 bg-[#4E6F3D] text-white px-10 py-4 rounded-full hover:scale-105 transition">
          Gửi tin nhắn
        </button>

      </div>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-[#2F2F2A]/60 border-t border-[#E8E5D8]">
      © {new Date().getFullYear()} Soyzi. All rights reserved.
    </footer>
  );
}

/* ================= PRODUCT CARD ================= */

function ProductCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-[#E8E5D8]">
      <h3 className="text-2xl text-[#4E6F3D] mb-4 font-medium">
        {title}
      </h3>
      <p className="text-sm text-[#2F2F2A]/70 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}