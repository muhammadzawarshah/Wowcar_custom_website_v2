"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Disc, Award, Edit3 } from "lucide-react";

export default function HeroSearch() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (bodyType) params.set("body_type", bodyType);
    if (brand) params.set("brand", brand);
    if (model) params.set("keyword", model);
    router.push(`/listings?${params.toString()}`);
  };

  return (
    <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#0D151D] overflow-hidden">
      {/* Exact Orange Supercar Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/hero-car.jpg')`,
        }}
      />
      {/* Dark tint overlay matching live site */}
      <div className="absolute inset-0 bg-black/60 lg:bg-black/45" />

      {/* 2-Column Split matching Screenshot 1 */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (Heading) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.22]">
              ลงขายรถมือสองฟรี!<br />
              <span className="text-[#FF9540]">ไม่มีค่าใช้จ่าย</span><br />
              ได้ราคาโดนใจแน่นอน
            </h1>

            <p className="text-lg sm:text-xl text-[#E5E7EB] font-normal leading-relaxed max-w-xl">
              “ค้นหารถมือสองได้ง่าย พร้อมตำแหน่ง<br className="hidden sm:inline" />
              ของเหล่าดีลเลอร์ ที่ชัดเจนในทุกพื้นที่”
            </p>
          </div>

          {/* Right Column: Hero Search Form Box (ค้นหา WowCar) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#1B2935]/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#7D8183]/40 max-w-[430px] mx-auto lg:ml-auto">
              <h2 className="text-white text-2xl font-semibold text-center mb-6">
                ค้นหา WowCar
              </h2>

              <form onSubmit={handleSearch} className="space-y-3.5">
                {/* 1. Location */}
                <div className="flex rounded-xl overflow-hidden border border-[#7D8183] bg-[#2C3640] focus-within:border-[#FF9540] transition">
                  <div className="w-12 h-12 bg-[#FF9540] flex items-center justify-center flex-shrink-0 text-[#2C3640]">
                    <MapPin className="w-5 h-5 font-bold" />
                  </div>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="เลือกพื้นที่ในแผนที่ หรือตำแหน่งของคุณ"
                    className="w-full bg-[#2C3640] px-3.5 py-3 text-xs sm:text-sm text-white placeholder-[#D8D7DA]/70 focus:outline-none"
                  />
                </div>

                {/* 2. Body Type */}
                <div className="flex rounded-xl overflow-hidden border border-[#7D8183] bg-[#2C3640] focus-within:border-[#FF9540] transition">
                  <div className="w-12 h-12 bg-[#FF9540] flex items-center justify-center flex-shrink-0 text-[#2C3640]">
                    <Disc className="w-5 h-5" />
                  </div>
                  <select
                    value={bodyType}
                    onChange={(e) => setBodyType(e.target.value)}
                    className="w-full bg-[#2C3640] px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1B2935] text-gray-300">ประเภทรถยนต์</option>
                    <option value="รถเก๋ง" className="bg-[#1B2935] text-white">รถเก๋ง</option>
                    <option value="รถเอสยูวี" className="bg-[#1B2935] text-white">รถเอสยูวี</option>
                    <option value="รถกระบะ" className="bg-[#1B2935] text-white">รถกระบะ</option>
                    <option value="รถตู้" className="bg-[#1B2935] text-white">รถตู้</option>
                    <option value="รถเปิดประทุน" className="bg-[#1B2935] text-white">รถเปิดประทุน</option>
                    <option value="รถแฮทช์แบ็ก" className="bg-[#1B2935] text-white">รถแฮทช์แบ็ก</option>
                  </select>
                </div>

                {/* 3. Make */}
                <div className="flex rounded-xl overflow-hidden border border-[#7D8183] bg-[#2C3640] focus-within:border-[#FF9540] transition">
                  <div className="w-12 h-12 bg-[#FF9540] flex items-center justify-center flex-shrink-0 text-[#2C3640]">
                    <Award className="w-5 h-5" />
                  </div>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-[#2C3640] px-3.5 py-3 text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1B2935] text-gray-300">ยี่ห้อรถ</option>
                    <option value="Toyota" className="bg-[#1B2935] text-white">Toyota</option>
                    <option value="Honda" className="bg-[#1B2935] text-white">Honda</option>
                    <option value="Isuzu" className="bg-[#1B2935] text-white">Isuzu</option>
                    <option value="Ford" className="bg-[#1B2935] text-white">Ford</option>
                    <option value="Mazda" className="bg-[#1B2935] text-white">Mazda</option>
                    <option value="BMW" className="bg-[#1B2935] text-white">BMW</option>
                    <option value="Mercedes-Benz" className="bg-[#1B2935] text-white">Mercedes-Benz</option>
                    <option value="Nissan" className="bg-[#1B2935] text-white">Nissan</option>
                  </select>
                </div>

                {/* 4. Model */}
                <div className="flex rounded-xl overflow-hidden border border-[#7D8183] bg-[#2C3640] focus-within:border-[#FF9540] transition">
                  <div className="w-12 h-12 bg-[#FF9540] flex items-center justify-center flex-shrink-0 text-[#2C3640]">
                    <Edit3 className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="รุ่น"
                    className="w-full bg-[#2C3640] px-3.5 py-3 text-xs sm:text-sm text-white placeholder-[#D8D7DA]/70 focus:outline-none"
                  />
                </div>

                {/* Orange Submit Button (ค้นหา) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#FF9540] hover:bg-[#E8822E] text-white font-semibold h-[48px] rounded-xl shadow-lg transition transform active:scale-95 text-base flex items-center justify-center cursor-pointer"
                  >
                    <span>ค้นหา</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
