import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WowCar.co.th - ตลาดรถยนต์มือสองออนไลน์ในประเทศไทย ซื้อขายรถบ้าน ดีลเลอร์คุณภาพ",
  description: "ลงขายรถมือสองฟรี ไม่มีค่าใช้จ่าย ได้ราคาโดนใจแน่นอน ค้นหารถมือสองได้ง่าย พร้อมตำแหน่งของเหล่าดีลเลอร์ ที่ชัดเจนในทุกพื้นที่",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "none",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="h-full">
      <head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#F8F9FA] text-[#1B2935] font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
