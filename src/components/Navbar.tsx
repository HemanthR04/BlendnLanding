
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300 bg-white shadow-sm border-b border-gray-200"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex items-center gap-3"
          aria-label="Blendn home"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <img src="/logo2.webp" alt="Blendn logo" className="h-16 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#features" className="nav-link">About</a>
          <a href="#details" className="nav-link">Contact</a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none rounded-full hover:bg-gray-100 active:bg-gray-200 transition"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
