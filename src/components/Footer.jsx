import { HashLink as Link } from "react-router-hash-link";

const pageLinks = [
  { label: "Home", href: "/#" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] w-full border-t border-[#2E2B28]">

      {/* Main section */}
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-16 flex flex-col md:flex-row justify-between items-start gap-16">

        {/* Left: Brand */}
        <div className="flex flex-col gap-6 max-w-xs">
          <span
            className="text-[22px] font-bold tracking-tight text-[#F2EDE8]"
          >
            Resin Reskin
          </span>
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
                <Link
                  smooth
                  to={link.href}
                  className="text-[14px] text-[#8C8480] hover:text-[#C9A96E] transition-all duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="border-t border-[#2E2B28]" />
      </div>

      {/* Bottom bar: Copyright */}
      <div className="mt-8 pt-8 text-center">
        <p className="text-[12px] text-[#5A5652] tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Resin Reskin. All rights reserved.
        </p>
      </div>

      {/* Bottom Bar: Links & Branding */}
      <div className="mt-4 pb-12 flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
        {/* Left: Terms & Privacy */}
        <div className="flex gap-4 text-[13px]">
          <Link
            to="/terms"
            className="text-[#8C8480] hover:text-[#C9A96E] transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span className="text-[#2E2B28]">|</span>
          <Link
            to="/privacy"
            className="text-[#8C8480] hover:text-[#C9A96E] transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Center: Powered by Ansely */}
        <p className="text-[13px] font-medium text-[#5A5652]">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8844A] hover:text-[#C9A96E] transition-colors"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
}