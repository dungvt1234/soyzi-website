import Image from "next/image";

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
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-sm tracking-[4px] text-[#7A8B4E] mb-6">
            ABOUT SOYZI
          </p>

          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Xây dựng một
            <br />
            tiêu chuẩn mới
            <br />
            cho thực phẩm sạch.
          </h1>

          <p className="text-lg text-black/60 leading-relaxed max-w-md">
            Soyzi không chỉ bán sản phẩm.
            Chúng tôi xây dựng một hệ tiêu chuẩn rõ ràng
            cho thực phẩm thủ công cao cấp.
          </p>
        </div>

        <div className="relative w-full h-[420px] rounded-[32px] overflow-hidden">
          <Image
            src="/soyzi7.png"
            alt="Soyzi sản phẩm"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= VISION ================= */

function Vision() {
  return (
    <section className="py-28 px-6 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-light mb-6">
            Tầm nhìn
          </h2>
          <p className="text-black/70 leading-relaxed text-lg">
            Trở thành thương hiệu thực phẩm thủ công
            được tin cậy nhờ sự minh bạch và chất lượng ổn định.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-light mb-6">
            Sứ mệnh
          </h2>
          <p className="text-black/70 leading-relaxed text-lg">
            Làm ra những sản phẩm tối giản về thành phần
            nhưng tối đa về giá trị dinh dưỡng và trải nghiệm.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ================= IMAGE BLOCK ================= */

function ImageBlock() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="relative h-[420px] rounded-[28px] overflow-hidden">
          <Image
            src="/soyzi5.png"
            alt="Sản phẩm 1"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-[420px] rounded-[28px] overflow-hidden">
          <Image
            src="/soyzi6.png"
            alt="Sản phẩm 2"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= STANDARDS ================= */

function Standards() {
  return (
    <section className="py-28 px-6 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
          Tiêu chuẩn vận hành
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Nguyên liệu chọn lọc",
              desc: "Ưu tiên nguồn gốc rõ ràng và chất lượng ổn định."
            },
            {
              title: "Sản xuất kiểm soát",
              desc: "Số lượng giới hạn để đảm bảo độ tươi mới."
            },
            {
              title: "Không phụ gia dư thừa",
              desc: "Loại bỏ những thành phần không cần thiết."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-[24px] border border-black/5"
            >
              <h3 className="text-xl font-medium mb-4">
                {item.title}
              </h3>
              <p className="text-black/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

/* ================= CLOSING ================= */

function Closing() {
  return (
    <section className="py-36 px-6 text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-light leading-tight">
          Không phải để cạnh tranh về giá.
          <br />
          Mà để cạnh tranh về tiêu chuẩn.
        </h2>

      </div>
    </section>
  );
}