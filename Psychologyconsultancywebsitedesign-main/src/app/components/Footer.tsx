import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F5EAE0] border-t border-[#8B4556]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F7C7D0] to-[#E5B8C5] flex items-center justify-center">
                <span className="text-white font-serif">S</span>
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#8B4556]">Serenity Mind</h3>
                <p className="text-xs text-[#6B5B56]">Psychology Consultancy</p>
              </div>
            </div>
            <p className="text-[#6B5B56] mb-4 max-w-md">
              A safe space for healing, growth, and self-discovery. 
              We're here to support you on your journey to mental wellness.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-[#8B4556]/20 flex items-center justify-center text-[#8B4556] hover:bg-[#F7C7D0] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-[#8B4556]/20 flex items-center justify-center text-[#8B4556] hover:bg-[#F7C7D0] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-[#8B4556]/20 flex items-center justify-center text-[#8B4556] hover:bg-[#F7C7D0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-[#8B4556] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#6B5B56] hover:text-[#8B4556] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#6B5B56] hover:text-[#8B4556] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#6B5B56] hover:text-[#8B4556] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#6B5B56] hover:text-[#8B4556] transition-colors">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-[#8B4556] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-[#6B5B56]">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-[#6B5B56]">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>hello@serenitymind.com</span>
              </li>
              <li className="flex items-start space-x-2 text-[#6B5B56]">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Wellness Avenue<br />San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#8B4556]/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#6B5B56] text-sm">
            © {new Date().getFullYear()} Serenity Mind. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-[#6B5B56] hover:text-[#8B4556] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#6B5B56] hover:text-[#8B4556] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#6B5B56] hover:text-[#8B4556] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
