
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OrganizerWhatIs from "@/components/OrganizerWhatIs";
import OrganizerWhyList from "@/components/OrganizerWhyList";
import OrganizerEventTypes from "@/components/OrganizerEventTypes";
import Testimonials from "@/components/Testimonials";
import OrganizerGetStarted from "@/components/OrganizerGetStarted";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen app-fade-in" id="top">
      <Navbar />
      <main id="main" className="space-y-4 sm:space-y-8">
        <Hero />
        <OrganizerWhatIs />
        <OrganizerEventTypes />
        <OrganizerWhyList />
        
        <Testimonials />
        <FAQ />
        <OrganizerGetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
