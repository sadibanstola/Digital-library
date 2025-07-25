"use client"
import Footer from "../Footer/Footer"

const About = () => {
  return (
    <section className="bg-white">
      {/* Hero Section with Banner and Logo */}
      <div className="relative">
        {/* Banner Image - Responsive */}
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[407px] overflow-hidden">
          <img src="/img.png" alt="About Banner" className="w-full h-full object-cover object-center" />
        </div>

        {/* Logo - Responsive positioning */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 sm:-bottom-16 lg:-bottom-20">
          <img
            src="/logo.png"
            alt="LibraDream Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[237px] lg:h-[237px] rounded-xl lg:rounded-[20px]"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* LibraDreams Explorer Section */}
        <div className="pt-16 sm:pt-20 lg:pt-24 pb-8 lg:pb-12">
          <div className="text-center lg:text-left lg:max-w-5xl">
            <h1 className="font-[Marion] font-bold text-2xl sm:text-3xl lg:text-[24px] leading-tight text-[#121212] mb-6 lg:mb-8">
              LibraDreams Explorer
            </h1>

            <div className="space-y-4 lg:space-y-6" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              <p className=" font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] text-[#121212]">
                LibraDream is a free digital library platform that helps readers explore stories that match their
                imagination. Whether you're a student, a casual reader, or a lifelong learner, LibraDream makes
                discovering new content easy and inspiring. LibraDream is your personal gateway to a universe of
                knowledge, imagination and discovery. Our goal is to make books accessible to everyone, anytime and
                anywhere.
              </p>

              <p className=" font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] text-[#121212]">
                Free timeless literary classics to trending contemporary reads, LibraDream offers something for every
                type of reader. Whether you're here to study, relax, or explore something, we've got you covered.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="py-8 lg:py-12">
          <div className="text-center lg:text-left lg:max-w-5xl">
            <h2 className="font-[Marion] font-bold text-xl sm:text-2xl lg:text-[24px] leading-tight text-[#000000] mb-4 lg:mb-6">
              Our Mission
            </h2>
            <p className="font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] text-[#121212]"style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              To create a personalized, emotion-based digital reading experience that connects users with stories
              they'll love. We believe in making knowledge accessible, fun, and meaningful for everyone.
            </p>
          </div>
        </div>

        {/* Why Choose LibraDream Section */}
        <div className="py-8 lg:py-12">
          <div className="text-center lg:text-left lg:max-w-5xl">
            <h2 className="font-[Marion] font-bold text-xl sm:text-2xl lg:text-[24px] leading-tight text-[#000000] mb-4 lg:mb-6">
              Why Choose LibraDream?
            </h2>
            <ul className="font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] text-[#121212] list-disc pl-5 space-y-2 lg:space-y-3"style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              <li className="marker:text-black">Thousands of free eBooks across all genres.</li>
              <li className="marker:text-black">Ad-free, clean reading interfaces.</li>
              <li className="marker:text-black">Request a new book and get it added within 24 hours.</li>
              <li className="marker:text-black">Support Bookmark.</li>
              <li className="marker:text-black">Save and Organize.</li>
              <li className="marker:text-black">Curated Content.</li>
              <li className="marker:text-black">Discovery by Mood.</li>
            </ul>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="py-7 lg:py-12">
          {/* Mobile Cards - Stacked */}
          <div className="block lg:hidden space-y-6">
            <div className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group p-5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <img
                src="/book.png"
                alt="Curated Content"
                className="w-full h-auto mb-4 transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className="font-semibold text-lg text-[#121212] mb-3">Thousands of Free eBooks</h3>
              <p className="font-normal text-base text-[#121212CC] leading-[1.5]">
                Access a vast collection of stories across every genre, completely free.
              </p>
            </div>

            <div className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group p-5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <img
                src="/person.png"
                alt="Save & Organize"
                className="w-full h-auto mb-4 transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className="font-[Gothic_A1] font-semibold text-lg text-[#121212] mb-3">Ads Free, Clean Interface</h3>
              <p className="font-[Gothic_A1] font-normal text-base text-[#121212CC] leading-[1.5]">
                Enjoy a peaceful reading experience with zero distractions.
              </p>
            </div>

            <div className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group p-5 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
              <img
                src="/family.png"
                alt="Mood Discovery"
                className="w-full h-auto mb-4 transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className="font-[Gothic_A1] font-semibold text-lg text-[#121212] mb-3">For All Types of Readers</h3>
              <p className="font-[Gothic_A1] font-normal text-base text-[#121212CC] leading-[1.5]">
                Designed for students, casual readers, and lifelong learners alike.
              </p>
            </div>
          </div>

          {/* Desktop Cards - Your Original Sizes */}
          <div className="hidden lg:flex justify-center gap-[20px] flex-wrap max-w-[1230px] mx-auto">
            {/* Card 1: Thousands of Free eBooks - Your exact dimensions */}
            <div className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group max-w-[392px] h-[460px] p-5 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              <img
                src="/book.png"
                alt="Curated Content"
                className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className="font-semibold text-[20px] text-[#121212] mb-[10px]">
                Thousands of Free eBooks
              </h3>
              <p className=" font-normal text-[16px] text-[#121212CC] leading-[1.5]">
                Access a vast collection of stories across every genre, completely free.
              </p>
            </div>

            {/* Card 2: Save & Organize - Your exact dimensions */}
            <div className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group max-w-[392px] h-[460px] p-5 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              <img
                src="/person.png"
                alt="Save & Organize"
                className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className=" font-semibold text-[20px] text-[#121212] mb-[10px]">
                Ads Free, Clean Interface
              </h3>
              <p className=" font-normal text-[16px] text-[#121212CC] leading-[1.5] w-[274px]">
                Enjoy a peaceful reading experience with zero distractions.
              </p>
            </div>

            {/* Card 3: Mood Discovery - Your exact dimensions */}
            <div className="bg-white hover:bg-[#E5E5E5] transition-colors duration-300 group max-w-[392px] h-[460px] p-5 rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.1)]"style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              <img
                src="/family.png"
                alt="Mood Discovery"
                className="w-full h-auto mb-[15px] transform group-hover:scale-90 transition-transform duration-300"
              />
              <h3 className=" font-semibold text-[20px] text-[#121212] mb-[10px]">
                For All Types of Readers
              </h3>
              <p className=" font-normal text-[16px] text-[#121212CC] leading-[1.5]">
                Designed for students, casual readers, and lifelong learners alike.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="py-8 lg:py-12">
          <div className="text-center lg:text-left lg:max-w-5xl">
            <h2 className="font-[Marion] font-bold text-xl sm:text-2xl lg:text-[24px] leading-tight text-[#000000] mb-4 lg:mb-6">
              Our Values
            </h2>
            <p className=" font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] text-[#121212]"style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              At LibraDream, we are committed to accessibility, quality, and innovation. We believe in providing a
              platform that is inclusive, reliable, and constantly evolving to meet the need of our users.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="py-8 lg:py-12 pb-16 lg:pb-20">
          <div className="text-center lg:text-left lg:max-w-5xl">
            <h2 className="font-[Marion] font-bold text-xl sm:text-2xl lg:text-[24px] leading-tight text-[#000000] mb-4 lg:mb-6">
              Contact Us
            </h2>
            <div className="space-y-3 lg:space-y-4"style={{ fontFamily: '"Gothic A1", sans-serif' }}>
              <p className=" font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[20px] text-[#121212]">
                We love hearing from our users. Whether it's a book request, suggestion, or feedback and we're always
                listening to our customers
              </p>
              <div className="font-normal text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[27px] text-[#121212]">
                Email:{" "}
                <span className="inline-block px-3 py-1 rounded-lg text-[#CB602B] font-medium">
                  LibraDreamtech@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default About
