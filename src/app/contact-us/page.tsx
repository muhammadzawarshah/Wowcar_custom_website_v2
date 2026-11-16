"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#DA1C2E] uppercase tracking-wider bg-[#DA1C2E]/10 px-3 py-1 rounded-full">
            ติดต่อสอบถาม
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            ติดต่อทีมงาน WowCar
          </h1>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            หากคุณมีข้อสงสัย ต้องการสอบถามข้อมูล หรือสนใจร่วมเป็นพันธมิตรดีลเลอร์ สามารถติดต่อเราได้ตลอดเวลา
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Card */}
          <div className="bg-[#1B2935] text-white p-8 rounded-2xl shadow-lg space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b border-gray-700 pb-3">ข้อมูลช่องทางติดต่อ</h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DA1C2E] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">เบอร์โทรศัพท์สายด่วน</span>
                    <a href="tel:0943516600" className="text-base font-bold text-white hover:text-[#FF9540] transition">
                      (+66) 094-351-6600
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF9540] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">อีเมลติดต่อ</span>
                    <a href="mailto:support@wowcar.co.th" className="text-sm font-semibold text-white hover:text-[#FF9540] transition">
                      support@wowcar.co.th
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">ที่อยู่สำนักงาน</span>
                    <p className="text-sm text-gray-300">
                      กรุงเทพมหานคร และพื้นที่ให้บริการครอบคลุมทั่วประเทศไทย
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#2C3640] border border-gray-700 text-xs text-gray-300">
              <span className="font-bold text-[#FF9540] block mb-1">เวลาทำการ:</span>
              วันจันทร์ - วันอาทิตย์ 08:30 - 18:30 น.
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/80 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ส่งข้อความเรียบร้อยแล้ว!</h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                  ขอบคุณที่ติดต่อ WowCar ทีมงานของเราจะติดต่อกลับหาคุณโดยเร็วที่สุด
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#DA1C2E] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#B81726] transition"
                >
                  ส่งข้อความใหม่
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ส่งข้อความถึงเรา</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">ชื่อ-นามสกุล *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="เช่น สมชาย ใจดี"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#DA1C2E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700">เบอร์โทรศัพท์ *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="เช่น 0812345678"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#DA1C2E]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">อีเมล</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#DA1C2E]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">ข้อความของคุณ *</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="พิมพ์รายละเอียดที่ต้องการสอบถาม..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-xs text-gray-800 focus:outline-none focus:border-[#DA1C2E]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#DA1C2E] hover:bg-[#B81726] text-white font-bold px-8 py-3 rounded-xl shadow-md transition transform active:scale-95 text-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>ส่งข้อความ (Send Message)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
