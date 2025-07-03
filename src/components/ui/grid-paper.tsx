import React, { useEffect, useRef } from "react";
import "../../styles/grid-paper.css";

const ParallaxGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const scrollY = window.scrollY;
        gridRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const x = e.clientX / window.innerWidth - 10;
        const y = e.clientY / window.innerHeight - 10;
        gridRef.current.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={gridRef} className="grid-layer" />;
};

export default ParallaxGrid;
