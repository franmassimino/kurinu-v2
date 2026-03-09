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
          {/* Left: tall placeholder spanning 2 rows */}
          <div className="row-span-2 bg-gray-200 rounded-sm" style={{ minHeight: "480px" }} />

          {/* Right top: square placeholder */}
          <div className="aspect-square bg-gray-300 rounded-sm" />

          {/* Right bottom: two side-by-side squares */}
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-gray-200 rounded-sm" />
            <div className="aspect-square bg-gray-300 rounded-sm" />
          </div>

          
          {/* Left: tall placeholder spanning 2 rows */}
          <div className="aspect-square bg-gray-300 rounded-sm" />

          {/* Right top: square placeholder */}
          <div className="row-span-2 bg-gray-200 rounded-sm" style={{ minHeight: "480px" }} />

          {/* Right bottom: two side-by-side squares */}
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-gray-200 rounded-sm" />
            <div className="aspect-square bg-gray-300 rounded-sm" />
          </div>
        </div>

      </div>
    </section>
  );
}
