
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Explore = () => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const genres = [
    { name: "Fantasy", image: "/Fantasy.png" },
    { name: "Romance", image: "/romanticpng.png" },
    { name: "Ghost", image: "/ghost.png" },
    { name: "Adventure", image: "/adventure.png" },
    { name: "Health", image: "/Health.png" },
    { name: "Sci-Fi", image: "/Sci-Fic.png" },
    { name: "Fiction", image: "/Fiction.png" },
    { name: "Education", image: "/Edu.png" },
    { name: "Fun Read", image: "/Fun.png" },
    { name: "Classic", image: "/classic.png" },
  ]

  const testimonials = [
    {
      name: "Jordon",
      review: "The design is so clean and calming. I actually enjoy scrolling through books again",
      date: "May 1, 2025",
      image: "/jodon.png?height=80&width=80",
    },
    {
      name: "Ankita",
      review: "LibraDream feels like it knows me and I find something inspiring every time I log in.",
      date: "May 12, 2025",
      image: "/Frame 1116607927.png?height=80&width=80",
    },
    {
      name: "Ravi",
      review: "The design is so clean and calming. I actually enjoy scrolling through books again",
      date: "May 4, 2025",
      image: "/Ellipse 25.png?height=80&width=80",
    },
    {
      name: "Hannah Schmitt",
      review: "I love how the website recommends stories and genres based on my interests and mood. It feels personal.",
      date: "May 7, 2025",
      image: "/Frame 1116607927-2.png?height=80&width=80",
    },
  ]

  const handleGenreClick = (genre) => {
    if (isLoggedIn && (genre === "Fantasy" || genre === "Romance")) {
      navigate(`/genre/${genre}`)
    } else {
      const popup = document.createElement("div")
      popup.textContent = "Please login to explore genres."
      popup.style.position = "absolute"
      popup.style.backgroundColor = "#333"
      popup.style.color = "white"
      popup.style.padding = "5px 10px"
      popup.style.borderRadius = "4px"
      popup.style.zIndex = "1000"
      popup.style.fontSize = "12px"
      popup.style.top = "50%"
      popup.style.left = "50%"
      popup.style.transform = "translate(-50%, -50%)"
      document.body.appendChild(popup)
      setTimeout(() => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup)
        }
      }, 2000)
    }
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-[white] lg:px-0 py-8 sm:py-10 md:py-12 lg:py-12">
      {/* Genre Section */}
      <section className=" w-full py-5 sm:py-6 md:py-7 lg:py-7 text-center bg-[#F4F6FD]">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-[#121212] mb-6 sm:mb-8 md:mb-10 lg:mb-10" style={{ fontFamily: "Marion" }}>
          Explore by Genre
        </h2>
        <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 lg:gap-9 pb-4 snap-x snap-mandatory scrollbar-hide">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] bg-white hover:bg-[#E4E4E4] rounded-lg border border-[#5352ED73] p-3 sm:p-4 md:p-4 lg:p-4 flex flex-col justify-between snap-start flex-shrink-0 ${
                isLoggedIn && (genre.name === "Fantasy" || genre.name === "Romance")
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
              onClick={() => handleGenreClick(genre.name)}
            >
              <img
                src={genre.image || "/placeholder.svg"}
                alt={genre.name}
                className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover mb-2 sm:mb-2.5 md:mb-2.5 lg:mb-2.5 rounded-[6px]"
              />
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-gothic font-medium text-[#121212]">{genre.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-10 md:py-12 lg:py-16 text-center bg-[#F4F6FD]" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-[#121212] mb-6 sm:mb-8 md:mb-10 lg:mb-14" style={{ fontFamily: "Marion" }}>
          What Our Readers Say
        </h2>

        <div className="relative max-w-[90%] sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto">
          {/* Main testimonial content */}
          <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 shadow-sm border border-gray-100 mx-4 sm:mx-8 md:mx-12 lg:mx-16 min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-8 h-full">
              {/* Profile Image */}
              <img
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover flex-shrink-0"
              />

              {/* Content */}
              <div className="text-left">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-normal text-[#121212] mb-1 sm:mb-2 md:mb-2 lg:mb-2">{testimonials[currentTestimonial].name}</h3>

                <p className="text-[#121212] w-full sm:w-[400px] md:w-[480px] lg:w-[560px] text-sm sm:text-sm md:text-base lg:text-[16px] leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-6 font-normal">{testimonials[currentTestimonial].review}</p>

                <p className="text-[#121212] text-xs sm:text-xs md:text-xs lg:text-xs font-normal">{testimonials[currentTestimonial].date}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 md:left-8 lg:left-24 top-[50%] sm:top-[180px] md:top-[190px] lg:top-[200px] transform -translate-y-1/2 w-10 sm:w-12 md:w-14 lg:w-15 h-10 sm:h-12 md:h-14 lg:h-15 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="20" sm:width="24" md:width="28" lg:width="30" height="20" sm:height="24" md:height="28" lg:height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 12H5M12 19L5 12L12 5"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 md:right-8 lg:right-24 top-[50%] sm:top-[180px] md:top-[190px] lg:top-[200px] transform -translate-y-1/2 w-10 sm:w-12 md:w-14 lg:w-15 h-10 sm:h-12 md:h-14 lg:h-15 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="20" sm:width="24" md:width="28" lg:width="30" height="20" sm:height="24" md:height="28" lg:height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M12 5L19 12L12 19"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Explore
