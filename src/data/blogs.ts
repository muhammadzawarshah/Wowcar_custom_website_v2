export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
  author: string;
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "13648",
    title: "อนาคตของตลาดรถยนต์มือสองในประเทศไทยปี 2568",
    slug: "future-of-used-cars-thailand-2025",
    date: "2025-01-25",
    image: "https://www.wowcar.co.th/wp-content/uploads/2025/01/january-2025.png",
    excerpt: "แนวโน้มและทิศทางของตลาดรถยนต์มือสองในปี 2568 พร้อมวิเคราะห์ความต้องการของผู้บริโภคและเทคโนโลยีใหม่",
    category: "ข่าวสารยานยนต์",
    author: "ทีมงาน WowCar"
  },
  {
    id: "13565",
    title: "C-Class vs 3 Series: การต่อสู้ของยักษ์ใหญ่ในตลาดรถหรูระดับกลาง",
    slug: "c-class-vs-3-series",
    date: "2025-01-20",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200",
    excerpt: "เปรียบเทียบสเปก ความคุ้มค่า และสมรรถนะการขับขี่ระหว่าง Mercedes-Benz C-Class และ BMW 3 Series",
    category: "รีวิวรถยนต์",
    author: "ทีมงาน WowCar"
  },
  {
    id: "12586",
    title: "WowCar กำลังจะปฏิวัติตลาดรถยนต์มือสองในประเทศไทย",
    slug: "wowcar-revolutionize-used-car-thailand",
    date: "2024-11-21",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
    excerpt: "แพลตฟอร์มซื้อขายรถยนต์มือสองรุ่นใหม่ที่รวมดีลเลอร์ชั้นนำทั่วไทย ค้นหาง่าย โปร่งใส และปลอดภัย",
    category: "ข่าวสาร WowCar",
    author: "ทีมงาน WowCar"
  },
  {
    id: "16275",
    title: "WowCar ยินดีต้อนรับ Koonying Used Car สู่ครอบครัวของเรา!",
    slug: "welcome-koonying-used-car",
    date: "2025-02-15",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    excerpt: "พาร์ทเนอร์ดีลเลอร์คุณภาพสูง Koonying Used Car พร้อมนำเสนอสต็อกรถหรูคัดเกรดพิเศษบน WowCar แล้ววันนี้",
    category: "ดีลเลอร์พาร์ทเนอร์",
    author: "ทีมงาน WowCar"
  },
  {
    id: "19710",
    title: "เปิดโลกยนตรกรรมไทย Bangkok Motor Show",
    slug: "bangkok-motor-show-highlights",
    date: "2025-02-21",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200",
    excerpt: "เจาะลึกไฮไลท์รถใหม่และนวัตกรรมยานยนต์ไฟฟ้าในงาน Bangkok International Motor Show",
    category: "งานแสดงยานยนต์",
    author: "ทีมงาน WowCar"
  }
];
