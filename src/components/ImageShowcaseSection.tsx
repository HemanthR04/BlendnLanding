
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience the Future Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
          The world didn&apos;t need another social app.
          It needed Blendn.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/image2.jpg" 
              alt="Blendn interface showcase on device"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation Social Discovery</h3>
            <p className="text-gray-700 text-sm sm:text-base">
            Built with real-time tech, privacy-first design, and a hint of serendipity, Blendn seamlessly integrates into your city&apos;s social fabric—helping you discover events, connect with people nearby, and turn everyday outings into unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
