import React from 'react';

interface HeroProps {
  heading: string;
  content: string;
}

const Hero: React.FC<HeroProps> = ({ heading, content }) => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-heading">{heading}</h1>
        <p className="hero-content">{content}</p>
      </div>
    </div>
  );
};

export default Hero;
