import { CSS } from "@/svgs/technologies/CSS";
import { Figma } from "@/svgs/technologies/Figma";
import { Github } from "@/svgs/technologies/Github";
import { HTML } from "@/svgs/technologies/Html";
import { JavaScript } from "@/svgs/technologies/JavaScript";
import { NextJs } from "@/svgs/technologies/NextJs";
import { PostgreSQL } from "@/svgs/technologies/PSQL";
import { Python } from "@/svgs/technologies/Python";
import { ReactIcon } from "@/svgs/technologies/ReactIcon";
import { Shadcn } from "@/svgs/technologies/Shadcn";
import { TailwindCss } from "@/svgs/technologies/TailwindCss";
import { TypeScript } from "@/svgs/technologies/TypeScript";
import type { StacksProps } from "@/types/projects";

export const technologies: StacksProps[] = [
  { name: "CSS", Icon: <CSS /> },
  { name: "Figma", Icon: <Figma /> },
  { name: "GitHub", Icon: <Github /> },
  { name: "HTML", Icon: <HTML /> },
  { name: "JavaScript", Icon: <JavaScript /> },
  { name: "Next.js", Icon: <NextJs /> },
  { name: "PostgreSQL", Icon: <PostgreSQL /> },
  { name: "Supabase", Icon: <PostgreSQL /> },
  { name: "Python", Icon: <Python /> },
  { name: "React", Icon: <ReactIcon /> },
  { name: "Shadcn UI", Icon: <Shadcn /> },
  { name: "Tailwind CSS", Icon: <TailwindCss /> },
  { name: "TypeScript", Icon: <TypeScript /> },
];

export function getStacks(names: string[]): StacksProps[] {
  return names.flatMap((name) => {
    const technology = technologies.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    return technology ? [technology] : [];
  });
}
