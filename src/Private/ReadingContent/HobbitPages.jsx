import { motion } from 'framer-motion';

const HobbitPages = [

  // Page 1
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
        onClick={() => setPageIndex(1)} 
        className="absolute top-4 right-4 bg-white text-gray-900 py-2 px-6 rounded-lg cursor-pointer z-10"
      >
        Start
      </button>
    </div>
  ),
  // Page 2
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

      {/* Navigation arrows */}
    <button
      onClick={goToPreviousPage}
      className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-[white] text-3xl"
    >
      {'<'}
    </button>
    <button
      onClick={goToNextPage}
      className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-[white] text-3xl"
    >
      {'>'}
    </button>

    </div>
  ),
  
  // Page 3
(goToPreviousPage, goToNextPage) => (
  <div className="w-screen h-screen top-[100px] bg-[#FAF8F3] text-black relative overflow-hidden" style={{ fontFamily: '"Gothic A1", sans-serif' }}>

    {/* Navigation arrows */}
    <button
      onClick={goToPreviousPage}
      className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-black text-3xl"
    >
      {'<'}
    </button>
    <button
      onClick={goToNextPage}
      className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-black text-3xl"
    >
      {'>'}
    </button>

    {/* Main content container */}
    <div className="flex h-full pt-16">
      {/* Left side - Illustrations list */}
      <div className="w-1/2 pl-16 pt-8">
        <h1 className="text-2xl font-medium mb-12 tracking-wide">ILLUSTRATIONS</h1>
        <div className="space-y-6 text-lg font-normal">
          <div>1. Thors Map The Trolls</div>
          <div>2. The Mountain Path</div>
          <div>3. The Misty Mountains looking West Beans's</div>
          <div>4. The Elvenking;s Gate Lake Town</div>
          <div>5. The Front Gate</div>
          <div>6. The Hall at Bag End Map of Wilderland</div>
        </div>
      </div>

      {/* Right side - Map image */}
      <div className="w-1/2 flex pt-15 pr-9">
        <img
          src="/hobbit2.png"
          alt="Tolkien's Map of Middle Earth"
          className="max-w-full max-h-[80%] object-contain"
        />
      </div>
    </div>
  </div>
),

  // Page 4
(goToPreviousPage, goToNextPage) => (
  <div className="w-screen h-full top-[100px] bg-[#3E2640] text-white relative overflow-hidden"style={{ fontFamily: '"Gothic A1", sans-serif' }} >

    {/* Navigation arrows */}
    <button
      onClick={goToPreviousPage}
      className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'<'}
    </button>
    <button
      onClick={goToNextPage}
      className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'>'}
    </button>

    {/* Main content container */}
    <div className="flex flex-col h-full pt-16" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
      {/* Title */}
      <h1 className="text-3xl font-medium text-center mb-16">Contents</h1>
      
      {/* Contents list */}
      <div className="pl-24 space-y-4 text-xl font-normal">
        <div>COVER PAGE TITLE PAGE</div>
        <div>LIST OF ILLUSTRATIONS</div>
        <div>NOTE ON THE TEXT AUTHOR'S NOTE</div>
        <div>CHAPTER I: AN UNEXPECTED PARTY</div>
        <div>CHAPTER II: ROAST MUTTON</div>
        <div>CHAPTER III: A SHORT REST</div>
        <div>CHAPTER IV: OVER HILL AND UNDER HILL</div>
        <div>CHAPTER V: RIDDLES IN THE DARK</div>
        <div>CHAPTER VI: OUT OF THE FRYING-PAN INTO THE FIRE</div>
        <div>CHAPTER VII: QUEER LODGINGS CHAPTER</div>
        <div>CHAPTERVIII: FLIES AND SPIDERS</div>
        <div>CHAPTER IX: BARRELSOUT OF BOND</div>
        <div>CHAPTER X: A WARM WELCOME CHAPTER</div>
        <div>CHAPTER XI: ON THE DOORSTEP</div>
        <div>CHAPTER XII: INSIDE INFORMATION</div>
        <div>CHAPTER XIII: NOT AT HOME</div>
        <div>CHAPTER XIV: FIRE AND WATER</div>
        <div>CHAPTER XV: THE GATHERING OF THE CLOUDS</div>
        <div>CHAPTER XVI: A THIEF IN THE NIGHT</div>
        <div>CHAPTER XVII: THE CLOUDS BURST</div>
        <div>CHAPTER XVIII: THE RETURN JOURNEY</div>
        <div>CHAPTER XIX: THE LAST STAGE</div>
        <div>WORKS BY J.R.R. TOLKIEN</div>
        <div>COPYRIGHT</div>
        <div>ABOUT THE PUBLISHER</div>
      </div>
    </div>
  </div>
),
  // Page 5
