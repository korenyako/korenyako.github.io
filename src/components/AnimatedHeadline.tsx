'use client';

import { useState, useEffect } from 'react';

const words = ['clarity', 'structure', 'focus', 'logic', 'flow', 'value', 'order'];

const AnimatedHeadline = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-7xl font-medium text-foreground mb-6">
      <div className="flex flex-col">
        <span>
          <span className="font-headline">Bringing </span>
          <span 
            className={`font-dynamic text-4xl md:text-7xl text-black inline-block transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {words[currentWordIndex]}
          </span>
        </span>
        <span className="font-headline block">to digital products</span>
      </div>
    </h1>
  );
};

export default AnimatedHeadline;
