import React from "react";
import { CARS_DATA } from "@/data/cars";
import ListingDetailClient from "./ListingDetailClient";

export function generateStaticParams() {
  return CARS_DATA.map((car) => ({
    id: String(car.id),
  }));
}

export default function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ListingDetailClient params={params} />;
}
