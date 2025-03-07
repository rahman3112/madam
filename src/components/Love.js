import { useState, useEffect } from "react";

const Love = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 1000); // Delay before fade-in
  }, []);

  return (
    <div 
      style={{
        backgroundImage: `url("/4.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        fontSize: "300px",
        fontWeight: "bold",
      }}
    >
      <span
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 3s ease-in-out",
        }}
      >
        I L Y
      </span>
    </div>
  );
};

export default Love;
