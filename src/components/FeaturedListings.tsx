"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CARS_DATA } from "@/data/cars";
import CarCard from "./CarCard";

export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", name: "ทั้งหมด" },
    { id: "รถเปิดประทุน", name: "รถเปิดประทุน" },
    { id: "รถเอสยูวี", name: "รถเอสยูวี" },
    { id: "รถแฮทช์แบ็ก", name: "รถแฮทช์แบ็ก" },
  ];

  const filteredCars = CARS_DATA.filter((car) => {
    if (activeTab === "all") return true;
    return car.body_type.includes(activeTab);
  }).slice(0, 9);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row exactly matching Screenshot 1 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl sm:text-[28px] font-semibold text-[#2C3640] tracking-tight">
            รถยนต์แนะนำ
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {/* Tabs container */}
            <div className="flex items-center gap-1 bg-[#F2F4F8] p-1 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#D8D7DA] text-[#FF9540]"
                      : "text-[#7D8183] hover:text-[#2C3640]"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Orange "ดูทั้งหมด" button with arrow */}
            <Link
              href="/listings"
              className="bg-[#FF9540] hover:bg-[#E8822E] text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-xs transition flex items-center gap-1.5 ml-1"
            >
              <span>ดูทั้งหมด</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
