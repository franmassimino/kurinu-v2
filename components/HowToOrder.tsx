const steps = [
  {
    number: 1,
    title: "Read manual",
    description: "Read carefully our instructions before start customizing.",
  },
  {
    number: 2,
    title: "Personalize",
    description: "Customize your E-Pet with our E-Pet designer.",
  },
  {
    number: 3,
    title: "Place order",
    description: "Review your choices and send us your order for us to review.*",
  },
  {
    number: 4,
    title: "Crafting time",
    description:
      "Once your order is confirmed, we will start working on your E-Pet.**",
  },
  {
    number: 5,
    title: "Enjoy!",
    description: "Your unique E-Pet will be delivered to your doorstep.",
  },
];

export default function HowToOrder() {
  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Supertitle */}
        <p className="text-center text-xs text-[#1a1a1a]/50 uppercase tracking-widest mb-3">
          Our customization and ordering process
        </p>

        <h2
          className="text-2xl md:text-3xl text-center text-[#1a1a1a] mb-16"
          style={{ fontFamily: "var(--font-dogica), monospace" }}
        >
          How do I order mine?
        </h2>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col md:hidden gap-0 max-w-sm mx-auto px-2">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4">
              {/* Left column: circle + line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0 flex-1 border-l-2 border-dashed border-[#C5BEF5] my-1" />
                )}
              </div>
              {/* Right column: text */}
              <div className="pb-10">
                <h3
                  className="text-sm text-[#1a1a1a] leading-tight mb-1"
                  style={{ fontFamily: "var(--font-dogica), monospace" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start">
              <div className="flex flex-col items-center text-center w-40 px-2">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0">
                  {step.number}
                </div>
                <h3
                  className="text-xs text-[#1a1a1a] mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-dogica), monospace" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#1a1a1a]/60 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-start pt-6 shrink-0">
                  <div className="w-12 h-0 border-t-2 border-dashed border-[#C5BEF5]" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
