"use client";

import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/newsletter-bg.webp')` }}
    >
      {/* Overlay #2C3640 opacity 0.8 matching live elementor CSS */}
      <div className="absolute inset-0 bg-[#2C3640]/85" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-xs font-semibold text-[#FDFDFE] uppercase tracking-wider bg-[#1B2935] px-4 py-1.5 rounded-full inline-block">
          ติดตามเรา
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#FDFDFE] tracking-tight leading-tight">
          อย่าพลาด<span className="text-[#FF9540]">ทุกความเคลื่อนไหว</span><br />
          ในวงการ<span className="text-[#FF9540]">รถยนต์</span>
        </h2>

        <p className="text-[#E5E7EB] text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          สมัครสมาชิกเพื่อรับข่าวสารอัปเดต โปรโมชั่นรถเข้าใหม่ และข้อเสนอสุดพิเศษจาก WowCar ได้ที่นี่
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-6 py-3 rounded-xl text-sm font-semibold animate-fadeIn">
            <CheckCircle className="w-5 h-5" />
            <span>ขอบคุณสำหรับการสมัครสมาชิก! เราจะส่งข่าวสารและดีลดีๆ ให้คุณ</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2">
            <div className="relative flex-grow">
              <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="กรอกอีเมลของคุณ..."
                className="w-full bg-[#1B2935]/90 border border-[#7D8183] rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FF9540] transition"
              />
            </div>
            <button
              type="submit"
              className="bg-[#FF9540] hover:bg-[#E8822E] text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition transform active:scale-95 text-sm flex items-center justify-center cursor-pointer"
            >
              <span>สมัครสมาชิก</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
