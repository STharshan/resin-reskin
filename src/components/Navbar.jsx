import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#F0EDE8]/80 backdrop-blur-xl border-stone-200 shadow-sm"
          : "bg-[#F0EDE8] border-stone-200"
      }`}
    >
      {/* Main bar — fluid padding: px-4 on xs, px-6 on sm+, px-8 on lg+ */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <a
          href="/"
          className="flex-shrink-0 flex items-center gap-2 outline-none group"
        >
          {/* Placeholder logo mark — swap for <img> or SVG */}
          <span className="w-7 h-7 rounded-md bg-stone-900 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[11px] font-bold tracking-tight">AX</span>
          </span>
          {/* Wordmark: hidden on very small screens, shown from xs-sm+ */}
          <span className="text-[14px] sm:text-[15px] font-semibold tracking-tight text-stone-900 whitespace-nowrap">
            Architecture X
          </span>
        </a>

        {/* ── Desktop Nav Links (md+) ── */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative text-[13px] lg:text-[13.5px] font-medium tracking-wide transition-colors duration-200 py-1 group ${
                  activeLink === link.href
                    ? "text-stone-900"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-stone-900 transition-all duration-300 ${
                    activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right side: CTA + Hamburger ── */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* CTA — hidden on mobile, visible md+ */}
          <a
            href="/contact"
            className="hidden md:inline-flex group items-center gap-1.5 bg-stone-900 text-white text-[12px] lg:text-[13px] font-medium px-4 lg:px-5 py-2 lg:py-2.5 rounded-full hover:bg-stone-700 hover:-translate-y-px hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            Get in touch
            <ArrowRight
              size={12}
              strokeWidth={2.2}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>

          {/* Hamburger — visible below md */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-stone-800 hover:bg-black/5 hover:scale-110 active:scale-95 transition-all duration-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={18} strokeWidth={2} className="transition-all duration-200" />
            ) : (
              <Menu size={18} strokeWidth={2} className="transition-all duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu (below md) ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-stone-200 px-4 sm:px-6 pb-5 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setMenuOpen(false);
              }}
              className={`group flex items-center justify-between py-3.5 border-b border-stone-100 last:border-b-0 text-[15px] font-medium transition-all duration-200 hover:pl-1 ${
                activeLink === link.href
                  ? "text-stone-900"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {link.label}
              <ArrowRight
                size={14}
                strokeWidth={2}
                className="text-stone-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </a>
          ))}

          {/* Mobile CTA */}
          <div className="mt-5">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 bg-stone-900 text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-stone-700 hover:shadow-md active:scale-95 transition-all duration-200"
            >
              Get in touch
              <ArrowRight
                size={13}
                strokeWidth={2.2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}