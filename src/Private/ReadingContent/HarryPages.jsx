const HarryPages = [
  // Page 1: Full-screen dramatic scene with Exit and Continue buttons
  (goToPreviousPage, goToNextPage, setPageIndex, exit) => (
    <div className="w-screen h-screen relative overflow-hidden" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
      {/* Background image */}
      <img
        src="/harry1.png"
        alt="Harry Potter fighting the basilisk with Godric Gryffindor's sword"
        className="w-full h-full object-cover"
      />

      {/* Buttons overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-20">
        <button
          onClick={exit}
          className="bg-[#D2691E] hover:bg-[#B8621A] text-white px-8 py-3 rounded-lg text-lg font-medium cursor-pointer transition-colors"
        >
          Exit
        </button>
        <button
          onClick={() => setPageIndex(1)}
          className="bg-[#D2691E] hover:bg-[#B8621A] text-white px-8 py-3 rounded-lg text-lg font-medium cursor-pointer transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  ),

  // Page 2: Chapter XIII - Nicolas Flamel
  (goToPreviousPage, goToNextPage, setPageIndex, exit) => (
    <div className="w-screen h-screen bg-[#583926] relative overflow-auto">
      {/* Header section */}
      <div className="w-full bg-[#DFE8E6] py-8 relative" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
        {/* Navigation arrows */}
        <button
          onClick={goToPreviousPage}
          className="absolute top-4 left-4 bg-transparent border-none cursor-pointer z-10 text-black text-2xl"
        >
          {"<"}
        </button>
        <button
          onClick={goToNextPage}
          className="absolute top-4 right-4 bg-transparent border-none cursor-pointer z-10 text-black text-2xl"
        >
          {">"}
        </button>

        {/* Chapter title */}
        <div className="text-center" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
          <h1 className="text-3xl font-medium text-black mb-2">Chapter XIII</h1>
          <h2 className="text-3xl font-medium text-black">Nicolas Flamel</h2>
        </div>
      </div>

      {/* Image centered on screen */}
      <div className="flex justify-center items-center h-[70vh] ">
        <img
          src="/harry2.png"
          alt="Medieval fantasy village with castle and mountains"
          className="max-w-[450px] max-h-[500px] rounded-3xl object-cover"
        />
      </div>

      {/* Main content */}
      <div className="max-w-6xl px-8 py-8 mx-auto">
        {/* Story text content */}
        <div className="text-white space-y-6" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
          <p className="text-xl leading-relaxed text-left" style={{ textAlign: 'left !important' }}>
            Following his encounter with Dumbledore and the Mirror of Erised, Harry struggles with nightmares about his
            parents' deaths. He, Ron, and Hermione return to school and their frustrating search for Nicolas Flamel,
            hampered by intense Quidditch practices. Gryffindor Captain Oliver Wood reveals the alarming news that Snape
            will referee their crucial match against Hufflepuff, heightening fears of bias and danger for Harry, given
            Snape's known animosity. This news casts a shadow over their preparations and Harry's personal anxieties.
          </p>

          <p className="text-xl leading-relaxed text-left" style={{ textAlign: 'left !important' }}>
            A breakthrough occurs when Harry comforts Neville Longbottom after a bullying incident with Malfoy. Offering
            Neville a Chocolate Frog, Harry absentmindedly rereads his Dumbledore card and discovers the vital clue:
            Dumbledore's work in alchemy with Nicolas Flamel. Hermione immediately races to her books and identifies
            Flamel as the creator of the legendary Sorcerer's Stone, an object granting immortality and turning metal to
            gold. The trio pieces together that Hagrid retrieved the Stone from Gringotts, it's now hidden at Hogwarts
            guarded by Fluffy and other enchantments, and Snape is ruthlessly attempting to steal it.
          </p>

          <p className="text-xl leading-relaxed text-left" style={{ textAlign: 'left !important' }}>
            Despite his fears about Snape refereeing, Harry plays in the Quidditch match, feeling safer knowing
            Dumbledore is watching. Snape makes blatantly unfair calls against Gryffindor, while Malfoy provokes a fight
            in the stands with Ron and Neville. Harry, however, secures a stunning victory by catching the Snitch within
            minutes. His elation is short-lived when, later, he spots Snape sneaking into the Forbidden Forest.
            Following on his broom, Harry witnesses Snape confronting a terrified Professor Quirrell in a clearing,
            demanding to know if he's discovered how to bypass Fluffy and threatening him about his loyalties regarding
            the Stone's protection.
          </p>

          <p className="text-xl leading-relaxed text-left" style={{ textAlign: 'left !important' }}>
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