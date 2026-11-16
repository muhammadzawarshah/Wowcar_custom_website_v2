import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B2935] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700/60">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-xl">
              <div className="relative w-36 h-10">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo.png`}
                  alt="WowCar รถมือสองใกล้บ้าน"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              แพลตฟอร์มตลาดซื้อขายรถยนต์มือสองออนไลน์ในประเทศไทย รวบรวมรถยนต์คุณภาพดีจากผู้ขายและดีลเลอร์ชั้นนำทั่วประเทศ
            </p>

            <div className="space-y-2 pt-2 text-sm">
              <a
                href="tel:0943516600"
                className="flex items-center gap-2 text-gray-300 hover:text-[#FF9540] transition"
              >
                <Phone className="w-4 h-4 text-[#FF9540] flex-shrink-0" />
                <span>(+66) 094-351-6600</span>
              </a>

              <a
                href="mailto:support@wowcar.co.th"
                className="flex items-center gap-2 text-gray-300 hover:text-[#FF9540] transition"
              >
                <Mail className="w-4 h-4 text-[#FF9540] flex-shrink-0" />
                <span>support@wowcar.co.th</span>
              </a>

              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span>กรุงเทพมหานคร, ประเทศไทย</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9540]"></span>
              เส้นทางลัด
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">หน้าหลัก</Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-white transition">ค้นหารถยนต์มือสอง</Link>
              </li>
              <li>
                <Link href="/listings?view=map" className="hover:text-white transition">ค้นหาจากแผนที่</Link>
              </li>
              <li>
                <Link href="/post-ad" className="hover:text-white transition">ลงโฆษณาขายรถฟรี</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">ข่าวสารยานยนต์</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition">เกี่ยวกับ WowCar</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition">ติดต่อเรา</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Vehicle Body Types */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9540]"></span>
              ประเภทรถยนต์
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/listings?body_type=รถเก๋ง" className="hover:text-white transition flex justify-between">
                  <span>รถเก๋ง (Sedan)</span>
                  <span className="text-xs text-gray-500">ยอดนิยม</span>
                </Link>
              </li>
              <li>
                <Link href="/listings?body_type=รถเอสยูวี" className="hover:text-white transition flex justify-between">
                  <span>รถเอสยูวี (SUV)</span>
                  <span className="text-xs text-gray-500">ยอดนิยม</span>
                </Link>
              </li>
              <li>
                <Link href="/listings?body_type=รถกระบะ" className="hover:text-white transition flex justify-between">
                  <span>รถกระบะ (Pickup)</span>
                </Link>
              </li>
              <li>
                <Link href="/listings?body_type=รถตู้" className="hover:text-white transition flex justify-between">
                  <span>รถตู้ (Van)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Popular Brands */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9540]"></span>
              ยี่ห้อยอดนิยม
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Toyota", "Honda", "Isuzu", "Mazda", "Ford", "BMW", "Mercedes-Benz"].map((brand) => (
                <Link
                  key={brand}
                  href={`/listings?brand=${brand}`}
                  className="px-3 py-1.5 bg-[#2C3640] hover:bg-[#FF9540] text-xs rounded-md text-gray-300 hover:text-white transition"
                >
                  {brand}
                </Link>
              ))}
            </div>

            <div className="p-3.5 rounded-lg bg-[#2C3640] border border-gray-700/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ดีลเลอร์ผ่านการตรวจสอบคุณภาพ</span>
              </div>
              <p className="text-xs text-gray-400">
                มั่นใจทุกการซื้อขาย ด้วยระบบการตรวจเช็กและดีลเลอร์พันธมิตรที่น่าเชื่อถือ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} WowCar.co.th - ตลาดรถยนต์มือสองออนไลน์ในประเทศไทย. สงวนลิขสิทธิ์ทั้งหมด.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-gray-300 transition">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/terms" className="hover:text-gray-300 transition">ข้อตกลงและเงื่อนไขการใช้งาน</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
