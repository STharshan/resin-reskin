import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const services = [
    { label: "Venetian Plaster", href: "/venetian-plaster" },
    { label: "Metallic Plaster", href: "/metallic-plaster" },
    { label: "Minerals Plaster", href: "/minerals-plaster" },
    { label: "Polished Plaster", href: "/polished-plaster" },
    { label: "Micro Cement", href: "/micro-cement" },
    { label: "Epoxy Resin", href: "/epoxy-resin" },
  ];

  return (
    <nav className="w-full bg-[#0E0E0E] border-b border-[#2E2B28] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="text-[15px] font-semibold tracking-tight text-[#F2EDE8] uppercase">
            Resin <span className="text-[#C9A96E]">Reskin</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link to="/" className="text-[14px] text-[#8C8480] hover:text-[#C9A96E] transition-colors font-medium">
              Home
            </Link>
          </li>
          
          {/* Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-[14px] text-[#8C8480] hover:text-[#C9A96E] transition-colors font-medium"
            >
              Services
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-4 w-60 bg-[#1A1917] border border-[#3A3633] shadow-2xl rounded-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-5 py-3 text-[13px] text-[#8C8480] hover:bg-[#221F1C] hover:text-[#C9A96E] transition-colors border-b border-[#2E2B28] last:border-0"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/about" className="text-[14px] text-[#8C8480] hover:text-[#C9A96E] transition-colors font-medium">
              About
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-[#C9A96E] text-[#0E0E0E] text-[13px] font-bold px-6 py-2.5 rounded-full hover:bg-[#A8844A] transition-all duration-300"
          >
            Get in touch 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-[#F2EDE8] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#0E0E0E] z-40 px-6 py-10 flex flex-col gap-8 h-screen overflow-y-auto animate-in fade-in slide-in-from-right-full">
          <Link to="/" className="text-[20px] text-[#F2EDE8] font-semibold">Home</Link>
          
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A8844A] font-bold">Our Services</span>
            <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-[#2E2B28]">
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="text-[16px] text-[#8C8480] hover:text-[#C9A96E]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="text-[20px] text-[#F2EDE8] font-semibold">About</Link>
          
          <Link
            to="/contact"
            className="mt-6 flex items-center justify-center gap-3 bg-[#C9A96E] text-[#0E0E0E] text-[15px] font-bold py-4 rounded-full w-full"
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </nav>
  );
}