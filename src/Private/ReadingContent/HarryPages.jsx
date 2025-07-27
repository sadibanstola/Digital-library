import React from 'react';

const HarryPages = [
  // Page 1
  (goToPreviousPage, goToNextPage, setPageIndex, exit) => (
    <div className="w-screen h-screen relative overflow-hidden flex flex-col justify-end items-center" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
      {/* Background image */}
      <img
        src="/harry1.png"
        alt="Harry Potter fighting the basilisk with Godric Gryffindor's sword"
        className="w-full h-full object-cover absolute inset-0"
      />

      {/* Buttons */}
      <div className="relative bottom-4 sm:bottom-8 flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-6 w-full max-w-md sm:max-w-lg justify-center">
        <button
          onClick={exit}
          className="bg-[#D2691E] hover:bg-[#B8621A] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-medium transition-colors"
        >
          Exit
        </button>
        <button
          onClick={() => setPageIndex(1)}
          className="bg-[#D2691E] hover:bg-[#B8621A] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-lg font-medium transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  ),

  // Page 2: Chapter XIII - Nicolas Flamel
  (goToPreviousPage, goToNextPage, setPageIndex, exit) => (
    <div className="w-screen min-h-screen bg-[#583926] relative overflow-auto flex flex-col" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
      {/* Header section */}
      <div className="w-full bg-[#DFE8E6] py-4 sm:py-8 relative">
        {/* Navigation arrows */}
        <button
          onClick={goToPreviousPage}
          className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-transparent border-none cursor-pointer z-10 text-black text-lg sm:text-2xl"
        >
          {"<"}
        </button>
        <button
          onClick={goToNextPage}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-transparent border-none cursor-pointer z-10 text-black text-lg sm:text-2xl"
        >
          {">"}
        </button>

        {/* Chapter title */}
        <div className="text-center">
          <h1 className="text-xl sm:text-3xl font-medium text-black mb-1 sm:mb-2">Chapter XIII</h1>
          <h2 className="text-xl sm:text-3xl font-medium text-black">Nicolas Flamel</h2>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center py-4 sm:py-8">
        <img
          src="/harry2.png"
          alt="Medieval fantasy village with castle and mountains"
          className="w-full max-w-[90%] sm:max-w-[450px] h-auto rounded-3xl object-cover"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-full sm:max-w-6xl px-4 sm:px-8 py-4 sm:py-8 mx-auto">
        {/* Story text content */}
        <div className="text-white space-y-4 sm:space-y-6">
          <p className="text-base sm:text-xl leading-relaxed text-left">
            Following his encounter with Dumbledore and the Mirror of Erised, Harry struggles with nightmares about his
            parents' deaths. He, Ron, and Hermione return to school and their frustrating search for Nicolas Flamel,
            hampered by intense Quidditch practices. Gryffindor Captain Oliver Wood reveals the alarming news that Snape
            will referee their crucial match against Hufflepuff, heightening fears of bias and danger for Harry, given
            Snape's known animosity. This news casts a shadow over their preparations and Harry's personal anxieties.
          </p>

          <p className="text-base sm:text-xl leading-relaxed text-left">
            A breakthrough occurs when Harry comforts Neville Longbottom after a bullying incident with Malfoy. Offering
            Neville a Chocolate Frog, Harry absentmindedly rereads his Dumbledore card and discovers the vital clue:
            Dumbledore's work in alchemy with Nicolas Flamel. Hermione immediately races to her books and identifies
            Flamel as the creator of the legendary Sorcerer's Stone, an object granting immortality and turning metal to
            gold. The trio pieces together that Hagrid retrieved the Stone from Gringotts, it's now hidden at Hogwarts
            guarded by Fluffy and other enchantments, and Snape is ruthlessly attempting to steal it.
          </p>

          <p className="text-base sm:text-xl leading-relaxed text-left">
            Despite his fears about Snape refereeing, Harry plays in the Quidditch match, feeling safer knowing
            Dumbledore is watching. Snape makes blatantly unfair calls against Gryffindor, while Malfoy provokes a fight
            in the stands with Ron and Neville. Harry, however, secures a stunning victory by catching the Snitch within
            minutes. His elation is short-lived when, later, he spots Snape sneaking into the Forbidden Forest.
            Following on his broom, Harry witnesses Snape confronting a terrified Professor Quirrell in a clearing,
            demanding to know if he's discovered how to bypass Fluffy and threatening him about his loyalties regarding
            the Stone's protection.
          </p>

          <p className="text-base sm:text-xl leading-relaxed text-left">
            Harry rushes back to share this chilling discovery with Ron and Hermione. They conclude Snape is trying to
            force Quirrell to help him overcome the enchantments guarding the Stone, suspecting Quirrell possesses
            protective magic ("hocus-pocus") Snape needs to break through. Hermione voices the terrifying implication:
            the Stone's safety now hinges entirely on Quirrell's ability to resist Snape's pressure. Ron grimly predicts
            the Stone will be stolen by the following Tuesday, underscoring the urgency of their situation.
          </p>
        </div>
      </div>
    </div>
  ),
];

export default HarryPages;