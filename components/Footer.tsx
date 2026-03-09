import Link from "next/link";
import Image from "next/image";

const linksCol1 = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Order yours", href: "#order" },
];

const linksCol2 = [
  { label: "Contact", href: "#contact" },
  { label: "Terms of service", href: "#" },
  { label: "User instructions", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-14 pb-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo column */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md overflow-hidden shrink-0 gradient-bg flex items-center justify-center">
                {/* Replace with <Image src="/logo.png" ... /> once asset is ready */}
                <span
                  className="text-white text-xs font-bold"
                  style={{ fontFamily: "var(--font-dogica), monospace" }}
                >
                  K
                </span>
              </div>
              <div
                className="flex flex-col leading-none"
                style={{ fontFamily: "var(--font-dogica), monospace" }}
              >
                <span className="text-[#1a1a1a] font-bold text-xs tracking-widest uppercase">
                  Kurinu
                </span>
                <span className="text-[#1a1a1a] font-bold text-xs tracking-widest uppercase">
                  E-Pets
                </span>
              </div>
            </div>
          </div>

          {/* Links col 1 */}
          <div className="flex flex-col gap-4">
            {linksCol1.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#4a4a4a] text-sm font-medium hover:text-[#C5BEF5] transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Links col 2 */}
          <div className="flex flex-col gap-4">
            {linksCol2.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#4a4a4a] text-sm font-medium hover:text-[#C5BEF5] transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6" />

        {/* Copyright */}
        <p className="text-xs text-[#1a1a1a]/50">
          © 2024 Created by <strong className="text-[#1a1a1a]">Kurinu</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
