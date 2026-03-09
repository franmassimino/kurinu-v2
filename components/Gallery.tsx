import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Text column */}
          <div className="flex flex-col gap-5">
            <h2
              className="text-2xl md:text-3xl text-text leading-snug"
              style={{ fontFamily: "var(--font-dogica), monospace" }}
            >
              Create Your Own
              <br />
              Custom <span className="gradient-text">E-Pet</span>
            </h2>

            <p className="text-[#5a5a8a] leading-relaxed text-sm">
              Experience the joy of owning a personalized E-Pet that reflects
              your style and character. With the combination of our unique
              artwork and advanced programming,{" "}
              <strong className="text-text">
                we take customization to the maximum level.
              </strong>
            </p>
          </div>

          {/* Asymmetric image grid */}
          <div className="flex flex-col gap-1">
            {/* Top row */}
            <div className="flex gap-1">
              <div className="relative rounded-sm overflow-hidden" style={{ width: "60%", paddingBottom: "36%" }}>
                <Image src="/assets/1.webp" alt="E-Pet 1" fill className="object-cover" />
              </div>
              <div className="relative rounded-sm overflow-hidden" style={{ width: "40%", paddingBottom: "36%" }}>
                <Image src="/assets/2.webp" alt="E-Pet 2" fill className="object-cover" />
              </div>
            </div>
            {/* Bottom row */}
            <div className="flex gap-1">
              <div className="relative rounded-sm overflow-hidden" style={{ width: "40%", paddingBottom: "38%" }}>
                <Image src="/assets/3.webp" alt="E-Pet 3" fill className="object-cover" />
              </div>
              <div className="relative rounded-sm overflow-hidden" style={{ width: "60%", paddingBottom: "38%" }}>
                <Image src="/assets/4.png" alt="E-Pet 4" fill className="object-cover" />
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <Link
                href="#gallery"
                className="text-[#1a1a1a] font-semibold text-sm hover:opacity-70 flex items-center gap-1"
              >
                See our gallery <span className="text-[#C5BEF5]">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
