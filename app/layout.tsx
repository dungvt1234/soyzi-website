import "./globals.css";

export const metadata = {
  title: "Soyzi",
  description: "Thực phẩm thiên nhiên cao cấp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-[#F4F7F2] text-black">
        {children}
      </body>
    </html>
  );
}