import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[580px] md:h-[680px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/kurinu.webp"
        alt="Kurinu E-Pets background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay — subtle so the photo shows through */}
      <div className="absolute inset-0 bg-black/55 md:bg-black/35" />

      {/* Content */}
      <div className="relative z-10 px-5 md:px-8 max-w-6xl mx-auto w-full">
        <h1
          className="text-4xl md:text-5xl text-white leading-[1.45] mb-5"
          style={{ fontFamily: "var(--font-dogica), monospace" }}
        >
          Bring your
          <br />
          <span className="gradient-text">Fursonas</span>{" "}to life!
        </h1>

        <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
          Custom E-Pets crafted with love to reflect your individual style and
          imagination. Start your journey today and experience the magic of true
          customization.
        </p>

        <div className="flex flex-col md:flex-row gap-3">
          <Link
            href="#order"
            className="btn-primary w-full md:w-auto text-center py-[1.75rem] md:py-[0.85rem]"
            style={{ fontFamily: "var(--font-dogica), monospace", fontSize: "0.75rem" }}
          >
            Order yours &gt;
          </Link>
          <Link
            href="#about"
            className="btn-outline-white w-full md:w-auto text-center py-[1.75rem] md:py-[0.85rem]"
            style={{ fontFamily: "var(--font-dogica), monospace", fontSize: "0.75rem" }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
