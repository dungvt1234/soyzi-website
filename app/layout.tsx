"use client"; // Bắt buộc phải có dòng này ở đầu file để dùng usePathname

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="vi">
      <body className="bg-[#F4F7F2] text-black antialiased">
        <Navbar /> 
        {/* pt-[88px] giúp đẩy nội dung xuống dưới Navbar ở các trang con */}
        <main className={isHome ? "pt-0" : "pt-[88px]"}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}