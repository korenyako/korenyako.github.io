import React from 'react';

interface PulseSliderCSSProps {
  images: string[];
  reverse?: boolean;
  duration?: number;
}

const PulseSliderCSS: React.FC<PulseSliderCSSProps> = ({ images, reverse = false, duration = 60 }) => {
  // Дублируем массив для плавного зацикливания
  const marqueeImages = [...images, ...images];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {marqueeImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="h-24 w-auto mx-4 inline-block select-none pointer-events-none"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default PulseSliderCSS; 