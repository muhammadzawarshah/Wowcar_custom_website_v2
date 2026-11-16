"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Plus, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#F2F4F8] shadow-xs">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          {/* Left: Logo & Navigation */}
          <div className="flex items-center space-x-8">
            {/* Real WowCar Logo */}
            <Link href="/" className="flex items-center py-2 flex-shrink-0">
              <div className="relative w-[160px] sm:w-[180px] h-[50px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo.png`}
                  alt="WowCar ขายรถมือสองในประเทศไทย"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-medium transition ${
                  pathname === "/"
                    ? "text-[#FF9540]"
                    : "text-[#1B2935] hover:text-[#FF9540]"
                }`}
              >
                หน้าหลัก
              </Link>

              <Link
                href="/listings"
                className={`px-4 py-2 text-sm font-medium transition ${
                  pathname === "/listings"
                    ? "text-[#FF9540]"
                    : "text-[#1B2935] hover:text-[#FF9540]"
                }`}
              >
                ค้นหา
              </Link>

              <Link
                href="/listings?view=map"
                className={`px-4 py-2 text-sm font-medium transition ${
                  pathname.includes("view=map")
                    ? "text-[#FF9540]"
                    : "text-[#1B2935] hover:text-[#FF9540]"
                }`}
              >
                ค้นหาจากแผนที่
              </Link>

              {/* เพิ่มเติม (Dropdown) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#1B2935] hover:text-[#FF9540] transition"
                >
                  <span>เพิ่มเติม</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#7D8183]" />
                </button>

                {moreOpen && (
                  <div
                    onMouseLeave={() => setMoreOpen(false)}
                    className="absolute left-0 mt-2 w-48 bg-white border border-[#EAEFF5] rounded-xl shadow-xl py-2 z-50"
                  >
                    <Link
                      href="/blog"
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2.5 text-xs font-medium text-[#2C3640] hover:bg-[#F8FAFD] hover:text-[#FF9540]"
                    >
                      ข่าวสารยานยนต์
                    </Link>
                    <Link
                      href="/about-us"
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2.5 text-xs font-medium text-[#2C3640] hover:bg-[#F8FAFD] hover:text-[#FF9540]"
                    >
                      เกี่ยวกับเรา
                    </Link>
                    <Link
                      href="/contact-us"
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2.5 text-xs font-medium text-[#2C3640] hover:bg-[#F8FAFD] hover:text-[#FF9540]"
                    >
                      ติดต่อเรา
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right: User Login/Register & Orange "โฆษณารถของคุณ" Button */}
          <div className="hidden md:flex items-center space-x-5">
            {/* User Avatar Circle */}
            <div className="w-9 h-9 rounded-full border border-[#D8D7DA] flex items-center justify-center text-[#2C3640]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 18 20" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 0C5.53008 0 2.7 2.83008 2.7 6.3C2.7 8.46914 3.80742 10.3957 5.48438 11.5312C2.27461 12.9094 0 16.0945 0 19.8H1.8C1.8 17.1984 3.17461 14.9344 5.23125 13.6687C5.83594 15.1523 7.30898 16.2 9 16.2C10.691 16.2 12.1641 15.1523 12.7688 13.6687C14.8254 14.9344 16.2 17.1984 16.2 19.8H18C18 16.0945 15.7254 12.9094 12.5156 11.5312C14.1926 10.3957 15.3 8.46914 15.3 6.3C15.3 2.83008 12.4699 0 9 0ZM9 1.8C11.4961 1.8 13.5 3.80391 13.5 6.3C13.5 8.79609 11.4961 10.8 9 10.8C6.50391 10.8 4.5 8.79609 4.5 6.3C4.5 3.80391 6.50391 1.8 9 1.8Z" />
              </svg>
            </div>

            {/* Login */}
            <Link
              href="/login"
              className="text-xs font-semibold text-[#2C3640] hover:text-[#FF9540] transition"
            >
              เข้าสู่ระบบ
            </Link>

            {/* Separator line */}
            <div className="w-[1px] h-4 bg-[#D8D7DA]" />

            {/* Register */}
            <Link
              href="/register"
              className="text-xs font-semibold text-[#2C3640] hover:text-[#FF9540] transition"
            >
              ลงทะเบียน
            </Link>

            {/* Exact Orange "โฆษณารถของคุณ" Button */}
            <Link
              href="/post-ad"
              className="bg-[#FF9540] hover:bg-[#E8822E] text-white text-xs font-bold h-[44px] px-6 rounded-lg shadow-xs transition flex items-center gap-2"
            >
              <span>โฆษณารถของคุณ</span>
              <Plus className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/post-ad"
              className="bg-[#FF9540] text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1"
            >
              <span>ลงขาย</span>
              <Plus className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C3640] hover:text-[#FF9540]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#F2F4F8] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#2C3640]"
          >
            หน้าหลัก
          </Link>
          <Link
            href="/listings"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#2C3640]"
          >
            ค้นหา
          </Link>
          <Link
            href="/listings?view=map"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#2C3640]"
          >
            ค้นหาจากแผนที่
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#2C3640]"
          >
            ข่าวสารยานยนต์
          </Link>
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#2C3640]"
          >
            เกี่ยวกับเรา
          </Link>
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#2C3640]"
          >
            ติดต่อเรา
          </Link>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-bold text-[#2C3640]"
            >
              เข้าสู่ระบบ / ลงทะเบียน
            </Link>
            <Link
              href="/post-ad"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FF9540] text-white text-xs font-bold px-4 py-2.5 rounded-lg"
            >
              โฆษณารถของคุณ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
