"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CARS_DATA, CarListing } from "@/data/cars";
import {
  Calendar,
  Gauge,
  Fuel,
  Cog,
  MapPin,
  Eye,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Calculator,
  ChevronRight,
  Share2,
  Heart,
  Car,
  Clock,
  Printer,
  Sparkles,
  Info,
} from "lucide-react";
import CarCard from "@/components/CarCard";

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const car = CARS_DATA.find((c) => c.id === resolvedParams.id) || CARS_DATA[0];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  // Loan calculator state (matching Listivo lst_loan_calculator)
  const [downPaymentPercent, setDownPaymentPercent] = useState(15);
  const [loanMonths, setLoanMonths] = useState(72);
  const interestRate = 0.035; // 3.5%

  if (!car) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat("th-TH").format(car.price);
  const formattedMileage = new Intl.NumberFormat("th-TH").format(car.mileage);

  // Loan calculation
  const downPaymentAmount = Math.round((car.price * downPaymentPercent) / 100);
  const loanPrincipal = car.price - downPaymentAmount;
  const totalInterest = loanPrincipal * interestRate * (loanMonths / 12);
  const monthlyPayment = Math.round((loanPrincipal + totalInterest) / loanMonths);
  const formattedMonthly = new Intl.NumberFormat("th-TH").format(monthlyPayment);

  // Fallback photos
  const photos = car.images && car.images.length > 0 ? car.images : [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
  ];

  // Similar cars
  const similarCars = CARS_DATA.filter(
    (c) => c.id !== car.id && (c.brand === car.brand || c.body_type === car.body_type)
  ).slice(0, 3);

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      {/* 1. Breadcrumbs Strip (Listivo lst_breadcrumbs_v2) */}
      <div className="bg-white border-b border-[#EAEFF5] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#556E82]">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#DA1C2E] transition">หน้าหลัก</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#FF9540]" />
            <Link href="/listings" className="hover:text-[#DA1C2E] transition">รถยนต์มือสอง</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#FF9540]" />
            <span className="text-[#DA1C2E] font-medium">{car.brand}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#FF9540] hidden sm:inline" />
            <span className="text-[#283948] font-bold truncate max-w-sm hidden sm:inline">{car.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.print();
              }}
              className="flex items-center gap-1 hover:text-[#283948] transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">พิมพ์</span>
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: car.title, url: window.location.href });
                }
              }}
              className="flex items-center gap-1 hover:text-[#283948] transition"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">แชร์</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* 2. Listivo Mosaic Gallery (lst_listing_gallery_v2) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 rounded-2xl overflow-hidden bg-white p-2 border border-[#EAEFF5] shadow-sm">
          {/* Main Large Photo (Left 2 cols) */}
          <div
            onClick={() => {
              setSelectedPhotoIndex(0);
              setShowPhotoModal(true);
            }}
            className="lg:col-span-2 relative h-[360px] sm:h-[460px] rounded-xl overflow-hidden cursor-pointer group bg-gray-900"
          >
            <Image
              src={photos[0]}
              alt={car.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              {car.badges.map((b, idx) => (
                <span
                  key={idx}
                  className="bg-[#FF9540] text-[#1B2935] text-xs font-bold px-3 py-1 rounded-md shadow-md"
                >
                  {b}
                </span>
              ))}
              <span className="bg-[#DA1C2E] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                {car.body_type}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#FF9540]" />
              <span>เข้าชม {car.views} ครั้ง</span>
            </div>
          </div>

          {/* Right 2 Side Photos in 1 column */}
          <div className="hidden lg:grid grid-rows-2 gap-3 h-[460px]">
            <div
              onClick={() => {
                setSelectedPhotoIndex(1);
                setShowPhotoModal(true);
              }}
              className="relative rounded-xl overflow-hidden cursor-pointer group bg-gray-900"
            >
              <Image
                src={photos[1] || photos[0]}
                alt={car.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div
              onClick={() => {
                setSelectedPhotoIndex(2);
                setShowPhotoModal(true);
              }}
              className="relative rounded-xl overflow-hidden cursor-pointer group bg-gray-900"
            >
              <Image
                src={photos[2] || photos[0]}
                alt={car.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition flex items-center justify-center">
                <span className="bg-white/90 text-[#1B2935] font-bold text-xs px-4 py-2 rounded-lg shadow-md flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#DA1C2E]" />
                  ดูรูปทั้งหมด ({photos.length} รูป)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Main Content Split: Left Details & Right Dealer Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Price Header Card (Listivo lst_listing_name & lst_listing_price) */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAEFF5] shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#283948] tracking-tight leading-snug">
                    {car.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#556E82] mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF9540]" />
                      <span>{car.location}</span>
                    </span>
                    <span>•</span>
                    <span>
                      ป้ายทะเบียน: <strong className="text-[#283948]">{car.plate}</strong>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>ผ่านการตรวจสอบแล้ว</span>
                    </span>
                  </div>
                </div>

                {/* Price Box with Listivo style */}
                <div className="text-left sm:text-right flex-shrink-0 bg-[#FDFDFE] p-4 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#556E82] font-semibold block uppercase">
                    ราคาขายสุทธิ (Price)
                  </span>
                  <div className="text-3xl font-black text-[#DA1C2E] tracking-tight mt-0.5">
                    {formattedPrice} <span className="text-lg font-bold text-[#283948]">฿</span>
                  </div>
                  <div className="text-xs text-[#556E82] mt-1">
                    ผ่อนเริ่มต้น <span className="font-bold text-[#FF9540]">{formattedMonthly}</span> ฿/ด.
                  </div>
                </div>
              </div>
            </div>

            {/* Key Specifications (Listivo lst_listing_attributes_v3) */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAEFF5] shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#EAEFF5] pb-3">
                <h3 className="font-bold text-base text-[#283948] flex items-center gap-2">
                  <Car className="w-5 h-5 text-[#DA1C2E]" />
                  <span>ข้อมูลจำเพาะของรถยนต์ (Specifications)</span>
                </h3>
                <span className="text-xs text-[#556E82]">รหัสรถ #{car.id}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">ปีที่ผลิต (Year)</span>
                  <span className="text-base font-extrabold text-[#283948]">{car.year}</span>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">เลขไมล์ (Mileage)</span>
                  <span className="text-base font-extrabold text-[#283948]">{formattedMileage} <span className="text-xs font-normal">กม.</span></span>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">ระบบเกียร์ (Gear)</span>
                  <span className="text-sm font-bold text-[#283948]">{car.transmission}</span>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">เชื้อเพลิง (Fuel)</span>
                  <span className="text-sm font-bold text-[#283948]">{car.fuel}</span>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">ความจุเครื่องยนต์</span>
                  <span className="text-sm font-bold text-[#283948]">{car.engine}</span>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">ประเภทตัวถัง</span>
                  <span className="text-sm font-bold text-[#283948]">{car.body_type}</span>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">สีตัวถัง (Color)</span>
                  <span className="text-sm font-bold text-[#283948]">{car.color}</span>
                </div>

                <div className="bg-[#F8FAFD] p-3.5 rounded-xl border border-[#EAEFF5]">
                  <span className="text-[11px] text-[#73818C] block mb-1">ทะเบียน (Plate)</span>
                  <span className="text-sm font-bold text-[#283948]">{car.plate}</span>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAEFF5] shadow-sm space-y-3">
              <h3 className="font-bold text-base text-[#283948] border-b border-[#EAEFF5] pb-3">
                รายละเอียดเพิ่มเติมเกี่ยวกับรถยนต์
              </h3>
              <div className="text-sm text-[#556E82] leading-relaxed space-y-2">
                <p>
                  {car.title} สภาพสวยพร้อมใช้งาน ไมล์แท้ {formattedMileage} กม. ตรวจเช็คประวัติศูนย์บริการครบถ้วน
                  โครงสร้างตัวถังเดิมสนิท ไม่มีชนหนัก ไม่มีพลิกคว่ำ และไม่เคยจมน้ำ 100%
                </p>
                <p>
                  ภายในสภาพใหม่ สะอาด อุปกรณ์ไฟฟ้าและระบบความปลอดภัยทำงานสมบูรณ์ครบทุกจุด เล่มทะเบียนพร้อมโอนกรรมสิทธิ์ถูกต้องตามกฎหมาย
                  ยินดีให้คำปรึกษาจัดไฟแนนซ์ ดอกเบี้ยพิเศษ อนุมัติไว
                </p>
              </div>

              <div className="pt-3 flex flex-wrap gap-2 text-xs">
                {["ฟรีดาวน์", "ออกรถ 0 บาท", "มีรับประกันหลังการขาย", "ขับฟรี 90 วัน", "ส่งรถถึงหน้าบ้าน"].map((perk, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-[#F8FAFD] border border-[#EAEFF5] text-[#283948] px-3 py-1.5 rounded-lg font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{perk}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Listivo Loan Calculator (lst_loan_calculator) */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAEFF5] shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#EAEFF5] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FF9540]/15 flex items-center justify-center text-[#FF9540]">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-[#283948]">คำนวณค่างวดสินเชื่อรถยนต์</h3>
                </div>
                <span className="text-xs text-[#556E82]">ดอกเบี้ยเริ่มต้น 3.5% ต่อปี</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Down Payment Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-[#283948]">
                    <span>เงินดาวน์ ({downPaymentPercent}%):</span>
                    <span className="text-[#DA1C2E] text-sm">
                      {new Intl.NumberFormat("th-TH").format(downPaymentAmount)} ฿
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-[#DA1C2E] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#73818C]">
                    <span>0% (ฟรีดาวน์)</span>
                    <span>25%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Loan Term Selection */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-[#283948]">
                    <span>ระยะเวลาผ่อนชำระ:</span>
                    <span className="text-[#DA1C2E] text-sm">{loanMonths} เดือน ({loanMonths / 12} ปี)</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[48, 60, 72, 84].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setLoanMonths(m)}
                        className={`py-2 text-xs font-bold rounded-lg border transition ${
                          loanMonths === m
                            ? "bg-[#DA1C2E] text-white border-[#DA1C2E] shadow-sm"
                            : "bg-[#F8FAFD] text-[#283948] border-[#EAEFF5] hover:bg-gray-100"
                        }`}
                      >
                        {m} เดือน
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exact Listivo Calculated Output Banner (total_background: #FF9540, total_color: #2C3640) */}
              <div className="bg-[#FF9540] text-[#2C3640] p-5 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider block text-[#2C3640]/80">
                    ประมาณการค่างวดผ่อนชำระต่อเดือน
                  </span>
                  <div className="text-3xl font-black text-[#2C3640] mt-0.5">
                    {formattedMonthly} <span className="text-base font-bold text-[#2C3640]/90">฿ / เดือน</span>
                  </div>
                </div>

                <div className="text-xs text-[#2C3640]/90 text-right max-w-xs">
                  * คำนวณเบื้องต้นที่อัตราดอกเบี้ย 3.5% ค่างวดจริงขึ้นอยู่กับการพิจารณาของสถาบันการเงิน
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dealer Card (Listivo lst_listing_user_v2) */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#EAEFF5] shadow-sm space-y-5 sticky top-24">
              {/* Dealer Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#EAEFF5]">
                <div className="w-14 h-14 rounded-xl bg-[#1B2935] text-white font-black text-xl flex items-center justify-center shadow-md">
                  WC
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-[#283948] text-base">{car.dealer.name}</h4>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>ดีลเลอร์พันธมิตรที่ผ่านการรับรอง</span>
                  </span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                {/* Direct Phone Dial (Listivo primary action) */}
                <a
                  href={`tel:${car.dealer.phone}`}
                  className="w-full bg-[#DA1C2E] hover:bg-[#B81726] text-white font-bold py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition transform active:scale-95 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>โทรสอบถาม: {car.dealer.phone}</span>
                </a>

                {/* LINE Chat Button (Exact official LINE Green #06C755 from template_8824.json) */}
                <a
                  href={`https://line.me/R/ti/p/~${car.dealer.line}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition transform active:scale-95 text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>คุยกับผู้ขายผ่าน LINE: {car.dealer.line}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#EAEFF5] space-y-2.5 text-xs text-[#556E82]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>รับประกันรถยนต์สภาพดี ไม่มีย้อมแมว</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>เอกสารครบ เล่มทะเบียนพร้อมโอนทุกคัน</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>มีเจ้าหน้าที่ไฟแนนซ์ให้บริการทั่วประเทศ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cars Section */}
        {similarCars.length > 0 && (
          <div className="pt-10 border-t border-[#EAEFF5]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-extrabold text-[#283948]">
                รถยนต์รุ่นใกล้เคียงที่คุณอาจสนใจ
              </h3>
              <Link href="/listings" className="text-xs font-bold text-[#DA1C2E] hover:underline">
                ดูทั้งหมด
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCars.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {showPhotoModal && (
        <div
          onClick={() => setShowPhotoModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] h-[550px] bg-black rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative flex-grow">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`Photo ${selectedPhotoIndex}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-3 bg-[#1B2935] flex items-center justify-between text-white text-xs">
              <span>
                รูปที่ {selectedPhotoIndex + 1} จาก {photos.length}
              </span>
              <div className="flex gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedPhotoIndex(i)}
                    className={`w-3 h-3 rounded-full ${
                      selectedPhotoIndex === i ? "bg-[#FF9540]" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="font-bold text-gray-300 hover:text-white"
              >
                ปิด (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
