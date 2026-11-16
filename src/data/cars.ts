export interface CarListing {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  body_type: string;
  fuel: string;
  transmission: string;
  color: string;
  engine: string;
  plate: string;
  badges: string[];
  images: string[];
  views: number;
  location: string;
  featured: boolean;
  dealer: {
    name: string;
    phone: string;
    line: string;
    verified: boolean;
    rating: number;
    location: string;
  };
}

export const CARS_DATA: CarListing[] = [
  {
    "id": "26950",
    "title": "2019 Toyota Alphard 2.5 HYBRID SRC AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 2240000,
    "mileage": 63000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขฎ1841",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/57.jpg"
    ],
    "views": 537,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27032",
    "title": "2019 Toyota Majesty 2.8 PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1400000,
    "mileage": 239000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฮฮ9202",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-5.jpg"
    ],
    "views": 499,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27053",
    "title": "2024 Toyota Corolla Cross 1.8 HEV GR SPORT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 1137000,
    "mileage": 3800,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขญ8372",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-6.jpg"
    ],
    "views": 864,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27108",
    "title": "2024 Toyota Corolla Cross 1.8 HEV PREMIUM LUXURY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 1117000,
    "mileage": 269,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขญ839",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER09955-600x401-2.jpg"
    ],
    "views": 350,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27157",
    "title": "2021 Toyota Fortuner 2.4 LEGENDER 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1107000,
    "mileage": 145000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กบ4177",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER00682-.jpg"
    ],
    "views": 687,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27192",
    "title": "2024 Toyota Corolla Cross 1.8 HEV PREMIUM LUXURY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 1097000,
    "mileage": 105,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 5ขญ8337",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-3.jpg"
    ],
    "views": 380,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27212",
    "title": "2022 Toyota Fortuner 2.4 LEGENDER AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1090000,
    "mileage": 198000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขภ8430",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER05145.jpg"
    ],
    "views": 346,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27233",
    "title": "2022 Toyota Fortuner 2.4 LEADER AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1090000,
    "mileage": 145000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขว1279",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER08884.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27254",
    "title": "2019 Toyota Commuter 2.8 DIESEL MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 997000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1นก425",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 317,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27316",
    "title": "2021 Toyota Camry 2.5 HYBRID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 937000,
    "mileage": 98000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขส5011",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER00536-1.jpg"
    ],
    "views": 667,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27337",
    "title": "2022 Honda HRV 1.5 e:HEV RS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 937000,
    "mileage": 71000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " จต9938",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER01443.jpg"
    ],
    "views": 399,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27380",
    "title": "2020 Honda Accord 2.0 HYBRID TECH AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 907000,
    "mileage": 144000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขฏ8089",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER00895-1.jpg"
    ],
    "views": 754,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27401",
    "title": "2022 Toyota Corolla Cross  1.8 HYBRID PREMIUM SAFETY GR SPORT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 927000,
    "mileage": 94000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขก2419",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER06245.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27443",
    "title": "2019 Honda Accord  2.0 HYBRID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 887000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กบ6334",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER03169.jpg"
    ],
    "views": 381,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27464",
    "title": "2020 Honda Accord 2.0 HYBRID TECH AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 877000,
    "mileage": 199000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขฏ8087",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER00895.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27485",
    "title": "2019 Hyundai H-1 2.5 ELITE AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 877000,
    "mileage": 171000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1นก2903",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER08349.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27609",
    "title": "2022 Ford Ranger DUAL CAB 2.0 HI-RIDER WILDTRAK AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 837000,
    "mileage": 20000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขจ5164",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER08138.jpg"
    ],
    "views": 735,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27630",
    "title": "2020 Toyota Fortuner 2.4 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 837000,
    "mileage": 266000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กร2661",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER07550.jpg"
    ],
    "views": 359,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27671",
    "title": "2020 Honda Accord  1.5 TURBO EL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 827000,
    "mileage": 107000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กว2417",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER06123.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27692",
    "title": "2019 Mitsubishi Pajero Sport  2.4 GT PREMIUM ELITE EDITION AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 837000,
    "mileage": 161000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขญ1403",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER04443-1.jpg"
    ],
    "views": 572,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27713",
    "title": "2020 Honda Accord 1.5 EL TURBO AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 827000,
    "mileage": 94000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กอ4950",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER09766-1.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27734",
    "title": "2019 Toyota Camry  2.5 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 827000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กศ1083",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER08668.jpg"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27797",
    "title": "2018 Toyota Fortuner 2.4 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 817000,
    "mileage": 191000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กภ9832",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER00306.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27839",
    "title": "2022 Ford Ranger  2.0 HI-RIDER WILDTRAK AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 817000,
    "mileage": 5100,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขส3725",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER07052.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27860",
    "title": "2019 Honda Accord  1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 817000,
    "mileage": 128000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กต4770",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER06123-2.jpg"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27903",
    "title": "2018 Toyota Fortuner 2.4 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 807000,
    "mileage": 163000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กฮ9440",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER00261.jpg"
    ],
    "views": 348,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27924",
    "title": "2020 Honda Accord 1.5 TURBO EL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 807000,
    "mileage": 161000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขญ859",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/PER05441.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "27967",
    "title": "2022 Honda Civic 2.0 e:HEV RS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 977000,
    "mileage": 32000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กษ6006",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/2.jpg"
    ],
    "views": 835,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28012",
    "title": "2021 Isuzu D-Max CAB 4 3.0 VCROSS M 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 797000,
    "mileage": 87000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขศ5030",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-1.jpg"
    ],
    "views": 457,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28094",
    "title": "2021 Toyota Corolla Cross 1.8 HYBRID PREMIUM SAFETY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 797000,
    "mileage": 158000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขล9106",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-7.jpg"
    ],
    "views": 399,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28116",
    "title": "2014 Toyota Fortuner 2.5 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 489000,
    "mileage": 252000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฒ 8671",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-8.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28138",
    "title": "2021 Honda Accord 2.0 HYBRID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 799000,
    "mileage": 98000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขร 362",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-9.jpg"
    ],
    "views": 330,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28198",
    "title": "2019 Honda Accord 1.5 TURBO EL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 797000,
    "mileage": 139000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กต417",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/19-8.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28199",
    "title": "2015 Toyota Vios 1.5E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 179000,
    "mileage": 170000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กก1263",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-12.jpg"
    ],
    "views": 718,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28262",
    "title": "2022 Toyota Hilux 2.4 PRERUNNER ROCCO AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 797000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ขอ8582",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-15.jpg"
    ],
    "views": 575,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28282",
    "title": "2019 Mitsubishi Triton Plus GLS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 449000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฎ1562",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-16.jpg"
    ],
    "views": 709,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28324",
    "title": "2019 Honda Accord 1.5 EL TURBO AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 787000,
    "mileage": 190000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กภ7198",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-18.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28345",
    "title": "2020 Toyota Corolla Cross 1.8 PREMIUM SAFETY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 777000,
    "mileage": 103000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ฐอ2345",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-19.jpg"
    ],
    "views": 411,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28366",
    "title": "2016 Toyota Fortuner  2.4 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 767000,
    "mileage": 193000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กค589",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-20.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28387",
    "title": "2019 Toyota Fortuner  2.4V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 799000,
    "mileage": 200000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฌ9848",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-21.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28408",
    "title": "2019 Mazda CX-8 2.5 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 747000,
    "mileage": 147000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขฒ2004",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-22.jpg"
    ],
    "views": 411,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28430",
    "title": "2018 Ford Everest  2.0 L TURBO TITANIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 737000,
    "mileage": 117000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฎ8415",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/21-8.jpg"
    ],
    "views": 523,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28451",
    "title": "2018 Honda CR-V 2.4 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 727000,
    "mileage": 160000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กฏ1422",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-24.jpg"
    ],
    "views": 380,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28493",
    "title": "2019 Ford Everest 2.0 Bi-TURBO TITANIUM+ 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 699000,
    "mileage": 160000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กผ 8099",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-25.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28535",
    "title": "2018 Isuzu MU-X 3.0 DVD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 717000,
    "mileage": 123000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กฮ3986",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-28.jpg"
    ],
    "views": 515,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28536",
    "title": "2021 BMW 2 Series 220i Gran Coupe M-Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1159000,
    "mileage": 60000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขท1666",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-27.jpg"
    ],
    "views": 438,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28557",
    "title": "2015 Mercedes-Benz GLA-Class 200 1.6 Urban [W156] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 599000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขฒ 763",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-29.jpg"
    ],
    "views": 379,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28583",
    "title": "2016 Mitsubishi Pajero Sport 2.4 GT 2WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 599000,
    "mileage": 199000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กท 7186",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-30.jpg"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28606",
    "title": "2022 Toyota Corolla Cross 1.8 HYBRID SMART AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 707000,
    "mileage": 192000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขว4937",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-31.jpg"
    ],
    "views": 369,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28647",
    "title": "2011 Porsche Cayenne S 3.0 Hybrid AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2011,
    "price": 1159000,
    "mileage": 87000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขธ 4301",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/3-31.jpg"
    ],
    "views": 458,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28650",
    "title": "2023 Isuzu D-Max 1.9 L DA MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 697000,
    "mileage": 23000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ขร6387",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-33.jpg"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28680",
    "title": "2020 Mazda CX-30  2.0 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 697000,
    "mileage": 115000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขฮ8221",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/12-33.jpg"
    ],
    "views": 433,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28708",
    "title": "2018 Toyota Camry 2.0 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 697000,
    "mileage": 125000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กณ8135",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-35.jpg"
    ],
    "views": 380,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28764",
    "title": "2020 Mazda CX-30 2.0 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 677000,
    "mileage": 150000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง1411",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-37.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28790",
    "title": "2021 Ford Ranger  2.0 HI-RIDER WILDTRAK AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 667000,
    "mileage": 91000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขจ7773",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-38.jpg"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28831",
    "title": "2019 Mini Countryman 2.0 Hightrim AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 919000,
    "mileage": 108000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กธ 9779",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-39.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28856",
    "title": "2015 Mitsubishi Pajero 2.4 GT PREMIUM 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 667000,
    "mileage": 196000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ขม9444",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-40.jpg"
    ],
    "views": 445,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28857",
    "title": "2017 Mercedes-Benz C-Class 350e 2.0 Avantgarde AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 699000,
    "mileage": 132000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กร 153",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-41.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28901",
    "title": "2014 Mini Cooper 1.6 S Coupe R58 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 859000,
    "mileage": 61000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขธ 9841",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-42.jpg"
    ],
    "views": 595,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28918",
    "title": "2021 Mazda CX-30 2.0 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 667000,
    "mileage": 147000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขข6846",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-43.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28923",
    "title": "2022 Mercedes-Benz GLC-Class 300e 4MATIC AMG Dynamic [W253] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1899000,
    "mileage": 36000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขศ 9729",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-44.jpg"
    ],
    "views": 465,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28965",
    "title": "2020 Isuzu D-Max 1.9 CAB 4 HI-LANDER ZP MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 657000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กอ5170",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-45.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28966",
    "title": "2018 Mitsubishi Pajero Sport 2.4 GT 2WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 639000,
    "mileage": 239000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขก 3327",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-46.jpg"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "28987",
    "title": "2016 Ford Everest 3.2 TITANIUM PLUS 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 637000,
    "mileage": 182000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กม295",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-47.jpg"
    ],
    "views": 379,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29028",
    "title": "2020 Honda Accord 2.0 Hybrid TECH AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 799000,
    "mileage": 175000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขร 2307",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-48.jpg"
    ],
    "views": 401,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29029",
    "title": "2022 Toyota Corrola Altis 1.8 e:HEV PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 637000,
    "mileage": 157000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขฬ4060",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-49.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29070",
    "title": "2016 Mercedes-Benz C-Class 350e AMG Dynamic AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 739000,
    "mileage": 135000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขฌ 5392",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-51.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29071",
    "title": "2019 Toyota Corrola Altis 1.8 GR SPORT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 637000,
    "mileage": 126000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กผ2702",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-50.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29096",
    "title": "2019 Honda Civic 1.8 EL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 637000,
    "mileage": 163000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กผ7861",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-52.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29127",
    "title": "2022 Isuzu D-Max 1.9 L DA AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 627000,
    "mileage": 47000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขฉ8410",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-53.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29148",
    "title": "2021 Ford Ranger 2.0 HI-RIDER WILDTRAK AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 627000,
    "mileage": 115000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขร8320",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-54.jpg"
    ],
    "views": 353,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29192",
    "title": "2019 Mazda 3 2.0 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 627000,
    "mileage": 168000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กท2291",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-56.jpg"
    ],
    "views": 565,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29252",
    "title": "2023 Toyota Yaris Ativ 1.2 PREMIUM LUXURY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 617000,
    "mileage": 29000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 4ขจ9395",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-59.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29253",
    "title": "2016 Mitsubishi Pajero Sport 2.5GT PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 599000,
    "mileage": 150000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กน 981",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/3-56.jpg"
    ],
    "views": 363,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29294",
    "title": "2010 Toyota Camry 2.4V LPG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2010,
    "price": 219000,
    "mileage": 223000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขณ 1565",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/13-56.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29295",
    "title": "2021 Honda HRV 1.8 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 607000,
    "mileage": 197000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขห2068",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-61.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29315",
    "title": "2018 Honda HRV 1.8E-Limited",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 439000,
    "mileage": 140000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กช 8788",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-62.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29356",
    "title": "2020 Toyota Hilux 2.4 PRERUNNER E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 597000,
    "mileage": 137000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กม2503",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-63.jpg"
    ],
    "views": 352,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29357",
    "title": "2018 Mazda 3 2.0S SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 389000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กถ 610",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/4-63.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29378",
    "title": "2020 Toyota Hilux 2.4 PRERUNNER E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 597000,
    "mileage": 133000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กม2306",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29432",
    "title": "2017 Mercedes-Benz E-Class 220d AMG Dynamic [W213]",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 1199000,
    "mileage": 150000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขฮ 4873",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/10-63.jpg"
    ],
    "views": 431,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29455",
    "title": "2022 Honda City 1.0 RS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 587000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขร 6980",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-68.jpg"
    ],
    "views": 768,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29476",
    "title": "2020 Isuzu D-Max 1.9 L DA MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 587000,
    "mileage": 88000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กบ2973",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-69.jpg"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29517",
    "title": "2019 Toyota C-HR 1.8 HYBRID HI AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 577000,
    "mileage": 206000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กภ690",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-70.jpg"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29541",
    "title": "2024 Honda CR-V HEV RS 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 1399000,
    "mileage": 50000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขน 6611",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-71.jpg"
    ],
    "views": 514,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29542",
    "title": "2019 Honda Civic 1.8 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 577000,
    "mileage": 55000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กน3751",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-72.jpg"
    ],
    "views": 408,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29590",
    "title": "2014 Hyundai i40 2.0 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 339000,
    "mileage": 190000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขร 2307",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-74.jpg"
    ],
    "views": 560,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29612",
    "title": "2021 Toyota Corrola Altis 1.8 HV SMART AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 577000,
    "mileage": 172000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขข6910",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-75.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29634",
    "title": "2020 Toyota Hilux 2.4 PRERUNNER E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 577000,
    "mileage": 182000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กม2635",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 329,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29656",
    "title": "2020 Toyota Hilux 2.4 PRERUNNER E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 577000,
    "mileage": 170000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กม2603",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-77.jpg"
    ],
    "views": 380,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29679",
    "title": "2020 Toyota Hilux 2.4 PRERUNNER E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 577000,
    "mileage": 178000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กม2473",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 330,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29700",
    "title": "2020 Toyota Hilux 2.4 PRERUNNER E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 577000,
    "mileage": 188000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กม2291",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29742",
    "title": "2019 Isuzu D-Max 1.9 HI-LANDER STEALTH Z",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 577000,
    "mileage": 43000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กว6674",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-81.jpg"
    ],
    "views": 376,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29763",
    "title": "2019 Isuzu D-Max 1.9 Z 4DR",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 567000,
    "mileage": 55000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กส9429",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-82.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29784",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 567000,
    "mileage": 68000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กญ3733",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-83.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29805",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 567000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กจ6059",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 332,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29827",
    "title": "2017 BMW 7 Series 30Ld M Sport [G12] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 1659000,
    "mileage": 67000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฌร 9666",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-85.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29868",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 567000,
    "mileage": 60000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กต1490",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-87.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29871",
    "title": "2018 Mercedes-Benz C-Class 250 2.0 Sport Coupe [W205] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1159000,
    "mileage": 100000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขญ 8025",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/6-84.jpg"
    ],
    "views": 414,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29912",
    "title": "2021 Ford Ranger 2.2 XLT HI-RIDER AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 567000,
    "mileage": 97000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขณ9171",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-89.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29932",
    "title": "2016 Honda Civic FC 1.8 EL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 479000,
    "mileage": 101000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กผ 4581",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-88.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29937",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 557000,
    "mileage": 92000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กต3157",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-90.jpg"
    ],
    "views": 332,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "29981",
    "title": "2019 Toyota Corrola Altis 1.8 HV ENTRY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 557000,
    "mileage": 183000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฎ8943",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-91.jpg"
    ],
    "views": 363,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30003",
    "title": "2023 Tesla Model Y Long Range AWD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1399000,
    "mileage": 40000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขว 9390",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/17-88.jpg"
    ],
    "views": 567,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30012",
    "title": "2020 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 547000,
    "mileage": 192000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กว1103",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-92.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30024",
    "title": "2019 Honda Civic FK 1.5 Turbo",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 699000,
    "mileage": 170000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กษ 43",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-93.jpg"
    ],
    "views": 330,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30088",
    "title": "2017 Mercedes-Benz CLA-Class 250 AMG AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 859000,
    "mileage": 112000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆพ 98",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-95.jpg"
    ],
    "views": 440,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30089",
    "title": "2019 Toyota Corrola Altis  1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 547000,
    "mileage": 119000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กญ3728",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-96.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30130",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 547000,
    "mileage": 118000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฌ3087",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 288,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30151",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 547000,
    "mileage": 116000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กง7707",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 295,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30172",
    "title": "2019 Mercedes-Benz E-Class 50e EQ 2.0 Avantgarde [w213] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 939000,
    "mileage": 109000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กภ 8488",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-100.jpg"
    ],
    "views": 441,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30241",
    "title": "2019 Toyota Corrola Altis 1.6 G (MNC) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 547000,
    "mileage": 176000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กว4540",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 280,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30271",
    "title": "2022 Toyota Yaris Ativ 1.2 SMART AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 547000,
    "mileage": 56000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กธ4261",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-104.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30297",
    "title": "2019 Toyota Corrola Altis 1.8 HV MID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 547000,
    "mileage": 237000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กณ1317",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 282,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30318",
    "title": "2014 Isuzu MU-X 3.0 NAVI 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 547000,
    "mileage": 262000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กน8064",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-106.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30347",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 547000,
    "mileage": 89000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กณ417",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 282,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30395",
    "title": "2015 Porsche Panamera 4S E-Hybrid AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 2499000,
    "mileage": 72000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กว 1233",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-109.jpg"
    ],
    "views": 482,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30397",
    "title": "2023 Toyota Yaris 1.2 SMART AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 547000,
    "mileage": 2000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "xxxx",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-108.jpg"
    ],
    "views": 645,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30445",
    "title": "2015 Porsche Macan 2.0 Turbo AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 1699000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขต 5899",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-110.jpg"
    ],
    "views": 451,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30446",
    "title": "2019 Isuzu D-Max 1.9 X-SERIES MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 547000,
    "mileage": 49000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กธ5806",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-111.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30491",
    "title": "2018 Volvo XC60 D4 MOMENTUM AWD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1199000,
    "mileage": 68000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กจ 1092",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/25-8.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30532",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 537000,
    "mileage": 123000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กจ5808",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30557",
    "title": "2018 BMW 5 Series 20D Sport 2.0 [G30] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 949000,
    "mileage": 184000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กร 8870",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/24-10.jpg"
    ],
    "views": 414,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30573",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 537000,
    "mileage": 125000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กง7705",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30584",
    "title": "2017 Mercedes-Benz C-Class 350e 2.0 Avantgarde AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 699000,
    "mileage": 101000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กษ 3222",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/19-104.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30622",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 537000,
    "mileage": 148000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กง7703",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30634",
    "title": "2017 BMW X Series 5 2.0 [F15] sDrive25d Pure Experience AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 1099000,
    "mileage": 155000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆพ 98",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/16-118.jpg"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30680",
    "title": "2016 BMW 5 Series 20D M-Sport AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 699000,
    "mileage": 212000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขก 7124",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/9-117.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30723",
    "title": "2015 Toyota Alphard 2.4 HYBRID E-FOUR AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 859000,
    "mileage": 231000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขธ 1845",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-122.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30773",
    "title": "2012 Land Rover Range Rover Evoque 2.2 SD4 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 799000,
    "mileage": 134000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขท 2524",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/6-123.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30797",
    "title": "2018 BMW X Series 5 2.0 [F15] sDrive25d Pure Experience AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1199000,
    "mileage": 183000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กญ 977",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-126.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30819",
    "title": "2015 BMW 5 Series 25D 2.0 [F10] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 599000,
    "mileage": 225000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "จว 5985",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-127.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30844",
    "title": "2019 Honda HRV 1.8 RS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 529000,
    "mileage": 178000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขฆ 7086",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-128.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30868",
    "title": "2021 Mercedes-Benz C-Class 220d AMG Dynamic W205",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1499000,
    "mileage": 100000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กศ2266",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/3-123.jpg"
    ],
    "views": 432,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30886",
    "title": "2019 Honda Mobilio 1.5RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 399000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฬ1562",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/17-124.jpg"
    ],
    "views": 463,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30909",
    "title": "2022 Mazda CX-30 2.0SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 659000,
    "mileage": 102000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขข1088",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/17-125.jpg"
    ],
    "views": 433,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30932",
    "title": "2021 Toyota Alphard 2.5 SC PACKAGE AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 2499000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ภศ 2021",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/20-120.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30953",
    "title": "2011 Audi Q3 2.0 TDI DPF Quattro AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2011,
    "price": 539000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขถ 7567",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/20-121.jpg"
    ],
    "views": 451,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "30977",
    "title": "2014 Mercedes-Benz E-Class 200 Coupe AMG [W207] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 959000,
    "mileage": 81000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กต 2888",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/20-122.jpg"
    ],
    "views": 143,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31025",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 168000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กจ6054",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 335,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31047",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 167000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กง7717",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-136.jpg"
    ],
    "views": 407,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31085",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 158000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กญ3713",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 299,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31111",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 159000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กจ5765",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 297,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31134",
    "title": "2020 BMW 3 Series 320d 2.0 Limousine RHD [G20] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1199000,
    "mileage": 102000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กท 2163",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-140.jpg"
    ],
    "views": 408,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31155",
    "title": "2019 Toyota Corrola Altis 1.6 G (MNC) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 166000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฎ9013",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 292,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31176",
    "title": "2015 Isuzu MU-X 3.0 DVD NAVI 4×2 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 559000,
    "mileage": 213000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กฮ 3168",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-142.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31197",
    "title": "2019 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 206000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กด8980",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31240",
    "title": "2016 Mercedes-Benz CLA-Class CLA200 1.6 AT 2016",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 599000,
    "mileage": 199000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ชฟ 7248",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/4-142.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31241",
    "title": "2016 Toyota Camry 2.0G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 527000,
    "mileage": 141000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กธ117",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-145.jpg"
    ],
    "views": 349,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31284",
    "title": "2022 Toyota Yaris 1.2 SMART AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 517000,
    "mileage": 92000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขฐ4340",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-147.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31285",
    "title": "2019 Volvo XC40 2.0 T5 R-Desing AWD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 759000,
    "mileage": 119000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฬ 340",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-146.jpg"
    ],
    "views": 426,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31327",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 189000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กจ5801",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 286,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31328",
    "title": "2013 Mercedes-Benz M-Class ML250 CDI 4MATIC [W166] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 799000,
    "mileage": 193000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขฒ 7719",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-149.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31349",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 527000,
    "mileage": 187000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กง7694",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 294,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31437",
    "title": "2019 BMW 5 Series 530e 2.0 M-Sport [G30] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1079000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กง 8000",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-154.jpg"
    ],
    "views": 416,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31499",
    "title": "2018 Mercedes-Benz GLA-Class GLA250 2.0 AMG Dynamic AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 989000,
    "mileage": 77000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฐล 18",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-157.jpg"
    ],
    "views": 393,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31541",
    "title": "2012 BMW X Series X3 2.0 xDrive20d AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 559000,
    "mileage": 186000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "สล 20 (394)",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-158.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31584",
    "title": "2014 Mercedes-Benz GLA-Class GLA200 1.6 Urban AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 549000,
    "mileage": 121000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขน 6291",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-160.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31659",
    "title": "2009 Honda Jazz 1.5 V [GE] i-VTEC AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2009,
    "price": 169000,
    "mileage": 247000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขณ 3217",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/2-150.jpg"
    ],
    "views": 657,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31700",
    "title": "2018 Hyundai H-1 2.5 Deluxe AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 799000,
    "mileage": 109000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฮฐ 8359",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/3-145.jpg"
    ],
    "views": 385,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31701",
    "title": "2021 Mazda CX-3 2.0 BASE PLUS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 507000,
    "mileage": 164000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "จง2242",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-153.jpg"
    ],
    "views": 447,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31746",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 497000,
    "mileage": 236000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กต1492",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31767",
    "title": "2020 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 497000,
    "mileage": 186000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กล7065",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-163.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31788",
    "title": "2016 Honda HRV 1.8 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 497000,
    "mileage": 132000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กส8151",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-164.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31809",
    "title": "2017 Honda HRV 1.8 E LIMITED AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 497000,
    "mileage": 204000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 6กข615",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-165.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31829",
    "title": "2018 Toyota Sienta 1.5V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 449000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขฉ 3908",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-159.jpg"
    ],
    "views": 375,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31850",
    "title": "2022 Toyota Yaris 1.2 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 487000,
    "mileage": 48000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 3ขย 3315",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-166.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31851",
    "title": "2018 Honda CR-V 2.4E GEN5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 629000,
    "mileage": 120000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กฮ 422",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/4-167.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31872",
    "title": "2020 Mercedes-Benz A-Class A200 1.3 AMG Sport  AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1059000,
    "mileage": 40000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขข973",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-168.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31895",
    "title": "2019 Toyota Corrola Altis 1.6 G (NEW) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 487000,
    "mileage": 170000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กน6370",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31914",
    "title": "2016 Honda Accord 2.4 EL Navi AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 499000,
    "mileage": 134000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กน 5481",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/2-170.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31954",
    "title": "2017 Ford Ranger 2.2 HI-RIDER WILDTRAK AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 477000,
    "mileage": 191000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กฉ7151",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-171.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31956",
    "title": "2017 Mercedes-Benz S-Class S500e 3.0 Exclusive AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 1399000,
    "mileage": 71000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กย 730",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/2-172.jpg"
    ],
    "views": 410,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31997",
    "title": "2022 Toyota Yaris Ativ 1.2 SPORT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 477000,
    "mileage": 53000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " จท9605",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-174.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "31998",
    "title": "2018 BMW X Series X5 xDrive40e 2.0 M-Sport AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1199000,
    "mileage": 129000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กม 1357",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-173.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32041",
    "title": "2018 BMW 3 Series 320d 2.0 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 739000,
    "mileage": 170000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กฌ 299",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/2-175.jpg"
    ],
    "views": 369,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32043",
    "title": "2018 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 477000,
    "mileage": 73000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กณ7180",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-176.jpg"
    ],
    "views": 341,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32084",
    "title": "2019 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 477000,
    "mileage": 109000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฬ6223",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-178.jpg"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32105",
    "title": "2018 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 467000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กด8727",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 292,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32130",
    "title": "2018 Toyota Hilux 2.4 E PRERUNNER CAB AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 467000,
    "mileage": 188000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ฒผ3123",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-180.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32148",
    "title": "2010 Honda Jazz Active Plus  GE 1.5S(AS)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2010,
    "price": 199000,
    "mileage": 190000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขฒ7725",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/4-181.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32169",
    "title": "2014 Honda Accord  2.4 EL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 467000,
    "mileage": 142000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กว2444",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-182.jpg"
    ],
    "views": 340,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32230",
    "title": "2018 Nissan Navara 2.5 EL BLACK EDITION AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 467000,
    "mileage": 141000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฆ2707",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-185.jpg"
    ],
    "views": 553,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32231",
    "title": "2015 Nissan X-Trail 2.0V 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 399000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กฒ 360",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-186.jpg"
    ],
    "views": 442,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32268",
    "title": "2019 Toyota Corrola Altis  1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 467000,
    "mileage": 108000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กภ7600",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-188.jpg"
    ],
    "views": 343,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32289",
    "title": "2018 Isuzu D-Max 1.9 S MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 467000,
    "mileage": 56000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กธ913",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-189.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32310",
    "title": "2021 Toyota Yaris  1.2 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 457000,
    "mileage": 68000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขศ449",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-190.jpg"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32331",
    "title": "2020 Toyota Hilux 2.4 CAB4 Z EDITION J PLUS E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 457000,
    "mileage": 203000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฬ7765",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-191.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32352",
    "title": "2022 Honda City 1.0 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 457000,
    "mileage": 176000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขย6991",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/06/1-192.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32373",
    "title": "2021 Toyota Vios 1.5 MID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 457000,
    "mileage": 84000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขฬ7408",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1.jpg"
    ],
    "views": 348,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32394",
    "title": "2018 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 457000,
    "mileage": 125000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กด8713",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 302,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32415",
    "title": "2018 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 457000,
    "mileage": 108000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กณ7378",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 286,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32436",
    "title": "2018 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 457000,
    "mileage": 134000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กณ7717",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32457",
    "title": "2018 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 457000,
    "mileage": 118000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กณ7720",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-4.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32480",
    "title": "2014 Mercedes-Benz C-Class C200 1.8 CGI [W204] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 399000,
    "mileage": 191000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กฎ 9049",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-5.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32521",
    "title": "2019 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 477000,
    "mileage": 134000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กล7839",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-6.jpg"
    ],
    "views": 341,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32568",
    "title": "2023 Mercedes-Benz E-Class E300e 2.0 Avantgarde AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1699000,
    "mileage": 36000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขช 1920",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-8.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32572",
    "title": "2019 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 477000,
    "mileage": 173000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กว2033",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-9.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32604",
    "title": "2018 Ford Everest 2.2 Titanium+ AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 649000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กด5244",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/5-10.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32633",
    "title": "2020 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 545000,
    "mileage": 192000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กว1103",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 291,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32634",
    "title": "2019 Mercedes-Benz GLA-Class GLA200 1.6 Urban AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 799000,
    "mileage": 106000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขฌ 3555",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-12.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32675",
    "title": "2022 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 597000,
    "mileage": 141000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขก4370",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-14.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32677",
    "title": "2015 Mercedes-Benz S-Class S300 2.1 AMG Blutec-hybrid AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 1199000,
    "mileage": 124000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กก 9357",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/24.jpg"
    ],
    "views": 413,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32698",
    "title": "2019 BMW X Series X3 xDrive20d 2.0 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1199000,
    "mileage": 141000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กญ 7288",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-15.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32740",
    "title": "2019 Mercedes-Benz C-Class C300e 2.0 Avantgarde AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 999000,
    "mileage": 75000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กย 1155 (ใส่98ถ่าย)",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-17.jpg"
    ],
    "views": 394,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32804",
    "title": "2014 Mercedes-Benz C-Class C180 1.6 AMG Coupe AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 539000,
    "mileage": 199000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กค 4992",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-20.jpg"
    ],
    "views": 440,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32845",
    "title": "2011 Porsche Cayenne S 3.0 Hybrid AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2011,
    "price": 1099000,
    "mileage": 115000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆษ 9500",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-21.jpg"
    ],
    "views": 433,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32909",
    "title": "2018 Toyota C-HR 1.8 HV HI AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 577000,
    "mileage": 169000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กฎ3006",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-25.jpg"
    ],
    "views": 426,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32932",
    "title": "2018 Toyota Camry 2.0 G AT 2018",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 697000,
    "mileage": 113000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กณ5951",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 296,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "32995",
    "title": "2019 Toyota Camry 2.5 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 807000,
    "mileage": 148000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กย7316",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-30.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33016",
    "title": "2019 Toyota Camry 2.5 HV AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 877000,
    "mileage": 120000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขฉ1511",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-31.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33057",
    "title": "2019 Toyota Camry 2.5 HV AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 817000,
    "mileage": 175000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขฉ2619",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-33.jpg"
    ],
    "views": 349,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33058",
    "title": "2014 Volkswagen Beetle 1.4 Turbo GT TSI Coupe AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 1399000,
    "mileage": 73000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขง 7835",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/20-38.jpg"
    ],
    "views": 501,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33100",
    "title": "2002 Ferrari 360 F360 Modena Coupe 3.6",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2002,
    "price": 6690000,
    "mileage": 45000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "พง 8",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-34.jpg"
    ],
    "views": 435,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33101",
    "title": "2018 Toyota Camry 2.5 HV PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 867000,
    "mileage": 189000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฆ8603",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-35.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33122",
    "title": "2019 Toyota Camry 2.5 HV PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 877000,
    "mileage": 191000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กย7390",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-36.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33146",
    "title": "2020 Toyota Camry 2.5 HV PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 877000,
    "mileage": 338000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขล955",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-37.jpg"
    ],
    "views": 352,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33164",
    "title": "2019 Honda City 1.5 V AT 2019",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 417000,
    "mileage": 134000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กธ7191",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-38.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33185",
    "title": "2019 Toyota Camry  2.5 HYBIRD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 827000,
    "mileage": 194000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กม455",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-39.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33207",
    "title": "2019 Honda City 1.5 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 417000,
    "mileage": 71000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กญ7918",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-26.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33229",
    "title": "2019 Honda City 1.5 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 417000,
    "mileage": 60000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฒ3732",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 304,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33269",
    "title": "2019 Toyota Vios 1.5 MID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 417000,
    "mileage": 191000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กด3004",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-42.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33313",
    "title": "2020 MG ZS 1.5 D AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 417000,
    "mileage": 74000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขฐ8218",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-66.jpg"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33335",
    "title": "2020 Toyota Corolla Cross 1.8 HYBRID PREMIUM SAFETY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 817000,
    "mileage": 91000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขณ5401",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-46.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33378",
    "title": "2021 Toyota Corolla Cross 1.8 HYBRID PREMIUM SAFETY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 797000,
    "mileage": 167000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขฉ1018",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-48.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33424",
    "title": "2019 Toyota Yaris 1.2 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 417000,
    "mileage": 65000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กง1509",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33446",
    "title": "2021 Toyota Corolla Cross 1.8 HYBRID PREMIUM SAFETY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 797000,
    "mileage": 158000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขล9106",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-51.jpg"
    ],
    "views": 413,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33490",
    "title": "2018 Toyota Corrola Altis 1.8 E AT(1)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 407000,
    "mileage": 259000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กฌ 1384",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-53.jpg"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33528",
    "title": "2015 Isuzu D-Max 2.5 Z HI-LANDER AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 437000,
    "mileage": 311000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กง368",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-49.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33549",
    "title": "2019 Toyota Vios 1.5 MID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 427000,
    "mileage": 152000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กล9612",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-55.jpg"
    ],
    "views": 401,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33570",
    "title": "2020 Mazda 2 1.3 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 427000,
    "mileage": 51000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "จข1800",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 340,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33591",
    "title": "2022 Mazda 2  1.3 C AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 427000,
    "mileage": 71000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขญ1332",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-56.jpg"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33612",
    "title": "2020 Honda City 1.0 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 427000,
    "mileage": 159000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กผ9817",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-57.jpg"
    ],
    "views": 419,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33633",
    "title": "2020 Honda City 1.0 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 427000,
    "mileage": 155000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กม1241",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-58.jpg"
    ],
    "views": 377,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33654",
    "title": "2022 MG MG5 1.5 D AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 427000,
    "mileage": 59000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขญ6758",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-59.jpg"
    ],
    "views": 345,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33675",
    "title": "2020 Toyota Vios 1.5 MID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 427000,
    "mileage": 73000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขจ8475",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-60.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33696",
    "title": "2018 Toyota Corrola Altis  1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 427000,
    "mileage": 85000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กค4492",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-61.jpg"
    ],
    "views": 377,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33737",
    "title": "2019 Toyota Yaris 1.2 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 427000,
    "mileage": 18000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กฉ1044",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-63.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33760",
    "title": "2016 Mercedes-Benz SLC-Class SLC300 2.0 AMG Dynamic [R172] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 1599000,
    "mileage": 85000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กอ 655",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-64.jpg"
    ],
    "views": 439,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33802",
    "title": "2018 Toyota Yaris 1.2 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 397000,
    "mileage": 94000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฎ2533",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-65.jpg"
    ],
    "views": 352,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33804",
    "title": "2016 Hyundai H-1 Deluxe AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 659000,
    "mileage": 132000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฮว 8124",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-44.jpg"
    ],
    "views": 341,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33825",
    "title": "2019 Honda City 1.5 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 387000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฒ3710",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-67.jpg"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33868",
    "title": "2019 Mazda 3 2.0 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 387000,
    "mileage": 173000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กจ1460",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-69.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33889",
    "title": "2019 Toyota Yaris 1.2 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 387000,
    "mileage": 61000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กล932",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-70.jpg"
    ],
    "views": 393,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33910",
    "title": "2020 Mazda 2  1.3 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 387000,
    "mileage": 54000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขญ2687",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-71.jpg"
    ],
    "views": 399,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33926",
    "title": "2019 Toyota Yaris 1.2 J AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 387000,
    "mileage": 31000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขง460",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-72.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33948",
    "title": "2019 MG ZS 1.5 X",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 377000,
    "mileage": 52000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กบ6921",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-73.jpg"
    ],
    "views": 317,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "33974",
    "title": "2018 Isuzu D-Max 1.9 S MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 377000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " บย9718",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-74.jpg"
    ],
    "views": 353,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34006",
    "title": "2019 Mazda 2 1.3 HIGH CONNECT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 377000,
    "mileage": 61000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กง4746",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34044",
    "title": "2019 Toyota Fortuner 2.8 TRD Sportivo [2WD] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 939000,
    "mileage": 148000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กฮ 7117",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-76.jpg"
    ],
    "views": 401,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34072",
    "title": "2021 Honda City 1.0 V Turbo AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 399000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขร 2307",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-77.jpg"
    ],
    "views": 381,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34099",
    "title": "2019 Honda City 1.5 V+ AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 377000,
    "mileage": 157000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กผ8256",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-78.jpg"
    ],
    "views": 353,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34121",
    "title": "2018 Ford Everest 3.2 TITANIUM+ 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 629000,
    "mileage": 136000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฎศ 9507",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-79.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34139",
    "title": "2019 Toyota Yaris 1.2 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 377000,
    "mileage": 113000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กฎ5711",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-80.jpg"
    ],
    "views": 340,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34179",
    "title": "2019 Mazda 2 1.3 SPORT HIGH CONNECT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 367000,
    "mileage": 79000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กถ 4702",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-81.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34200",
    "title": "2019 Toyota Vios 1.5 ENTRY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 367000,
    "mileage": 159000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กว1672",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-83.jpg"
    ],
    "views": 341,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34251",
    "title": "2018 Mazda 2 1.3 HIGH PLUS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 347000,
    "mileage": 148000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1กผ881",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-85.jpg"
    ],
    "views": 374,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34275",
    "title": "2018 Toyota Vios 1.5 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 337000,
    "mileage": 96000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กฌ3110",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34301",
    "title": "2016 Toyota Hilux 2.4 J MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 337000,
    "mileage": 72000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ฒศ4112",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 288,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34323",
    "title": "2019 Nissan Note  1.2 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 337000,
    "mileage": 77000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขก2946",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-88.jpg"
    ],
    "views": 422,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34344",
    "title": "2018 Mercedes-Benz C-Class C350e 2.0 Avantgarde [W205] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 40000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆพ 98",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-89.jpg"
    ],
    "views": 419,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34366",
    "title": "2019 Toyota Camry 2.0 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 679000,
    "mileage": 134000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กศ 5903",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-90.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34387",
    "title": "2021 Mazda CX-30 2.0 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 639000,
    "mileage": 50000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขณ 6911",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-91.jpg"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34410",
    "title": "2017 Toyota Vios 1.5 J AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 337000,
    "mileage": 85000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กม6409",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-92.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34435",
    "title": "2020 Kia Carnival 2.2 EX AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 899000,
    "mileage": 83000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขน 2120",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-93.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34473",
    "title": "2023 Honda City Hatchback S+ 1.0 Turbo AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 419000,
    "mileage": 49000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขพ 563",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-95.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34495",
    "title": "2018 Toyota Vios 1.5 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 327000,
    "mileage": 165000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กส7149",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34564",
    "title": "2018 Toyota Vios 1.5 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 327000,
    "mileage": 127000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กค2067",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-98.jpg"
    ],
    "views": 363,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34585",
    "title": "2017 MG GS 1.5 X",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 317000,
    "mileage": 91000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ฆฆ3321",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-99.jpg"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34607",
    "title": "2016 Toyota Hilux 2.4 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 317000,
    "mileage": 132000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ฒศ4483",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-100.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34628",
    "title": "2016 Toyota Hilux 2.4 J MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 317000,
    "mileage": 175000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ฒศ4118",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 289,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34649",
    "title": "2016 Toyota Hilux 2.4 J MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 317000,
    "mileage": 187000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ฒศ3980",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 306,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34671",
    "title": "2017 Mazda 2 1.3 SPORT HIGH HATCHBACK AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 317000,
    "mileage": 79000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กว6658",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-103.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34694",
    "title": "2016 Toyota Hilux 2.4 J MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 317000,
    "mileage": 129000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ฒศ5308",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 295,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34718",
    "title": "2016 Toyota Hilux 2.4 J MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 317000,
    "mileage": 148000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ฒศ4403",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-105.jpg"
    ],
    "views": 350,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34742",
    "title": "2018 Toyota Vios 1.5 J AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 307000,
    "mileage": 210000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กง930",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-106.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34763",
    "title": "2017 Toyota Vios 1.5 J AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 307000,
    "mileage": 217000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กย1016",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 322,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34782",
    "title": "2019 Nissan March 1.2 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 307000,
    "mileage": 46000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กต3135",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-108.jpg"
    ],
    "views": 451,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34803",
    "title": "2015 Mazda 2 1.5 HIGH AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 297000,
    "mileage": 245000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กจ5087",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-109.jpg"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34824",
    "title": "2018 Nissan March 1.2 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 287000,
    "mileage": 161000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กส806",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-110.jpg"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34847",
    "title": "2012 Honda Jazz 1.5 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 277000,
    "mileage": 298000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขข1850",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-112.jpg"
    ],
    "views": 332,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34868",
    "title": "2014 Toyota Yaris 1.2 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 277000,
    "mileage": 222000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กต188",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-113.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34889",
    "title": "2013 Honda Jazz 1.5 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 267000,
    "mileage": 190000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1กศ3302",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-114.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34932",
    "title": "2008 Honda Accord  2.4 EL NAVI AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2008,
    "price": 257000,
    "mileage": 285000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ฌท9903",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-116.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34953",
    "title": "2021 MG MG3 1.5 D AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 257000,
    "mileage": 118000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขฒ9173",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-117.jpg"
    ],
    "views": 348,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "34975",
    "title": "2015 Honda Brio 1.2 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 257000,
    "mileage": 172000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 4กณ6880",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-118.jpg"
    ],
    "views": 431,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35003",
    "title": "2018 Honda Accord 2.4 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 237000,
    "mileage": 310000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ฌฐ6588",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-119.jpg"
    ],
    "views": 359,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35030",
    "title": "2019 MG MG3 1.5 D AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 237000,
    "mileage": 97000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กต8224",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 282,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35049",
    "title": "2013 Honda City 1.5 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 237000,
    "mileage": 273000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กจ7805",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-121.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35070",
    "title": "2013 Toyota Vios 1.5 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 227000,
    "mileage": 235000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กบ6040",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 299,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35092",
    "title": "2013 Honda Brio 1.2 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 217000,
    "mileage": 220000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 5ขณ3103",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-123.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35113",
    "title": "2012 Toyota Vios 1.5 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 197000,
    "mileage": 141000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆท5536",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-124.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35137",
    "title": "2018 Toyota Vios 1.5 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 327000,
    "mileage": 125000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กธ4570",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 315,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35160",
    "title": "2020 Toyota Camry 2.5 HYBRID PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 967000,
    "mileage": 60000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กอ3252",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-126.jpg"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35182",
    "title": "2021 MG HS 1.5 X AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 497000,
    "mileage": 82000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขบ6505",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-127.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35277",
    "title": "2017 Toyota Innova 2.8 CRYSTA V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 597000,
    "mileage": 185000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กผ7683",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-32.jpg"
    ],
    "views": 570,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35298",
    "title": "2021 Toyota Yaris 1.2 SPORT PREMIUM (TWO-TONE) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 467000,
    "mileage": 129000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ขข4847",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-40.jpg"
    ],
    "views": 393,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35370",
    "title": "2020 Toyota Alphard 2.5 SC PACKAGE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1989000,
    "mileage": 93410,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2480",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/001-502.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35381",
    "title": "2020 Toyota Alphard 2.5 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1969000,
    "mileage": 126558,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2460",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-128.jpg"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35391",
    "title": "2021 Mercedes-Benz GLC-Class 2.0 E 4MATIC AMG DYNAMIC",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1949000,
    "mileage": 88372,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2443V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-129.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35423",
    "title": "2018 Toyota Vellfire 2.5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1848994,
    "mileage": 127962,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2320V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35433",
    "title": "2025 Toyota Majesty 2.8 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2025,
    "price": 1819000,
    "mileage": 32842,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2448",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-133.jpg"
    ],
    "views": 359,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35442",
    "title": "2019 Toyota Vellfire 2.5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1809000,
    "mileage": 164255,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0760",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-134.jpg"
    ],
    "views": 424,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35452",
    "title": "2019 Toyota Vellfire 2.5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1789000,
    "mileage": 187793,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2469V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-135.jpg"
    ],
    "views": 324,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35470",
    "title": "2021 Toyota Majesty 2.8 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1779000,
    "mileage": 58952,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2030",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-136.jpg"
    ],
    "views": 332,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35479",
    "title": "2012 Mercedes-Benz GLE 3.0 CDI 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 1709000,
    "mileage": 107000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0602V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-137.jpg"
    ],
    "views": 408,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35489",
    "title": "2021 Toyota Majesty 2.8 GRANDE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1609000,
    "mileage": 97230,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1808V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 345,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35498",
    "title": "2020 Toyota Majesty 2.8 GRANDE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1589000,
    "mileage": 76329,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2456V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/001-70.jpg"
    ],
    "views": 327,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35510",
    "title": "2020 Toyota Majesty 2.8 GRANDE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1539000,
    "mileage": 120981,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1871V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-138.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35519",
    "title": "2021 Toyota Majesty 2.8 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1429000,
    "mileage": 122763,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2482V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35528",
    "title": "2019 Mercedes-Benz GL-Class 2.1 D 4MATIC AMG DYNAMIC",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1419000,
    "mileage": 59793,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0854",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-140.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35543",
    "title": "2020 Toyota Majesty  2.8 GRANDE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1359000,
    "mileage": 272295,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2029",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-141.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35553",
    "title": "2013 Porsche Cayenne 3.0 S HYBRID 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 1339000,
    "mileage": 117031,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0850V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-142.jpg"
    ],
    "views": 435,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35577",
    "title": "2023 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1269000,
    "mileage": 32880,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2019",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 290,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35588",
    "title": "2019 Lexus ES300H 2.5 GRAND LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1199000,
    "mileage": 174558,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0711",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-145.jpg"
    ],
    "views": 380,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35604",
    "title": "2020 Toyota Fortuner 2.4 LEGENDER 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1195000,
    "mileage": 124645,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2124",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-146.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35614",
    "title": "2020 Toyota Fortuner 2.8 LEGENDER 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1189000,
    "mileage": 134253,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2465",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-147.jpg"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35623",
    "title": "2021 Mini Cooper 2.0 S COUNTRYMAN HIGH TRiM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1189000,
    "mileage": 69343,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2479",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-148.jpg"
    ],
    "views": 591,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35638",
    "title": "2024 Honda CR-V 1.5 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 1189000,
    "mileage": 21634,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1230V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 335,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35648",
    "title": "2020 Toyota Fortuner 2.8 LEGENDER 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1169000,
    "mileage": 179173,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2259",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-150.jpg"
    ],
    "views": 346,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35668",
    "title": "2020 Mercedes-Benz C-Class 2.0 E AMG DYNAMIC",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1159000,
    "mileage": 149604,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2406",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-151.jpg"
    ],
    "views": 417,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35677",
    "title": "2019 Mercedes-Benz E-Class 2.0 E AMG DYNAMIC",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1159000,
    "mileage": 132263,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0798",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-152.jpg"
    ],
    "views": 407,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35687",
    "title": "2022 Toyota Fortuner 2.4 LEADER V 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1129000,
    "mileage": 76808,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1229",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-153.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35728",
    "title": "2020 BMW 5 Series 2.0 ELITE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1129000,
    "mileage": 83330,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2333",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-155.jpg"
    ],
    "views": 416,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35738",
    "title": "2022 Isuzu MU-X 3.0 ULTIMATE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1129000,
    "mileage": 3673,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2422",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 374,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35748",
    "title": "2022 Isuzu MU-X 3.0 ULTIMATE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1129000,
    "mileage": 7290,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2421",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 315,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35769",
    "title": "2022 Isuzu MU-X 3.0 ULTIMATE 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1129000,
    "mileage": 70642,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1820V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35780",
    "title": "2022 Isuzu MU-X 3.0 ULTIMATE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1129000,
    "mileage": 5088,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2419",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35790",
    "title": "2020 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1129000,
    "mileage": 202762,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2417",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 280,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35800",
    "title": "2019 Honda HRV 1.8 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1109000,
    "mileage": 54800,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1214V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35808",
    "title": "2023 Isuzu MU-X 3.0 ULTIMATE 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1109000,
    "mileage": 19689,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2238",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35818",
    "title": "2022 Toyota Fortuner 2.4 LEGENDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1109000,
    "mileage": 58130,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1198V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-162.jpg"
    ],
    "views": 440,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35827",
    "title": "2020 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1109000,
    "mileage": 124777,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2212",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-163.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35836",
    "title": "2019 Mercedes-Benz E-Class 2.0 E AMG DYNAMIC",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1099000,
    "mileage": 146076,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2401",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-164.jpg"
    ],
    "views": 397,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35845",
    "title": "2021 Toyota Fortuner 2.8 LEGENDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1099000,
    "mileage": 166266,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2189",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-165.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35853",
    "title": "2019 Hyundai Grand Starex 2.5 VIP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1099000,
    "mileage": 135412,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2195",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-166.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35863",
    "title": "2020 Isuzu MU-X 3.0 ULTIMATE 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1069000,
    "mileage": 61019,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2290",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-167.jpg"
    ],
    "views": 431,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35874",
    "title": "2022 Isuzu MU-X 3.0 ULTIMATE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1064000,
    "mileage": 22505,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2118",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-168.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35882",
    "title": "2019 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1059000,
    "mileage": 161293,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2225",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 290,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35895",
    "title": "2020 Hyundai H-1 2.5 ELITE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1019000,
    "mileage": 89823,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1902V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-170.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35905",
    "title": "2021 Toyota Fortuner 2.4 V 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1009000,
    "mileage": 151388,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2433",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 346,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35918",
    "title": "2019 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 999000,
    "mileage": 35688,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0029",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 281,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35934",
    "title": "2022 Isuzu MU-X 1.9 ULTIMATE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 989000,
    "mileage": 59766,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0027",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-173.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35944",
    "title": "2020 Kia Carnival 2.2 SXL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 989000,
    "mileage": 125236,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2389",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-174.jpg"
    ],
    "views": 359,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35961",
    "title": "2019 Mercedes-Benz E-Class 2.0 E EXCLUSIVE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 979000,
    "mileage": 103027,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0712",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-175.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35971",
    "title": "2023 Toyota Hilux 2.8 HIGH 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 969000,
    "mileage": 22414,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2312V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-176.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35980",
    "title": "2022 Mitsubishi Pajero Sport 2.4 GT PREMIUM ELITE EDITION",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 959000,
    "mileage": 52626,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2261",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "35990",
    "title": "2022 Mitsubishi Pajero Sport 2.4 GT PREMIUM ELITE EDITION",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 959000,
    "mileage": 127793,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2240",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-178.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36000",
    "title": "2021 Mitsubishi Pajero Sport 2.4 GT PREMIUM ELITE EDITION 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 959000,
    "mileage": 88191,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2298",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 329,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36014",
    "title": "2019 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 959000,
    "mileage": 331621,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2043",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-180.jpg"
    ],
    "views": 349,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36023",
    "title": "2021 Isuzu MU-X 1.9 ELEGANT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 949000,
    "mileage": 111859,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2205",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36033",
    "title": "2019 Toyota Fortuner 2.8 TRD SPORTIVO 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 949000,
    "mileage": 184970,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2154",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36050",
    "title": "2017 Mercedes-Benz GLE 3.0 E 4MATIC AMG DYNAMIC 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 939000,
    "mileage": 136534,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2393V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-183.jpg"
    ],
    "views": 413,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36067",
    "title": "2022 Toyota Camry 2.5 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 939000,
    "mileage": 112235,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2432",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36085",
    "title": "2019 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 939000,
    "mileage": 175193,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2042",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-185.jpg"
    ],
    "views": 345,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36095",
    "title": "2020 Toyota Camry 2.5 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 939000,
    "mileage": 89778,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2383",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 343,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36114",
    "title": "2019 Honda Accord 2.0 HYBRID TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 939000,
    "mileage": 87449,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2200",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-187.jpg"
    ],
    "views": 470,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36135",
    "title": "2017 Hyundai H-1 2.5 DELUXE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 919000,
    "mileage": 34000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0816",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 375,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36148",
    "title": "2021 Honda CR-V 2.4 ES AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 919000,
    "mileage": 54213,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1213V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-154.jpg"
    ],
    "views": 381,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36161",
    "title": "2020 Mitsubishi Pajero Sport 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 919000,
    "mileage": 105213,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2334",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 335,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36171",
    "title": "2019 Kia Carnival 2.2 SXL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 919000,
    "mileage": 209273,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2161",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-190.jpg"
    ],
    "views": 353,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36186",
    "title": "2019 Toyota Commuter 2.8",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 919000,
    "mileage": 193248,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2044",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-191.jpg"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36197",
    "title": "2020 Mercedes-Benz E-Class 2.0 E EXCLUSIVE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 909000,
    "mileage": 181985,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2410",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-192.jpg"
    ],
    "views": 375,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36211",
    "title": "2019 Toyota Fortuner 2.4 V 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 902000,
    "mileage": 134074,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2011",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36219",
    "title": "2023 Toyota Hiace 2.8 GL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 899000,
    "mileage": 68952,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2214",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-193.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36229",
    "title": "2019 Honda Accord 2.0 HYBRID TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 899000,
    "mileage": 172761,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2241",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-194.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36239",
    "title": "2019 Mercedes-Benz E-Class 2.0 E AVANTGARDE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 889000,
    "mileage": 82899,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0706",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-195.jpg"
    ],
    "views": 394,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36248",
    "title": "2020 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 879000,
    "mileage": 130146,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2160",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36258",
    "title": "2021 Isuzu MU-X 1.9 ULTIMATE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 879000,
    "mileage": 128482,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0002",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36275",
    "title": "2019 Mercedes-Benz E-Class 2.0 E EXCLUSIVE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 879000,
    "mileage": 193735,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2399",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-198.jpg"
    ],
    "views": 408,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36285",
    "title": "2018 BMW 3 Series 2.0 LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 869000,
    "mileage": 135026,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2144",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-199.jpg"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36296",
    "title": "2023 Isuzu D-Max 3.0 M VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 869000,
    "mileage": 31705,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0027",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-200.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36306",
    "title": "2021 Isuzu MU-X 3.0 ULTIMATE 2WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 869000,
    "mileage": 156930,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2398V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-201.jpg"
    ],
    "views": 352,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36315",
    "title": "2022 Isuzu MU-X 1.9 ELEGANT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 869000,
    "mileage": 111605,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2221",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 279,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36333",
    "title": "2019 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 869000,
    "mileage": 143550,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1914",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-203.jpg"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36343",
    "title": "2023 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 869000,
    "mileage": 67268,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2000",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36354",
    "title": "2022 Honda HRV 1.5 e:HEV RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 859000,
    "mileage": 43932,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0061",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36363",
    "title": "2021 Isuzu MU-X 1.9 ELEGANT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 859000,
    "mileage": 111850,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0010",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 323,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36382",
    "title": "2020 Honda Accord 2.0 HYBRID TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 859000,
    "mileage": 122249,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0811",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-207.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36392",
    "title": "2020 Toyota Camry 2.5 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 849000,
    "mileage": 102987,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0805",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-208.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36402",
    "title": "2017 Toyota Fortuner 2.8 TRD SPORTIVO 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 849000,
    "mileage": 149051,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2252V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-209.jpg"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36411",
    "title": "2020 Mitsubishi Pajero Sport 2.4 GT PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 849000,
    "mileage": 152869,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2258",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 314,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36421",
    "title": "2022 Nissan Terra 2.3 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 849000,
    "mileage": 143234,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2311",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36432",
    "title": "2023 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 839000,
    "mileage": 1239,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0027",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-212.jpg"
    ],
    "views": 437,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36442",
    "title": "2023 Isuzu D-Max 3.0 M VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 839000,
    "mileage": 14146,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0039",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-213.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36452",
    "title": "2023 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 839000,
    "mileage": 1056,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0012",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-214.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36470",
    "title": "2022 Isuzu D-Max 3.0 M VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 839000,
    "mileage": 48559,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2237",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-216.jpg"
    ],
    "views": 363,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36484",
    "title": "2021 Isuzu MU-X 1.9 LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 829000,
    "mileage": 108151,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0037",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36502",
    "title": "2020 Toyota Camry 2.5 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 829000,
    "mileage": 79341,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2045V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-218.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36511",
    "title": "2022 Mitsubishi Outlander 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 829000,
    "mileage": 12271,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0835",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-219.jpg"
    ],
    "views": 349,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36521",
    "title": "2021 Isuzu MU-X 1.9 ELEGANT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 819000,
    "mileage": 249951,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2451",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36531",
    "title": "2019 Honda Accord 2.0 HYBRID TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 819000,
    "mileage": 101000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0035",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 328,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36541",
    "title": "2020 Isuzu MU-X 3.0 THE ONYX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 819000,
    "mileage": 105663,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2255",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 288,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36551",
    "title": "2021 Honda CR-V 2.4 ES AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 819000,
    "mileage": 70094,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2308",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36566",
    "title": "2019 Toyota Camry 2.5 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 811000,
    "mileage": 151515,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2024V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-224.jpg"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36576",
    "title": "2023 Toyota Corolla Cross 1.8 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 809000,
    "mileage": 38773,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1240V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-225.jpg"
    ],
    "views": 426,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36586",
    "title": "2020 Isuzu D-Max 3.0 M VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 809000,
    "mileage": 26018,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0013",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36596",
    "title": "2020 Toyota Camry 2.5 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 809000,
    "mileage": 141097,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2481",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-227.jpg"
    ],
    "views": 376,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36606",
    "title": "2020 Toyota Camry 2.5 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 799000,
    "mileage": 94405,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2268",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-228.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36616",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 799000,
    "mileage": 43956,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2342",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-229.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36625",
    "title": "2019 Isuzu MU-X 1.9 THE ONYX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 799000,
    "mileage": 66354,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2256",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-230.jpg"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36635",
    "title": "2023 Ford Ranger 2.0 WILDTRAK HI-RIDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 799000,
    "mileage": 53127,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2449",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-231.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36645",
    "title": "2019 Honda Accord 2.0 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 799000,
    "mileage": 75468,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2316",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-232.jpg"
    ],
    "views": 384,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36655",
    "title": "2019 Mitsubishi Pajero Sport 2.4 GT PREMIUM ELITE EDITION",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 799000,
    "mileage": 123702,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2193",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-233.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36670",
    "title": "2020 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 789000,
    "mileage": 109593,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2083",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-234.jpg"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36685",
    "title": "2021 Nissan Terra 2.3 VL 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 789000,
    "mileage": 39443,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2132",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-235.jpg"
    ],
    "views": 567,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36699",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 789000,
    "mileage": 41343,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2409",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/6-237.jpg"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36708",
    "title": "2020 Isuzu D-Max 3.0 M VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 789000,
    "mileage": 43680,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2188",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 340,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36724",
    "title": "2022 Mazda CX-5 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 789000,
    "mileage": 43173,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2034V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-237.jpg"
    ],
    "views": 529,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36738",
    "title": "2018 Toyota Commuter 3.0 D4D",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 779000,
    "mileage": 163439,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1996",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-238.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36748",
    "title": "2022 Honda HRV 1.5 E:HEV RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 779000,
    "mileage": 132532,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1204",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-239.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36764",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 779000,
    "mileage": 64627,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0781",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-244.jpg"
    ],
    "views": 369,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36774",
    "title": "2020 Honda Accord 2.0 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 779000,
    "mileage": 124542,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0806",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36789",
    "title": "2019 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 779000,
    "mileage": 188721,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2048",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-241.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36799",
    "title": "2020 Isuzu MU-X 1.9 THE ONYX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 779000,
    "mileage": 114393,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0004",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-242.jpg"
    ],
    "views": 353,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36813",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 779000,
    "mileage": 55350,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0773",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-248.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36829",
    "title": "2019 Honda Civic 1.5 TURBO RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 779000,
    "mileage": 55164,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2068V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-243.jpg"
    ],
    "views": 419,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36844",
    "title": "2018 Toyota Commuter 3.0 D4D",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 779000,
    "mileage": 184350,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1995",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/14-147.jpg"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36854",
    "title": "2024 Mitsubishi Triton 2.4 PLUS ULTRA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 779000,
    "mileage": 431,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2246",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-245.jpg"
    ],
    "views": 656,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36863",
    "title": "2017 Isuzu MU-X 3.0 THE ONYX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 769000,
    "mileage": 71273,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2151",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-246.jpg"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36874",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 769000,
    "mileage": 48972,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2343",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 290,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36917",
    "title": "2021 Toyota Hilux REVO 2.4 ROCCO PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 769000,
    "mileage": 82484,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2149V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 322,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36928",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 769000,
    "mileage": 55065,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2347",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-258.jpg"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36941",
    "title": "2017 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 769000,
    "mileage": 222479,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2026V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-252.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36952",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 769000,
    "mileage": 56172,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2348",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-260.jpg"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36961",
    "title": "2020 Mitsubishi Pajero Sport 2.4 GT PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 769000,
    "mileage": 96832,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2262",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-261.jpg"
    ],
    "views": 352,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36971",
    "title": "2016 Toyota Fortuner 2.8 V 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 769000,
    "mileage": 145974,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2338V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-254.jpg"
    ],
    "views": 408,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36980",
    "title": "2019 Isuzu MU-X 3.0 THE ONYX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 769000,
    "mileage": 71273,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2151",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-255.jpg"
    ],
    "views": 324,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36991",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 769000,
    "mileage": 48972,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2343",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 297,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "36999",
    "title": "2022 Mitsubishi Outlander PHEV 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 769000,
    "mileage": 149750,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2405",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-265.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37043",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 769000,
    "mileage": 52640,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2346",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 287,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37053",
    "title": "2022 Toyota Corolla Cross 1.8 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 759000,
    "mileage": 69670,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2416",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37063",
    "title": "2021 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 759000,
    "mileage": 4502,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0015",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-262.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37072",
    "title": "2020 Honda Accord 2.0 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 759000,
    "mileage": 135703,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2172",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-263.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37081",
    "title": "2019 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 759000,
    "mileage": 105315,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2387",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37091",
    "title": "2017 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 759000,
    "mileage": 125581,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0002V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-265.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37100",
    "title": "2021 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 759000,
    "mileage": 4221,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0016",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-266.jpg"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37114",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 759000,
    "mileage": 128026,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2413",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/4-270.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37130",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 759000,
    "mileage": 98871,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0780",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-277.jpg"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37140",
    "title": "2017 BMW X Series 1 2.0 SDRIVE 18D M SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 759000,
    "mileage": 145869,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2475V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-267.jpg"
    ],
    "views": 397,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37150",
    "title": "2021 Toyota Hilux REVO 2.4 ROCCO PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 759000,
    "mileage": 107852,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2305V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 343,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37160",
    "title": "2017 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 759000,
    "mileage": 125581,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0002V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-269.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37179",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 749000,
    "mileage": 75199,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2358",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 281,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37190",
    "title": "2018 Hyundai H-1 2.5 ELITE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 749000,
    "mileage": 118753,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2488V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-272.jpg"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37200",
    "title": "2020 Honda CR-V 2.4 ES AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 749000,
    "mileage": 45118,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1207V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37258",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 749000,
    "mileage": 129268,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0028",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 267,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37267",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 749000,
    "mileage": 70771,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2353",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 282,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37282",
    "title": "2018 Toyota Camry 2.5 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 749000,
    "mileage": 55717,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0759",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 379,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37291",
    "title": "2022 Honda Civic 1.5 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 749000,
    "mileage": 54449,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1218",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37301",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 749000,
    "mileage": 73312,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2356",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 280,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37311",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 749000,
    "mileage": 74839,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2357",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 289,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37327",
    "title": "2019 Toyota Camry 2.5 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 739000,
    "mileage": 147178,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1920",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37334",
    "title": "2019 Toyota Camry 2.5 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 739000,
    "mileage": 157172,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0015",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37344",
    "title": "2021 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 739000,
    "mileage": 9258,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0017",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-283.jpg"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37354",
    "title": "2018 Ford Everest 2.0 TITANIUM+ 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 739000,
    "mileage": 156198,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2317",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-284.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37364",
    "title": "2021 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 739000,
    "mileage": 6752,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0018",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 282,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37373",
    "title": "2020 Honda CR-V 2.4 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 739000,
    "mileage": 112224,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2210",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-286.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37383",
    "title": "2022 Honda Civic 1.5 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 729000,
    "mileage": 46756,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1224",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37393",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 729000,
    "mileage": 76997,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2359",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-288.jpg"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37403",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 729000,
    "mileage": 80155,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2360",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-289.jpg"
    ],
    "views": 323,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37413",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 729000,
    "mileage": 81756,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2361",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 278,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37422",
    "title": "2017 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 729000,
    "mileage": 186977,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2137V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-291.jpg"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37436",
    "title": "2019 Toyota Commuter 3.0 D4D",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 729000,
    "mileage": 106913,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2050",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-292.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37446",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 729000,
    "mileage": 73063,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2354",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-293.jpg"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37455",
    "title": "2024 Mitsubishi Triton 2.4 PLUS ULTRA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 729000,
    "mileage": 420,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0009",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37465",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 729000,
    "mileage": 73232,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2355",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-295.jpg"
    ],
    "views": 343,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37475",
    "title": "2019 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 719000,
    "mileage": 150009,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2384V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37486",
    "title": "2019 Honda CR-V 2.4 ES AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 719000,
    "mileage": 96954,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2310",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37501",
    "title": "2019 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 719000,
    "mileage": 141385,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0789",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-309.jpg"
    ],
    "views": 329,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37511",
    "title": "2022 Isuzu D-Max 1.9 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 719000,
    "mileage": 1867,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0019",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 293,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37527",
    "title": "2019 Toyota Camry 2.0 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 719000,
    "mileage": 72816,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2040",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 315,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37536",
    "title": "2020 Toyota Camry 2.0 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 709000,
    "mileage": 149058,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0001",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37547",
    "title": "2024 Mitsubishi Triton 2.4 PLUS ULTRA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 709000,
    "mileage": 1719,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0007",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 297,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37554",
    "title": "2024 Mitsubishi Triton 2.4 PLUS ULTRA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 709000,
    "mileage": 1484,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2233",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-303.jpg"
    ],
    "views": 385,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37566",
    "title": "2018 Mitsubishi Pajero Sport 2.4 GT PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 709000,
    "mileage": 146714,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2179",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-304.jpg"
    ],
    "views": 369,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37650",
    "title": "2019 Mitsubishi Pajero Sport 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 709000,
    "mileage": 106366,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2458",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-305.jpg"
    ],
    "views": 375,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37659",
    "title": "2020 Mazda CX-5 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 699000,
    "mileage": 103590,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2208",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-306.jpg"
    ],
    "views": 412,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37669",
    "title": "2018 Toyota Commuter 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 112271,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2244",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37679",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 187394,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0749",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-308.jpg"
    ],
    "views": 324,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37688",
    "title": "2021 Isuzu D-Max 3.0 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 699000,
    "mileage": 84469,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0017",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 280,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37698",
    "title": "2019 Toyota Camry 2.0 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 699000,
    "mileage": 98868,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0813",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-310.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37708",
    "title": "2022 Mitsubishi Triton 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 699000,
    "mileage": 38688,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2390",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37718",
    "title": "2019 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 699000,
    "mileage": 138423,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1202",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 316,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37728",
    "title": "2018 Nissan Teana 2.3 VL 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 52018,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2191",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-313.jpg"
    ],
    "views": 539,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37739",
    "title": "2021 Toyota Innova 2.8 CRYSTA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 689000,
    "mileage": 152320,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2462",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-314.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37751",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 689000,
    "mileage": 91135,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2408",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/c12-42.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37762",
    "title": "2022 Toyota Hilux REVO DOUBLECAB 2.4 PRERUNNER MID (MNC)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 689000,
    "mileage": 48049,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2438",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 333,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37771",
    "title": "2020 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 689000,
    "mileage": 132868,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0062",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37796",
    "title": "2022 Toyota Hilux REVO 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 689000,
    "mileage": 30098,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2277",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-319.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37805",
    "title": "2021 Toyota Innova 2.8 CRYSTA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 689000,
    "mileage": 152320,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2462",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-320.jpg"
    ],
    "views": 341,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37815",
    "title": "2019 Toyota Camry 2.0 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 689000,
    "mileage": 159832,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2341",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37826",
    "title": "2013 Mini Cooper 1.6 PACEMAN S ALL4 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 689000,
    "mileage": 158910,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0785V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-322.jpg"
    ],
    "views": 473,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37845",
    "title": "2017 Honda CR-V 2.4 EL 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 689000,
    "mileage": 103540,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2006V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-323.jpg"
    ],
    "views": 402,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37856",
    "title": "2022 Toyota Hilux REVO 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 689000,
    "mileage": 47686,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2276",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-324.jpg"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37870",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 689000,
    "mileage": 74315,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0771",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-334.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37880",
    "title": "2019 Honda CR-V 2.4 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 689000,
    "mileage": 70824,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2242V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-326.jpg"
    ],
    "views": 407,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37926",
    "title": "2018 Honda CR-V 2.4 EL AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 689000,
    "mileage": 97238,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1227",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-328.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37937",
    "title": "2022 Toyota Hilux REVO 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 689000,
    "mileage": 30098,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2277",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-329.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37950",
    "title": "2021 Mitsubishi Outlander PHEV 2.4 GT 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 679000,
    "mileage": 33331,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2411",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37969",
    "title": "2014 BMW 3 Series 320D 2.0 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 679000,
    "mileage": 126273,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2483V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-332.jpg"
    ],
    "views": 421,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37978",
    "title": "2021 Honda Civic 1.5 TURBO RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 679000,
    "mileage": 88442,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0012",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "37994",
    "title": "2017 Honda CR-V 2.4 EL 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 679000,
    "mileage": 85000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2066",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-334.jpg"
    ],
    "views": 401,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38045",
    "title": "2021 Isuzu D-Max 1.9 X-SERIES Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 679000,
    "mileage": 98150,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2250",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-7.jpg"
    ],
    "views": 349,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38054",
    "title": "2023 Toyota Veloz 1.5 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 679000,
    "mileage": 81158,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2336",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-13.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38070",
    "title": "2021 Toyota Hilux REVO 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 679000,
    "mileage": 121699,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2064",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-23.jpg"
    ],
    "views": 377,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38079",
    "title": "2021 Toyota Hilux REVO 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 679000,
    "mileage": 121699,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2064",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-28.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38100",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 679000,
    "mileage": 157454,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0745",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-43.jpg"
    ],
    "views": 332,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38111",
    "title": "2023 Toyota Hilux REVO 2.4 MID PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 679000,
    "mileage": 69107,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0007",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 289,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38122",
    "title": "2015 Mercedes-Benz CLA-Class CLA180 1.6 URBAN",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 679000,
    "mileage": 126615,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2213",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38150",
    "title": "2018 Isuzu MU-X 3.0 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 679000,
    "mileage": 158750,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0747",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 287,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38160",
    "title": "2020 Isuzu D-Max 1.9 ZP HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 679000,
    "mileage": 10282,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0029",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-54.jpg"
    ],
    "views": 369,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38189",
    "title": "2020 Mazda CX-30 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 669000,
    "mileage": 65821,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2486V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-68.jpg"
    ],
    "views": 387,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38200",
    "title": "2020 Isuzu D-Max 1.9 ZP HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 669000,
    "mileage": 7122,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0030",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-82.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38231",
    "title": "2020 Toyota Hiace 2.8 ECO PANEL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 669000,
    "mileage": 127784,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2108",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-97.jpg"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38242",
    "title": "2015 Toyota Fortuner 3.0 TRD SPORTIVO 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 669000,
    "mileage": 118936,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2174",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38251",
    "title": "2014 Toyota Fortuner 3.0 TRD SPORTIVO 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 669000,
    "mileage": 133462,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2209V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-111.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38281",
    "title": "2021 Honda Civic 1.8 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 669000,
    "mileage": 33254,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1209V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-143.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38288",
    "title": "2020 Toyota Hiace 2.8 ECO PANEL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 669000,
    "mileage": 71505,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2152",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-240.jpg"
    ],
    "views": 349,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38297",
    "title": "2023 Toyota Veloz 1.5 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 669000,
    "mileage": 30834,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2270V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38307",
    "title": "2018 Honda Accord 2.0 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 659000,
    "mileage": 72907,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0804",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 316,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38317",
    "title": "2020 Mitsubishi Triton 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 659000,
    "mileage": 101695,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0010",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-335.jpg"
    ],
    "views": 374,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38327",
    "title": "2021 Toyota Innova 2.8 CRYSTA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 659000,
    "mileage": 126543,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0023",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38373",
    "title": "2022 Toyota Veloz 1.5 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 659000,
    "mileage": 74076,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2057",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 282,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38383",
    "title": "2020 Toyota Hilux REVO 2.4 G ROCCO PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 649000,
    "mileage": 118186,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2218V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-338.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38393",
    "title": "2017 Honda Civic 1.5 TURBO",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 649000,
    "mileage": 166216,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1212V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 334,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38403",
    "title": "2014 Mini Countryman 2.0 SD COOPER ALL4 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 649000,
    "mileage": 95215,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2303",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-340.jpg"
    ],
    "views": 416,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38413",
    "title": "2023 Mitsubishi Triton 2.4 ATHLETE GT PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 649000,
    "mileage": 20058,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2335",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-341.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38453",
    "title": "2020 Toyota Hilux 2.8 G ROCCO PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 649000,
    "mileage": 94794,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1931",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-18.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38463",
    "title": "2017 Honda CR-V 2.4 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 649000,
    "mileage": 88295,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2472V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-342.jpg"
    ],
    "views": 401,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38471",
    "title": "2022 Isuzu D-Max 1.9 Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 639000,
    "mileage": 59367,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2215",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-343.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38485",
    "title": "2021 Toyota Hilux 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 639000,
    "mileage": 96153,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0030",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-344.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38496",
    "title": "2020 Ford Ranger 2.0 WILDTRAK 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 639000,
    "mileage": 112841,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1912",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 333,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38505",
    "title": "2021 Toyota Hilux 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 639000,
    "mileage": 98200,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0025",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38520",
    "title": "2024 Mitsubishi Xpander Cross 1.5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 639000,
    "mileage": 4733,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2093",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 319,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38535",
    "title": "2018 Honda Civic 1.5 TURBO",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 639000,
    "mileage": 150737,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2156V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-348.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38547",
    "title": "2016 Mitsubishi Pajero Sport 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 629002,
    "mileage": 183134,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2386V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-349.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38558",
    "title": "2018 Isuzu D-Max 3.0 Z-PRESTIGE VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 629000,
    "mileage": 110805,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0001",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-350.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38570",
    "title": "2020 Toyota Hilux 2.4 MID PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 629000,
    "mileage": 81243,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2470V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-351.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38580",
    "title": "2021 Isuzu D-Max 1.9 M HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 629000,
    "mileage": 62775,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2248",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 299,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38589",
    "title": "2020 Honda CR-V 2.4 ES 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 629000,
    "mileage": 194653,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0033",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38599",
    "title": "2013 Honda CR-V 2.4 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 629000,
    "mileage": 154490,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1215V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-354.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38608",
    "title": "2015 Toyota Commuter 3.0 D4D",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 629000,
    "mileage": 180848,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2207",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 283,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38618",
    "title": "2025 Ora Good Cat 500 ULTRA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2025,
    "price": 629000,
    "mileage": 12550,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1200",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-356.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38635",
    "title": "2024 Mitsubishi Xpander Cross 1.5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 629000,
    "mileage": 4744,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2061",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-357.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38645",
    "title": "2020 Toyota Innova 2.8 G CRYSTA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 619000,
    "mileage": 107260,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1932",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-358.jpg"
    ],
    "views": 350,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38655",
    "title": "2022 Honda City 1.5 E:HEV RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 619000,
    "mileage": 32822,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1221V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38670",
    "title": "2022 Toyota Veloz 1.5 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 619000,
    "mileage": 47986,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0046",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 292,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38681",
    "title": "2025 Haval Jolion 1.5 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2025,
    "price": 619000,
    "mileage": 8215,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1199",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-361.jpg"
    ],
    "views": 363,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38696",
    "title": "2021 Toyota Hilux 2.4 ENTRY PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 619000,
    "mileage": 90772,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0042",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38708",
    "title": "2021 Toyota Hilux 2.4 MID PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 619000,
    "mileage": 63538,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2454",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 306,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38726",
    "title": "2016 Ford Everest 3.2 TITANIUM+ 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 619000,
    "mileage": 83499,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1951",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38742",
    "title": "2022 MG HS PHEV 1.5 X",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 619000,
    "mileage": 29292,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2315V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-130.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38775",
    "title": "2021 Toyota Hilux 2.4 HIGH PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 619000,
    "mileage": 85086,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2049",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38787",
    "title": "2023 Isuzu D-Max 3.0 Z VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 619000,
    "mileage": 24061,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2166",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-366.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38800",
    "title": "2021 Toyota Corrola Altis 1.8 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 619000,
    "mileage": 99557,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1863",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-367.jpg"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38817",
    "title": "2021 Toyota Sienta 1.5 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 609000,
    "mileage": 29083,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2072",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-368.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38833",
    "title": "2020 Toyota Corrola Altis 1.8 HYBRID HIGH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 609000,
    "mileage": 111169,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0011",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38844",
    "title": "2021 Honda Civic 1.8 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 609000,
    "mileage": 53771,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0010V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-370.jpg"
    ],
    "views": 377,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38854",
    "title": "2020 Honda Civic 1.8 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 609000,
    "mileage": 50127,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2326V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-371.jpg"
    ],
    "views": 384,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38864",
    "title": "2022 Mazda BT-50 1.9 SP HI-RACER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 609000,
    "mileage": 73000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2288",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38875",
    "title": "2017 Toyota Innova 2.8 CRYSTA V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 609000,
    "mileage": 110496,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0009",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-373.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38890",
    "title": "2019 Honda HRV 1.8 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 609000,
    "mileage": 79167,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1232",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-385.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38904",
    "title": "2020 Honda Civic 1.8 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 609000,
    "mileage": 56912,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0002V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-375.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38915",
    "title": "2019 Toyota Hilux 2.4 G ROCCO PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 599000,
    "mileage": 122368,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2211",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-376.jpg"
    ],
    "views": 350,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38925",
    "title": "2017 Toyota Camry 2.5 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 599000,
    "mileage": 158313,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2322",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 314,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38941",
    "title": "2019 Honda HRV 1.8 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 599000,
    "mileage": 102700,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1234V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38962",
    "title": "2020 Toyota Hilux 2.4 MID PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 599000,
    "mileage": 75735,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2054",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-379.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38982",
    "title": "2017 Toyota Camry 2.5 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 589000,
    "mileage": 160981,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1946",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-380.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "38992",
    "title": "2020 Honda Civic 1.8 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 589000,
    "mileage": 58332,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2459",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 334,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39001",
    "title": "2020 Isuzu D-Max 1.9 Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 589000,
    "mileage": 93367,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2184",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-382.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39019",
    "title": "2020 Mazda 3 2.0 S SPORTS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 589000,
    "mileage": 68315,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0045",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 302,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39034",
    "title": "2020 Toyota Innova 2.8 G CRYSTA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 589000,
    "mileage": 133255,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0762",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-384.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39049",
    "title": "2018 Toyota Hilux 2.4 E PLUS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 579000,
    "mileage": 69923,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2126",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-385.jpg"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39204",
    "title": "2018 Honda Accord 2.0 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 579000,
    "mileage": 145311,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0047",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 302,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39231",
    "title": "2018 Toyota Camry 2.5 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 579000,
    "mileage": 133753,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2466",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39244",
    "title": "2022 Mitsubishi Xpander 1.5 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 579000,
    "mileage": 21378,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1724",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 410,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39265",
    "title": "2015 Isuzu MU-X 2.5 DVD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 579000,
    "mileage": 168071,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2309V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 286,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39282",
    "title": "2020 Toyota Corrola Altis 1.8 GR SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 579000,
    "mileage": 151277,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0042",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39292",
    "title": "2023 Toyota Sienta 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 579000,
    "mileage": 38202,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0004V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 350,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39305",
    "title": "2017 Toyota Ventury 2.7 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 579000,
    "mileage": 148237,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2088",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-399.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39314",
    "title": "2018 Honda Accord 2.0 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 579000,
    "mileage": 145311,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0047",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 353,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39324",
    "title": "2016 Ford Everest 3.2 TITANIUM+ 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 579000,
    "mileage": 124480,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2294V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 329,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39331",
    "title": "2018 Honda Accord 2.0 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 579000,
    "mileage": 139404,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0037",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 322,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39351",
    "title": "2024 Honda City 1.0 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 569000,
    "mileage": 5063,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2321V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-404.jpg"
    ],
    "views": 379,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39393",
    "title": "2019 Mercedes-Benz CLS-Class CLS300d AMG Premium [w257] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1990000,
    "mileage": 97000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ศฮ 6459",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/21-4.jpg"
    ],
    "views": 545,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39421",
    "title": "2019 Nissan Almera 1.2E SPORTECH AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 199000,
    "mileage": 180000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขผ4291",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-418.jpg"
    ],
    "views": 470,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39450",
    "title": "2021 MG HS 1.5 TURBO X SUNROOF AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 429000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขห221",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-409.jpg"
    ],
    "views": 428,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39479",
    "title": "2017 Toyota Corrola Altis 1.6G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 369000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กษ3579",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-410.jpg"
    ],
    "views": 384,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39514",
    "title": "2017 Mercedes-Benz C-Class C350e AMG Dynamic [w205] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 759000,
    "mileage": 101000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขภ 5983",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/3-419.jpg"
    ],
    "views": 440,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39541",
    "title": "2019 Toyota Camry 2.5 HV Premium AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 879000,
    "mileage": 119000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กศ 5887",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/22-3.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39560",
    "title": "2009 Honda Jazz GE 1.5SV i-VTEC AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2009,
    "price": 179000,
    "mileage": 200000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฌพ1008",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/17-45.jpg"
    ],
    "views": 376,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39589",
    "title": "2021 Mazda CX-30 2.0SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 639000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขช5589",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/22-5.jpg"
    ],
    "views": 375,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39613",
    "title": "2013 Mercedes-Benz C-Class C200 1.8 CGI BE W204 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 399000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6ขผ4480",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/19-44.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39961",
    "title": "2020 Honda HRV 1.8 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 569000,
    "mileage": 156850,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1233V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-19.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39971",
    "title": "2021 Mitsubishi Xpander 1.5 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 559000,
    "mileage": 86341,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2473",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-22.jpg"
    ],
    "views": 377,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39985",
    "title": "2023 Nissan Navara 2.3 E BLACK EDITION CALIBRE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 559000,
    "mileage": 73604,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0011",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-24.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "39996",
    "title": "2023 Ora Good Cat 500 ULTRA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 559000,
    "mileage": 33465,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2487",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-115.jpg"
    ],
    "views": 340,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40007",
    "title": "2013 BMW 3 Series 2.0 LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 549000,
    "mileage": 202491,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2463",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-249.jpg"
    ],
    "views": 394,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40018",
    "title": "2023 Hyundai Stargazer 1.5 SMART 7",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 549000,
    "mileage": 50521,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0009V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-336.jpg"
    ],
    "views": 424,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40028",
    "title": "2021 Mitsubishi Xpander 1.5 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 549000,
    "mileage": 125225,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0020",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-364.jpg"
    ],
    "views": 381,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40035",
    "title": "2019 Toyota Hilux 2.4 E PLUS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 539000,
    "mileage": 211126,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1944",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-386.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40045",
    "title": "2012 Toyota Fortuner 3.0 V 50th ANNIVERSARY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 539000,
    "mileage": 225860,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0921V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-387.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40066",
    "title": "2017 BMW i Series 1.5 GRAND TOURER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 529000,
    "mileage": 95500,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0036V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-394.jpg"
    ],
    "views": 393,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40077",
    "title": "2022 Honda City 1.0 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 529000,
    "mileage": 66616,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1244V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-396.jpg"
    ],
    "views": 434,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40094",
    "title": "2024 Toyota Hilux 2.8 ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 529000,
    "mileage": 28654,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1939",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40108",
    "title": "2023 Honda City 1.0 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 519000,
    "mileage": 60412,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0023V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-408.jpg"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40118",
    "title": "2015 Mitsubishi Pajero Sport 2.5 GT 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 519000,
    "mileage": 55502,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2437",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-412.jpg"
    ],
    "views": 402,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40139",
    "title": "2021 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 509000,
    "mileage": 87880,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0003",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-417.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40173",
    "title": "2018 Ford Ranger 2.2 WILDTRAK HI-RIDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 509000,
    "mileage": 87672,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0924",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-419.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40184",
    "title": "2020 Isuzu D-Max 1.9 Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 509000,
    "mileage": 2284,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0008",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-420.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40194",
    "title": "2021 Mitsubishi Xpander 1.5 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 499000,
    "mileage": 88403,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2471V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-421.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40203",
    "title": "2018 Isuzu D-Max 1.9 X-SERIES Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 499000,
    "mileage": 78664,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2236",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-422.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40213",
    "title": "2020 Isuzu D-Max 1.9 Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 499000,
    "mileage": 10210,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0023",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-423.jpg"
    ],
    "views": 349,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40246",
    "title": "2018 Isuzu MU-X 1.9 The ICONIC AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 184000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กษ 4645",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-432.jpg"
    ],
    "views": 350,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40300",
    "title": "2020 BMW X Series 2.0 sDrive20d xLine AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 899000,
    "mileage": 52000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆน 97",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-427.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40319",
    "title": "2011 Porsche Cayenne 3.0 Diesel 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2011,
    "price": 1699000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขห2190",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-428.jpg"
    ],
    "views": 424,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40345",
    "title": "2022 MG EP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 359000,
    "mileage": 102000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขฬ 7982",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-429.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40366",
    "title": "2018 Mazda CX-5 2.0 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 599000,
    "mileage": 105000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขผ 1020",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-430.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40387",
    "title": "2019 Mercedes-Benz CLA-Class CLA250 AMG Dynamic [White Art Edition] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 989000,
    "mileage": 60000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฉ 1090",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-431.jpg"
    ],
    "views": 397,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40449",
    "title": "2021 Honda City 1.0 TURBO SV AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 439000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขพ1725",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-405.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40470",
    "title": "2015 Isuzu MU-X 3.0 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 499000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กณ4264",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-433.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40490",
    "title": "2018 Isuzu D-Max V-CROSS 3.0 SPACE CAB 4x4 MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 449000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ฒฒ9516",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/3-445.jpg"
    ],
    "views": 380,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40515",
    "title": "2018 BMW X Series sDrive1.8i xLine [F48] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 689000,
    "mileage": 146000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กร 5969",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-435.jpg"
    ],
    "views": 399,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40540",
    "title": "2020 Toyota Fortuner 2.4 V 2WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 789000,
    "mileage": 217000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขฉ 2335",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-436.jpg"
    ],
    "views": 397,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40564",
    "title": "2016 Mercedes-Benz GLC-Class 250d 2.1 4MATIC [w253] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 1099000,
    "mileage": 125000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กธ 3577",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-437.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40590",
    "title": "2015 Mercedes-Benz C-Class C180 Avantgarde [W205] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 759000,
    "mileage": 81000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กฉ 9198",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-438.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40613",
    "title": "2020 Volvo XC90 T8 Inscription 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1499000,
    "mileage": 89000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง 5956",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/3-Copy.jpg"
    ],
    "views": 394,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40654",
    "title": "2021 Toyota Commuter 2.8 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1599000,
    "mileage": 95000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1นค 6791",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-451.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40692",
    "title": "2018 Honda Accord 2.0 Hybrid (G9 MC)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 539000,
    "mileage": 170000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กอ8835",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-442.jpg"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40714",
    "title": "2020 MG ZS 1.5X Turbo",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 419000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขข9396",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-443.jpg"
    ],
    "views": 342,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40718",
    "title": "2017 Mercedes-Benz GLA-Class GLA250 AMG Dynamic [w156] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 899000,
    "mileage": 114000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กท 3688",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-439.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40824",
    "title": "2015 Mercedes-Benz C-Class C200 2.0 Avantgard [W205] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 739000,
    "mileage": 128000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กท 9252",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-444.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40825",
    "title": "2018 BMW 3 Series 330e Iconic Plug-in Hybrid (F30) AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 128000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขค 7692",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-445.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40828",
    "title": "2015 Mazda 2 1.3 Skyactiv-G High",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 239000,
    "mileage": 140000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กพ9363",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/4-450.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40835",
    "title": "2015 Toyota Vellfire 2.5 Z G Edition AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 1399000,
    "mileage": 151000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆร 988",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/3-457.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40838",
    "title": "2015 Toyota Vellfire 2.4 Z G Edition AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 859000,
    "mileage": 214000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กต 282",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-448.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40864",
    "title": "2022 Ford Ranger 2.2 HI-RIDER XL+ SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 457000,
    "mileage": 54000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ฒบ3868",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-449.jpg"
    ],
    "views": 380,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40889",
    "title": "2020 Kia Carnival GRAND CARNIVAL 2.2 EX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 907000,
    "mileage": 159000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1นข1941",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-450.jpg"
    ],
    "views": 676,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40910",
    "title": "2018 Suzuki Ciaz ERTIGA 1.5 GL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 367000,
    "mileage": 92000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขก2731",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-451.jpg"
    ],
    "views": 454,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40935",
    "title": "2019 Mitsubishi Xpander 1.5 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 537000,
    "mileage": 153000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ขม9444",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40976",
    "title": "2020 Nissan Navara 2.5 BLACK EDITION",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 417000,
    "mileage": 32000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ฒอ469",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-453.jpg"
    ],
    "views": 387,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "40982",
    "title": "2018 Nissan Terra 2.3 VL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 637000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง6842",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-454.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41004",
    "title": "2018 Nissan Terra 2.3 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 647000,
    "mileage": 87000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง8170",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41045",
    "title": "2018 Nissan Terra 2.3 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 627000,
    "mileage": 169000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง6851",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41052",
    "title": "2018 Nissan Terra 2.3 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 627000,
    "mileage": 175000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง6853",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 286,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41080",
    "title": "2018 Nissan Terra 2.3 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 627000,
    "mileage": 101000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง8167",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 296,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41117",
    "title": "2022 Toyota Fortuner 2.8 GR SPORT 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1440000,
    "mileage": 56000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขส9352",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 332,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41156",
    "title": "2020 Lamborghini Huracan Evo AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 19990000,
    "mileage": 21000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO001",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 497,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41175",
    "title": "2019 Mercedes-Benz G-Class G63 AMG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 16500000,
    "mileage": 14000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO002",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 369,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41218",
    "title": "2018 Nissan Terra 2.3 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 637000,
    "mileage": 105000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง6843",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 294,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41220",
    "title": "2018 Nissan Terra 2.3 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 627000,
    "mileage": 118000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง6850",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 294,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41261",
    "title": "2018 Toyota Sienta 1.5 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 497000,
    "mileage": 104000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กฎ9279",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 323,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41262",
    "title": "2019 Ferrari Portofino 3.9 Convertible",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 15900000,
    "mileage": 18000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO003",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-476.jpg"
    ],
    "views": 543,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41281",
    "title": "2022 Toyota Corolla Cross 1.8 HYBRID SMART",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 707000,
    "mileage": 174000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขฆ3825",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 328,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41328",
    "title": "2021 Toyota C-HR 1.8 HV MID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 597000,
    "mileage": 192000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขญ6311",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41348",
    "title": "2021 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 517000,
    "mileage": 200000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขฉ6541",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-481.jpg"
    ],
    "views": 379,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41369",
    "title": "2020 Toyota Vios 1.5 MID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 447000,
    "mileage": 82000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กฬ7054",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 328,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41392",
    "title": "2020 Toyota Yaris Ativ  1.2 ENTRY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 377000,
    "mileage": 196000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กล6714",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41419",
    "title": "2019 Toyota Vios 1.5 ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 357000,
    "mileage": 82000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กค4342",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 315,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41440",
    "title": "2019 Toyota Vios 1.5 MID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 417000,
    "mileage": 172000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กว2053",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 304,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41464",
    "title": "2021 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 527000,
    "mileage": 195000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขถ9164",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 324,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41485",
    "title": "2016 Toyota Yaris 1.2 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 267000,
    "mileage": 57000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "จง34",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41521",
    "title": "2020 Toyota Vios 1.5 ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 367000,
    "mileage": 170000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขง5715",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41524",
    "title": "2021 Chevrolet Corvette C8 Stingray",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 6990000,
    "mileage": 2000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO004",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-474.jpg"
    ],
    "views": 521,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41545",
    "title": "2022 Toyota Veloz 1.5 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 667000,
    "mileage": 108000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขฉ8895",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41581",
    "title": "2021 Toyota Corrola Altis 1.8 SPORT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 577000,
    "mileage": 194000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขง9421",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41582",
    "title": "2018 BMW i Series i8 Roadster",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 5990000,
    "mileage": 18000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO005",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 474,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41606",
    "title": "2018 Toyota Camry 2.0 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 697000,
    "mileage": 181000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กณ8142",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 319,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41644",
    "title": "2018 Toyota Camry 2.0 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 697000,
    "mileage": 129000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กณ3688",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41646",
    "title": "2021 Porsche Panamera 4 E-Hybrid",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 5790000,
    "mileage": 30000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO006",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-479.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41667",
    "title": "2018 Toyota Camry 2.0 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 697000,
    "mileage": 175000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กณ819",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41706",
    "title": "2018 Porsche Cayenne E-Hybrid",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 3350000,
    "mileage": 76000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO008",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-483.jpg"
    ],
    "views": 407,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41722",
    "title": "2022 Toyota Alphard 2.5 S C Package",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 2750000,
    "mileage": 54000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO009",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-484.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41735",
    "title": "2023 Audi TT Final Icon Black Edition",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 2290000,
    "mileage": 9500,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO010",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 343,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41748",
    "title": "2018 Toyota Vellfire Z G Edition",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 2290000,
    "mileage": 64000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO011",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-486.jpg"
    ],
    "views": 359,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41785",
    "title": "2018 Toyota Vellfire Z G Edition",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 2290000,
    "mileage": 52000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO012",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-487.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41822",
    "title": "2018 Toyota Vellfire Z G Edition",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 2250000,
    "mileage": 42000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO013",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-489.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41823",
    "title": "2018 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 447000,
    "mileage": 141000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กด8864",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41846",
    "title": "2022 Toyota Corolla Cross 1.8 HYBRID SMART",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 707000,
    "mileage": 94000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขข1270",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 350,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41886",
    "title": "2020 BMW X Series 30e xDrive M-Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1890000,
    "mileage": 74000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO014",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-492.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41908",
    "title": "2018 Toyota Camry 2.0 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 697000,
    "mileage": 180000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขช3852",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41927",
    "title": "2019 Mercedes-Benz GLC-Class GLC250d AMG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1850000,
    "mileage": 89000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO015",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-494.jpg"
    ],
    "views": 401,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41965",
    "title": "2019 BMW X Series 20d xDrive M-Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1790000,
    "mileage": 99350,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO016",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-496.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41981",
    "title": "2015 Toyota Alphard 2.5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 1790000,
    "mileage": 85000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO017",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-497.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41990",
    "title": "2018 Toyota Corrola Altis 1.6 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 457000,
    "mileage": 120000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กด8835",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "41999",
    "title": "2023 MG Maxus9 Model V (Blacktop)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1750000,
    "mileage": 27000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO018",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-498.jpg"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42012",
    "title": "2020 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 489000,
    "mileage": 89139,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0036",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-499.jpg"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42022",
    "title": "2023 Nissan Almera 1.0 TURBO VL SPORTECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 489000,
    "mileage": 43271,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0006",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-500.jpg"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42033",
    "title": "-5 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 489000,
    "mileage": 87679,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0037",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-501.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42043",
    "title": "2015 Honda CR-V 2.0 E 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 489000,
    "mileage": 74457,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1222V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-502.jpg"
    ],
    "views": 407,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42063",
    "title": "2018 Toyota Camry 2.0 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 479000,
    "mileage": 129506,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2464V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-504.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42072",
    "title": "2020 Toyota Hilux 2.4 Z EDITION MID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 479000,
    "mileage": 217581,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2265",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-505.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42083",
    "title": "2022 Ford Ranger 2.2 STANDARD XL 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 479000,
    "mileage": 63108,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2392",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-506.jpg"
    ],
    "views": 368,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42097",
    "title": "2019 Toyota Hiace 3.0 ECONOMY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 479000,
    "mileage": 126776,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2109",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-507.jpg"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42107",
    "title": "2020 Isuzu D-Max 1.9 Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 479000,
    "mileage": 10100,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0023",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-508.jpg"
    ],
    "views": 348,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42138",
    "title": "2019 Honda BR-V 1.5 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 469000,
    "mileage": 162503,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1252",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-511.jpg"
    ],
    "views": 454,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42152",
    "title": "2020 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 459000,
    "mileage": 144817,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1878",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42166",
    "title": "2017 Honda HRV 1.8 E LIMITED",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 459000,
    "mileage": 159594,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1231V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-512.jpg"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42177",
    "title": "2023 Isuzu D-Max 1.9 S DA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 459000,
    "mileage": 76017,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2228",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-513.jpg"
    ],
    "views": 363,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42187",
    "title": "2019 Toyota Sienta 1.5 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 459000,
    "mileage": 158648,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2477",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-514.jpg"
    ],
    "views": 366,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42198",
    "title": "2020 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 449000,
    "mileage": 152612,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2391",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-515.jpg"
    ],
    "views": 384,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42208",
    "title": "2023 MG ZS 1.5 X+",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 449000,
    "mileage": 48983,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0004V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-516.jpg"
    ],
    "views": 354,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42225",
    "title": "2022 Nissan Almera  1.0 TURBO VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 449000,
    "mileage": 42708,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2069",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-517.jpg"
    ],
    "views": 387,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42236",
    "title": "2021 Isuzu D-Max 1.9 L DA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 439000,
    "mileage": 35182,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0032",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-518.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42260",
    "title": "2021 Honda City 1.0 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 429000,
    "mileage": 136946,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2545",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-520.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42270",
    "title": "2013 Honda Accord  2.4 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 429000,
    "mileage": 84381,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0017V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-521.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42286",
    "title": "2019 Isuzu D-Max  1.9 Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 429000,
    "mileage": 93626,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1895",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-522.jpg"
    ],
    "views": 355,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42296",
    "title": "2021 Toyota Vios 1.5 MID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 419000,
    "mileage": 81744,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2547",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-523.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42321",
    "title": "2015 Honda CR-V 2.4 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 419000,
    "mileage": 135832,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1255V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-524.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42331",
    "title": "2018 BMW X Series X3 20d xDrive xLine",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1490000,
    "mileage": 75000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO019",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-525.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42333",
    "title": "2018 Honda BR-V 1.5 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 419000,
    "mileage": 173911,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1250",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-526.jpg"
    ],
    "views": 421,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42344",
    "title": "2014 Honda Accord 2.4 TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 409000,
    "mileage": 147282,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0001",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42371",
    "title": "2013 Honda Accord 2.0 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 399000,
    "mileage": 40703,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1237V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-528.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42378",
    "title": "2021 Mercedes-Benz C-Class C300e AMG Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1390000,
    "mileage": 56000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO020",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-527.jpg"
    ],
    "views": 433,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42382",
    "title": "2020 Toyota Yaris Ativ 1.2 S+",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 399000,
    "mileage": 191193,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1A0008V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-529.jpg"
    ],
    "views": 402,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42398",
    "title": "2019 Toyota Hilux 2.4 J PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 399000,
    "mileage": 188105,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1988",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-530.jpg"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42408",
    "title": "2016 Audi TT 2.0 TFSI Quattro S line",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 1390000,
    "mileage": 88000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO021",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-531.jpg"
    ],
    "views": 446,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42436",
    "title": "2010 Honda Civic Type R",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2010,
    "price": 1350000,
    "mileage": 8800,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO022",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-532.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42437",
    "title": "2017 Nissan X-Trail 2.0 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 389000,
    "mileage": 111474,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2022",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42463",
    "title": "2019 Mazda 2 1.3 HIGH PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 389000,
    "mileage": 137465,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1927",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-533.jpg"
    ],
    "views": 353,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42476",
    "title": "2020 Mazda 2 1.3 S LEATHER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 389000,
    "mileage": 450636,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2431",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-535.jpg"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42503",
    "title": "2019 Toyota Hilux  2.4 J PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 379000,
    "mileage": 132065,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1976",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-537.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42514",
    "title": "2020 Mazda 2 1.3 SPORTS HIGH PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 379000,
    "mileage": 59027,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2284",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-538.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42516",
    "title": "2020 Mercedes-Benz A-Class A200 AMG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1190000,
    "mileage": 45000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO024",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-536.jpg"
    ],
    "views": 411,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42526",
    "title": "2021 Nissan Almera 1.0 TURBO V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 379000,
    "mileage": 41112,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1T0003V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-539.jpg"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42549",
    "title": "2020 Mitsubishi Triton 2.4 GT PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 379000,
    "mileage": 35841,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2278",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-540.jpg"
    ],
    "views": 373,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42551",
    "title": "2020 BMW X Series X1 20d sDrive M-Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1190000,
    "mileage": 93000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO025",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42559",
    "title": "2022 Toyota Hilux 2.4 ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 379000,
    "mileage": 148785,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2169",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-542.jpg"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42579",
    "title": "2020 Nissan Almera 1.0 TURBO V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 379000,
    "mileage": 128111,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0019",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-557.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42595",
    "title": "2022 Ford Everest  2.0 Turbo Titanium Plus",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1190000,
    "mileage": 86206,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO026",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-543.jpg"
    ],
    "views": 430,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42597",
    "title": "2013 BMW X Series 2.0 SDRIVE 18I",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 379000,
    "mileage": 198000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2467V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-544.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42623",
    "title": "2021 BMW 2 Series 220i M-Sport (CKD)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1190000,
    "mileage": 72000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO027",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-546.jpg"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42645",
    "title": "2021 Mazda 2 1.3 S LEATHER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 369000,
    "mileage": 69547,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0047V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-545.jpg"
    ],
    "views": 412,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42649",
    "title": "2021 BMW 2 Series  220i M-Sport (CKD)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1190000,
    "mileage": 59000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO028",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-548.jpg"
    ],
    "views": 411,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42659",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 369000,
    "mileage": 46750,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2407",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-549.jpg"
    ],
    "views": 416,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42682",
    "title": "2013 BMW 4 Series 420d M-Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 1190000,
    "mileage": 160000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO029",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-550.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42683",
    "title": "2020 Mitsubishi Triton 2.5 GLX LIMITED EDITION",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 359000,
    "mileage": 63993,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2402",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-551.jpg"
    ],
    "views": 377,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42698",
    "title": "2019 Ford Ranger 2.2 XL+ SPORT HI-RIDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 359000,
    "mileage": 62456,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0033V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-552.jpg"
    ],
    "views": 389,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42709",
    "title": "2021 Toyota Fortuner 2.4 Legender 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1129000,
    "mileage": 117000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO030",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-553.jpg"
    ],
    "views": 451,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42719",
    "title": "2021 Nissan Note 1.2 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 349000,
    "mileage": 42738,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2550",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-554.jpg"
    ],
    "views": 385,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42746",
    "title": "2018 Toyota Hilux 2.4 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 349000,
    "mileage": 339000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1987",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-556.jpg"
    ],
    "views": 375,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42747",
    "title": "2021 BMW 2 Series 220i M-Sport (CKD)",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1090000,
    "mileage": 72000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO031",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-555.jpg"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42757",
    "title": "2019 Toyota Yaris 1.2 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 349000,
    "mileage": 62043,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2476V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-557.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42773",
    "title": "2023 Ford Everest 2.0 Turbo Trend 6AT 4x2",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1059000,
    "mileage": 58000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO032",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-558.jpg"
    ],
    "views": 412,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42837",
    "title": "2017 Audi Q3 35 TFSI Quattro",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 990000,
    "mileage": 41000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO033",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-559.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42853",
    "title": "2017 Mercedes-Benz CLA-Class CLA250 AMG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 899000,
    "mileage": 75000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO034",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-560.jpg"
    ],
    "views": 345,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42869",
    "title": "2018 Mercedes-Benz CLC-Class CLA200 Urban",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 819000,
    "mileage": 74000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO035",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-561.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42884",
    "title": "2021 Toyota Corolla Cross Hybrid Premium Safety SUV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 799000,
    "mileage": 79000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO036",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-562.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42899",
    "title": "2013 Mercedes-Benz CLA-Class CLA250 AMG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 789000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO037",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-563.jpg"
    ],
    "views": 343,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42913",
    "title": "2015 Mini Cooper Hatchback",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 749000,
    "mileage": 52000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO038",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-564.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42929",
    "title": "2017 Honda Civic 1.5 Turbo Hatchback",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 629000,
    "mileage": 137000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO039",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-565.jpg"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42946",
    "title": "2019 Honda Civic 1.8 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 579000,
    "mileage": 109888,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO040",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-566.jpg"
    ],
    "views": 351,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42962",
    "title": "2022 Nissan Kicks e-POWER V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 499000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO041",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-567.jpg"
    ],
    "views": 411,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42978",
    "title": "2019 Isuzu D-Max Hi-Lander Space Cab 1.9 X-Series",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 469000,
    "mileage": 16000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO042",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-568.jpg"
    ],
    "views": 338,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "42993",
    "title": "2020 Honda City 1.0 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 459000,
    "mileage": 103000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO043",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-569.jpg"
    ],
    "views": 361,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43008",
    "title": "2020 Mazda CX-3 BASE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 409000,
    "mileage": 103000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO044",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-570.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43024",
    "title": "2019 Nissan Leaf EV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 399000,
    "mileage": 22000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO045",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-571.jpg"
    ],
    "views": 426,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43040",
    "title": "2017 Honda Jazz  1.5 S i-VTEC",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 389000,
    "mileage": 104114,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO046",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-572.jpg"
    ],
    "views": 385,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43056",
    "title": "2014 Mazda 3 2.0 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 299000,
    "mileage": 188000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO047",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-573.jpg"
    ],
    "views": 367,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43067",
    "title": "2019 Mitsubishi Mirage 1.2 GLX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 269000,
    "mileage": 75000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "KOO048",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-574.jpg"
    ],
    "views": 432,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43077",
    "title": "2015 BMW i Series i8 1.5 HYBRID 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 3849000,
    "mileage": 9184,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0865V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-591.jpg"
    ],
    "views": 705,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43087",
    "title": "2022 Lexus LM300h 2.5 EXECUTIVE 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 3539000,
    "mileage": 437000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0803",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-576.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43097",
    "title": "2022 Lexus LM300h 2.5 EXECUTIVE 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 3379000,
    "mileage": 106836,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0836",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-577.jpg"
    ],
    "views": 442,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43114",
    "title": "2022 Toyota Alphard  2.5 S C-PACKAGE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 2659000,
    "mileage": 33696,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2095V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-578.jpg"
    ],
    "views": 372,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43121",
    "title": "2020 Isuzu D-Max 1.9 B",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 329000,
    "mileage": 141315,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2157",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-579.jpg"
    ],
    "views": 348,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43131",
    "title": "2016 Toyota Yaris 1.2 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 309000,
    "mileage": 36918,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0046V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-580.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43141",
    "title": "2017 Mazda 2 1.3 SPORTS HIGH PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 299000,
    "mileage": 87024,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1219V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/5-598.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43151",
    "title": "2019 Honda Brio 1.2 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 329000,
    "mileage": 47708,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1236",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-582.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43161",
    "title": "2017 Mazda 2 1.3 SPORTS HIGH PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 299000,
    "mileage": 87042,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0926V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/4-596.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43171",
    "title": "2016 Honda Jazz 1.5 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 299000,
    "mileage": 217282,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2555V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-584.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43181",
    "title": "2013 Mazda BT-50 PRO 2.2 HI-RACER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 269000,
    "mileage": 248476,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2283V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-585.jpg"
    ],
    "views": 364,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43191",
    "title": "2013 Honda City 1.5 SV i-vtec",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 259000,
    "mileage": 149211,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1228V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-586.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43202",
    "title": "2010 Honda Civic 1.8 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2010,
    "price": 239000,
    "mileage": 133269,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1900V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/11-291.jpg"
    ],
    "views": 386,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43221",
    "title": "2020 Toyota Hilux 2.4 E PLUS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 569000,
    "mileage": 125919,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2183",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43235",
    "title": "2019 Toyota Hilux 2.4 E PLUS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 549000,
    "mileage": 172639,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0013",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 292,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43245",
    "title": "2020 Mazda 3 2.0 S SPORTS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 549000,
    "mileage": 137509,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0009",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 322,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43257",
    "title": "2019 Toyota Hilux 2.4 E PLUS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 539000,
    "mileage": 209427,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0014",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 291,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43270",
    "title": "2019 Toyota Corrola Altis 1.8 ESPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 459000,
    "mileage": 56524,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0024",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43281",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 449000,
    "mileage": 171800,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0044",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43294",
    "title": "2022 Isuzu D-Max 3.0 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 448000,
    "mileage": 30046,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0035",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43304",
    "title": "2020 Isuzu D-Max 1.9 Z",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 439000,
    "mileage": 120770,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2267",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 285,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43318",
    "title": "2019 Toyota Hilux 2.4 J PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 419000,
    "mileage": 137043,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0020",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 297,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43332",
    "title": "2021 Isuzu D-Max 1.9 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 419000,
    "mileage": 67533,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0012",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43350",
    "title": "2017 Nissan X-Trail 2.0 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 409000,
    "mileage": 123347,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0026",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43358",
    "title": "2019 Ford Ranger 2.2 XLT HI-RIDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 399000,
    "mileage": 52969,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0018",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 314,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43367",
    "title": "2020 Mitsubishi Triton 2.4 GT PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 389000,
    "mileage": 34114,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2142",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 300,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43382",
    "title": "2018 Mitsubishi Triton 2.4 GLS-LIMITED PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 389000,
    "mileage": 61499,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0025",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43398",
    "title": "2019 Mazda 3 2.0 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 339000,
    "mileage": 160845,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0021",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 319,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43408",
    "title": "2021 Toyota Corrola Altis 1.8 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 589000,
    "mileage": 160393,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0024",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43607",
    "title": "2020 Toyota Hilux 2.4 G ROCCO",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 539000,
    "mileage": 73996,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0019",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43617",
    "title": "2022 Toyota Yaris Ativ 1.2 PREMIUM LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 539000,
    "mileage": 34333,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2296V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 327,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43631",
    "title": "2019 Isuzu D-Max 3.0 Z-PRESTIGE HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 519000,
    "mileage": 145382,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2102",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43645",
    "title": "2023 Toyota Hilux 2.4 Z EDITION ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 509000,
    "mileage": 46031,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2106",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43653",
    "title": "2019 Toyota Hiace 3.0 ECONOMY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 499000,
    "mileage": 106103,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2186",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 291,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43664",
    "title": "2018 Honda HRV 1.8 E Limited",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 499000,
    "mileage": 74718,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0018",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43673",
    "title": "2019 Toyota Hiace 3.0 ECONOMY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 479000,
    "mileage": 138472,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2107",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 290,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43682",
    "title": "2019 Mitsubishi Xpander 1.5 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 479000,
    "mileage": 106948,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2281",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 304,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43694",
    "title": "2024 Toyota Hilux 2.8 ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 459000,
    "mileage": 33874,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0014",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 295,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43703",
    "title": "2023 Toyota Hilux 2.4 Z EDITION ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 449000,
    "mileage": 87533,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0005",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 288,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43713",
    "title": "2024 Toyota Hilux 2.4 ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 499000,
    "mileage": 20258,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2306",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 288,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43726",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 419000,
    "mileage": 132370,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0023",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 314,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43739",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 409000,
    "mileage": 226201,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1923",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43750",
    "title": "2023 MG MG5 1.5 D+",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 399000,
    "mileage": 44480,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0030",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 297,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43760",
    "title": "2019 Toyota Corrola Altis 1.8 ESPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 399000,
    "mileage": 174664,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0024",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 317,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43772",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 399000,
    "mileage": 164648,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1919",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 306,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43784",
    "title": "2019 Mazda 3 2.0 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 359000,
    "mileage": 160102,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1992",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43807",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 339000,
    "mileage": 221168,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2C0028",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 316,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43824",
    "title": "2014 Honda Civic 1.5 HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 319000,
    "mileage": 28081,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2229V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 324,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43835",
    "title": "2018 Toyota Yaris Ativ 1.2 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 299000,
    "mileage": 145076,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1984",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 323,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43848",
    "title": "2020 Mazda 3 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 549000,
    "mileage": 137285,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2S0043",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 319,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43858",
    "title": "2018 Toyota Hiace 3.0 ECONOMY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 459000,
    "mileage": 120128,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2140",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43872",
    "title": "2020 Mazda 2 1.3 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 429000,
    "mileage": 44934,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1913",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 306,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43905",
    "title": "2021 Toyota Yaris 1.2 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 419000,
    "mileage": 40702,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2076",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43921",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 419000,
    "mileage": 148390,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1918",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 300,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43932",
    "title": "2021 Toyota Hilux 2.4 Z EDITION ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 417000,
    "mileage": 123226,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2010",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 306,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43948",
    "title": "2020 Toyota Hilux 2.4 Z EDITION J PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 389000,
    "mileage": 25781,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2047V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43961",
    "title": "2023 Mitsubishi Triton 2.5 GLX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 379000,
    "mileage": 9622,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1865",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 316,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43969",
    "title": "2018 Ford Ranger 2.2 XLT HI-RIDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 379000,
    "mileage": 105174,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1998",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43987",
    "title": "2020 Mazda 2 1.3 HIGH CONNECT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 369000,
    "mileage": 45368,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2038",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 319,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "43998",
    "title": "2022 Nissan Note 1.2 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 339000,
    "mileage": 44753,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2273",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44009",
    "title": "2015 Nissan Almera 1.2 ES",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 209000,
    "mileage": 109029,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2135V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 293,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44136",
    "title": "2019 Honda BR-V 1.5 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 437000,
    "mileage": 192000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กส6973",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-603.jpg"
    ],
    "views": 387,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44154",
    "title": "2015 Honda HRV 1.8 E AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 437000,
    "mileage": 202000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กพ641",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-604.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44169",
    "title": "2016 Mazda CX-5 2.2 XDL 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 437000,
    "mileage": 196000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กย1731",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-623.jpg"
    ],
    "views": 378,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44187",
    "title": "2020 Honda City 1.0 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 437000,
    "mileage": 124000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กผ9752",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/2-624.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44206",
    "title": "2020 Honda City 1.0 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 437000,
    "mileage": 120000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กล9802",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-608.jpg"
    ],
    "views": 411,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44225",
    "title": "2016 Mazda CX-3 2.0 SP AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 437000,
    "mileage": 137000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กถ9045",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-609.jpg"
    ],
    "views": 421,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44241",
    "title": "2022 Toyota Yaris 1.2 ENTRY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 437000,
    "mileage": 50000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขฎ6178",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-610.jpg"
    ],
    "views": 377,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44259",
    "title": "2020 Toyota Vios 1.5 MID AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 407000,
    "mileage": 254000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กอ3783",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-611.jpg"
    ],
    "views": 357,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44276",
    "title": "2019 Toyota Vios 1.5 ENTRY AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 377000,
    "mileage": 115000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กณ4717",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-612.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44297",
    "title": "2019 Mazda 2 1.3 HIGH CONNECT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 377000,
    "mileage": 158000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขข443",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-613.jpg"
    ],
    "views": 381,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44309",
    "title": "2019 Honda City 1.5 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 377000,
    "mileage": 138000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กต4396",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-614.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44326",
    "title": "2019 Suzuki Swift 1.2 GL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 337000,
    "mileage": 76000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กฉ5706",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/07/1-615.jpg"
    ],
    "views": 601,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44362",
    "title": "2023 Isuzu MU-X 1.9 ELEGANT AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 917000,
    "mileage": 165000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขณ6733",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 315,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44415",
    "title": "2023 Toyota Yaris Cross 1.5 HEV PREMIUM LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 847000,
    "mileage": 22000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 4ขษ6810",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 273,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44452",
    "title": "2023 Toyota Veloz 1.5 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 747000,
    "mileage": 37000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขง7708",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-2.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44472",
    "title": "2021 Toyota Corolla Cross 1.8 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 717000,
    "mileage": 162000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ขณ8002",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-3.jpg"
    ],
    "views": 421,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44494",
    "title": "2018 Toyota Camry 2.0 G AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 717000,
    "mileage": 94000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5กณ4569",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-4.jpg"
    ],
    "views": 689,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44513",
    "title": "2021 Isuzu D-Max 1.9 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 447000,
    "mileage": 222000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ฒฉ6956",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-5.jpg"
    ],
    "views": 371,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44528",
    "title": "2019 Toyota Hilux 2.4 J PLUS MT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 417000,
    "mileage": 262000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ฒพ5768",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 289,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44547",
    "title": "2022 Toyota GR Corolla 1.8 HEV GR SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 947000,
    "mileage": 31000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขว9153",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-7.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44571",
    "title": "2023 Toyota Corolla Cross 1.5 HEV PREMIUM LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 847000,
    "mileage": 23000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 4ขห6513",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-8.jpg"
    ],
    "views": 424,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44592",
    "title": "2023 Toyota Corolla Cross 1.5 HEV PREMIUM LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 847000,
    "mileage": 15000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขห6510",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-9.jpg"
    ],
    "views": 400,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44614",
    "title": "2023 Toyota Corolla Cross 1.5 HEV PREMIUM LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 847000,
    "mileage": 25000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขห6508",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-10.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44635",
    "title": "2023 Toyota Corolla Cross 1.5 HEV PREMIUM LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 847000,
    "mileage": 30000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขษ6791",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44656",
    "title": "2025 Toyota Yaris Cross 1.5 HV PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2025,
    "price": 837000,
    "mileage": 11000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆฌ6945",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-13.jpg"
    ],
    "views": 480,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44697",
    "title": "2021 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 997000,
    "mileage": 62000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขษ8194",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-13.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44720",
    "title": "2023 Toyota Yaris Ativ 1.2 PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 587000,
    "mileage": 11000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กร3947",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-14.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44739",
    "title": "2022 Toyota Yaris Ativ 1.2 PREMIUM LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 567000,
    "mileage": 38000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3ขญ1202",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-15.jpg"
    ],
    "views": 594,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44757",
    "title": "2017 Mazda CX-5 2.0 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 467000,
    "mileage": 98000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขฮ5130",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-16.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44800",
    "title": "2019 BMW 3 Series BMW 320d 2.0 G20 Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1390000,
    "mileage": 65000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM1",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-11.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44810",
    "title": "2017 BMW 5 Series BMW 520d 2.0 G30 Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 1499000,
    "mileage": 75000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM2",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-17.jpg"
    ],
    "views": 413,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44820",
    "title": "2019 Mercedes-Benz GLC-Class GLC250 2.0 4MATIC AMG Plus 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1799000,
    "mileage": 92000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM3",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-18.jpg"
    ],
    "views": 427,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44828",
    "title": "2016 Mercedes-Benz E-Class E220 2.0d Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 1599000,
    "mileage": 96000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM4",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-19.jpg"
    ],
    "views": 438,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44840",
    "title": "2020 Mercedes-Benz E-Class E350 2.0e Avantgarde Sedan",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 1299000,
    "mileage": 65000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM5",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-20.jpg"
    ],
    "views": 406,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44853",
    "title": "2021 Mercedes-Benz GLC-Class GLC220d AMG Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 2399000,
    "mileage": 74000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM8",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-30.jpg"
    ],
    "views": 455,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44863",
    "title": "2017 Mercedes-Benz GLE-Class GLE500e AMG Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 1599000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM9",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-24.jpg"
    ],
    "views": 399,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44870",
    "title": "2018 Mercedes-Benz GLE-Class GLE350d",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 2499000,
    "mileage": 86000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM10",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-25.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44879",
    "title": "2019 Mercedes-Benz C-Class C200 1.5 AMG Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1799000,
    "mileage": 75000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM11",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-26.jpg"
    ],
    "views": 390,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44889",
    "title": "2023 BMW 2 Series BMW 220i 2.0 Gran M Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1399000,
    "mileage": 85000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM12",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-27.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44898",
    "title": "2015 Mercedes-Benz S-Class S300 2.1 BlueTEC Hybrid",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 1599000,
    "mileage": 85000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM13",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-28.jpg"
    ],
    "views": 500,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44906",
    "title": "2019 Mercedes-Benz C-Class C220 2.0d Avantgarde",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1259000,
    "mileage": 115000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM14",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-29.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "44918",
    "title": "2017 Mercedes-Benz CLA-Class CLA250 AMG 2.0 Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 959000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "786PM15",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-29.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45007",
    "title": "2018 BMW 5 Series 2.0 M SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1109000,
    "mileage": 78204,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2549",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-22.jpg"
    ],
    "views": 382,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45017",
    "title": "2018 BMW 5 Series 2.0 LUXURY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1019000,
    "mileage": 137517,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0043V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-31.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45029",
    "title": "2024 Hyundai Staria  2.2 SEL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 1279000,
    "mileage": 55580,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2548V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/4-36.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45039",
    "title": "2022 Hyundai Staria 2.2 SEL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1289000,
    "mileage": 62411,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2551V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-33.jpg"
    ],
    "views": 391,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45049",
    "title": "2021 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 909000,
    "mileage": 66553,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1A0007V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-37.jpg"
    ],
    "views": 365,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45060",
    "title": "2023 Isuzu D-Max 3.0 M VCROSS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 919000,
    "mileage": 1871,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2496",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-38.jpg"
    ],
    "views": 385,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45072",
    "title": "2023 Isuzu D-Max 1.9 X-SERIES HI-LANDER CAB-4",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 789000,
    "mileage": 20025,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0042",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-39.jpg"
    ],
    "views": 439,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45082",
    "title": "2018 Honda CR-V 2.4 EL AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 91962,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1245",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-40.jpg"
    ],
    "views": 370,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45094",
    "title": "2021 Mazda CX-30 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 619000,
    "mileage": 91719,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0025V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-41.jpg"
    ],
    "views": 399,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45104",
    "title": "2019 Mazda CX-5 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 579000,
    "mileage": 73976,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1T0004V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/2-42.jpg"
    ],
    "views": 388,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45114",
    "title": "2019 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 809000,
    "mileage": 149593,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1S1254",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-40.jpg"
    ],
    "views": 423,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45123",
    "title": "2019 Hyundai H-1 2.5 DELUXE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 799000,
    "mileage": 342780,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2554",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-41.jpg"
    ],
    "views": 362,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45180",
    "title": "2018 Tesla Model X 60D",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 3509000,
    "mileage": 29687,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0720V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 358,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45198",
    "title": "2013 Jeep Wrangler 2.8 CRD 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 2899000,
    "mileage": 37182,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0733V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45223",
    "title": "2022 Mini Cooper 2.0 JOHN COOPER WORKS GP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 2809000,
    "mileage": 19965,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0643V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45235",
    "title": "2017 Lexus LS460 4.6",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 1899000,
    "mileage": 140878,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9P0888V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 317,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45245",
    "title": "2021 Toyota Fortuner 2.4 LEGENDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1119000,
    "mileage": 70625,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D0024V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45266",
    "title": "2014 Mercedes-Benz CLS-Class CLS250 Avantgarde CDI",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 799000,
    "mileage": 55000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2กส 3793",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-46.jpg"
    ],
    "views": 387,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45293",
    "title": "2019 Mercedes-Benz GLC-Class GLC 43 3.0 Coupe AMG 4Matic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 2020000,
    "mileage": 71000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "พย 2347",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-47.jpg"
    ],
    "views": 433,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45315",
    "title": "2015 Mercedes-Benz C-Class C300 BLUETECHYBRID AMG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 629000,
    "mileage": 89000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 6ขร 3968",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-48.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45341",
    "title": "2017 Mercedes-Benz E-Class E350e AMG Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 899000,
    "mileage": 139000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กส 9416",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-49.jpg"
    ],
    "views": 384,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45365",
    "title": "2021 Mercedes-Benz C-Class C220d AMG Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1399000,
    "mileage": 103000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กศ 2266",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-50.jpg"
    ],
    "views": 402,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45387",
    "title": "2017 Mercedes-Benz C-Class C350e 2.0 Exclusive",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 659000,
    "mileage": 118000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กฮ 7117",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-51.jpg"
    ],
    "views": 422,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45441",
    "title": "2019 BMW 7 Series 3.0 M Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1829000,
    "mileage": 130000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ศร 4242",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-53.jpg"
    ],
    "views": 417,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45462",
    "title": "2022 BMW 2 Series 2.0 Gran M Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1099000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฒ 285",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-54.jpg"
    ],
    "views": 415,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45548",
    "title": "2024 Mazda CX-30 2.0C SKYACTIV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 799000,
    "mileage": 20000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขข6362",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-57.jpg"
    ],
    "views": 444,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45569",
    "title": "2020 Volvo XC40 T5 Inscription 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 939000,
    "mileage": 77000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1ขท 4965",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-58.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45590",
    "title": "2014 Honda Odyssey 2.4 JP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 499000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1กม4516",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-59.jpg"
    ],
    "views": 436,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45611",
    "title": "2015 Mini Countryman 1.6 Look 2 R60",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 459000,
    "mileage": 86000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4กณ 4191",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-60.jpg"
    ],
    "views": 558,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45632",
    "title": "2021 Mazda CX-30 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 639000,
    "mileage": 93000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 1ขบ 4285",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-61.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45674",
    "title": "2020 Honda HRV 1.8 EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 499000,
    "mileage": 30000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 1ขญ2704",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-63.jpg"
    ],
    "views": 369,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45695",
    "title": "2012 Audi Q5 2.0 Quattro TFSI S Line",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 399000,
    "mileage": 158000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆต 9984",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-64.jpg"
    ],
    "views": 654,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45716",
    "title": "2019 Toyota Camry 2.0G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 699000,
    "mileage": 140000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "8กฬ9711",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-65.jpg"
    ],
    "views": 394,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45737",
    "title": "2018 Honda City 1.5 V+ i-VTEC",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 359000,
    "mileage": 50000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "7กว4997",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-66.jpg"
    ],
    "views": 413,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45758",
    "title": "2022 Ford Ranger 2.0 Double Cab 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 899000,
    "mileage": 100000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฆพ 98",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-67.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45788",
    "title": "2019 Toyota Hilux 2.4 ROCCO SMARTCAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 579000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2ฒม5595",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 435,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45814",
    "title": "2023 Toyota Yaris Cross 1.5 HEV PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 817000,
    "mileage": 13000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขศ1820",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-43.jpg"
    ],
    "views": 419,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45842",
    "title": "2021 Mitsubishi Outlander 2.4 GT PREMIUM 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 759000,
    "mileage": 74866,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2412",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 328,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45859",
    "title": "2020 Isuzu D-Max 1.9 Z HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 479000,
    "mileage": 10210,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0023",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 332,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45869",
    "title": "2020 Toyota Hilux 2.4 E PLUS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 549000,
    "mileage": 125919,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2183",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45883",
    "title": "2019 Toyota Hilux 2.4 J PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 419000,
    "mileage": 137000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2N0020",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45892",
    "title": "2008 Honda Civic 1.8 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2008,
    "price": 199000,
    "mileage": 143479,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1N0038V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 329,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45900",
    "title": "2019 Toyota Vellfire 2.5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1859000,
    "mileage": 131856,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0021",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 287,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45910",
    "title": "2021 Mitsubishi Pajero Sport 2.4 GT PREMIUM ELITE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 939000,
    "mileage": 88191,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2298",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 330,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45920",
    "title": "2023 Toyota Hilux 2.4 MID PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 679000,
    "mileage": 69107,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0007",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45943",
    "title": "2018 Toyota Commuter 3.0 D4D",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 779000,
    "mileage": 163439,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P1996",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 284,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45953",
    "title": "2021 Isuzu MU-X  3.0 ULTIMATE 2WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 869000,
    "mileage": 156930,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2398V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45963",
    "title": "2017 Toyota Innova 2.8 CRYSTA V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 609000,
    "mileage": 110946,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0009",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45973",
    "title": "2017 Toyota Innova  2.8 V CRYSTA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 569000,
    "mileage": 200854,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0041V",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "45996",
    "title": "2021 Mitsubishi Xpander 1.5 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 549000,
    "mileage": 125225,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0020",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46006",
    "title": "2021 Ford Ranger 2.2 XLT HI-RIDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 529000,
    "mileage": 136669,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0015",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 333,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46020",
    "title": "2019 Isuzu D-Max 3.0 Z-PRESTIGE HI-LANDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 519000,
    "mileage": 145382,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1P2102",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 341,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46032",
    "title": "2020 Toyota Hilux 2.4 Z EDITION J PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 499000,
    "mileage": 93949,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0012",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46043",
    "title": "2023 Nissan Almera 1.0 TURBO VL SPORTECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 489000,
    "mileage": 43279,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0006",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 327,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46080",
    "title": "2024 Toyota Hilux 2.4 Z EDITION ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 469000,
    "mileage": 44782,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0018",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 324,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46092",
    "title": "2020 Toyota Hilux SMARTCAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 439000,
    "mileage": 78239,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C0022",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46491",
    "title": "2016 Mercedes-Benz S-Class S500e AMG Premium AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 1399000,
    "mileage": 126000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขฬ 9177",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-55.jpg"
    ],
    "views": 405,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46513",
    "title": "2016 Mercedes-Benz E-Class E220d AMG W213 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 1259000,
    "mileage": 145000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 6ขร 4117",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-56.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46534",
    "title": "2018 Mercedes-Benz C-Class C350e Avantgarde W205 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 90000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขค 2917",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-62.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46555",
    "title": "2018 Mercedes-Benz GLE GLE500e 4Matic AMG Dynamic W166 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 1190000,
    "mileage": 89000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขฐ 6075",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-70.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46579",
    "title": "2017 Mercedes-Benz C-Class C350e Avantgarde W205 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 699000,
    "mileage": 107000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กส 6731",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-83.jpg"
    ],
    "views": 404,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46601",
    "title": "2017 Mercedes-Benz CLA-Class CLA250 AMG Dynamic [W117] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 799000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 6กษ 3966",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-89.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46622",
    "title": "2017 Mercedes-Benz CLA-Class CLA200 1.6 Urban W117 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 799000,
    "mileage": 54000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "กล 7986",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-93.jpg"
    ],
    "views": 412,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46643",
    "title": "2019 Mercedes-Benz GLC-Class GLC250d 4Matic AMG W253 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1499000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กส 6893",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/20-31.jpg"
    ],
    "views": 425,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46682",
    "title": "2019 BMW 5 Series 530e  M Sport G30 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1099000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 6ขร 2420",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-95.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46703",
    "title": "2019 BMW X Series X5 xDrive40e M Sport F15 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1099000,
    "mileage": 138000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ภม 7898",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-96.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46726",
    "title": "2022 BMW 4 Series 430i 2.0 M-Sport Coupe AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 2599000,
    "mileage": 28000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขน 3235",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-97.jpg"
    ],
    "views": 439,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46747",
    "title": "2015 BMW 3 Series 320d 2.0 Sport F30 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 659000,
    "mileage": 120000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 5กล 1989",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/8-95.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46769",
    "title": "2021 Honda Civic FC 1.8 EL AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 599000,
    "mileage": 46000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขช 7677",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/9-90.jpg"
    ],
    "views": 407,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46789",
    "title": "2015 Honda HRV 1.8E i-VTEC AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 359000,
    "mileage": 150000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 4กน9542",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-100.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46813",
    "title": "2018 Honda CR-V CR-V 2.4 EL AWD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 649000,
    "mileage": 106000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กณ 9163",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-101.jpg"
    ],
    "views": 394,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46835",
    "title": "2018 Honda HRV 1.8 RS AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 499000,
    "mileage": 185000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กษ 9387",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-102.jpg"
    ],
    "views": 403,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46856",
    "title": "2020 Isuzu D-Max 3.0 Ddi M Hi-Lander CAB 4 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 629000,
    "mileage": 110,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 3กฮ 7117",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-103.jpg"
    ],
    "views": 395,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46878",
    "title": "2023 Mitsubishi Xpander 1.5GT Minorchange AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 579000,
    "mileage": 10000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " กม2983",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-104.jpg"
    ],
    "views": 381,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46900",
    "title": "2021 Toyota Corrola Altis 1.8 Hybrid Smart AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 519000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขก9367",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-105.jpg"
    ],
    "views": 409,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46925",
    "title": "2019 Toyota Hilux 2.8 PRERUNNER AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 629000,
    "mileage": 120000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 4ขฮ7948",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-106.jpg"
    ],
    "views": 398,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46947",
    "title": "2015 Toyota Harrier 2.5 Hybrid Premium AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 639000,
    "mileage": 159000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 4กต 554",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-107.jpg"
    ],
    "views": 490,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46971",
    "title": "2021 Toyota Alphard 2.5 S C-Package AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1899000,
    "mileage": 118000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ฎก 6644",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-108.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "46995",
    "title": "2018 Volvo XC60 Recharge T8 R-Design AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 935000,
    "mileage": 121000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 7กร 8457",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-109.jpg"
    ],
    "views": 401,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47018",
    "title": "2023 Mercedes-Benz A-Class 1.3 AMG Dynamic W177 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1299000,
    "mileage": 29000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 6ขท 9412",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-110.jpg"
    ],
    "views": 411,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47044",
    "title": "2015 BMW X Series Drive18i M Sport E84 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 419000,
    "mileage": 117000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 3ขฆ 5843",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47068",
    "title": "2021 Mercedes-Benz C-Class C300e Avantgarde W205 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 899000,
    "mileage": 101010,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 8กย 473",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-112.jpg"
    ],
    "views": 417,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47090",
    "title": "2012 Toyota Fortuner 3.0 V AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 459000,
    "mileage": 293000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 6ขภ 7553",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-113.jpg"
    ],
    "views": 396,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47122",
    "title": "2022 Haval H6 1.5 HEV Ultra AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 579000,
    "mileage": 82000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ศธ 882",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-114.jpg"
    ],
    "views": 392,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47143",
    "title": "2022 Haval H6 1.5 HEV Ultra AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 599000,
    "mileage": 92000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 3ขง 7313",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-115.jpg"
    ],
    "views": 408,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47164",
    "title": "2012 Porsche Cayenne 3.0 Diesel 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 1899000,
    "mileage": 104000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขว 1969",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-116.jpg"
    ],
    "views": 939,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47185",
    "title": "2021 Lexus LM300h 2.5 Executive 7 Seater AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 2999000,
    "mileage": 118000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขช 1354",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-117.jpg"
    ],
    "views": 427,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47206",
    "title": "2022 Hyundai Staria 2.2 S AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1059000,
    "mileage": 80000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ฮฐ 95",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-118.jpg"
    ],
    "views": 383,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47230",
    "title": "2016 Hyundai H-1 2.5 Limited AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 625000,
    "mileage": 195000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ฮว 4442",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/11-41.jpg"
    ],
    "views": 399,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47251",
    "title": "2016 Hyundai H-1 Deluxe AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 599000,
    "mileage": 132000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " ฮว 8124",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-119.jpg"
    ],
    "views": 379,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47272",
    "title": "2017 Ford Everest 3.2 Titanium+ 4WD AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 579000,
    "mileage": 139000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2ขจ 2173",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-120.jpg"
    ],
    "views": 429,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47290",
    "title": "2021 Toyota Corolla Cross 1.8 PREMIUM AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 699000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 1ขย1506",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-121.jpg"
    ],
    "views": 438,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47311",
    "title": "2013 BMW X Series 2.0 xDrive20d Highline AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 459000,
    "mileage": 200000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 1กล3336",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-122.jpg"
    ],
    "views": 426,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47333",
    "title": "2020 BMW 3 Series 2.0 M-Sport AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 949000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 9กร8366",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/6-117.jpg"
    ],
    "views": 531,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47354",
    "title": "2019 BMW 5 Series M Sport G30 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1099000,
    "mileage": 95000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 2กฮ 6999",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-124.jpg"
    ],
    "views": 428,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47375",
    "title": "2015 BMW X Series sDrive18i M Sport E84 AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 419000,
    "mileage": 117000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 3ขฆ 5843",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/9-114.jpg"
    ],
    "views": 410,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47397",
    "title": "2014 BMW X Series xDrive20d RHD M-Sport [F26] AT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 899000,
    "mileage": 141000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": " 5กว 3197",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2025/08/1-126.jpg"
    ],
    "views": 421,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47417",
    "title": "2020 Isuzu D-Max HI-LANDER CAB-4 3.0 Ddi M",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 549000,
    "mileage": 209170,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D084",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47433",
    "title": "2013 BMW Z Series Z4 2.5 SDRIVE23I RHD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 989000,
    "mileage": 152660,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D686",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 347,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47468",
    "title": "2020 BMW 5 Series 530e 2.O ELITE G30",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 899000,
    "mileage": 138653,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D688",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47508",
    "title": "2017 Honda Civic 1.8 EL FC-FK",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 459000,
    "mileage": 259000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5C022",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 318,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47549",
    "title": "2015 Hyundai Grand Starex 2.5 VIP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 689000,
    "mileage": 191907,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6B075",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47711",
    "title": "2015 Porsche Macan  2.0",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 1649000,
    "mileage": 129757,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6A812",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47734",
    "title": "2018 Toyota Hilux REVO 2.4 E PRERUNNER SMART CAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 379000,
    "mileage": 118064,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D721",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 300,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47758",
    "title": "2019 Mitsubishi Triton 2.4 GT PLUS DOUBLE CAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 459000,
    "mileage": 239002,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D756",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47798",
    "title": "2020 Nissan Almera 1.0 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 359000,
    "mileage": 73400,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A852",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47820",
    "title": "2016 Honda City 1.5 S CNG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 209000,
    "mileage": 417819,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2A984",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47839",
    "title": "2021 Toyota Fortuner 2.4 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 879000,
    "mileage": 123700,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A853",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 329,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47859",
    "title": "2017 Toyota Hilux 2.4 J PLUS DOUBLE CAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 339000,
    "mileage": 150100,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A856",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 302,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47882",
    "title": "2021 Toyota Hilux REVO 2.4 MID SMART CAB PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 444000,
    "mileage": 204387,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2A951",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 298,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47903",
    "title": "2019 Honda BR-V 1.5 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 470000,
    "mileage": 113587,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2A949",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47921",
    "title": "2019 Honda BR-V 1.5 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 384000,
    "mileage": 153000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B378",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 320,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47937",
    "title": "2020 Toyota Yaris ECO 1.2 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 339000,
    "mileage": 78000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B810",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47957",
    "title": "2022 Mercedes-Benz C-Class C300e AMG DYNAMIC W205",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 989000,
    "mileage": 127801,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6A556",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "47980",
    "title": "2021 Toyota Hilux REVO 2.4 MID SMART CAB PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 494000,
    "mileage": 74328,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D567",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48004",
    "title": "2020 Suzuki Ertiga 1.5 GL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 334000,
    "mileage": 95785,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D706",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 316,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48026",
    "title": "2023 Nissan Kicks 1.2 AUTECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 624000,
    "mileage": 58986,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D438",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 300,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48048",
    "title": "2022 Toyota Corolla Cross 1.8 HYBRID PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 684000,
    "mileage": 67978,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D523",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 375,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48064",
    "title": "2020 Toyota Hilux 2.4 ENTRY SMART CAB PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 489000,
    "mileage": 120247,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D700",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 299,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48088",
    "title": "2016 Ford Everest 2.2 TITANIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 489000,
    "mileage": 368349,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D725",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 297,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48109",
    "title": "2012 BMW X Series 2.0 S Drive18i E84",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 319000,
    "mileage": 77629,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D560",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 327,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48131",
    "title": "1997 Honda Accord 2.2 EXi",
    "brand": "Toyota",
    "model": "Camry",
    "year": 1997,
    "price": 39000,
    "mileage": 271197,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D629",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 294,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48152",
    "title": "2019 Toyota Hilux 2.4 E SMART CAB PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 384000,
    "mileage": 149240,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D596",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48173",
    "title": "2011 BMW X Series X1 2.0 S Drive18i E84",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2011,
    "price": 329000,
    "mileage": 204931,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D834",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 328,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48200",
    "title": "2017 Suzuki Ciaz 1.25 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 254000,
    "mileage": 102767,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D783",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 319,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48222",
    "title": "2013 Suzuki Swift 1.25 GLX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 179000,
    "mileage": 151423,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D776",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 309,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48245",
    "title": "2019 Mercedes-Benz CLA-Class 250 2.0 AMG NIGHT Edition W117",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 979000,
    "mileage": 83510,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D940",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 333,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48271",
    "title": "2020 Honda City  1.0 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 384000,
    "mileage": 82096,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D476",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48313",
    "title": "2024 Honda City 1.0 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 559000,
    "mileage": 17000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5C090",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 328,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48334",
    "title": "2021 Mitsubishi Triton 2.5 GLX MEGA CAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 314000,
    "mileage": 37771,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D787",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48356",
    "title": "2019 Suzuki Swift 1.2 GLX",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 279000,
    "mileage": 137372,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D759",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 336,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48379",
    "title": "2020 Honda City 1.0 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 384000,
    "mileage": 98144,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D703",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48400",
    "title": "2018 Toyota Camry 2.5 HV PREMIUM",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 814000,
    "mileage": 83569,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D377",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48422",
    "title": "2016 Suzuki Ciaz 1.25 RS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 214000,
    "mileage": 193841,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D426",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 318,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48443",
    "title": "2020 Toyota Sienta 1.5V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 464000,
    "mileage": 121113,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D181",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 304,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48464",
    "title": "2021 Toyota Hilux 2.4 MID SMART CAB PRERUNNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 494000,
    "mileage": 74328,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D567",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 291,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48485",
    "title": "2023 Nissan Kicks 1.2 AUTECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 624000,
    "mileage": 58986,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D438",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48507",
    "title": "2021 Toyota Corolla Cross 1.8 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 564000,
    "mileage": 183000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A808",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 315,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48531",
    "title": "2018 Ford Everest 2.0 TURBO TITANIUM PLUS 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 689000,
    "mileage": 83900,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A708",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48554",
    "title": "2018 Nissan March 1.2 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 219000,
    "mileage": 86000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A791",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48575",
    "title": "2017 Honda Jazz 1.5 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 344000,
    "mileage": 86000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B024",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 314,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48596",
    "title": "2023 Isuzu D-Max 1.9 L X-SERIES CAB-4",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 559000,
    "mileage": 26000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A886",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 317,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48617",
    "title": "2016 Toyota Alphard 2.5 HYBRID X E-FOUR",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 1219000,
    "mileage": 180000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A811",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48638",
    "title": "2016 Mitsubishi Pajero 2.4 GT Premium 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 524000,
    "mileage": 322000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A916",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48659",
    "title": "2013 Toyota Fortuner  3.0 v",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 474000,
    "mileage": 210000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B022",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 324,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48718",
    "title": "2022 Isuzu D-Max 1.9 Ddi L DA HI-LANDER SPACECAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 444000,
    "mileage": 98704,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B828",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48740",
    "title": "2021 Toyota Fortuner 2.4 LEGENDER BLACK TOP 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1109000,
    "mileage": 138000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B676",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 306,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48762",
    "title": "2019 Nissan Terra 2.3 VL 2WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 559000,
    "mileage": 181000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B433",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48785",
    "title": "2016 Nissan X-Trail 2.0 E HYBRID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 314000,
    "mileage": 172000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B646",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48808",
    "title": "2019 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 664000,
    "mileage": 132000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B765",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 308,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48831",
    "title": "2017 Mazda 2 1.3 Sports High Plus",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 284000,
    "mileage": 224000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B931",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48854",
    "title": "2020 Mazda CX-30 2.0 C",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 484000,
    "mileage": 156000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B441",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48876",
    "title": "2015 Toyota Hilux VIGO 2.5 G PRERUNNER X-TRA CAB/SMAR",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 319000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B789",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 292,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48897",
    "title": "2016 Toyota Yaris ECO 1.2 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 254000,
    "mileage": 173000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B766",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48920",
    "title": "2019 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 414000,
    "mileage": 173000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B480",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48942",
    "title": "2022 Honda Civic 1.5 RS FE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 774000,
    "mileage": 159000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B826",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48968",
    "title": "2020 Mitsubishi Pajero Sport 2.4 GT Premium 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 774000,
    "mileage": 133000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B995",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 476,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "48989",
    "title": "2016 Mazda CX-5 2.2 XDL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 339000,
    "mileage": 106000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B853",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49010",
    "title": "2018 Mitsubishi Pajero 2.4 GT Premium 2WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 624000,
    "mileage": 208000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B631",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 318,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49034",
    "title": "2019 Toyota Camry 2.0 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 624000,
    "mileage": 180000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B779",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49057",
    "title": "2024 Toyota Yaris ECO 1.2 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 419000,
    "mileage": 11000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B486",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49083",
    "title": "2017 Toyota Hilux REVO 2.4 J PLUS SMART CAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 294000,
    "mileage": 115000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B550",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 296,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49106",
    "title": "2006 Mitsubishi Space Wagon 2.4 GLS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2006,
    "price": 134000,
    "mileage": 315000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B756",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 289,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49129",
    "title": "2022 Toyota Corolla Cross 1.8 HYBRID GR SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 824000,
    "mileage": 104000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B834",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 316,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49158",
    "title": "2013 Chevrolet Trailblazer 2.5 LT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 249000,
    "mileage": 315000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2B018",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 293,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49206",
    "title": "1996 Mercedes-Benz C-Class C200 CLASSIC W202",
    "brand": "Toyota",
    "model": "Camry",
    "year": 1996,
    "price": 74000,
    "mileage": 116000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B974",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 331,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49229",
    "title": "2022 Honda City 1.0 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 469000,
    "mileage": 26000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B952",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 318,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49253",
    "title": "2005 Volvo S80 2.4 D5",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2005,
    "price": 129000,
    "mileage": 306000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B088",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49276",
    "title": "2015 Suzuki Swift 1.2 GA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 189000,
    "mileage": 221000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B920",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49301",
    "title": "2015 Toyota Hilux VIGO 2.5 E SMARTCAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 334000,
    "mileage": 152000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B838",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49322",
    "title": "2019 Honda BR-V 1.5 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 454000,
    "mileage": 125000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B965",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49344",
    "title": "2020 Honda HRV 1.8 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 404000,
    "mileage": 248000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B422",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 316,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49371",
    "title": "2016 Mazda CX-3 2.0 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 319000,
    "mileage": 108000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B772",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 301,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49393",
    "title": "2021 Honda Civic 1.5 EL+ FE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 674000,
    "mileage": 84000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B627",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 334,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49419",
    "title": "2023 Toyota Yaris Ativ 1.2 SMART",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 449000,
    "mileage": 73629,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D972",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49441",
    "title": "2023 Honda CR-V 1.5 ES 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1119000,
    "mileage": 20000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A708",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 323,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49462",
    "title": "2020 Honda Accord 2.0 HYBRID TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 749000,
    "mileage": 224607,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1E036",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 318,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49485",
    "title": "2008 Toyota Innova 2.0 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2008,
    "price": 109000,
    "mileage": 310000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A833",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 290,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49510",
    "title": "2018 Toyota Yaris ATIV 1.2 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 339000,
    "mileage": 93000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A794",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 302,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49534",
    "title": "2021 Honda CR-V 2.4 ES",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 759000,
    "mileage": 143000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A701",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49557",
    "title": "2017 Isuzu D-Max 1.9 Ddi Z-Prestige HI-LANDER SPACECAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 419000,
    "mileage": 180094,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D949",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 295,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49581",
    "title": "2009 Toyota Fortuner 3.0 [V]",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2009,
    "price": 314000,
    "mileage": 465000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A997",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49603",
    "title": "2014 Toyota Hilux VIGO 2.5 E PRERUNNER X-TRA CAB/SMART",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 299000,
    "mileage": 166841,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D950",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 289,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49625",
    "title": "2019 Toyota Camry 2.5 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 664000,
    "mileage": 200000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A807",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49649",
    "title": "2019 Isuzu D-Max 1.9 Ddi S SPACECAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 314000,
    "mileage": 147000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A707",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 302,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49673",
    "title": "2019 Ford Everest 2.0 TURBO TITANIUM PLUS",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 624000,
    "mileage": 255000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3A813",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 314,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49695",
    "title": "2021 Toyota Vios  1.5 MID",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 379000,
    "mileage": 140000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B091",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49716",
    "title": "2017 Toyota Corrola Altis 1.6 G",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 279000,
    "mileage": 482514,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6B136",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 318,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49738",
    "title": "2020 Chevrolet Trailblazer 2.5 LT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 484000,
    "mileage": 142000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B895",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 599,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49759",
    "title": "2020 Chevrolet Trailblazer 2.5 LT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 459000,
    "mileage": 178000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B958",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49781",
    "title": "2019 Mitsubishi Pajero 2.4 GT Premium Elite Editon",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 629000,
    "mileage": 228000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2B010",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 307,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49804",
    "title": "2015 Suzuki Ciaz 1.2 [GLX]",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 194000,
    "mileage": 87543,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2B002",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 322,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49825",
    "title": "2017 BMW 5 Series 528i M SPORT F10",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 670000,
    "mileage": 249000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B512",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 321,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49847",
    "title": "2021 Toyota Fortuner 2.4 LEGENDER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 1049000,
    "mileage": 202000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B079",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 322,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49870",
    "title": "2016 Toyota Hilux REVO 2.8 J PLUS STANDARD CAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 309000,
    "mileage": 106000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B076",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 293,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49893",
    "title": "2016 Toyota Hilux REVO 2.4 E PRERUNNER DOUBLE CAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 414000,
    "mileage": 94800,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A634",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 297,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49916",
    "title": "2023 Isuzu D-Max  1.9 Ddi S SPACECAB",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 459000,
    "mileage": 64000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B067",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49940",
    "title": "2020 Toyota Sienta 1.5V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 530000,
    "mileage": 82000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B068",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49962",
    "title": "2013 Toyota Fortuner 3.0 [V]",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 499000,
    "mileage": 293000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B063",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 313,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "49984",
    "title": "2022 Isuzu MU-X 3.0 ULTIMATE 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 959000,
    "mileage": 76000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B074",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 305,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50005",
    "title": "2009 Toyota Fortuner 2.7 V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2009,
    "price": 299000,
    "mileage": 257000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3B065",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 322,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50026",
    "title": "2017 Mitsubishi Pajero 2.4 GT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 564000,
    "mileage": 160800,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A823",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 303,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50049",
    "title": "2013 Nissan Sylphy 1.6 E",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 154000,
    "mileage": 202600,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A779",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 302,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50073",
    "title": "2013 Honda CR-V 2.4 EL 4WD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 344000,
    "mileage": 162661,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "2A973",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 310,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50097",
    "title": "2018 Honda Accord 2.0 HYBRID TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 594000,
    "mileage": 188900,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4A773",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 345,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50119",
    "title": "2021 Mazda BT-50 1.9 S FREESTYLE CAB-HI-RACER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 434000,
    "mileage": 45000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B758",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50142",
    "title": "2019 Honda BR-V 1.5 SV",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 419000,
    "mileage": 152000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B479",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 333,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50165",
    "title": "2020 BMW Z Series Z4 3.0 M40i",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 2839000,
    "mileage": 22728,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1C979",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 385,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50187",
    "title": "2018 Suzuki Swift 1.2 GL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 269000,
    "mileage": 138000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B829",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 346,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50209",
    "title": "2016 Nissan March 1.2 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 149000,
    "mileage": 193226,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D959",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 337,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50230",
    "title": "2021 Toyota Corolla Cross 1.8 SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 549000,
    "mileage": 188000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B750",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 360,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50251",
    "title": "2020 Toyota Yaris ECO 1.2 ENTRY",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 299000,
    "mileage": 71000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B528",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50272",
    "title": "2020 Nissan Almera 1.0 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 394000,
    "mileage": 148000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B827",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 447,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50293",
    "title": "2014 Toyota Hilux VIGO 2.5 E TRD SPOTIVO CAB PRERUNER",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 379000,
    "mileage": 195645,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1D935",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50314",
    "title": "2019 Chevrolet Trailblazer 2.5 LT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 464000,
    "mileage": 128000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B954",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 484,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50335",
    "title": "2016 Mazda CX-3 2.0 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 339000,
    "mileage": 153000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B661",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 343,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50356",
    "title": "2021 Toyota Innova 2.8 CRYSTA",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 664000,
    "mileage": 155000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B778",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 356,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50378",
    "title": "2022 Hyundai Staria 2.2 SEL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 1019000,
    "mileage": 101000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B651",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 706,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50399",
    "title": "2018 Kia Carnival 2.2 SXL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 704000,
    "mileage": 184000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B660",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 312,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50420",
    "title": "2019 Honda Accord 1.5 TURBO EL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 649000,
    "mileage": 187000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B604",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 326,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50441",
    "title": "2024 Hyundai H-1 2.5 ELITE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 1049000,
    "mileage": 24000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B688",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 311,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50462",
    "title": "2023 Honda Civic 1.5 EL+ FE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 709000,
    "mileage": 82000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B746",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 344,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50484",
    "title": "2018 Suzuki Swift 1.2 GL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 269000,
    "mileage": 136000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B809",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 339,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50505",
    "title": "2021 Suzuki Swift 1.2 GL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 299000,
    "mileage": 29000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B596",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 325,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50528",
    "title": "2012 Toyota Hilux 2.7 J",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 134000,
    "mileage": 248000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5B991",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 318,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50549",
    "title": "2020 Mazda CX-8 2.5 SP",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 699000,
    "mileage": 139185,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1E072",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 320,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50574",
    "title": "2022 MG HS 1.5 X SUNROOF",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2022,
    "price": 419000,
    "mileage": 48158,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "1E070",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 314,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50878",
    "title": "2019 Mercedes-Benz C-Class C220d Avantgard",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 899000,
    "mileage": 134000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "5ขย 8728",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2026/02/1-1.jpg"
    ],
    "views": 306,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50897",
    "title": "2023 Mercedes-Benz GLA-Class GLA 200 AMG Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2023,
    "price": 1199000,
    "mileage": 89000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "4ขอ 921",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2026/02/3-2.jpg"
    ],
    "views": 379,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50918",
    "title": "2020 Mercedes-Benz A-Class A200 AMG Dynamic",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 959000,
    "mileage": 40000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "9กย 4909",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2026/02/4-3.jpg"
    ],
    "views": 381,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50941",
    "title": "2014 BMW 3 Series 320d Luxury F30",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 599000,
    "mileage": 138000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "3กว 8700",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2026/02/6-4.jpg"
    ],
    "views": 434,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "50972",
    "title": "2017 BMW 3 Series 320d GT SPORT F34",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 739000,
    "mileage": 126000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "6กท 2465",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://wowcar.co.th/wp-content/uploads/2026/02/1.jpg"
    ],
    "views": 688,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51651",
    "title": "2010 Mercedes-Benz E-Class E350 CDI Coupe Limited",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2010,
    "price": 769000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE027",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 446,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51671",
    "title": "2011 Toyota Corrola Altis 1.6E CNG",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2011,
    "price": 169000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE035",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 138,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51682",
    "title": "2015 Nissan Elgrand Highway Star",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 999000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE034",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 205,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51694",
    "title": "2014 Volkswagen Caravelle COMFORT EDITION",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 699000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE033",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 113,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51706",
    "title": "2017 Volvo XC60 D4",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 700000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE032",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 113,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51721",
    "title": "2017 Volvo S80 D4 Sunroof",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 499000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE31",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 158,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51738",
    "title": "2013 Volvo XC90  D5 AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 499000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "ope030",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 111,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51755",
    "title": "2013 Volvo S80 D4 Inscription Edition",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 499000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE029",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 118,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51772",
    "title": "2015 Volvo S80 D4",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 399000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE028",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 110,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51789",
    "title": "2015 Nissan X-Trail 2.5 VL",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 400000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE026",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 121,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51809",
    "title": "2014 Toyota Land Cruiser Prado 2.7L",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 999000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE025",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 106,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51826",
    "title": "2014 BMW 3 Series 316i F30",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 479000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE024",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 108,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51841",
    "title": "2012 Volvo XC90 D5 AWD Diesel",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2012,
    "price": 399000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE023",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 99,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51857",
    "title": "2019 Mercedes-Benz CLS-Class 300d AMG Premium",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2019,
    "price": 1790000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE022",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 151,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51859",
    "title": "2014 Volkswagen Caravelle 2.0TDi Facelift 11 Seater",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 599000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE21",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 98,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51862",
    "title": "2016 BMW 3 Series 320D (F30) LCI",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 699000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE019",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 102,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51866",
    "title": "2015 Volvo S80 D4",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2015,
    "price": 499000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE18",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 99,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51869",
    "title": "2009 Toyota Land Cruiser VX 200 Limited Edition",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2009,
    "price": 1699000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE17",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 189,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51872",
    "title": "2017 Volvo XC60 D4 AWD",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 599000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE16",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 179,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51876",
    "title": "2009 Toyota Vellfire 3.5L",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2009,
    "price": 599000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE14",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 109,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51983",
    "title": "2018 Volvo S60 D4 Diesel",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 499000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE001",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 114,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51986",
    "title": "2017 Lexus NX300h F Sport",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 999000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE002",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 111,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51996",
    "title": "2018 Ford Everest TITANIUM 6AT TURBO 4x4",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 699000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "003",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 160,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "51999",
    "title": "2013 BMW 3 Series 320d SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 549000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "0PE003",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 110,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52006",
    "title": "2017 Ford Everest Titanium 4×4",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2017,
    "price": 699000,
    "mileage": 64000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE005",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 118,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52011",
    "title": "2018 BMW X Series X1 18d M Sport Limited",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2018,
    "price": 669000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE006",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 107,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52015",
    "title": "2016 Mini Countryman High",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2016,
    "price": 399000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE007",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 108,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52020",
    "title": "2021 Hyundai KONA Electric SE",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2021,
    "price": 399000,
    "mileage": 70000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE008",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 112,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52097",
    "title": "2009 Toyota Alphard 2.4V",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2009,
    "price": 599000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE009",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 109,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52100",
    "title": "2013 BMW X Series X6 x Drive 30d LCi SPORT",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 999000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE010",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 202,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52105",
    "title": "2011 Mini One 1.6L",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2011,
    "price": 399000,
    "mileage": 97000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE011",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 106,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52109",
    "title": "2014 BMW 3 Series 320i (F30) LCI",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 499000,
    "mileage": 110000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE12",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 119,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52116",
    "title": "2013 Volvo V40 T5 S",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2013,
    "price": 399000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE013",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 105,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52122",
    "title": "2014 Lexus ES300H Hybrid",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2014,
    "price": 799000,
    "mileage": 99000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "OPE14",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 106,
    "location": "กรุงเทพมหานคร",
    "featured": true,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  },
  {
    "id": "52235",
    "title": "2020 Honda Accord 2.0 HYBRID TECH",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "price": 749000,
    "mileage": 201000,
    "body_type": "รถเก๋ง",
    "fuel": "เบนซิน",
    "transmission": "เกียร์อัตโนมัติ",
    "color": "สีขาว",
    "engine": "2.0L",
    "plate": "SIR001",
    "badges": [
      "ฟรีดาวน์"
    ],
    "images": [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200"
    ],
    "views": 33,
    "location": "กรุงเทพมหานคร",
    "featured": false,
    "dealer": {
      "name": "WowCar Premium Dealership",
      "phone": "(+66) 094-351-6600",
      "line": "@wowcar",
      "verified": true,
      "rating": 4.9,
      "location": "กรุงเทพมหานคร"
    }
  }
];
