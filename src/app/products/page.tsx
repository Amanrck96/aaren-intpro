import type { Metadata } from "next";
import ProductsClient from "@/app/products/ProductsClient";

export const metadata: Metadata = {
  title: "Product Divisions & Categories",
  description: "Browse the extensive range of premium luxury building materials and interior solutions offered by Aaren International Pro.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
