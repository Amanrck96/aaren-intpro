import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Luxury Project Portfolio",
  description: "Explore our portfolio of luxury residential, commercial, hospitality, and corporate interior projects across India.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
