
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import WaitlistDialog from "@/components/WaitlistDialog";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur shadow-sm border-gray-200 py-1 md:py-2"
          : "bg-white border-gray-200 py-2 sm:py-3 md:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 fadeIn stagger-1"
            aria-label="Blendn home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            <img src="/logo2.webp" alt="Blendn logo" className="h-9 sm:h-10 w-auto" />
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          <a
            href="#"
            className="nav-link fadeIn stagger-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#features" className="nav-link fadeIn stagger-3">About</a>
          <a href="#details" className="nav-link fadeIn stagger-4">Contact</a>
        </nav>

        {/* Right: CTA (desktop) + Mobile menu button */}
        <div className="flex items-center justify-end gap-2">
          <WaitlistDialog>
            <Button size="sm" className="hidden md:inline-flex rounded-full h-9 px-4 fadeIn stagger-3">
              Join Waitlist
            </Button>
          </WaitlistDialog>
          {/* Mobile menu button - increased touch target */}
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
        {/* Dim overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
          }}
        />

        {/* Sliding panel */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-11/12 max-w-sm bg-white shadow-xl rounded-l-2xl pt-20 px-6 transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-4 mt-4">
            <a
              href="#"
              className="text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-100 active:bg-gray-200"
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
              className="text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-100 active:bg-gray-200"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              About
            </a>
            <a
              href="#details"
              className="text-lg font-medium py-3 px-4 rounded-xl hover:bg-gray-100 active:bg-gray-200"
              onClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Contact
            </a>
            <a
              href="#newsletter"
              className="mt-2 button-primary inline-flex justify-center items-center rounded-full"
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
