import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";
import { BLOGS_DATA } from "@/data/blogs";

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF9540] uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>ข่าวสารและอัปเดต</span>
            </div>
            <h2 className="text-3xl font-semibold text-[#283948] tracking-tight">
              ว้าวข่าว WowCar (News & Insights)
            </h2>
            <p className="text-base text-[#556E82] mt-2 leading-relaxed">
              อัปเดตเทรนด์ยานยนต์ รีวิวรถยนต์ และเคล็ดลับการซื้อขายรถมือสอง
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-[#FF9540] hover:text-[#E8822E] transition"
          >
            <span>ดูบทความทั้งหมด</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_DATA.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-[#F8FAFD] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#EAEFF5] flex flex-col group"
            >
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
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
                    <Calendar className="w-3.5 h-3.5 text-[#FF9540]" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#283948] line-clamp-2 mb-2.5 group-hover:text-[#FF9540] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-[15px] text-[#556E82] line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-200/60">
                  <Link
                    href={`/blog`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#FF9540] group-hover:underline"
                  >
                    <span>อ่านต่อ</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
