import React from 'react';

interface HeroProps {
  heading: string;
  content: string;
}

const Hero: React.FC<HeroProps> = ({ heading, content }) => {
  return (
    <div className="hero text-balance">
      <div className="container flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="hero-heading text-4xl font-bold text-center mx-auto">{heading}</h1>
          <p className="hero-content text-center mx-auto">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
