import Image from "next/image";

const features = [
  {
    title: "Unleash fun",
    description:
      "Guaranteed fun for all ages! Perfect as a gift and a vivid reminder of retro nostalgia.",
    img: "/assets/feature-2.webp",
    size: "w-26 h-26",
  },
  {
    title: "Express yourself",
    description:
      "Unlock a world of creativity with a wide range of character options for your custom E-Pet.",
    img: "/assets/feature-1.webp",
    size: "w-24 h-24",
  },
  {
    title: "Fully customizable",
    description:
      "We create each E-Pet from scratch tailored to your specifications for an unmatched experience.",
    img: "/assets/feature-3.webp",
    size: "w-24 h-24",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-[#C5BEF5]/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center gap-4">
              <div className="h-32 flex items-end justify-center">
                <div className={`${feature.size} relative`}>
                  <Image src={feature.img} alt={feature.title} fill className="object-contain" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-base text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-dogica), monospace" }}
                >
                  {feature.title}
                </h3>

                <p className="text-[#1a1a1a]/70 text-sm leading-relaxed max-w-[250px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