(goToPreviousPage, goToNextPage) => (
  <div className="w-screen h-screen top-[100px] bg-[#3E2640] text-white relative overflow-hidden" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
    {/* Navigation arrows */}
    <button
      onClick={goToPreviousPage}
      className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'<'}
    </button>
    <button
      onClick={goToNextPage}
      className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'>'}
    </button>

    {/* Main content container */}
    <div className="flex flex-col items-center h-full pt-16 px-8">
      {/* Chapter title */}
      <h1 className="text-3xl font-bold text-center mb-2">Chapter I</h1>
      <h2 className="text-3xl font-bold text-center mb-12">An Unexpected Party</h2>
      
      {/* Opening text */}
      <p className="text-xl font-normal leading-relaxed text-left max-w-5xl mb-3 px-4">
        In a hole in the ground there live a hobbit. Not a nasty, dirty, wet hole, filled with ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.
      </p>
      
      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/hobbit4.png"
          alt="Bilbo's hobbit hole with the unexpected party of dwarves"
          className="max-w-4xl max-h-96 object-contain "
        />
      </div>
    </div>
  </div>
),

  // Page 6:
  (goToPreviousPage, goToNextPage) => (
  <div className="w-screen h-screen top-[100px] bg-[#3E2640] text-white relative overflow-hidden" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
    {/* Navigation arrows */}
    <button
      onClick={goToPreviousPage}
      className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'<'}
    </button>
    <button
      onClick={goToNextPage}
      className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'>'}
    </button>

    {/* Main content container */}
    <div className="flex flex-col items-center h-full pt-16 px-8">
      {/* Chapter title */}
      <h1 className="text-3xl font-bold text-center mb-2">Chapter II</h1>
      <h2 className="text-3xl font-bold text-center mb-12">Roast Mutton</h2>
      
      {/* Opening text */}
      <p className="text-xl font-normal leading-relaxed text-left max-w-5xl mb-5 px-4">
        Bilbo awoke, threw on his dressing gown, and walked into the dining room only to find a chaotic mess from a hasty breakfast. Pots and pans were scattered everywhere, confirming that the previous night's events were real and not a dream. Though he was somewhat glad the group had left without him, Bilbo also felt a surprising hint of disappointment.
      </p>
      
      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/hobbit5.png"
          alt="Bilbo's hobbit hole with the unexpected party of dwarves"
          className="max-w-4xl max-h-96 object-contain "
        />
      </div>
    </div>
  </div>
),

// Page 7
  (goToPreviousPage, goToNextPage) => (
  <div className="w-screen h-screen top-[100px] bg-[#3E2640] text-white relative overflow-hidden" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
    {/* Navigation arrows */}
    <button
      onClick={goToPreviousPage}
      className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'<'}
    </button>
    <button
      onClick={goToNextPage}
      className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-white text-3xl"
    >
      {'>'}
    </button>

    {/* Main content container */}
    <div className="flex flex-col items-center h-full pt-16 px-8">
      {/* Chapter title */}
      <h1 className="text-3xl font-bold text-center mb-2">Chapter III</h1>
      <h2 className="text-3xl font-bold text-center mb-10">A Short Rest</h2>
     
      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/hobbit6.png"
          alt="Bilbo's hobbit hole with the unexpected party of dwarves"
          className="max-w-4xl max-h-96 object-contain "
        />
      </div>
    </div>
  </div>
),
];

export default HobbitPages;