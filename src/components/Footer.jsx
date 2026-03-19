const ArchitectureLogo = () => (
  <svg width="30" height="34" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L2 10V26L16 34L30 26V10L16 2Z" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
    <path d="M16 2V34" stroke="#1a1a1a" strokeWidth="1.5"/>
    <path d="M2 10L16 18L30 10" stroke="#1a1a1a" strokeWidth="1.5"/>
    <path d="M10 6L10 20" stroke="#1a1a1a" strokeWidth="1"/>
    <path d="M22 6L22 20" stroke="#1a1a1a" strokeWidth="1"/>
  </svg>
);

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#EEEAE4] w-full">

      {/* Main section */}
      <div className="max-w-6xl mx-auto px-8 pt-14 pb-12 flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Left: Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <a href="/" className="flex items-center gap-3 w-fit">
            <ArchitectureLogo />
            <span
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              className="text-[18px] font-semibold tracking-tight text-stone-900"
            >
              Architecture X
            </span>
          </a>
          <p className="text-[13.5px] text-stone-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right: Pages */}
        <div className="flex flex-col gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-stone-400">
            Pages
          </span>
          <ul className="flex flex-col gap-2.5">
            {pageLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] text-stone-600 hover:text-stone-900 transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="border-t border-stone-300/70" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-8 py-5">
        <p className="text-[12.5px] text-stone-400">
          Copyright © Architecture X.
        </p>
      </div>

    </footer>
  );
}