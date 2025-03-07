import { useState, useEffect } from "react";

const lyrics = [
  "Your morning eyes, I could stare like watching stars",
  "I could walk you by, and I'll tell without a thought",
  "You'd be mine, would you mind if I took your hand tonight?",
  "Know you're all that I want this life",
  "",
  "I'll imagine we fell in love",
  "I'll nap under moonlight skies with you",
  "I think I'll picture us, you with the waves",
  "The ocean's colors on your face",
  "I'll leave my heart with your air",
  "So let me fly with you",
  "Will you be forever with me?",
];

const Hehe = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [audio] = useState(new Audio("/song.mp3"));

  useEffect(() => {
    let interval;
    if (playing && currentLine < lyrics.length) {
      let delay = 6000;
      if (currentLine >= 5) {
        delay = 3500;
      }
      interval = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, delay);
    } else if (currentLine === lyrics.length) {
      setTimeout(() => setShowButtons(true), 3500); // Show buttons after final lyric delay
    }
    return () => clearTimeout(interval);
  }, [playing, currentLine]);

  const startLyrics = () => {
    setTimeout(() => {
      setPlaying(true);
      setCurrentLine(0);
      audio.play();
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
      }}
    >
      {!playing && (
        <button
          onClick={startLyrics}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Start
        </button>
      )}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {lyrics.slice(0, currentLine + 1).map((line, index) => (
          <p
            key={index}
            style={{
              opacity: index === currentLine ? 0 : 1,
              transition: "opacity 3s ease-in-out",
            }}
          >
            {line}
          </p>
        ))}
        {showButtons && (
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button
            onClick={() => window.location.href='/love'}
              style={{
                padding: "10px 20px",
                position:"relative",
                left:"180px",
                backgroundColor: "rgba(224, 23, 147, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              Yes
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "rgba(47, 21, 106, 0.5)",
                position:"relative",
                left:"180px",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hehe;
