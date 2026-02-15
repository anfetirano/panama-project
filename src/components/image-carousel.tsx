"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
};

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4">
      <div className="glass-card overflow-hidden rounded-2xl p-3">
        <div className="flex items-center justify-center rounded-xl bg-[#02214f]/70 px-2 py-3">
          <Image
            src={images[index].src}
            alt={images[index].alt}
            width={1280}
            height={720}
            className="h-[220px] w-auto max-w-full rounded-xl object-contain sm:h-[280px] md:h-[320px] lg:h-[360px]"
            priority
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`h-2.5 w-2.5 rounded-full transition ${
              dotIndex === index ? "bg-sky-300" : "bg-white/35"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
