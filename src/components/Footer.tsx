
import React from "react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="w-full border-t bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + Tagline */}
          <div className="space-y-4">
            <a href="#top" className="inline-flex items-center gap-3" aria-label="Blendn home">
              <img src="/logo2.webp" alt="Blendn logo" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
             
            </a>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Blendn helps you meet people IRL at events. Smart feed, anonymous
              matching, crew linking and more built for real‑world connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Explore</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-base md:text-lg">
              <li>
                <a href="#features" className="block py-1.5 md:py-2 text-gray-700 hover:text-pulse-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="block py-1.5 md:py-2 text-gray-700 hover:text-pulse-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#newsletter" className="block py-1.5 md:py-2 text-gray-700 hover:text-pulse-500 transition-colors">
                  Join the waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Follow</h3>
            <div className="flex items-center flex-wrap gap-4 sm:gap-6">
              <a
                href="https://www.instagram.com/blendn.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blendn on Instagram"
                className="inline-flex items-center gap-3 group"
                title="Blendn on Instagram"
              >
                <span className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                  <Instagram className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={2} />
                </span>
                <span className="text-base sm:text-lg md:text-xl font-medium text-gray-900">@blendn.social</span>
              </a>
              <a
                href="https://www.instagram.com/matrix.social.labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Matrix Social Labs on Instagram"
                className="inline-flex items-center gap-3 group"
                title="Matrix Social Labs on Instagram"
              >
                <span className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
                  <Instagram className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={2} />
                </span>
                <span className="text-base sm:text-lg md:text-xl font-medium text-gray-900">@matrix.social.labs</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Blendn. A product of Matrix Social Labs.
          </p>
          <p className="text-xs text-gray-500">
            Site by {" "}
            <a
              href="https://unbothered.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pulse-500 hover:underline"
            >
              Studio Unbothered
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
