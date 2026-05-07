export default function WhatIsKurinu() {
  return (
    <section id="what-is-kurinu" className="pt-16 pb-0 md:pt-20 md:pb-0 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center text-center gap-6">
          <h2
            className="text-2xl text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-dogica), monospace" }}
          >
            What is Kurinu E-Pets?
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-[#1a1a1a] leading-relaxed text-sm">
              Kurinu E-Pets is a personal and original project developed between
              2023 and 2025 by <strong className="text-[#1a1a1a]">@Spikhyenna</strong>{" "}
              and <strong className="text-[#1a1a1a]">@Sima</strong>. The project was
              entirely conceived and executed by the team, covering all stages from
              initial concept development to design, illustration, production,
              photography, video, client management, and shipping.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed text-sm">
              The project explored the customization of Tamagotchi Smart devices,
              allowing users to integrate their own characters within the platform,
              with a focus on the furry community.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed text-sm">
              In addition, multiple levels of customization were offered, including
              character-specific in-device items, fully personalized device elements
              such as original faceplates, and bespoke merchandise tailored to each
              client&apos;s chosen character.
            </p>
          </div>
          <hr className="md:hidden w-full border-t border-[#C5BEF5]/40 mt-6" />
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="flex justify-center">
            <h2
              className="text-3xl text-[#1a1a1a] whitespace-nowrap mb-12"
              style={{ fontFamily: "var(--font-dogica), monospace" }}
            >
              What is Kurinu E-Pets?
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-[#1a1a1a] leading-relaxed text-base">
              Kurinu E-Pets is a personal and original project developed between
              2023 and 2025 by <strong className="text-[#1a1a1a]">@Spikhyenna</strong>{" "}
              and <strong className="text-[#1a1a1a]">@Sima</strong>. The project was
              entirely conceived and executed by the team, covering all stages from
              initial concept development to design, illustration, production,
              photography, video, client management, and shipping.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed text-base">
              The project explored the customization of Tamagotchi Smart devices,
              allowing users to integrate their own characters within the platform,
              with a focus on the furry community.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed text-base">
              In addition, multiple levels of customization were offered, including
              character-specific in-device items, fully personalized device elements
              such as original faceplates, and bespoke merchandise tailored to each
              client&apos;s chosen character.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
