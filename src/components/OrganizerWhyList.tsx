import React from "react";
import { Compass, QrCode, Clapperboard, Target, BarChart3 } from "lucide-react";

const OrganizerWhyList = () => {
  return (
    <section id="features" className="py-6 sm:py-8 md:py-8 bg-gray-50 animate-on-scroll md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="section-container !py-6 sm:!py-8 md:!py-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="pulse-chip mx-auto mb-3">
            <span>Why List on Blend’n?</span>
          </div>
          <h2 className="section-title">Drive discovery, engagement, and sales</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Built to help you fill seats and spark connections that keep people coming back.
          </p>
        </div>

        {/* 3-row bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:[grid-auto-rows:170px] lg:[grid-auto-rows:180px] gap-3 sm:gap-4 md:gap-4">
          {/* Row 1-2, Col 1-3: Large Discoverability */}
          <div className="relative col-span-1 md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-1 rounded-3xl border bg-white p-5 sm:p-6 shadow-elegant transition-all hover:shadow-elegant-hover overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-pulse-100 blur-3xl opacity-60" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-pulse-100 text-pulse-600 flex items-center justify-center">
                  <Compass className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-pulse-700">Discoverability</span>
              </div>
              <h3 className="text-xl sm:text-2xl leading-tight font-display font-semibold text-gray-900">
                Discoverability with purpose
              </h3>
              <p className="mt-2 text-gray-600 max-w-[45ch]">
                Be seen by people actively looking for your kind of event — music, fitness, tech, culture, and more.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {["Music", "Fitness", "Tech"].map((label) => (
                  <div key={label} className="rounded-xl border bg-white/70 p-3 text-center">
                    <p className="text-xs font-medium text-gray-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* SVG Illustration */}
            <svg
              className="hidden md:block absolute -bottom-8 -right-6 w-40 lg:w-48 opacity-70 pointer-events-none"
              viewBox="0 0 200 200"
              aria-hidden="true"
              role="presentation"
            >
              <defs>
                <linearGradient id="gradDisc" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fed7aa" />
                  <stop offset="100%" stopColor="#fb923c" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="100" fill="url(#gradDisc)" />
            </svg>
          </div>

          {/* Row 1, Col 4-6: Check-in */}
          <div className="relative col-span-1 md:col-start-5 md:col-span-2 md:row-start-1 md:row-span-1 rounded-3xl border bg-gradient-to-br from-pulse-50 to-white p-5 shadow-elegant hover:shadow-elegant-hover overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-white text-pulse-600 border flex items-center justify-center">
                  <QrCode className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-pulse-700">Check‑in</span>
              </div>
              <h3 className="text-lg sm:text-xl leading-tight font-display font-semibold text-gray-900">
                In‑app event check‑in
              </h3>
              <p className="mt-1.5 text-gray-600">
                Turn silent ticket holders into real‑time participants with GPS/QR check‑in.
              </p>
            </div>
            {/* SVG Illustration (dotted grid) */}
            <svg
              className="hidden md:block absolute -bottom-4 -right-4 w-28 lg:w-36 opacity-60 pointer-events-none"
              viewBox="0 0 120 120"
              aria-hidden
              role="presentation"
            >
              <defs>
                <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#fb923c" opacity="0.35" />
                </pattern>
              </defs>
              <rect width="120" height="120" fill="url(#dots)" />
              <rect x="0" y="0" width="120" height="120" fill="white" opacity="0.1" />
            </svg>
          </div>

          {/* Row 2, Col 4-5: Story Engagement */}
          <div className="relative col-span-1 md:col-start-1 md:col-span-3 md:row-start-2 md:row-span-1 rounded-3xl border bg-white p-5 shadow-elegant hover:shadow-elegant-hover overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-pulse-100 text-pulse-600 flex items-center justify-center">
                  <Clapperboard className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-pulse-700">Stories</span>
              </div>
              <h3 className="text-base sm:text-lg leading-tight font-display font-semibold text-gray-900">
                Story‑based engagement
              </h3>
              <p className="mt-1.5 text-gray-600">
                Real‑time clips, BTS, and sponsor shoutouts in your event feed.
              </p>
            </div>
            {/* SVG Illustration (curved waves) */}
            <svg
              className="hidden md:block absolute -bottom-6 -right-2 w-32 lg:w-40 opacity-70 pointer-events-none"
              viewBox="0 0 220 120"
              aria-hidden
              role="presentation"
            >
              <path d="M0,80 C40,100 80,60 120,80 C160,100 180,60 220,80" stroke="#fb923c" strokeWidth="8" fill="none" opacity="0.15" />
              <path d="M0,100 C40,120 80,80 120,100 C160,120 180,80 220,100" stroke="#f97316" strokeWidth="6" fill="none" opacity="0.15" />
              <path d="M0,60 C40,80 80,40 120,60 C160,80 180,40 220,60" stroke="#fdba74" strokeWidth="4" fill="none" opacity="0.25" />
            </svg>
          </div>

          {/* Row 2, Col 6: Targeted Matching */}
          <div className="relative col-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1 rounded-3xl border bg-white p-5 shadow-elegant hover:shadow-elegant-hover overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-pulse-100 text-pulse-600 flex items-center justify-center">
                  <Target className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-pulse-700">Matching</span>
              </div>
              <h3 className="text-base sm:text-lg leading-tight font-display font-semibold text-gray-900">
                Targeted audience matching
              </h3>
              <p className="mt-1.5 text-gray-600">
                Networking, dating, friendship, or business — based on preferences.
              </p>
            </div>
            {/* SVG Illustration (overlapping rings) */}
            <svg
              className="hidden md:block absolute -bottom-8 -right-4 w-36 lg:w-44 opacity-80 pointer-events-none"
              viewBox="0 0 200 120"
              aria-hidden
              role="presentation"
            >
              <circle cx="80" cy="60" r="40" fill="none" stroke="#fb923c" strokeWidth="6" opacity="0.25" />
              <circle cx="120" cy="60" r="40" fill="none" stroke="#f97316" strokeWidth="6" opacity="0.25" />
              <circle cx="100" cy="60" r="52" fill="none" stroke="#fdba74" strokeWidth="4" opacity="0.2" />
            </svg>
          </div>

          {/* Row 3, Col 1-6: Analytics */}
          <div className="relative col-span-1 md:col-start-1 md:col-span-6 md:row-start-3 md:row-span-1 rounded-3xl border bg-white p-5 sm:p-6 shadow-elegant hover:shadow-elegant-hover overflow-hidden">
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-pulse-100 blur-3xl opacity-60" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-white text-pulse-600 border flex items-center justify-center">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-pulse-700">Analytics</span>
              </div>
              <h3 className="text-lg sm:text-xl leading-tight font-display font-semibold text-gray-900">
                Live crowd analytics (Pro)
              </h3>
              <p className="mt-1.5 text-gray-600 max-w-[80ch]">
                Track check‑ins, dwell time, chat engagement, story uploads, and top locations with actionable insights.
              </p>
            </div>
            {/* SVG Illustration (bars) */}
            <svg
              className="hidden md:block absolute bottom-4 right-6 w-44 lg:w-60 opacity-80 pointer-events-none"
              viewBox="0 0 240 120"
              aria-hidden
              role="presentation"
            >
              <defs>
                <linearGradient id="gradBars" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb923c" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <rect x="10" y="50" width="28" height="60" rx="6" fill="url(#gradBars)" />
              <rect x="50" y="30" width="28" height="80" rx="6" fill="url(#gradBars)" />
              <rect x="90" y="10" width="28" height="100" rx="6" fill="url(#gradBars)" />
              <rect x="130" y="40" width="28" height="70" rx="6" fill="url(#gradBars)" />
              <rect x="170" y="25" width="28" height="85" rx="6" fill="url(#gradBars)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerWhyList;


