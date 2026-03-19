const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] w-full border-t border-[#2E2B28]">

      {/* Main section */}
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-16 flex flex-col md:flex-row justify-between items-start gap-16">

        {/* Left: Brand */}
        <div className="flex flex-col gap-6 max-w-xs">
          <a href="/" className="flex items-center gap-3 w-fit group">
            <span
              className="text-[22px] font-bold tracking-tight text-[#F2EDE8] group-hover:text-[#C9A96E] transition-colors duration-300"
            >
              Resin Reskin
            </span>
          </a>
          <p className="text-[14px] text-[#8C8480] leading-relaxed ">
            Specialists in bespoke surface transformations. From resin driveways to luxury interior finishes, we redefine your space with precision.
          </p>
        </div>

        {/* Right: Pages */}
        <div className="flex flex-col gap-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8844A]">
            Navigation
          </span>
          <ul className="flex flex-col gap-3.5">
            {pageLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[14px] text-[#8C8480] hover:text-[#C9A96E] transition-all duration-300  tracking-wide"
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
        <div className="border-t border-[#2E2B28]" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-[#5A5652]  tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Resin Reskin. All rights reserved.
        </p>
        
        <div className="flex items-center gap-2">
           <span className="text-[11px] text-[#5A5652] uppercase tracking-[0.1em]">Powered by</span>
           <a 
             href="#" 
             className="text-[11px] font-bold text-[#A8844A] hover:text-[#C9A96E] transition-colors uppercase tracking-[0.2em]"
           >
             Ansely
           </a>
        </div>
      </div>

    </footer>
  );
}