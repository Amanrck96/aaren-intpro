import type { Metadata } from "next";
import BrandsClient from "./BrandsClient";

export const metadata: Metadata = {
  title: "Premium Brand Partners",
  description: "Explore 500+ premium brand partners represented by Aaren International Pro - surfaces, hardware, kitchen, bathroom, and more.",
};

export default function BrandsPage() {
  return <BrandsClient />;
}
