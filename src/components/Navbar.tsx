
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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 min-h-[20px] relative">
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
            {/* Mobile logo */}
            <img
              src="/logo2.webp"
              alt="Blendn logo"
              className="h-16  w-auto md:hidden"
              width={160}
              height={48}
              loading="eager"
              decoding="async"
            />
            {/* Desktop logo */}
            <img
              src="/brandlogo.webp"
              alt="Blendn logo"
              className="hidden md:block h-16 lg:h-20 w-auto md:-my-2 lg:-my-3"
              width={200}
              height={80}
              loading="eager"
              decoding="async"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation (absolute centered on desktop) */}
        <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2" aria-label="Primary">
          <a
            href="#"
            className={cn(
              "inline-flex items-center px-3 py-1.5 rounded-full text-sm transition-all backdrop-blur shadow-sm fadeIn stagger-2",
              activeSection === "home"
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white/70 text-gray-800 hover:bg-white"
            )}
            aria-current={activeSection === "home" ? "page" : undefined}
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
            aria-current={activeSection === "features" ? "true" : undefined}
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
            aria-current={activeSection === "how" ? "true" : undefined}
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
            aria-current={activeSection === "contact" ? "true" : undefined}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </a>
        </nav>

        {/* Right: CTA (desktop) + Mobile menu button */}
        <div className="flex items-center gap-2">
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
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - simplified overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[1000] md:hidden bg-white px-6 transition-opacity duration-300 flex flex-col items-center justify-center text-gray-900",
          isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        )}
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
      >
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
              activeSection === "home" ? "bg-gray-900 text-white" : "bg-gray-50 hover:bg-gray-100 text-gray-900"
            )}
            aria-current={activeSection === "home" ? "page" : undefined}
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
              activeSection === "features" ? "bg-gray-900 text-white" : "bg-gray-50 hover:bg-gray-100 text-gray-900"
            )}
            aria-current={activeSection === "features" ? "true" : undefined}
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
              activeSection === "how" ? "bg-gray-900 text-white" : "bg-gray-50 hover:bg-gray-100 text-gray-900"
            )}
            aria-current={activeSection === "how" ? "true" : undefined}
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
              activeSection === "contact" ? "bg-gray-900 text-white" : "bg-gray-50 hover:bg-gray-100 text-gray-900"
            )}
            aria-current={activeSection === "contact" ? "true" : undefined}
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
    </header>
  );
};

export default Navbar;
