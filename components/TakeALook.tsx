"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/assets/8.webp", alt: "E-Pet fursuit negro" },
  { src: "/assets/3.webp", alt: "E-Pet tamagotchi rosa" },
  { src: "/assets/1.webp", alt: "E-Pet fursuit leopardo" },
  { src: "/assets/7.webp", alt: "E-Pet tamagotchi desierto" },
  { src: "/assets/g-2.webp", alt: "E-Pet pixel art" },
  { src: "/assets/g-1.webp", alt: "E-Pet packaging" },
  { src: "/assets/6.webp", alt: "E-Pet fursuit blanco" },
];

export default function TakeALook() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() =>
    setSelected((i) => (i === null ? null : (i - 1 + images.length) % images.length)), []);
  const next = useCallback(() =>
    setSelected((i) => (i === null ? null : (i + 1) % images.length)), []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, prev, next]);

  return (
    <section id="gallery" className="pt-20 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl text-center text-text mb-12"
          style={{ fontFamily: "var(--font-dogica), monospace" }}
        >
          Take a look
        </h2>

        {/* 4 cols, filas de 150px. Layout explícito por celda */}
        <div className="w-full grid grid-cols-4 gap-2" style={{ gridTemplateRows: "repeat(10, clamp(80px, 18vw, 150px))" }}>

          {/* 8: cols 1-2, rows 1-4 */}
          <div
            className="col-span-2 row-span-4 col-start-1 row-start-1 relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelected(0)}
          >
            <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
          </div>

          {/* 3: cols 3-4, rows 1-2 */}
          <div
            className="col-span-2 row-span-2 col-start-3 row-start-1 relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelected(1)}
          >
            <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" />
          </div>

          {/* 1: cols 3-4, rows 3-4 */}
          <div
            className="col-span-2 row-span-2 col-start-3 row-start-3 relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelected(2)}
          >
            <Image src={images[2].src} alt={images[2].alt} fill className="object-cover" />
          </div>

          {/* 7: cols 1-2, rows 5-7 */}
          <div
            className="col-span-2 row-span-3 col-start-1 row-start-5 relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelected(3)}
          >
            <Image src={images[3].src} alt={images[3].alt} fill className="object-cover" />
          </div>

          {/* g-2: cols 3-4, rows 5-6 */}
          <div
            className="col-span-2 row-span-2 col-start-3 row-start-5 relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelected(4)}
          >
            <Image src={images[4].src} alt={images[4].alt} fill className="object-cover" />
          </div>

          {/* g-1: cols 1-2, rows 8-10 */}
          <div
            className="col-span-2 row-span-3 col-start-1 row-start-8 relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelected(5)}
          >
            <Image src={images[5].src} alt={images[5].alt} fill className="object-cover" />
          </div>

          {/* 6: cols 3-4, rows 7-10 */}
          <div
            className="col-span-2 row-span-4 col-start-3 row-start-7 relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelected(6)}
          >
            <Image src={images[6].src} alt={images[6].alt} fill className="object-cover" />
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={close}
        >
          {/* Imagen */}
          <div
            className="relative w-[90vw] h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Flecha prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full w-11 h-11 flex items-center justify-center text-xl transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* Flecha next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full w-11 h-11 flex items-center justify-center text-xl transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Cerrar */}
          <button
            className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 rounded-full w-9 h-9 flex items-center justify-center text-lg transition-colors"
            onClick={close}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Indicador */}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
            {selected + 1} / {images.length}
          </span>
        </div>
      )}
    </section>
  );
}
