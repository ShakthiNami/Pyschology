import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF9F5]/95 backdrop-blur-sm border-b border-[#8B4556]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7C7D0] to-[#E5B8C5] flex items-center justify-center">
              <span className="text-white font-serif">S</span>
            </div>
            <div>
              <h1 className="text-xl font-serif text-[#8B4556]">Serenity Mind</h1>
              <p className="text-xs text-[#6B5B56]">Psychology Consultancy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-[#8B4556]"
                    : "text-[#6B5B56] hover:text-[#8B4556]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-colors"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#8B4556]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#8B4556]/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-[#F7C7D0]/30 text-[#8B4556]"
                      : "text-[#6B5B56] hover:bg-[#F5EAE0]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 px-6 py-2.5 bg-[#8B4556] text-white rounded-full hover:bg-[#6B3544] transition-colors text-center"
              >
                Book a Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
