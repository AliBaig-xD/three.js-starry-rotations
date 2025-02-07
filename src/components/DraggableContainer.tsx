import React, { useState } from "react";

export default function DraggableContainer({ children }: { children: React.ReactNode }) {
  // Generate random initial position
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth, // Random x position
    y: Math.random() * window.innerHeight // Random y position
  });

  const handleMouseDown = (e: { clientX: number; clientY: number }) => {
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    const handleMouseMove = (moveEvent: { clientX: number; clientY: number }) => {
      setPosition({
        x: moveEvent.clientX - offsetX,
        y: moveEvent.clientY - offsetY,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: "300px",
        cursor: "move",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}