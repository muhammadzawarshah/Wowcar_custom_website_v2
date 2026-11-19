import { slugify } from './strings';

/** Province names supported across WowCar Thailand & existing regions. */
export const PROVINCES = [
  'กรุงเทพมหานคร',
  'Bangkok',
  'นนทบุรี',
  'Nonthaburi',
  'ปทุมธานี',
  'Pathum Thani',
  'สมุทรปราการ',
  'Samut Prakan',
  'ชลบุรี',
  'Chonburi',
  'เชียงใหม่',
  'Chiang Mai',
  'ภูเก็ต',
  'Phuket',
  'ขอนแก่น',
  'Khon Kaen',
  'นครราชสีมา',
  'Nakhon Ratchasima',
  'สงขลา',
  'Songkhla',
  'ระยอง',
  'Rayong',
  'อุดรธานี',
  'Udon Thani',
  'สุราษฎร์ธานี',
  'Surat Thani',
  'นครปฐม',
  'Nakhon Pathom',
  'พระนครศรีอยุธยา',
  'Ayutthaya',
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'Northern Cape',
  'North West',
  'Western Cape',
] as const;
export type Province = (typeof PROVINCES)[number];

/** Enum keys → stored names. */
export const Province = {
  BANGKOK_TH: 'กรุงเทพมหานคร',
  BANGKOK: 'Bangkok',
  NONTHABURI_TH: 'นนทบุรี',
  NONTHABURI: 'Nonthaburi',
  PATHUM_THANI_TH: 'ปทุมธานี',
  PATHUM_THANI: 'Pathum Thani',
  SAMUT_PRAKAN_TH: 'สมุทรปราการ',
  SAMUT_PRAKAN: 'Samut Prakan',
  CHONBURI_TH: 'ชลบุรี',
  CHONBURI: 'Chonburi',
  CHIANG_MAI_TH: 'เชียงใหม่',
  CHIANG_MAI: 'Chiang Mai',
  PHUKET_TH: 'ภูเก็ต',
  PHUKET: 'Phuket',
  KHON_KAEN_TH: 'ขอนแก่น',
  KHON_KAEN: 'Khon Kaen',
  NAKHON_RATCHASIMA_TH: 'นครราชสีมา',
  NAKHON_RATCHASIMA: 'Nakhon Ratchasima',
  SONGKHLA_TH: 'สงขลา',
  SONGKHLA: 'Songkhla',
  RAYONG_TH: 'ระยอง',
  RAYONG: 'Rayong',
  UDON_THANI_TH: 'อุดรธานี',
  UDON_THANI: 'Udon Thani',
  SURAT_THANI_TH: 'สุราษฎร์ธานี',
  SURAT_THANI: 'Surat Thani',
  NAKHON_PATHOM_TH: 'นครปฐม',
  NAKHON_PATHOM: 'Nakhon Pathom',
  AYUTTHAYA_TH: 'พระนครศรีอยุธยา',
  AYUTTHAYA: 'Ayutthaya',
  EASTERN_CAPE: 'Eastern Cape',
  FREE_STATE: 'Free State',
  GAUTENG: 'Gauteng',
  KWAZULU_NATAL: 'KwaZulu-Natal',
  LIMPOPO: 'Limpopo',
  MPUMALANGA: 'Mpumalanga',
  NORTHERN_CAPE: 'Northern Cape',
  NORTH_WEST: 'North West',
  WESTERN_CAPE: 'Western Cape',
} as const satisfies Record<string, Province>;

const BY_KEY = new Map<string, Province>(
  Object.entries(Province).flatMap(([key, name]) => {
    const entries: [string, Province][] = [
      [name.toLowerCase(), name],
      [key.toLowerCase(), name],
    ];
    const sName = slugify(name);
    const sKey = slugify(key);
    if (sName) entries.push([sName, name]);
    if (sKey) entries.push([sKey, name]);
    return entries;
  }),
);

/** Resolves Thai/English province names or enum keys to canonical Province values. */
export function toProvince(raw: unknown): Province | undefined {
  if (typeof raw !== 'string') return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  return BY_KEY.get(trimmed.toLowerCase()) ?? BY_KEY.get(slugify(trimmed));
}

/** class-transformer `@Transform` callback: normalises legacy keys (single value or array) before validation. */
export const provinceInput = ({ value }: { value: unknown }) =>
  Array.isArray(value) ? value.map((item) => toProvince(item) ?? item) : (toProvince(value) ?? value);
