import React, { useState } from "react";
import "./Card.css";

function Card({ name, image }) {
  const [{ angle, xPos, yPos }] = useState({
    angle: Math.random() * 90 - 45,
    angle: Math.random() * 40 - 20,
    angle: Math.random() * 40 - 20,
  });

  const transform = `translate${xPos}px, ${yPos}px) rotate(${angle}deg)`;

  return <img />;
}

export default Card;
