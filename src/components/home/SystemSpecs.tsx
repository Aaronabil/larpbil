import { Terminal } from "lucide-react";
import Link from "next/link";

import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { AsciiGifAvatar } from "./AsciiGifAvatar";
import { ArrowUpRight } from "@/svgs/essentials/ArrowUpRight";

const specs: Array<{ label: string; value: string }> = [
  { label: "OS", value: "Omarchy x86_64" },
  { label: "Host", value: "MSI Modern 14 C12MO" },
  { label: "Kernel", value: "Linux 7.2.8-9-omarchy" },
  { label: "Packages", value: "1052 (pacman), 7 (flatpak)" },
  { label: "Shell", value: "bash 5.3.20" },
  { label: "WM", value: "Hyprland 0.56.2 (Wayland)" },
  { label: "Terminal", value: "kitty 0.49.2" },
  { label: "Display", value: '1920x1080 in 14", 60 Hz' },
  { label: "CPU", value: "12th Gen Intel i3-1215U (8) @ 4.40 GHz" },
  { label: "GPU", value: "Alder Lake-UP3 GT1 [UHD Graphics]" },
  { label: "Memory", value: "8 GB" },
];

const SystemSpecs = () => {
  return (
    <Container className="space-y-6">
      <Heading as="h2" className="flex items-center gap-2">
        <Terminal className="size-7" />
        My Setup
      </Heading>

      <p className="mb-1">
        The machine I build everything on, running Omarchy.
      </p>

      <div className="bg-background/50 mt-5 rounded-lg border-2 border-dashed border-neutral-200 p-6 backdrop-blur-sm dark:border-neutral-800">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-yellow-500" />
          <span className="size-3 rounded-full bg-green-500" />
          <span className="text-muted-foreground ml-2 font-mono text-xs">
            aaronabil@astersybil — fastfetch
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full overflow-hidden rounded-lg">
            <AsciiGifAvatar
              src="/vagabond2.gif"
              alt="Miyamoto Musashi"
              columns={67}
              className="flex h-64 items-center justify-center overflow-hidden text-[7px] leading-[0.72] sm:h-80 sm:text-[8px]"
            />
          </div>

          <dl className="mx-auto w-fit min-w-0 space-y-1 font-mono text-xs sm:text-sm">
            {specs.map((spec) => (
              <div key={spec.label} className="flex gap-7">
                <dt className="w-20 shrink-0 font-bold text-[#1793D1]">
                  {spec.label}
                </dt>
                <dd className="text-muted-foreground break-words">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Link
          href="/gears"
          className="group mt-5 inline-flex items-center gap-1 text-sm font-medium"
        >
          <span className="relative">
            See full setup
            <span className="absolute bottom-0 left-0 h-0.5 w-full origin-right scale-x-0 bg-current transition-all duration-200 ease-out group-hover:origin-left group-hover:scale-x-100" />
          </span>
          <ArrowUpRight className="size-3 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-150" />
        </Link>
      </div>
    </Container>
  );
};

export { SystemSpecs };
