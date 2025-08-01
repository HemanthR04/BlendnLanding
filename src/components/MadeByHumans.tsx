
import React, { useRef } from "react";

const MadeByHumans = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative" id="made-by-humans" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-orange-50 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>Philosophy</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4">
            Made By AI & Human
          </h2>
          <p className="section-subtitle mx-auto">
            The perfect blend of artificial intelligence and human intuition, creating connections that feel natural and meaningful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pulse-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pulse-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">AI-Powered Matching</h3>
                  <p className="text-gray-600">
                    Our intelligent algorithms analyze real-time context, preferences, and compatibility to suggest meaningful connections at the right moment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Human-Centered Design</h3>
                  <p className="text-gray-600">
                    Every feature is crafted with empathy, understanding how people really connect and what makes interactions feel authentic and comfortable.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 sm:p-8 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Privacy First</h3>
                  <p className="text-gray-600">
                    We believe in anonymous, safe interactions that let you be yourself without judgment—technology serving humanity, not the other way around.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
              <div 
                className="h-[400px] sm:h-[500px] bg-cover bg-center relative flex items-end p-6 sm:p-8"
                style={{
                  backgroundImage: "url('/background-section3.png')"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="relative z-10 text-white">
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-satoshi font-bold text-white tracking-wide">BLENDN</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Where Technology Meets Humanity</h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    Built by a team that believes in real connections, genuine interactions, and the magic that happens when people meet in person.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-pulse-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
