
import React, { useEffect, useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/magicui/highlighter";
import {
  Sparkles,
  Ghost,
  EyeOff,
  MessageCircle,
  Video,
  Users,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

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

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const spotlightStyle: React.CSSProperties | undefined = mousePosition
    ? {
        background: `radial-gradient(180px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.18), transparent 45%)`,
      }
    : undefined;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition(null)}
      className={cn(
        "group relative opacity-0 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm",
        "shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant-hover"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Spotlight hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={spotlightStyle}
      />

      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-pulse-200/60" aria-hidden />

      <div className="relative p-4 sm:p-6">
        <div className="mb-4 sm:mb-5 inline-flex items-center justify-center rounded-full border border-pulse-200 bg-gradient-to-br from-pulse-50 to-white text-pulse-700 w-10 h-10 sm:w-12 sm:h-12">
          <span className="grid place-items-center">
            {icon}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
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
    <section className="relative py-12 sm:py-16 md:py-20 pb-0 bg-gray-50" id="features" ref={sectionRef}>
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.6]">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pulse-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-pulse-100/40 blur-3xl" />
      </div>

      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Stuff you’ll <Highlighter action="highlight" trigger="visible" color="#f97316" padding={2}>actually</Highlighter> use
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element lg:max-w-none lg:whitespace-nowrap">
            Real-life plans, zero cringe. Built for nights out, festivals, pop-ups, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<Sparkles className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />}
            title="Smart Feed"
            description="Your city, your vibe: trending drops, niche scenes, and hidden gems—no doomscroll."
            index={0}
          />
          <FeatureCard
            icon={<Ghost className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />}
            title="Check‑in + Ghost Mode"
            description="Tap in at events to unlock matches. Prefer low‑key? Switch to ghost mode and browse without being seen."
            index={1}
          />
          <FeatureCard
            icon={<EyeOff className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />}
            title="Anonymous Match"
            description={`Blurred until it’s mutual. Pick your intent: dating, friends, collab, or networking.`}
            index={2}
          />
          <FeatureCard
            icon={<MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />}
            title="Event Chat (No Cringe)"
            description="Anonymous chat for every event. Ask questions, find the afters, or drop a one‑liner."
            index={3}
          />
          <FeatureCard
            icon={<Video className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />}
            title="Live Stories"
            description="10‑second vibe check from people there. Decide fast, pull up or pass."
            index={4}
          />
          <FeatureCard
            icon={<Users className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />}
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
