import React from 'react';
import "../../styles/grid-paper.css";

interface GradientBackgroundProps {
  children?: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="gradient-background-container">
      <div className="gradient-overlay"></div>
      {/* You can add an SVG for a noise filter here if needed */}
      <svg className="hidden-svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply" />
        </filter>
      </svg>
      {children}
    </div>
  );
};

export default GradientBackground;