
import React, { useRef } from "react";

const MadeByHumans = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-gray-50 relative" id="made-by-humans" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute -top-24 left-0 w-80 h-80 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-orange-50 rounded-full opacity-70 blur-3xl -z-10"></div>

      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>Built by humans • Supercharged by AI</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4">
            Built by Humans. Supercharged by AI.
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Blend’n pairs machine precision with human intuition to spark conversations that actually go somewhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            {/* Principle 1 */}
            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pulse-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pulse-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7H7m6 4H7m6 4H7m8-9l3 3-3 3M5 4h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Human in the Loop by Default</h3>
                  <p className="text-gray-600">
                    Our models do the heavy lifting ranking, timing, and context while humans make the calls that matter. You stay in control, always.
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zm0 0v8m-4 4h8a4 4 0 00-4-4 4 4 0 00-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Context‑Aware, Not Creepy</h3>
                  <p className="text-gray-600">
                    Signals, not surveillance. We use ambient context to suggest better moments to connect without tracking that compromises trust.
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pulse-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pulse-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Privacy First. Joyful by Design.</h3>
                  <p className="text-gray-600">
                    Anonymous by default, transparent by choice. Delightful micro‑interactions make meeting new people feel easy not awkward.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick stats */}
           
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant group">
              <div
                className="h-[420px] sm:h-[520px] bg-cover bg-center relative flex items-end p-6 sm:p-8 transition-transform duration-500 group-hover:scale-[1.01]"
                style={{
                  backgroundImage: "url('/background-section3.png')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="relative z-10 text-white w-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-satoshi font-bold tracking-wide">BLENDN</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-pulse-400 animate-pulse" />
                      Human‑in‑the‑loop
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Where Technology Meets Humanity</h3>
                  <p className="text-white/90 text-sm sm:text-base max-w-md">
                    We build tools that make it easier to be more human nudging the right moments, not forcing them.
                  </p>

                  {/* Floating badges */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs">Real‑world first</span>
                    <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs">Respectful AI</span>
                    <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs">No endless feeds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pulse-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
