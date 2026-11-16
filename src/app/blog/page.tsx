import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";
import { BLOGS_DATA } from "@/data/blogs";

export default function BlogPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DA1C2E]/10 text-[#DA1C2E] text-xs font-bold">
            <Newspaper className="w-3.5 h-3.5" />
            <span>ว้าวข่าว WOWCAR</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            ข่าวสารและบทความยานยนต์
          </h1>
          <p className="text-sm text-gray-500">
            อัปเดตเทรนด์ยานยนต์ รีวิวเปรียบเทียบรถยนต์ และสาระน่ารู้สำหรับการซื้อขายรถมือสองในไทย
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_DATA.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1B2935]/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-[#DA1C2E] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#DA1C2E] group-hover:underline">
                    <span>อ่านบทความเต็ม</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
