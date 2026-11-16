import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Gauge, Fuel, Cog, MapPin, CheckCircle2 } from "lucide-react";
import { CarListing } from "@/data/cars";

interface CarCardProps {
  car: CarListing;
}

export default function CarCard({ car }: CarCardProps) {
  const formattedPrice = new Intl.NumberFormat("th-TH").format(car.price);
  const formattedMileage = new Intl.NumberFormat("th-TH").format(car.mileage);

  // Approximate monthly payment for 72 months (6 years) with 15% down payment
  const loanAmount = car.price * 0.85;
  const approxMonthly = Math.round((loanAmount * 1.2) / 72);
  const formattedMonthly = new Intl.NumberFormat("th-TH").format(approxMonthly);

  const displayImage =
    car.images[0] ||
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EAEFF5] overflow-hidden flex flex-col group">
      {/* Thumbnail */}
      <Link href={`/listing/${car.id}`} className="relative h-52 w-full overflow-hidden bg-gray-100 block">
        <Image
          src={displayImage}
          alt={car.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {car.badges && car.badges.length > 0 ? (
            car.badges.map((b, idx) => (
              <span
                key={idx}
                className="bg-[#FF9540] text-[#1B2935] text-[11px] font-bold px-2.5 py-0.5 rounded shadow-sm"
              >
                {b}
              </span>
            ))
          ) : (
            <span className="bg-[#DA1C2E] text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow-sm">
              แนะนำ
            </span>
          )}
        </div>

        {/* Body Type badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#1B2935]/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
            {car.body_type}
          </span>
        </div>

        {/* Photo count */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded">
          {car.images.length} รูป
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <Link href={`/listing/${car.id}`} className="group-hover:text-[#DA1C2E] transition">
          <h3 className="font-extrabold text-[#283948] text-base line-clamp-2 min-h-[46px] leading-snug">
            {car.title}
          </h3>
        </Link>

        {/* Price & Monthly */}
        <div className="mt-2.5 pb-3 border-b border-[#EAEFF5] flex items-baseline justify-between">
          <div>
            <span className="text-xl font-black text-[#DA1C2E]">
              {formattedPrice}
            </span>
            <span className="text-xs font-bold text-[#283948] ml-1">฿</span>
          </div>

          <div className="text-[11px] text-[#556E82] font-medium">
            ผ่อนเริ่มต้น <span className="text-[#FF9540] font-bold">{formattedMonthly}</span> ฿/ด.
          </div>
        </div>

        {/* 4 Specs */}
        <div className="grid grid-cols-2 gap-2 py-3 text-xs text-[#556E82] border-b border-[#EAEFF5]">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#FF9540]" />
            <span>ปี {car.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-[#FF9540]" />
            <span>{formattedMileage} กม.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="w-3.5 h-3.5 text-[#FF9540]" />
            <span className="truncate">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cog className="w-3.5 h-3.5 text-[#FF9540]" />
            <span className="truncate">{car.transmission}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 flex items-center justify-between text-[11px] text-[#556E82]">
          <div className="flex items-center gap-1 truncate max-w-[170px]">
            <MapPin className="w-3.5 h-3.5 text-[#FF9540] flex-shrink-0" />
            <span className="truncate">{car.location}</span>
          </div>

          <div className="flex items-center gap-1 text-emerald-600 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ตรวจสภาพแล้ว</span>
          </div>
        </div>
      </div>
    </div>
  );
}
