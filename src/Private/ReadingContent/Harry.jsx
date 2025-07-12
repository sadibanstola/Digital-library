const HarryPotterPages = [
  // Page 1: Wizard-themed image
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#1A1A2E", position: "relative" }}>
    <img
      src="/harry-potter-cover.png"
      alt="Harry Potter: Chapter 1 Cover"
      style={{ width: "80%", height: "80%", objectFit: "contain", margin: "auto", display: "block" }}
    />
    <button
      onClick={() => window.history.back()}
      style={{ position: "absolute", top: "1rem", left: "1rem", color: "#E5E5E5", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}
    >
      ← Back
    </button>
    <button
      onClick={() => (window.location.href = "/read/3?page=1")}
      style={{ position: "absolute", top: "1rem", right: "1rem", background: "#D4A017", color: "white", padding: "0.5rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer" }}
    >
      Start
    </button>
  </div>,
  // Page 2: Text with magical theme
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#16213E", color: "#E5E5E5", padding: "2rem", fontFamily: "Arial", fontSize: "1.5rem" }}>
    Chapter 2: The Vanishing Glass<br />Harry’s first sign of magic...
  </div>,
  // Additional pages (4 more) can follow with unique styles
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#2F2F4F", color: "#E5E5E5", padding: "2rem" }}>Chapter 3: [To be added...]</div>,
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#3C3C60", color: "#E5E5E5", padding: "2rem" }}>Chapter 4: [To be added...]</div>,
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#4A4A71", color: "#E5E5E5", padding: "2rem" }}>Chapter 5: [To be added...]</div>,
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#575782", color: "#E5E5E5", padding: "2rem" }}>Chapter 6: [To be added...]</div>,
];

export default HarryPotterPages;