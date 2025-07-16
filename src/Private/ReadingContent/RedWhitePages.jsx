const RedWhitePages = [
  // Page 1
  (goToPreviousPage, goToNextPage, setPageIndex, exit) => (
    <div className="w-screen h-screen bg-gray-100 relative overflow-auto">
      {/* Header section with pink background */}
      <div className="w-full bg-[#CC8899] py-8 relative" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
        {/* Navigation arrows */}
        <button
          onClick={exit}
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
          <h1 className="text-3xl font-medium text-black mb-2">Chapter 14</h1>
          <h2 className="text-3xl font-medium text-black">History, huh?</h2>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* First paragraph */}
        <p className="text-xl leading-relaxed mb-8 text-gray-800" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
          The chapter opens with Alex's defiant public address from the White House's Diplomatic Reception Room.
          Standing beside Henry, he delivers a speech written by June, declaring his love for the Prince and his
          bisexuality to the world. He frames his identity within America's legacy, asserting that his place in the
          White House ensures a place for others like him, and passionately urges voters not to let his actions
          overshadow the critical election, endorsing his mother for a second term. The moment is historic, raw, and
          unifying, witnessed globally.
        </p>

        {/* Central image */}
        <div className="flex justify-center mb-8">
          <img
            src="/red1.png"
            alt="White House Diplomatic Reception Room scene"
            className="w-[200] h-[200] object-cover mt-10 mb-10"
          />
        </div>

        {/* Second paragraph */}
        <p className="text-xl leading-relaxed mb-8 text-gray-800" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
          The whirlwind aftermath includes snapshots: Amy and Cash in the supportive Mall crowd wearing June's iconic
          "HISTORY, HUH?" shirt and pride pins; Richards's homophobic attacks countered by Oscar's sharp rebuke; and a
          crucial meeting between Alex and Rafael Luna. Luna reveals the truth: he infiltrated Richards's campaign as a
          triple agent. Motivated by Richards's past sexual assault against him when Luna was a young intern and the
          senator's subsequent blackmail, Luna sought evidence of corruption. He hadn't uncovered the plot against Alex
          beforehand but orchestrated the email leak to Nora after the scandal broke, trusting Alex would decode his
          Five Guys reference. Luna apologizes for his harsh words during the campaign, and Alex forgives him, their
          bond reforged as "Los Bastardos" with Oscar.
        </p>

        {/* Third paragraph */}
        <p className="text-xl leading-relaxed mb-8 text-gray-800" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
          As Henry prepares to return to London for his own damage control, he and Alex steal a final, tender morning in
          the aggressively pink Queen's Bedroom. They acknowledge the challenges ahead – navigating their relationship
          publicly, Henry facing his family fallout alone for now, Alex returning to the campaign trail – but feel
          confident and proud. Their intimate moment underscores their deep connection and resilience amidst the ongoing
          storm.
        </p>

        {/* Fourth paragraph */}
        <p className="text-xl leading-relaxed text-gray-800" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
          The chapter closes on a note of determined hope. Alex reflects on the tumultuous year of self-discovery and
          love, culminating in this very public declaration. He recognizes the immense task ahead – loving each other
          openly while managing global scrutiny – but feels ready. The "imminent barf feeling" has been replaced by a
          hard-won certainty: they are up for the challenge of writing their own history, together.
        </p>
      </div>
    </div>
  ),
];

export default RedWhitePages;