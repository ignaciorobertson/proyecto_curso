"use client";

import { useEffect, useRef, useState } from "react";

export default function TurismoBlock({ image, alt, children, reverse }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`turismo-block ${reverse ? "reverse" : ""} ${
        show ? "show" : ""
      }`}
    >
      <div className="turismo-img">
        <img src={image} alt={alt} />
      </div>
      <div className="turismo-text">
        {children}
      </div>
    </section>
  );
}
