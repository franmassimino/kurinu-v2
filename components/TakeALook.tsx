import Image from "next/image";

export default function TakeALook() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-2xl md:text-3xl text-center text-[#1a1a1a] mb-12"
          style={{ fontFamily: "var(--font-dogica), monospace" }}
        >
          Take a look
        </h2>

        {/* Asymmetric grid: tall image left, 2 squares right */}
        <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
          {/* Left: tall image spanning 2 rows */}
          <div className="row-span-2 relative rounded-sm overflow-hidden" style={{ minHeight: "480px" }}>
            <Image src="/assets/1.webp" alt="E-Pet 1" fill className="object-cover" />
          </div>

          {/* Right top: square */}
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/assets/2.webp" alt="E-Pet 2" fill className="object-cover" />
          </div>

          {/* Right bottom: two side-by-side squares */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image src="/assets/3.webp" alt="E-Pet 3" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image src="/assets/4.png" alt="E-Pet 4" fill className="object-cover" />
            </div>
          </div>

          {/* Left: square */}
          <div className="relative aspect-square rounded-sm overflow-hidden">
            <Image src="/assets/5.webp" alt="E-Pet 5" fill className="object-cover" />
          </div>

          {/* Right: tall image spanning 2 rows */}
          <div className="row-span-2 relative rounded-sm overflow-hidden" style={{ minHeight: "480px" }}>
            <Image src="/assets/g-1.webp" alt="E-Pet 6" fill className="object-cover" />
          </div>

          {/* Left bottom: two side-by-side squares */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image src="/assets/g-2.webp" alt="E-Pet 7" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image src="/assets/g-3.webp" alt="E-Pet 8" fill className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
