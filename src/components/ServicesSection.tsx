import React from "react";
import { ShieldCheck, Award, Zap, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: Award,
      title: "หลากหลายตัวเลือกรถมือสองสำหรับคุณ",
      description:
        "ค้นพบตัวเลือกรถยนต์มือสองหลากหลายรุ่น ครอบคลุมทุกความต้องการทั้งรถบ้านและรถดีลเลอร์คุณภาพในทุกพื้นที่",
      badge: "กว่า 1,000+ คัน",
    },
    {
      icon: ShieldCheck,
      title: "ความเชื่อใจและพันธมิตรรอบข้าง",
      description:
        "มาเป็นส่วนหนึ่งกับเราสู่การเป็นดีลเลอร์มืออาชีพ พร้อมความมั่นใจด้วยระบบคัดกรองรถคุณภาพและเอกสารถูกต้อง",
      badge: "ดีลเลอร์รับรอง",
    },
    {
      icon: Zap,
      title: "ค้นหาง่าย รวดเร็ว และแม่นยำ",
      description:
        "ระบบค้นหาอัจฉริยะช่วยให้คุณกรองตามงบประมาณ ยี่ห้อ ประเภทตัวถัง และพิกัดแผนที่ใกล้บ้านได้อย่างง่ายดาย",
      badge: "ค้นหาตามแผนที่",
    },
    {
      icon: DollarSign,
      title: "ลงขายรถฟรี ไม่มีค่าใช้จ่าย",
      description:
        "เปิดโอกาสให้คุณลงประกาศขายรถยนต์ได้ฟรี เข้าถึงกลุ่มผู้ซื้อทั่วประเทศโดยตรง ได้ราคาโดนใจแน่นอน",
      badge: "ฟรี 100%",
    },
  ];

  return (
    <section className="relative py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/services-bg.webp')` }}>
      {/* Dark overlay #2C3640 at 80% opacity matching live site elementor CSS */}
      <div className="absolute inset-0 bg-[#2C3640]/80" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#FDFDFE] uppercase tracking-wider bg-[#1B2935] px-4 py-1.5 rounded-full inline-block">
            บริการของเรา
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFDFE] tracking-tight">
            ทำไมต้องเลือก <span className="text-[#FF9540]">WOWCAR</span>
          </h2>
          <p className="text-base text-[#D8D7DA] leading-relaxed">
            เรามุ่งมั่นสร้างประสบการณ์การซื้อขายรถยนต์มือสองที่โปร่งใส สะดวกสบาย และปลอดภัยที่สุดในไทย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:border-[#FF9540] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F8FAFD] text-[#FF9540] shadow-xs flex items-center justify-center group-hover:bg-[#FF9540] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#7D8183] bg-[#F8FAFD] px-2.5 py-1 rounded-full border border-gray-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#2C3640] mb-2.5 group-hover:text-[#FF9540] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#7D8183] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-gray-100">
                  <Link
                    href="/listings"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9540] hover:text-[#E8822E] transition"
                  >
                    <span>ค้นหาเลย</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
