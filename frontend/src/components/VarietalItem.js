"use client";

import { useEffect, useRef, useState } from "react";

export default function VarietalItem({ image, alt, title, text, reverse }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`varietales 
        ${reverse ? "reverse" : ""} 
        ${visible ? "show" : ""}`}
    >
      <img src={image} alt={alt} />
      <div className="info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
