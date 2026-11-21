import { Figma } from "@/svgs/technologies/Figma";
import { JavaScript } from "@/svgs/technologies/JavaScript";
import { NextJs } from "@/svgs/technologies/NextJs";
import { PostgreSQL } from "@/svgs/technologies/PSQL";
import { Python } from "@/svgs/technologies/Python";
import { ReactIcon } from "@/svgs/technologies/ReactIcon";
import { TailwindCss } from "@/svgs/technologies/TailwindCss";
import { TypeScript } from "@/svgs/technologies/TypeScript";

// Bil has no professional job yet — student + project experience only.
export const experience = [
  {
    id: 1,
    company: "Universitas Cendekia Abditama (UCA)",
    post: "Informatics Student",
    description:
      "Bachelor's in Informatics (Teknik Informatika), class 3TI01, semester 5. Building full-stack web apps, IoT hardware, and motion-graphics video alongside coursework.",
    duration: "2024 - Present",
    place: "Tangerang, Indonesia",
    points: [
      "Building full-stack web apps with Next.js, React, and Supabase.",
      "Building an ESP32 + TFT companion display that shows maps and trip info for ojol drivers.",
      "Producing motion-graphics videos and animations for coursework.",
    ],
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "TypeScript", icon: TypeScript },
      { name: "Python", icon: Python },
      { name: "Figma", icon: Figma },
    ],
  },
  {
    id: 2,
    company: "Warlok — Fandom Community Website",
    post: "Full-Stack Developer (Solo Project)",
    description:
      "A fandom community website for novels, fanart, and comics — Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and Supabase Auth with Row Level Security.",
    duration: "Nov 2026 - Present",
    place: "Remote",
    points: [
      "Built auth with Supabase (email + Google) and protected dashboard/upload pages.",
      "Designed the database: 16 tables, 52 RLS policies, profile trigger, Storage buckets.",
      "Built the novel module: Tiptap editor, reader mode, drafts, chapter reorder, covers.",
    ],
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "TypeScript", icon: TypeScript },
      { name: "Tailwind CSS", icon: TailwindCss },
      { name: "Supabase", icon: PostgreSQL },
    ],
  },
  {
    id: 3,
    company: "IoT Ojol Navigation — ESP32 + TFT Display",
    post: "Embedded & Full-Stack Developer",
    description:
      "An ESP32 with a 2.4-inch TFT touchscreen on a motorbike handlebar, showing the map and trip info from the driver's phone over BLE and Wi-Fi.",
    duration: "Oct 2026 - Present",
    place: "Tangerang, Indonesia",
    points: [
      "Split the link by size: BLE for small data and control, Wi-Fi for JPEG map frames.",
      "Debugged the map stream with measurements: a weak Wi-Fi link (RSSI -60 to -73 dBm), not the timeout, caused incomplete frames.",
      "Flutter companion app sends the map and trip info; the ESP32 displays it.",
    ],
    technologies: [
      { name: "Python", icon: Python },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: ReactIcon },
    ],
  },
];
