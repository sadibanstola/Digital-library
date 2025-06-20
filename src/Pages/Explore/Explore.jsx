import React, { useState } from 'react';

const Explore = () => {
  const testimonials = [
    {
      name: "Jordon",
      quote: "The design is so clean and calming. I actually enjoy scrolling through books again",
      date: "May 1, 2025",
      image: "/jodon.png"
    },
    {
      name: "Anika",
      quote: "LibraDream feels like it knows me and I find something inspiring every time I log in.",
      date: "May 12, 2025",
      image: "/Frame 1116607927.png"
    },
    {
      name: "Ravi",
      quote: "The design is so clean and calming. I actually enjoy scrolling through books again",
      date: "May 8, 2025",
      image: "/Ellipse 25.png"
    },
    {
      name: "Hannah Schmitt",
      quote: "I love how the website recommends stories and genre based on my interest mood it feels personal.",
      date: "May 7, 2025",
      image: "/Frame 1116607927-2.png"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    
    <section className="px-24 py-16 bg-[#F4F6FD] text-center">
      <h2 className="text-4xl font-marion font-normal text-[#121212] mb-10" style={{ fontFamily: 'Marion' }}>
        Explore by Genre
      </h2>
      <div className="flex overflow-x-auto gap-9 pb-4 snap-x snap-mandatory scrollbar-hide ">
        {/* Card 1: Fantasy */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/Fantasy.png" alt="Fantasy" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Fantasy</h3>
        </div>
        {/* Card 2: Romance */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/romanticpng.png" alt="Romance" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Romance</h3>
        </div>
        {/* Card 3: Ghost */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/ghost.png" alt="Ghost" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Ghost</h3>
        </div>
        {/* Card 4: Adventure */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/adventure.png" alt="Adventure" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Adventure</h3>
        </div>
        {/* Card 5: Mystery */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/Health.png" alt="Health" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Health</h3>
        </div>
        {/* Card 6: Sci-Fi */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/Sci-Fic.png" alt="Sci-Fi" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Sci-Fi</h3>
        </div>
        {/* Card 7: Thriller */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/Fiction.png" alt="Fiction" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Fiction</h3>
        </div>
        {/* Card 8: Historical */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/Edu.png" alt="Education" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Education</h3>
        </div>
        {/* Card 9: Young Adult */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/Fun.png" alt="Fun Read" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Fun Read</h3>
        </div>
        {/* Card 10: Non-Fiction */}
        <div className="w-[260px] h-[320px] bg-white rounded-lg border border-[#5352ED73] p-4 flex flex-col justify-between snap-start flex-shrink-0">
          <img src="/classic.png" alt="classic" className="w-full h-auto mb-2.5" />
          <h3 className="text-2xl font-gothic font-medium text-[#121212]">Classic</h3>
        </div>
      </div>
      
      <h2 className="text-4xl font-[400px] text-[#121212] mt-16 mb-5" style={{ fontFamily: 'Marion' }}>
        What Our Readers Say
      </h2>

      {/* testimonials starts here */}
      <div className="p-5 bg-white rounded-lg max-w-[1200px] ml-[80px]">
        
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
            className="w-[88px] h-[88px] rounded-full mb-2 "
          />
           <div className="">
          <p className="text-lg font-gothic font-medium text-[#121212] mb-2">
            {testimonials[currentTestimonial].name}
          </p>
          <p className="text-base font-gothic font-normal text-[#121212] mb-2">
            {testimonials[currentTestimonial].quote}
          </p>
          <p className="text-sm font-gothic font-normal text-[#666] mb-2 pl-[]">
            {testimonials[currentTestimonial].date}
          </p>
        </div>
        <div className="flex justify-between mt-5">
          <button onClick={prevTestimonial} className="border-none bg-transparent cursor-pointer text-4xl text-[#00000073]">←</button>
          <button onClick={nextTestimonial} className="border-none bg-transparent cursor-pointer text-4xl text-[#000000]">→</button>
        </div>
      </div>
    </section>
  );
};

export default Explore;