import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const move = (e) => {
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

    
    };

    const handleMouseOut = (e) => {
      
      if (
        !e.relatedTarget &&
        (e.clientY < 0 ||
          e.clientY > window.innerHeight ||
          e.clientX < 0 ||
          e.clientX > window.innerWidth)
      ) {
        setVisible(false); 
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          fontSize: "20px",
          fontWeight: "bold",
          color: "#4a00e0",
          mixBlendMode: "normal",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        V
      </div>

     
    </>
  );
}

export default CustomCursor;
