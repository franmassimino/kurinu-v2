import Image from "next/image";

function Mascot({ name, src, size = "w-32 h-32" }: { name: string; src: string; size?: string }) {
  return (
    <div className={`${size} relative shrink-0`}>
      <Image src={src} alt={name} fill className="object-contain" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Mobile layout: título → mascotas → texto */}
        <div className="md:hidden flex flex-col items-center text-center gap-6">
          <h2
            className="text-2xl text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-dogica), monospace" }}
          >
            Get to Know Us!
          </h2>
          <div className="flex justify-center gap-6">
            <Mascot name="Yenna" src="/assets/yenna.png" size="w-32 h-32" />
            <Mascot name="Sima" src="/assets/sima.png" size="w-32 h-32" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#5a5a8a] leading-relaxed text-sm">
              Hello! We&apos;re Yenna and Sima, two big fans of Tamagotchis.{" "}
              <strong className="text-[#5a5a8a]">Yenna</strong> is a freelance illustrator working under the
              name Spikhyenna, while <strong className="text-[#5a5a8a]">Sima</strong> is an independent
              photographer and filmmaker with a keen interest in programming.
            </p>
            <p className="text-[#5a5a8a] leading-relaxed text-sm">
              Since 2023, we&apos;ve been working together to bring this fantastic
              idea to life. We hope you like it and support us on the journey
              ahead as we develop our own device!
            </p>
          </div>
        </div>

        {/* Desktop layout: mascota — título — mascota, luego texto */}
        <div className="hidden md:block">
          <div className="flex items-end justify-center gap-4 mb-8">
            <Mascot name="Yenna" src="/assets/yenna.png" size="w-48 h-48" />
            <h2
              className="text-3xl text-[#1a1a1a] whitespace-nowrap mb-12"
              style={{ fontFamily: "var(--font-dogica), monospace" }}
            >
              Get to Know Us!
            </h2>
            <Mascot name="Sima" src="/assets/sima.png" size="w-48 h-48" />
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-[#5a5a8a] leading-relaxed text-base">
              Hello! We&apos;re Yenna and Sima, two big fans of Tamagotchis.{" "}
              <strong className="text-[#5a5a8a]">Yenna</strong> is a freelance illustrator working under the
              name Spikhyenna, while <strong className="text-[#5a5a8a]">Sima</strong> is an independent
              photographer and filmmaker with a keen interest in programming.
            </p>
            <p className="text-[#5a5a8a] leading-relaxed text-base">
              Since 2023, we&apos;ve been working together to bring this fantastic
              idea to life. We hope you like it and support us on the journey
              ahead as we develop our own device!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
