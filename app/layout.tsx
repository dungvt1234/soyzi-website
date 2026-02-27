import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soyzi - Sữa chua tự nhiên",
  description: "Sữa chua tự nhiên Soyzi - Tươi từ thiên nhiên, chuẩn khoa học.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-[#F4F7F2] text-[#1F1F1F] antialiased">
        {/* Navbar dùng cho toàn bộ website */}
        <Navbar />

        {/* Nội dung trang */}
        <main className="min-h-screen pt-[88px]">
          {children}
        </main>

        {/* Footer dùng cho toàn bộ website */}
        <Footer />
      </body>
    </html>
  );
}