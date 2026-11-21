import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Reveal } from "@/components/common/Reveal";
import { SubHeading } from "@/components/common/SubHeading";
import { Separator } from "@/components/ui/separator";
import { movies } from "@/lib/personal";
import { generateContentMetadata } from "@/lib/stats/seo";

export function generateMetadata(): Metadata {
  return generateContentMetadata({
    title: "Movies - My Favorites",
    description: "Movies and shows that have inspired and entertained me.",
    image: "/meta/opengraph-img.png",
    path: "/movies",
    type: "website",
  });
}

export default function Page() {
  return (
    <Container className="mt-5 px-4 md:px-6 lg:px-0">
      <Reveal>
        <Heading as="h1">Movies</Heading>

        <SubHeading>
          Movies and shows that have inspired and entertained me.
        </SubHeading>

        <Separator className="my-5 mt-10" />
      </Reveal>

      {movies.length === 0 && (
        <p className="text-muted-foreground my-5 max-w-xl text-sm leading-6">
          Movies and shows that have shaped my perspective and sparked my imagination.
        </p>
      )}

      <Reveal delay={0.1}>
        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((item, id) => (
            <Reveal delay={id * 0.08} key={item.title}>
              <article className="group">
                <div className="bg-muted relative aspect-[2/3] overflow-hidden rounded-lg">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 text-sm leading-snug font-medium">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs">{item.year}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
