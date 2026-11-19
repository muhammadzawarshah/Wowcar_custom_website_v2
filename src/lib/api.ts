import { CARS_DATA, CarListing } from "@/data/cars";
import { BLOGS_DATA, BlogPost } from "@/data/blogs";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") ||
  "http://localhost:4000/api/v1";

/** Maps a backend Vehicle response row to the frontend CarListing interface. */
export function mapBackendVehicleToCarListing(row: Record<string, any>): CarListing {
  const images: string[] = Array.isArray(row.images) && row.images.length
    ? row.images.map((img: any) => (typeof img === "string" ? img : img?.url || img?.largeUrl || img?.mediumUrl)).filter(Boolean)
    : row.primaryImageUrl
      ? [row.primaryImageUrl]
      : ["https://wowcar.co.th/wp-content/uploads/2025/06/57.jpg"];

  const fuelMap: Record<string, string> = {
    PETROL: "เบนซิน",
    DIESEL: "ดีเซล",
    HYBRID: "ไฮบริด",
    PLUGIN_HYBRID: "ปลั๊กอินไฮบริด",
    ELECTRIC: "ไฟฟ้า (EV)",
    LPG: "LPG",
  };

  const transMap: Record<string, string> = {
    AUTOMATIC: "เกียร์อัตโนมัติ",
    MANUAL: "เกียร์ธรรมดา",
  };

  return {
    id: String(row.id),
    title: row.title || `${row.year || ""} ${row.make?.name || ""} ${row.model?.name || ""}`.trim(),
    brand: row.make?.name || row.brand || "Toyota",
    model: row.model?.name || row.model || "",
    year: Number(row.year) || 2020,
    price: Number(row.effectivePrice ?? row.price) || 0,
    mileage: Number(row.mileage) || 0,
    body_type:
      row.categories?.[0]?.name ||
      row.bodyTypeLabel ||
      row.body_type ||
      "รถเก๋ง",
    fuel: fuelMap[row.fuelType] || row.fuelTypeLabel || row.fuel || "เบนซิน",
    transmission:
      transMap[row.transmission] ||
      row.transmissionLabel ||
      row.transmission ||
      "เกียร์อัตโนมัติ",
    color: row.colour || row.color || "สีขาว",
    engine: row.engineCapacityCc
      ? `${(Number(row.engineCapacityCc) / 1000).toFixed(1)}L`
      : row.engine || "2.0L",
    plate: row.plateNumber || row.plate || "",
    badges: Array.isArray(row.badges) && row.badges.length ? row.badges : ["ฟรีดาวน์"],
    images,
    views: Number(row.viewCount ?? row.views) || 0,
    location: row.province || row.city || row.location || "กรุงเทพมหานคร",
    featured: Boolean(row.isFeatured ?? row.featured),
    dealer: {
      name: row.dealer?.name || "WowCar Premium Dealership",
      phone: row.dealer?.phone || "(+66) 094-351-6600",
      line: row.dealer?.lineId || row.dealer?.line || "@wowcar",
      verified: row.dealer?.verified ?? true,
      rating: Number(row.dealer?.rating) || 4.9,
      location: row.dealer?.province || row.province || "กรุงเทพมหานคร",
    },
  };
}

/** Fetch vehicles from the NestJS backend `/api/v1/search`, falling back to CARS_DATA if offline. */
export async function fetchVehiclesFromApi(params?: Record<string, string | number | boolean | undefined>): Promise<{
  data: CarListing[];
  total: number;
}> {
  try {
    const query = new URLSearchParams();
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        if (v !== undefined && v !== "") query.set(k, String(v));
      }
    }
    const res = await fetch(`${API_BASE_URL}/search?${query.toString()}`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = await res.json();
    const rows = Array.isArray(body?.data) ? body.data : [];
    return {
      data: rows.map(mapBackendVehicleToCarListing),
      total: Number(body?.meta?.total ?? rows.length),
    };
  } catch {
    return { data: CARS_DATA, total: CARS_DATA.length };
  }
}

/** Submit a Sell My Car / Post Ad request to `POST /api/v1/selling/requests`. */
export async function submitSellCarRequest(payload: {
  makeName: string;
  modelName: string;
  year: number;
  askingPrice: number;
  mileage: number;
  transmission: "AUTOMATIC" | "MANUAL";
  plateNumber?: string;
  name: string;
  phone: string;
  email?: string;
  lineId?: string;
  notes?: string;
}) {
  const res = await fetch(`${API_BASE_URL}/selling/requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      type: "SELL",
      province: "กรุงเทพมหานคร",
      city: "Bangkok",
      makeName: payload.makeName,
      modelName: payload.modelName,
      year: payload.year,
      mileage: payload.mileage,
      askingPrice: payload.askingPrice,
      condition: "GOOD",
      transmission: payload.transmission,
      plateNumber: payload.plateNumber,
      name: payload.name,
      phone: payload.phone,
      email: payload.email || "seller@wowcar.co.th",
      notes: [payload.lineId ? `LINE: ${payload.lineId}` : "", payload.notes || ""]
        .filter(Boolean)
        .join(" | "),
      consent: true,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message || `HTTP ${res.status}`);
  }
  return res.json();
}

/** Submit a Customer Enquiry / Contact form to `POST /api/v1/enquiries`. */
export async function submitEnquiry(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
  vehicleId?: string;
  type?: string;
}) {
  const res = await fetch(`${API_BASE_URL}/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      type: payload.type || "GENERAL",
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
      vehicleId: payload.vehicleId,
      consent: true,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message || `HTTP ${res.status}`);
  }
  return res.json();
}

/** Fetch blog posts from `/api/v1/content/articles`, falling back to BLOGS_DATA. */
export async function fetchBlogsFromApi(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/content/articles?pageSize=20`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = await res.json();
    const rows = Array.isArray(body?.data) ? body.data : [];
    if (!rows.length) return BLOGS_DATA;
    return rows.map((r: any) => ({
      id: String(r.id),
      title: r.title,
      slug: r.slug,
      date: r.publishedAt ? String(r.publishedAt).slice(0, 10) : "2025-01-25",
      image: r.coverImageUrl || BLOGS_DATA[0].image,
      excerpt: r.excerpt || "",
      category: r.category?.name || "ข่าวสาร WowCar",
      author: "ทีมงาน WowCar",
    }));
  } catch {
    return BLOGS_DATA;
  }
}
