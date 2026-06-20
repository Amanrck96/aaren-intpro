import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Aaren International Pro - showroom in Bengaluru, phone +91 888 446 4444, email info@aarenintpro.com.",
};

export default function ContactPage() {
  return <ContactClient />;
}
