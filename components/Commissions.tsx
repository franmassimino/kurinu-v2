"use client";

import Image from "next/image";
import { useState } from "react";

type Commission = {
  name: string;
  avatar: string;
  iconBy: string;
  iconByHandle: string;
  images: string[];
  review: string;
};

const commissions: Commission[] = [
  {
    name: "Skye",
    avatar: "/assets/commissions/skye-avatar.webp",
    iconBy: "CyanSorcery",
    iconByHandle: "https://bsky.app/profile/cyansorcery.com",
    images: [
      "/assets/commissions/skye-1.webp",
      "/assets/commissions/skye-2.webp",
      "/assets/commissions/skye-3.webp",
      "/assets/commissions/skye-4.webp",
      "/assets/commissions/skye-5.webp",
      "/assets/commissions/skye-6.webp",
    ],
    review:
      "I have absolutely been obsessed with my Kurinu E-Pet since receiving it. I take mine everywhere with me and taking care of and interacting with my E-pet is something I look forward to everyday! I can't count the times I've shown off and gushed about my device. If taking care of a virtual pet has ever been something you've enjoyed or been interested in, then you should certainly look to purchase from Kurinu.",
  },
  {
    name: "Viladze",
    avatar: "/assets/commissions/viladze-avatar.webp",
    iconBy: "Twinky Art",
    iconByHandle: "https://www.twinkyarts.net/",
    images: [
      "/assets/commissions/viladze-1.webp",
      "/assets/commissions/viladze-2.webp",
      "/assets/commissions/viladze-3.webp",
      "/assets/commissions/viladze-4.webp",
      "/assets/commissions/viladze-5.webp",
      "/assets/commissions/viladze-6.webp",
    ],
    review:
      "I can't say enough good things about Kurinu E-Pets. The attention to detail is simply outstanding—every part of my custom pet was carefully crafted and full of personality. You can tell they pour their heart and soul into every project. Their customer support is first class—responsive, kind, and truly invested in making the experience perfect. As someone who loves to fidget, this has been an unexpected joy. It's not only adorable but also incredibly fun to engage with. The love, care, and craftsmanship behind each piece make it more than just a product—it's an experience. I couldn't be happier, and I'll absolutely be supporting them again. If you're on the fence, don't be. This is a must-have for collectors, fidgeters, or anyone who appreciates true artistry.",
  },
  {
    name: "E-West",
    avatar: "/assets/commissions/ewest-avatar.webp",
    iconBy: "Nordeva",
    iconByHandle: "https://web.telegram.org/k/#@Nordeva",
    images: [
      "/assets/commissions/ewest-1.webp",
      "/assets/commissions/ewest-2.webp",
      "/assets/commissions/ewest-3.webp",
      "/assets/commissions/ewest-4.webp",
      "/assets/commissions/ewest-5.webp",
      "/assets/commissions/ewest-6.webp",
      "/assets/commissions/ewest-7.webp",
    ],
    review:
      "Kurinu was an absolute delight to work with! Despite a tight time frame and my Kurinu's complex design, they were able to make my E-Pet absolutely perfect with so many personal touches. Extremely communicative and super sweet, I recommend Kurinu's work to anyone who wants to see their character brought to life!",
  },
  {
    name: "Jasper",
    avatar: "/assets/commissions/jasper-avatar.jpg",
    iconBy: "Jasper",
    iconByHandle: "https://x.com/wolfdraconian",
    images: [
      "/assets/commissions/jasper-1.webp",
      "/assets/commissions/jasper-2.webp",
      "/assets/commissions/jasper-3.webp",
      "/assets/commissions/jasper-4.webp",
    ],
    review:
      "It is a fun item full of personality. Working with Spikhyenna was easy and straight forward. I love seeing all the little animations and care that goes into making your sona come to life!",
  },
];

function CommissionCard({ commission }: { commission: Commission }) {
  const [index, setIndex] = useState(0);
  const total = commission.images.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <article className="bg-white rounded-xl p-5 md:p-6 flex flex-col gap-5">
      {/* Header */}
      <header className="flex items-center gap-3">
        <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-primary/20">
          <Image
            src={commission.avatar}
            alt={`${commission.name} avatar`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3
            className="text-xl md:text-2xl text-text leading-tight"
            style={{ fontFamily: "var(--font-dogica), monospace" }}
          >
            {commission.name}
          </h3>
          <p className="text-xs md:text-sm text-text/70">
            {commission.name}&apos;s fursona
          </p>
          <p className="text-xs md:text-sm text-text/70">
            Icon by{" "}
            <a
              href={commission.iconByHandle}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text underline hover:opacity-70"
            >
              {commission.iconBy}
            </a>
          </p>
        </div>
      </header>

      {/* Carousel */}
      <div className="relative">
        <div className="relative w-full overflow-hidden rounded-md" style={{ paddingBottom: "56%" }}>
          <Image
            src={commission.images[index]}
            alt={`${commission.name} ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>

        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/90 hover:text-white text-2xl"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/90 hover:text-white text-2xl"
            >
              ›
            </button>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {commission.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Review */}
      <div className="bg-[#F2EFFC] rounded-xl p-5 md:p-6 flex flex-col gap-3">
        <h4
          className="text-lg md:text-xl text-text"
          style={{ fontFamily: "var(--font-dogica), monospace" }}
        >
          Owner&apos;s review
        </h4>
        <p className="text-text leading-relaxed text-sm">
          {commission.review}
        </p>
      </div>
    </article>
  );
}

export default function Commissions() {
  return (
    <section id="commissions" className="py-16 bg-primary/50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        <div className="text-center flex flex-col gap-5 mb-12">
          <h2
            className="text-2xl md:text-3xl text-text"
            style={{ fontFamily: "var(--font-dogica), monospace" }}
          >
            Commissions
          </h2>
          <p className="text-text leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
            This is a curated selection of the 40 final commissions that conclude
            the project, including examples both with and without customized
            elements such as faceplates and in-device items, along with client
            reviews.
          </p>
        </div>

        <div className="md:columns-2 md:gap-4 space-y-4">
          {commissions.map((c) => (
            <div key={c.name} className="break-inside-avoid">
              <CommissionCard commission={c} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
