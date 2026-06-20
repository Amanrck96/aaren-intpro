import type { Metadata } from "next";
import CompareClient from "./CompareClient";

export const metadata: Metadata = {
  title: "Product Comparison",
  description: "Compare premium building material categories side by side at Aaren International Pro.",
};

export default function ComparePage() {
  return <CompareClient />;
}
