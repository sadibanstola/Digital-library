const RedWhitePages = [
  // Page 1: Romantic theme image
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#F5E6CC", position: "relative" }}>
    <img
      src="/red-white-cover.png"
      alt="Red, White & Royal Blue: Chapter 1 Cover"
      style={{ width: "70%", height: "70%", objectFit: "contain", margin: "auto", display: "block" }}
    />
    <button
      onClick={() => window.history.back()}
      style={{ position: "absolute", top: "1rem", left: "1rem", color: "#8B4513", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}
    >
      ← Back
    </button>
    <button
      onClick={() => (window.location.href = "/read/10?page=1")}
      style={{ position: "absolute", top: "1rem", right: "1rem", background: "#8B4513", color: "white", padding: "0.5rem 1.5rem", borderRadius: "0.5rem", cursor: "pointer" }}
    >
      Start
    </button>
  </div>,
  // Page 2: Text with romantic theme
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#F4A261", color: "#432818", padding: "2rem", fontSize: "1.5rem", textAlign: "center" }}>
    Chapter 2: Unexpected Letters<br />A new connection begins...
  </div>,
  // Additional pages (4 more) with unique styles
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#E76F51", color: "#432818", padding: "2rem" }}>Chapter 3: [To be added...]</div>,
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#D62828", color: "#432818", padding: "2rem" }}>Chapter 4: [To be added...]</div>,
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#A9D6E5", color: "#432818", padding: "2rem" }}>Chapter 5: [To be added...]</div>,
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#8AB17D", color: "#432818", padding: "2rem" }}>Chapter 6: [To be added...]</div>,
];

export default RedWhitePages;