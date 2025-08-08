
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "opacity-0 p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl shadow-elegant hover:shadow-elegant-hover",
        "transition-all duration-300 hover:-translate-y-1"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-100 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-700 text-base sm:text-lg mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Stuff you’ll actually use
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Real-life plans, zero cringe. Built for nights out, festivals, pop-ups, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<span aria-hidden>✨</span>}
            title="Smart Feed"
            description="Your city, your vibe: trending drops, niche scenes, and hidden gems—no doomscroll."
            index={0}
          />
          <FeatureCard
            icon={<span aria-hidden>👻</span>}
            title="Check‑in + Ghost Mode"
            description="Tap in at events to unlock matches. Prefer low‑key? Switch to ghost mode and browse without being seen."
            index={1}
          />
          <FeatureCard
            icon={<span aria-hidden>🫧</span>}
            title="Anonymous Match"
            description={`Blurred until it’s mutual. Pick your intent: dating, friends, collab, or networking.`}
            index={2}
          />
          <FeatureCard
            icon={<span aria-hidden>💬</span>}
            title="Event Chat (No Cringe)"
            description="Anonymous chat for every event. Ask questions, find the afters, or drop a one‑liner."
            index={3}
          />
          <FeatureCard
            icon={<span aria-hidden>🎥</span>}
            title="Live Stories"
            description="10‑second vibe check from people there. Decide fast, pull up or pass."
            index={4}
          />
          <FeatureCard
            icon={<span aria-hidden>👥</span>}
            title="Crew Linking"
            description={`Roll with your people. Match your group with other squads on the same energy.`}
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
