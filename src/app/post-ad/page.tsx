"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PlusCircle, Upload, CheckCircle2, Car, ShieldCheck } from "lucide-react";

export default function PostAdPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#DA1C2E] uppercase tracking-wider bg-[#DA1C2E]/10 px-3 py-1 rounded-full">
            ลงขายฟรี ไม่มีค่าธรรมเนียม
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            ลงประกาศขายรถยนต์ของคุณบน WowCar
          </h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            เข้าถึงผู้ซื้อรถยนต์มือสองทั่วประเทศ เพิ่มโอกาสปิดการขายได้เร็ว ได้ราคาโดนใจแน่นอน
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200/80 shadow-sm space-y-4 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">ลงประกาศสำเร็จเรียบร้อย!</h2>
            <p className="text-sm text-gray-500">
              ระบบกำลังตรวจสอบข้อมูลประกาศของคุณ และจะเผยแพร่บนหน้าเว็บไซต์ WowCar.co.th ภายในไม่กี่นาที
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <Link
                href="/listings"
                className="bg-[#DA1C2E] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#B81726] transition"
              >
                ดูรถยนต์ทั้งหมด
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-gray-100 text-gray-800 text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-gray-200 transition"
              >
                ลงขายรถคันอื่น
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/80 shadow-sm space-y-8">
            {/* Step 1: Car Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b pb-3">
                <Car className="w-5 h-5 text-[#DA1C2E]" />
                1. ข้อมูลรถยนต์เบื้องต้น
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">ยี่ห้อรถยนต์ (Make) *</label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs">
                    <option value="">เลือกยี่ห้อ</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Isuzu">Isuzu</option>
                    <option value="Mazda">Mazda</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">รุ่นรถยนต์ (Model) *</label>
                  <input
                    type="text"
                    required
                    placeholder="เช่น Camry, Civic, D-Max"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">ปีที่ผลิต (Year) *</label>
                  <input
                    type="number"
                    required
                    placeholder="เช่น 2021"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">ราคาขาย (บาท) *</label>
                  <input
                    type="number"
                    required
                    placeholder="เช่น 750000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">เลขไมล์ (กิโลเมตร) *</label>
                  <input
                    type="number"
                    required
                    placeholder="เช่น 45000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">ระบบเกียร์ *</label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs">
                    <option value="เกียร์อัตโนมัติ">เกียร์อัตโนมัติ (Auto)</option>
                    <option value="เกียร์ธรรมดา">เกียร์ธรรมดา (Manual)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Upload Photos */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b pb-3">
                <Upload className="w-5 h-5 text-[#DA1C2E]" />
                2. อัปโหลดรูปภาพรถยนต์
              </h3>

              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#DA1C2E] transition bg-gray-50 cursor-pointer">
                <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-gray-700">คลิกเพื่อเลือกไฟล์ หรือลากรูปภาพมาวางที่นี่</p>
                <p className="text-[11px] text-gray-400 mt-1">รองรับไฟล์ JPG, PNG, WEBP (สูงสุด 10 รูป)</p>
              </div>
            </div>

            {/* Step 3: Contact details */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b pb-3">
                <ShieldCheck className="w-5 h-5 text-[#DA1C2E]" />
                3. ข้อมูลผู้ขาย
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">ชื่อผู้ติดต่อ *</label>
                  <input
                    type="text"
                    required
                    placeholder="ชื่อของคุณหรือชื่อเต็นท์รถ"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">เบอร์โทรศัพท์ *</label>
                  <input
                    type="tel"
                    required
                    placeholder="08X-XXX-XXXX"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">LINE ID</label>
                  <input
                    type="text"
                    placeholder="@yourline"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <button
                type="submit"
                className="w-full bg-[#DA1C2E] hover:bg-[#B81726] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition transform active:scale-95 text-sm flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-5 h-5" />
                <span>ยืนยันและลงประกาศขายรถยนต์ฟรี</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
