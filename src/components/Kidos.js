import { useState } from "react";

const Kidos = () => {
  const [message, setMessage] = useState("");
  const [showShutUp, setShowShutUp] = useState(true);

  return (
    <div
      style={{
        backgroundImage: `url("/2.jpg")`,
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
        Will you be the mommy of me and my kidos?
      </h1>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={() => window.location.href='/hehe'}
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(255, 0, 102, 0.5)", // Semi-transparent green
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 0, 102, 0.5)")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(144, 59, 141, 0.5)")}
        >
          Obbbioooo
        </button>
        {showShutUp && (
          <button
            onClick={() => {
              setMessage("Aww, that’s mean!");
              setShowShutUp(false);
            }}
            style={{
              padding: "10px 20px",
              backgroundColor: "rgba(255, 0, 0, 0.5)", // Semi-transparent red
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "red")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.5)")}
          >
            Shut up!
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

export default Kidos;
