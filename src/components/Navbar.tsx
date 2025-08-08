
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import WaitlistDialog from "@/components/WaitlistDialog";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "home" | "features" | "how" | "contact"
  >("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  // Ensure body scroll is restored on unmount and close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  // Determine active section for highlighting nav links
  useEffect(() => {
    const getPageOffset = (el: HTMLElement | null) => {
      if (!el) return Infinity;
      const rect = el.getBoundingClientRect();
      return rect.top + window.scrollY;
    };

    const computeActive = () => {
      const featuresEl = document.getElementById("features");
      const faqEl = document.getElementById("faq");
      const footerEl = document.getElementById("footer");

      const featuresTop = getPageOffset(featuresEl as HTMLElement);
      const faqTop = getPageOffset(faqEl as HTMLElement);
      const footerTop = getPageOffset(footerEl as HTMLElement);
      const y = window.scrollY + 120; // offset to account for header

      // If we're at or near the very bottom, mark contact
      const nearBottom =
        window.scrollY + window.innerHeight >=
        (document.documentElement?.scrollHeight || document.body.scrollHeight) - 10;
      if (nearBottom) {
        setActiveSection("contact");
        return;
      }

      if (y < featuresTop - 100) {
        setActiveSection("home");
      } else if (y < faqTop - 100) {
        setActiveSection("features");
      } else if (y < footerTop - 100) {
        setActiveSection("how");
      } else {
        setActiveSection("contact");
      }
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);
    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible min-h-[20px] bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 sm:px-6 lg:px-8 min-h-[20px]">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <a
            href="#top"
            className="inline-flex items-center gap-2 fadeIn stagger-1"
            aria-label="Blendn home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            <img src="/brandlogo.webp" alt="Blendn logo" className="h-10 sm:h-16 md:h-16 lg:h-20 w-auto md:-my-2 lg:-my-3" />
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-2">
          <a
            href="#"
            className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-all backdrop-blur shadow-sm fadeIn stagger-2",
              activeSection === "home"
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white/70 text-gray-800 hover:bg-white"
            )}
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a
            href="#features"
            className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-all backdrop-blur shadow-sm fadeIn stagger-3",
              activeSection === "features"
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white/70 text-gray-800 hover:bg-white"
            )}
          >
            Features
          </a>
          <a
            href="#faq"
            className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-all backdrop-blur shadow-sm fadeIn stagger-4 whitespace-nowrap",
              activeSection === "how"
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white/70 text-gray-800 hover:bg-white"
            )}
          >
            How it works
          </a>
          <a
            href="#footer"
            className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-all backdrop-blur shadow-sm",
              activeSection === "contact"
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white/70 text-gray-800 hover:bg-white"
            )}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </a>
        </nav>

        {/* Right: CTA (desktop) + Mobile menu button */}
        <div className="flex items-center justify-end gap-2">
          <WaitlistDialog>
            <Button size="sm" className="hidden md:inline-flex rounded-full h-9 px-4 fadeIn stagger-3">
              Join Waitlist
            </Button>
          </WaitlistDialog>
          {/* Mobile menu button - top right on mobile */}
          <button
            className="md:hidden text-gray-700 p-3 focus:outline-none rounded-full hover:bg-gray-100 active:bg-gray-200 transition"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - overlay + sliding panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-all",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        {/* Background overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-white transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}
        />

        {/* Fullscreen menu content */}
        <div
          className={cn(
            "absolute inset-0 bg-white px-6 transition-opacity duration-300 flex flex-col items-center justify-center",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Close button inside overlay */}
          <button
            className="absolute right-4 top-4 p-2 rounded-full text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition"
            aria-label="Close menu"
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            <X size={22} />
          </button>
          <nav className="w-full max-w-sm flex flex-col items-center gap-3">
            <a
              href="#"
              className={cn(
                "w-full text-center text-xl font-medium py-4 px-4 rounded-xl",
                activeSection === "home"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-50 hover:bg-gray-100"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Home
            </a>
            <a
              href="#features"
              className={cn(
                "w-full text-center text-xl font-medium py-4 px-4 rounded-xl",
                activeSection === "features"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-50 hover:bg-gray-100"
              )}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Features
            </a>
            <a
              href="#faq"
              className={cn(
                "w-full text-center text-xl font-medium py-4 px-4 rounded-xl whitespace-nowrap",
                activeSection === "how"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-50 hover:bg-gray-100"
              )}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              How it works
            </a>
            <a
              href="#footer"
              className={cn(
                "w-full text-center text-xl font-medium py-4 px-4 rounded-xl",
                activeSection === "contact"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-50 hover:bg-gray-100"
              )}
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
                setActiveSection("contact");
              }}
            >
              Contact
            </a>
            <a
              href="#newsletter"
              className="mt-4 button-primary inline-flex justify-center items-center rounded-full"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
