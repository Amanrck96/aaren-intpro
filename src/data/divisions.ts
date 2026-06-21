export interface Subdivision {
  name: string;
  brands: string[];
}

export interface Division {
  id: string;
  name: string;
  subdivisions: Subdivision[];
}

export const divisionsData: Division[] = [
  {
    id: "plywood",
    name: "Plywood",
    subdivisions: [
      { name: "Plywood", brands: ["PEEL PLY"] },
      { name: "Blockboard", brands: ["PEEL PLY"] },
    ],
  },
  {
    id: "decorative-surfaces",
    name: "Decorative Surfaces",
    subdivisions: [
      { name: "Veneers", brands: ["INCLASS", "ALPI"] },
      { name: "Laminates", brands: ["INCLASS"] },
      { name: "Decoratives", brands: ["INCLASS"] },
    ],
  },
  {
    id: "cladding-decking",
    name: "Cladding & Decking",
    subdivisions: [
      { name: "Wood", brands: ["Thermory", "Tali Deck"] },
      { name: "WPC", brands: ["NEWTECH"] },
    ],
  },
  {
    id: "wooden-flooring",
    name: "Wooden Flooring",
    subdivisions: [
      { name: "Solid", brands: ["Curated"] },
      { name: "Laminated", brands: ["Unique"] },
      { name: "SPC", brands: ["Becker"] },
      { name: "Engineered", brands: ["Mafi"] },
      { name: "Designer", brands: ["Parkavanue"] },
    ],
  },
  {
    id: "screens",
    name: "Screens",
    subdivisions: [
      { name: "Zipline", brands: ["Freedom Screen"] },
    ],
  },
  {
    id: "doors-windows",
    name: "Doors + Windows",
    subdivisions: [
      { name: "Wooden Doors", brands: ["Slashform D+W"] },
      { name: "Laminated Doors", brands: ["Slashform D+W"] },
      { name: "Wooden Windows", brands: ["Slashform D+W"] },
      { name: "Aluminum Windows", brands: ["Slashform D+W"] },
    ],
  },
  {
    id: "kitchen-wardrobe",
    name: "Kitchen & Wardrobe",
    subdivisions: [
      { name: "K+W", brands: ["Slashform K+W"] },
    ],
  },
  {
    id: "hardware",
    name: "Hardware",
    subdivisions: [
      { name: "Custom Hardware", brands: [] },
    ],
  },
  {
    id: "doors-partitions",
    name: "Doors + Partitions",
    subdivisions: [
      { name: "Aluminum System", brands: ["WALTZ by JB G"] },
    ],
  },
  {
    id: "ffne",
    name: "FFNE",
    subdivisions: [
      { name: "Furniture", brands: ["Madheke", "Tammma"] },
      { name: "Millwork", brands: ["LOCO"] },
      { name: "Lighting", brands: [] },
      { name: "Decorative Lighting", brands: [] },
      { name: "Arteffects", brands: [] },
      { name: "Carpets", brands: [] },
    ],
  },
  {
    id: "bagno-tiles",
    name: "Bagno - Tiles",
    subdivisions: [
      { name: "Floorings & Walls", brands: [] },
      { name: "Decorative", brands: [] },
      { name: "20mm", brands: [] },
      { name: "Terrazzo & Terracotta", brands: ["Tempesta"] },
      { name: "Swimming Pool", brands: ["Wow"] },
      { name: "Façade", brands: [] },
    ],
  },
  {
    id: "bagno-sf",
    name: "Bagno - S+F",
    subdivisions: [
      { name: "Sanitaryware & Fittings", brands: ["FIMA", "IWW", "FALPER", "ANTONIOLUPI", "MILDUE", "FLAMINIA"] },
    ],
  },
  {
    id: "bagno-wellness",
    name: "Bagno - Wellness",
    subdivisions: [
      { name: "TUB", brands: ["BULLFROG"] },
      { name: "STEAM", brands: [] },
    ],
  },
  {
    id: "bagno-ma",
    name: "Bagno - M+A",
    subdivisions: [
      { name: "Mirrors", brands: ["Mira"] },
      { name: "Accessories", brands: ["GELLI"] },
    ],
  },
];
