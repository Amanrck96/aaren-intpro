import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Answers to common questions about Aaren International Pro products, services, delivery, and showroom.",
};

export default function FAQPage() {
  return <FAQClient />;
}
