import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Users, Car, CheckCircle2 } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-[#DA1C2E] uppercase tracking-wider bg-[#DA1C2E]/10 px-3 py-1 rounded-full">
            เกี่ยวกับเรา (ABOUT WOWCAR)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            แพลตฟอร์มตลาดรถยนต์มือสอง <span className="text-[#DA1C2E]">ยุคใหม่ของไทย</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            WowCar.co.th เป็นตัวกลางออนไลน์ที่เชื่อมต่อระหว่างผู้ซื้อและผู้ขายรถยนต์มือสองทั่วประเทศไทย ด้วยระบบที่ทันสมัย โปร่งใส และปลอดภัย
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#DA1C2E] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">คุณภาพที่ตรวจสอบได้</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              เราคัดสรรดีลเลอร์พันธมิตรที่มีมาตรฐานสูง พร้อมการตรวจเช็กสภาพรถยนต์และประวัติชัดเจนก่อนลงจำหน่าย
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF9540] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">เชื่อมต่อผู้ซื้อผู้ขายโดยตรง</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              ผู้ขายทั่วไปและเต็นท์รถสามารถลงโฆษณาขายรถฟรี ไม่มีค่าธรรมเนียมแอบแฝง เข้าถึงผู้ซื้อนับแสนคน
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">โปร่งใสและปลอดภัย</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              ไม่มีการบวกราคาเกินจริง แสดงข้อมูลราคา ตารางผ่อน และพิกัดสถานที่ตัวแทนจำหน่ายอย่างโปร่งใส
            </p>
          </div>
        </div>

        {/* Story / About text */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">เรื่องราวของเรา</h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              WowCar ก่อตั้งขึ้นเพื่อแก้ไขปัญหาความยุ่งยากและความไม่โปร่งใสในตลาดรถยนต์มือสอง เราเชื่อมั่นว่าการซื้อรถมือสองควรเป็นเรื่องง่าย ปลอดภัย และได้ราคาที่คุ้มค่าที่สุด
            </p>
            <p>
              ด้วยเครื่องมือดิจิทัลที่ทันสมัย ระบบแผนที่แสดงตำแหน่งดีลเลอร์ และการคำนวณค่างวดสินเชื่อแบบเรียลไทม์ ทำให้ผู้ใช้สามารถตัดสินใจได้อย่างมั่นใจในทุกขั้นตอน
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4">
            <Link
              href="/listings"
              className="bg-[#DA1C2E] hover:bg-[#B81726] text-white font-bold px-6 py-3 rounded-xl text-sm transition"
            >
              ค้นหารถยนต์มือสอง
            </Link>
            <Link
              href="/contact-us"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-3 rounded-xl text-sm transition"
            >
              ติดต่อทีมงาน
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
