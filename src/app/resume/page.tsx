import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Reveal } from "@/components/common/Reveal";
import { SubHeading } from "@/components/common/SubHeading";
import { Separator } from "@/components/ui/separator";
import { generateContentMetadata } from "@/lib/stats/seo";

export function generateMetadata(): Metadata {
  return generateContentMetadata({
    title: "Resume - Experience & Skills",
    description:
      "Summary of Bil's education, projects, and skills. No PDF resume yet — this page is the summary.",
    image: "/meta/opengraph-img.png",
    path: "/resume",
    type: "website",
  });
}

const projects = [
  { name: "Warlok", desc: "Fandom community website — novels, fanart, comics.", href: "/projects/warlok" },
  { name: "CyberShield", desc: "Cybersecurity dashboard — firewall, traffic, attack simulations.", href: "/projects/cybershield" },
  { name: "IoT Ojol Navigation", desc: "ESP32 + TFT companion display for ojol drivers.", href: "/projects/iot-ojol-navigation" },
  { name: "TugasKita", desc: "Task manager with Google Drive integration.", href: "/projects/tugaskita" },
  { name: "Video Multimedia AI", desc: "5.5-minute motion-graphics video on Teknologi & AI.", href: "/projects/video-multimedia-ai" },
];

export default function ResumePage() {
  return (
    <Container className="mt-5 px-4 md:px-6 lg:px-0">
      <Reveal>
        <Heading as="h1">Resume</Heading>
        <SubHeading>
          No PDF resume yet — this page is the summary. The full story is in
          my projects and on GitHub.
        </SubHeading>

        <Separator className="my-5 mt-10" />
      </Reveal>

      <Reveal delay={0.1}>
        <section className="my-6 space-y-2">
          <h2 className="text-2xl font-semibold">
            Muhamad Nabil Faiz Amrullah
          </h2>
          <p className="text-muted-foreground text-sm leading-6">
            Informatics Student &amp; Full-Stack Developer
            <br />
            NIM 242502040042 · Class 3TI01 · Semester 5
            <br />
            Teknik Informatika, Universitas Cendekia Abditama (UCA) —
            Tangerang, Indonesia
          </p>
          <p className="text-sm">
            <a className="underline underline-offset-4" href="https://github.com/Aaronabil" target="_blank" rel="noopener noreferrer">
              github.com/Aaronabil
            </a>
            {" · "}
            <a className="underline underline-offset-4" href="https://x.com/aaronabil_aster" target="_blank" rel="noopener noreferrer">
              x.com/aaronabil_aster
            </a>
            {" · "}
            <a className="underline underline-offset-4" href="mailto:nabilmuhamad630@gmail.com">
              nabilmuhamad630@gmail.com
            </a>
          </p>
        </section>

        <section className="my-8">
          <h3 className="mb-3 text-lg font-semibold">Projects</h3>
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.name}>
                <Link href={project.href} className="font-medium underline underline-offset-4">
                  {project.name}
                </Link>
                <p className="text-muted-foreground text-sm">{project.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="my-8">
          <h3 className="mb-3 text-lg font-semibold">Skills</h3>
          <p className="text-muted-foreground text-sm leading-6">
            Next.js · React · TypeScript · JavaScript · Tailwind CSS ·
            Supabase · Python · ESP32 / Arduino · Flutter · Figma · Git &
            GitHub · VB.NET
          </p>
        </section>
      </Reveal>
    </Container>
  );
}
