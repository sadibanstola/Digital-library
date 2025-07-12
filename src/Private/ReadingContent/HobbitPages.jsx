import { motion } from 'framer-motion';

const HobbitPages = [
  // Page 1: Full-page image with slide-in animation, Back and Start buttons
  (goToPreviousPage, goToNextPage, setPageIndex) => (
    <div className="w-screen h-screen top-[100px] bg-gray-600 relative overflow-hidden">
      <motion.img
        src="/hobbit1.png"
        alt="The Hobbit: Chapter 1 Cover"
        className="w-full h-full object-contain absolute top-0 left-0"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 text-white text-2xl bg-transparent border-none cursor-pointer z-10"
      >
        ← Back
      </button>
      <button
        onClick={() => setPageIndex(1)} // Navigate to Page 2
        className="absolute top-4 right-4 bg-white text-gray-900 py-2 px-6 rounded-lg cursor-pointer z-10"
      >
        Start
      </button>
    </div>
  ),
  // Page 2: Text with custom background and chevron arrow navigation
  (goToPreviousPage, goToNextPage) => (
    <div className="w-screen h-screen top-[100px] bg-[#3E2640] text-white relative overflow-hidden" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
      <div className="absolute top-[150px] w-[1050px] pl-20">
        <p className="text-2xl leading-relaxed font-medium">
          The Hobbit is a tale of high adventure, undertaken by a company of dwarves, in search of dragon-guarded gold. A reluctant partner in this perilous quest is Bilbo Baggins, a comfort-loving, unambitious hobbit, who surprises even himself by his resourcefulness and his skill as a burglar.
          <br />
          Encounters with trolls, goblins, dwarves, elves and giant spiders, conversations with the dragon, Smaug the Magnificent, and a rather unwilling presence at the Battle of the Five Armies are some of the adventures that befall Bilbo. But there are lighter moments as well: good fellowship, welcome meals, laughter and song <br />
          Bilbo Baggins has taken his place among the ranks of the immortals of children's fiction. Written for Professor Tolkien's own children, The Hobbit met with instant acclaim when published. It is a complete and marvellous tale in itself, but it also forms a prelude to The Lord of the Rings.<br />
          'One of the most influential books of our generation'
          The Times
        </p>
      </div>
      <button
        onClick={goToPreviousPage} // Navigate to Page 1
        className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19 L5 12 L12 5" />
          <path d="M19 12 L5 12" />
        </svg>
      </button>
      <button
        onClick={goToNextPage} // Navigate to Page 3
        className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12 L19 12" />
          <path d="M12 5 L19 12 L12 19" />
        </svg>
      </button>
    </div>
  ),
  // Page 3
  (goToPreviousPage, goToNextPage) => (
    <div className="w-screen h-screen bg-gray-700 text-white p-8 flex items-center justify-center relative">
      Chapter 3: A Short Rest<br />[To be added later...]
      <button
        onClick={goToPreviousPage}
        className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19 L5 12 L12 5" />
          <path d="M19 12 L5 12" />
        </svg>
        Back
      </button>
      <button
        onClick={goToNextPage}
        className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        Next
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12 L19 12" />
          <path d="M12 5 L19 12 L12 19" />
        </svg>
      </button>
    </div>
  ),
  // Page 4
  (goToPreviousPage, goToNextPage) => (
    <div className="w-screen h-screen bg-gray-600 text-white p-8 grid place-items-center relative">
      Chapter 4: Over Hill and Under Hill<br />[To be added later...]
      <button
        onClick={goToPreviousPage}
        className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19 L5 12 L12 5" />
          <path d="M19 12 L5 12" />
        </svg>
        Back
      </button>
      <button
        onClick={goToNextPage}
        className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        Next
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12 L19 12" />
          <path d="M12 5 L19 12 L12 19" />
        </svg>
      </button>
    </div>
  ),
  // Page 5
  (goToPreviousPage, goToNextPage) => (
    <div className="w-screen h-screen bg-gray-500 text-white p-8 text-center relative">
      Chapter 5: Riddles in the Dark<br />[To be added later...]
      <button
        onClick={goToPreviousPage}
        className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19 L5 12 L12 5" />
          <path d="M19 12 L5 12" />
        </svg>
        Back
      </button>
      <button
        onClick={goToNextPage}
        className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        Next
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12 L19 12" />
          <path d="M12 5 L19 12 L12 19" />
        </svg>
      </button>
    </div>
  ),
  // Page 6
  (goToPreviousPage) => (
    <div className="w-screen h-screen bg-gray-400 text-white p-8 italic relative">
      Chapter 6: Out of the Frying-Pan into the Fire<br />[To be added later...]
      <button
        onClick={goToPreviousPage}
        className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white flex items-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19 L5 12 L12 5" />
          <path d="M19 12 L5 12" />
        </svg>
        Back
      </button>
    </div>
  ),
];

export default HobbitPages;