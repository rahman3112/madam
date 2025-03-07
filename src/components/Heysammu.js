import { useState } from "react";

const HeySammu = () => {
  const [message, setMessage] = useState("");
  const [showGoAway, setShowGoAway] = useState(true);

  return (
    <div
      style={{
        backgroundImage: `url("/1.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
        Hey Sammu
      </h1>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={() => window.location.href='/kidos'}
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(255, 192, 203, 0.5)", // Semi-transparent pink
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease", // Smooth transition
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "pink")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 192, 203, 0.5)")}
        >
          Hi
        </button>
        {showGoAway && (
          <button
            onClick={() => {
              setMessage("Not Today Cutie hehehehe");
              setShowGoAway(false);
            }}
            style={{
              padding: "10px 20px",
              backgroundColor: "rgba(128, 0, 128, 0.5)", // Semi-transparent purple
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease", // Smooth transition
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "purple")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(128, 0, 128, 0.5)")}
          >
            Go Away!
          </button>
        )}
      </div>
      {message && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "white" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default HeySammu;
