"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type ImageItem = {
  id: number;
  src: string | StaticImageData;
  alt?: string;
  description?: string;
};

type Props = {
  images: ImageItem[];
  startIndex?: number;
};

export default function FullscreenImageViewer({
  images,
  startIndex = 0,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(startIndex);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  /* ESC + arrows */
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, images.length]);

  return (
    <>
      {/* Thumbnail */}
      <div onClick={() => setOpen(true)} className="cursor-pointer w-fit">
        <Image
          src={images[index].src}
          alt={images[index].alt || ""}
          width={400}
          height={250}
          className="rounded-lg"
        />
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black">

          {/* Exit */}
          <button
            onClick={() => setOpen(false)}
            className="
              absolute top-4 right-4 z-20
              rounded-full px-4 py-2
              bg-black/60 backdrop-blur-md
              text-white text-sm
              hover:bg-black/80
            "
          >
            ✕ Exit
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="
              absolute left-3 top-1/2 -translate-y-1/2 z-20
              h-14 w-14 rounded-full
              bg-black/60 backdrop-blur-md
              text-white text-4xl
              flex items-center justify-center
              hover:bg-black/80
            "
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="
              absolute right-3 top-1/2 -translate-y-1/2 z-20
              h-14 w-14 rounded-full
              bg-black/60 backdrop-blur-md
              text-white text-4xl
              flex items-center justify-center
              hover:bg-black/80
            "
          >
            ›
          </button>

          {/* IMAGE — YouTube Style */}
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <Image
              src={images[index].src}
              alt={images[index].alt || ""}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Description */}
          {images[index].description && (
            <div
              className="
                absolute bottom-0 left-0 right-0 z-20
                bg-gradient-to-t from-black/80 to-transparent
                text-white text-sm
                px-6 py-4
              "
            >
              {images[index].description}
            </div>
          )}
        </div>
      )}
    </>
  );
}
