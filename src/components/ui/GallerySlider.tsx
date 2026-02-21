'use client';

import { useState } from 'react';

interface GallerySliderProps {
  images: string[];
}

/**
 * GallerySlider — большая картинка по центру, снизу горизонтальный скролл превью.
 * При клике на превью — большая картинка меняется.
 * Активное превью выделено. Превью свайпабельны на мобильных.
 */
const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="w-full space-y-4">
      {/* Большое изображение */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl rounded-xl overflow-hidden bg-neutral-100 shadow-sm">
          <img
            src={images[activeIdx]}
            alt={`Gallery image ${activeIdx + 1}`}
            className="w-full object-cover object-center select-none"
            draggable={false}
          />
        </div>
      </div>
      {/* Превью */}
      <div className="flex overflow-x-auto gap-x-3 pt-2 pb-1 justify-center">
        {images.map((src, idx) => (
          <button
            key={src + 'thumb' + idx}
            onClick={() => setActiveIdx(idx)}
            className={`focus:outline-none border-2 rounded-lg transition-all ${activeIdx === idx ? 'border-primary' : 'border-transparent'} hover:border-primary`}
            style={{ minWidth: 64, minHeight: 48 }}
            tabIndex={0}
            aria-label={`Показать изображение ${idx + 1}`}
          >
            <img
              src={src}
              alt={`Preview ${idx + 1}`}
              className="w-16 h-12 object-cover object-center rounded-lg"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default GallerySlider; 