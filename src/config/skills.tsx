import { Figma } from "@/svgs/technologies/Figma";
import { JavaScript } from "@/svgs/technologies/JavaScript";
import { NextJs } from "@/svgs/technologies/NextJs";
import { PostgreSQL } from "@/svgs/technologies/PSQL";
import { Python } from "@/svgs/technologies/Python";
import { ReactIcon } from "@/svgs/technologies/ReactIcon";
import { TailwindCss } from "@/svgs/technologies/TailwindCss";
import { TypeScript } from "@/svgs/technologies/TypeScript";
import { Supabase } from "@/svgs/technologies/Supabase";
import { Laravel } from "@/svgs/technologies/Laravel";
import { Solidity } from "@/svgs/technologies/Solidity";
import type { Skill } from "@/types/common";

// Only skills evidenced in Bil's work. VB.NET, ESP32/Arduino and Flutter
// are used in his projects too but have no icon in this template, so they
// are named in the project pages instead of this carousel.
export const mySkills: Skill[] = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJs },
  { name: "Tailwind CSS", icon: TailwindCss },
  { name: "Figma", icon: Figma },
  { name: "TypeScript", icon: TypeScript },
  { name: "JavaScript", icon: JavaScript },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "Python", icon: Python },
  { name: "Supabase", icon: Supabase },
  { name: "Laravel", icon: Laravel },
  { name: "Solidity", icon: Solidity },
];
