import React from 'react';

const WhyChooseUs = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;500&display=swap');
          /* Marion font is not freely available; using a fallback or placeholder */
          @font-face {
            font-family: 'Marion';
            src: local('Marion'), url('/path-to-marion-font.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            /* Note: Replace '/path-to-marion-font.woff2' with actual font file path if available */
          }
          /* Fallback for Marion if not available */
          .font-marion-fallback {
            font-family: 'Marion', serif;
          }
        `}
      </style>
      <section className="py-[60px] px-4 sm:px-6 md:px-8 lg:px-12 bg-[#E6F0FA] text-center min-h-[auto] lg:min-h-[680px]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-marion-fallback text-xl sm:text-2xl md:text-3xl lg:text-[36px] text-[#121212] mb-[20px] sm:mb-[30px] md:mb-[40px]">
            Why Choose LibraDream?
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[30px] flex-wrap">
            {/* Card 1: Curated Content */}
            <div className="w-full sm:max-w-[300px] lg:max-w-[350px] p-[15px] sm:p-[20px] bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-[#E5E5E5] transition-colors duration-300 group mx-auto">
              <img
                src="/1.png"
                alt="Curated Content"
                className="w-full h-auto mb-[10px] sm:mb-[15px] object-contain transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className="font-['Gothic_A1'] font-medium text-base sm:text-lg lg:text-[20px] text-[#5352ED] mb-[8px] sm:mb-[10px] text-left">
                Curated Content
              </h3>
              <p className="font-['Gothic_A1'] font-light text-sm sm:text-base lg:text-[16px] text-[#121212CC] leading-[1.5] text-left">
                Discover stories handpicked by our team to match your interest.
              </p>
            </div>
            {/* Card 2: Save & Organize */}
            <div className="w-full sm:max-w-[300px] lg:max-w-[350px] p-[15px] sm:p-[20px] bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-[#E5E5E5] transition-colors duration-300 group mx-auto">
              <img
                src="/img-2.png"
                alt="Save & Organize"
                className="w-full h-auto mb-[10px] sm:mb-[15px] object-contain transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className="font-['Gothic_A1'] font-medium text-base sm:text-lg lg:text-[20px] text-[#5352ED] mb-[8px] sm:mb-[10px] text-left">
                Save & Organize
              </h3>
              <p className="font-['Gothic_A1'] font-light text-sm sm:text-base lg:text-[16px] text-[#121212CC] leading-[1.5] text-left">
                Easily save your favorite stories and organize them into collections.
              </p>
            </div>
            {/* Card 3: Mood Discovery */}
            <div className="w-full sm:max-w-[300px] lg:max-w-[350px] p-[15px] sm:p-[20px] bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-[#E5E5E5] transition-colors duration-300 group mx-auto">
              <img
                src="/img-3.png"
                alt="Mood Discovery"
                className="w-full h-auto mb-[10px] sm:mb-[15px] object-contain transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className="font-['Gothic_A1'] font-medium text-base sm:text-lg lg:text-[20px] text-[#5352ED] mb-[8px] sm:mb-[10px] text-left">
                Mood Discovery
              </h3>
              <p className="font-['Gothic_A1'] font-light text-sm sm:text-base lg:text-[16px] text-[#121212CC] leading-[1.5] text-left">
                LibraDream lets you explore content based on how you feel and interest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;