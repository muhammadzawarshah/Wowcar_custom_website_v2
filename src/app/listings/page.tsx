"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CARS_DATA, CarListing } from "@/data/cars";
import CarCard from "@/components/CarCard";
import {
  Search,
  Filter,
  SlidersHorizontal,
  RotateCcw,
  Car,
} from "lucide-react";

function ListingsContent() {
  const searchParams = useSearchParams();

  // Initial values from query string
  const initialBrand = searchParams.get("brand") || "";
  const initialBody = searchParams.get("body_type") || "";
  const initialKeyword = searchParams.get("keyword") || "";
  const initialPriceRange = searchParams.get("price_range") || "";

  // State
  const [keyword, setKeyword] = useState(initialKeyword);
  const [brand, setBrand] = useState(initialBrand);
  const [bodyType, setBodyType] = useState(initialBody);
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [sortBy, setSortBy] = useState("newest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Reset filters
  const handleReset = () => {
    setKeyword("");
    setBrand("");
    setBodyType("");
    setFuel("");
    setTransmission("");
    setPriceRange("");
    setSortBy("newest");
  };

  // Filter logic
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Keyword
      if (keyword) {
        const q = keyword.toLowerCase();
        const matchTitle = car.title.toLowerCase().includes(q);
        const matchBrand = car.brand.toLowerCase().includes(q);
        const matchModel = car.model.toLowerCase().includes(q);
        const matchBadge = car.badges.some((b) => b.toLowerCase().includes(q));
        if (!matchTitle && !matchBrand && !matchModel && !matchBadge) return false;
      }

      // Brand
      if (brand && !car.brand.toLowerCase().includes(brand.toLowerCase())) {
        return false;
      }

      // Body Type
      if (bodyType && !car.body_type.includes(bodyType)) {
        return false;
      }

      // Fuel
      if (fuel && !car.fuel.includes(fuel)) {
        return false;
      }

      // Transmission
      if (transmission && !car.transmission.includes(transmission)) {
        return false;
      }

      // Price Range
      if (priceRange === "under_300k" && car.price >= 300000) return false;
      if (priceRange === "300k_500k" && (car.price < 300000 || car.price > 500000)) return false;
      if (priceRange === "500k_800k" && (car.price < 500000 || car.price > 800000)) return false;
      if (priceRange === "800k_1.2m" && (car.price < 800000 || car.price > 1200000)) return false;
      if (priceRange === "above_1.2m" && car.price <= 1200000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "year_desc") return b.year - a.year;
      if (sortBy === "mileage_asc") return a.mileage - b.mileage;
      return 0;
    });
  }, [keyword, brand, bodyType, fuel, transmission, priceRange, sortBy]);

  return (
    <div className="bg-[#F8FAFD] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#283948] tracking-tight">
            รถยนต์มือสองทั้งหมด (All Used Cars)
          </h1>
          <p className="text-sm text-[#556E82] mt-1">
            พบรถยนต์คุณภาพดีพร้อมใช้งานทั้งหมด{" "}
            <span className="font-bold text-[#FF9540]">{filteredCars.length}</span> คัน
          </p>
        </div>

        {/* Layout Grid: Sidebar Filters + Main Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-[#EAEFF5] shadow-xs sticky top-28 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAEFF5]">
                <span className="font-bold text-[#283948] text-base flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#FF9540]" />
                  ตัวกรองค้นหา
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-[#556E82] hover:text-[#FF9540] flex items-center gap-1 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  ล้างค่า
                </button>
              </div>

              {/* Keyword Search */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#283948]">ค้นหาคำสำคัญ</label>
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="เช่น Alphard, Civic, ฟรีดาวน์..."
                    className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl pl-9 pr-3 py-2 text-xs text-[#283948] focus:outline-none focus:border-[#FF9540]"
                  />
                </div>
              </div>

              {/* Brand Filter */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#283948]">ยี่ห้อ (Make)</label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948] focus:outline-none focus:border-[#FF9540]"
                >
                  <option value="">ทุกยี่ห้อ (All Makes)</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Isuzu">Isuzu</option>
                  <option value="Ford">Ford</option>
                  <option value="Mazda">Mazda</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Nissan">Nissan</option>
                </select>
              </div>

              {/* Body Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#283948]">ประเภทตัวถัง (Body Type)</label>
                <select
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948] focus:outline-none focus:border-[#FF9540]"
                >
                  <option value="">ทุกประเภท (All Types)</option>
                  <option value="รถเก๋ง">รถเก๋ง (Sedan)</option>
                  <option value="รถเอสยูวี">รถเอสยูวี (SUV)</option>
                  <option value="รถกระบะ">รถกระบะ (Pickup)</option>
                  <option value="รถตู้">รถตู้ (Van)</option>
                  <option value="รถเปิดประทุน">รถเปิดประทุน</option>
                  <option value="รถแฮทช์แบ็ก">รถแฮทช์แบ็ก</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#283948]">งบประมาณ (Price)</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948] focus:outline-none focus:border-[#FF9540]"
                >
                  <option value="">ทุกช่วงราคา (Any)</option>
                  <option value="under_300k">ต่ำกว่า 300,000 ฿</option>
                  <option value="300k_500k">300,000 - 500,000 ฿</option>
                  <option value="500k_800k">500,000 - 800,000 ฿</option>
                  <option value="800k_1.2m">800,000 - 1,200,000 ฿</option>
                  <option value="above_1.2m">มากกว่า 1,200,000 ฿</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#283948]">เชื้อเพลิง (Fuel)</label>
                <select
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948] focus:outline-none focus:border-[#FF9540]"
                >
                  <option value="">ทุกประเภทเชื้อเพลิง</option>
                  <option value="เบนซิน">น้ำมันเบนซิน</option>
                  <option value="ดีเซล">น้ำมันดีเซล</option>
                  <option value="ไฮบริด">ไฮบริด (Hybrid)</option>
                  <option value="ไฟฟ้า">ไฟฟ้า (EV)</option>
                </select>
              </div>

              {/* Transmission */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#283948]">ระบบเกียร์ (Transmission)</label>
                <select
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948] focus:outline-none focus:border-[#FF9540]"
                >
                  <option value="">ทั้งหมด</option>
                  <option value="เกียร์อัตโนมัติ">เกียร์อัตโนมัติ (Auto)</option>
                  <option value="เกียร์ธรรมดา">เกียร์ธรรมดา (Manual)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Results Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Top Toolbar */}
            <div className="bg-white rounded-2xl p-4 border border-[#EAEFF5] shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden flex items-center gap-1.5 bg-[#F8FAFD] hover:bg-gray-100 text-[#283948] text-xs font-bold px-3 py-2 rounded-lg transition"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF9540]" />
                  <span>ตัวกรองค้นหา</span>
                </button>

                <span className="text-xs text-[#556E82]">
                  แสดงผล <span className="font-bold text-[#283948]">{filteredCars.length}</span> คัน
                </span>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-[#556E82] whitespace-nowrap">เรียงตาม:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948] font-semibold focus:outline-none focus:border-[#FF9540]"
                >
                  <option value="newest">อัปเดตล่าสุด</option>
                  <option value="price_asc">ราคา: ต่ำ - สูง</option>
                  <option value="price_desc">ราคา: สูง - ต่ำ</option>
                  <option value="year_desc">ปีรถยนต์: ใหม่สุด</option>
                  <option value="mileage_asc">ระยะทางไมล์: น้อยสุด</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters Drawer */}
            {mobileFilterOpen && (
              <div className="lg:hidden bg-white rounded-2xl p-5 border border-[#EAEFF5] space-y-4 shadow-md animate-fadeIn">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-bold text-sm text-[#283948]">ตัวกรองทั้งหมด</span>
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#FF9540] font-bold"
                  >
                    ล้างค่า
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="คำค้นหา..."
                    className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948]"
                  />
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-[#F8FAFD] border border-[#EAEFF5] rounded-xl px-3 py-2 text-xs text-[#283948]"
                  >
                    <option value="">ทุกยี่ห้อ</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Isuzu">Isuzu</option>
                    <option value="Mazda">Mazda</option>
                  </select>
                </div>
              </div>
            )}

            {/* Listings Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#EAEFF5] shadow-xs space-y-4">
                <div className="w-16 h-16 rounded-full bg-orange-50 text-[#FF9540] flex items-center justify-center mx-auto">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#283948]">
                  ไม่พบรถยนต์ที่ตรงกับเงื่อนไขการค้นหา
                </h3>
                <p className="text-sm text-[#556E82] max-w-md mx-auto">
                  ลองปรับเปลี่ยนตัวกรอง หรือค้นหาด้วยคำอื่นเพื่อดูตัวเลือกรถที่มีในระบบ
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#FF9540] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#E8822E] transition"
                >
                  ล้างตัวกรองทั้งหมด
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[#556E82]">กำลังโหลดรายการรถยนต์...</div>}>
      <ListingsContent />
    </Suspense>
  );
}
