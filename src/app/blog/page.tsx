import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog - Design Insights & Material Trends",
  description: "Expert articles on luxury interiors, premium building materials, design trends, and project inspiration from Aaren International Pro.",
};

export default function BlogPage() {
  return <BlogClient />;
}
