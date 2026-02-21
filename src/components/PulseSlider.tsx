'use client';

import { FC, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

interface PulseSliderProps {
  images: string[];
  reverseDirection?: boolean;
}

const PulseSlider: FC<PulseSliderProps> = ({ images, reverseDirection = false }) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && !swiperRef.current.autoplay.running) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      modules={[Autoplay, FreeMode]}
      loop={true}
      freeMode={{ enabled: true, sticky: false }}
      slidesPerView="auto"
      spaceBetween={24}
      speed={60000}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection,
      }}
      allowTouchMove={false}
      className="w-full"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx} className="!w-auto">
          <img src={src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PulseSlider;

// Пример использования:
// const block1Images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
// const block2Images = ["/img4.jpg", "/img5.jpg"];
// const block3Images = ["/img6.jpg", "/img7.jpg", "/img8.jpg"];
//
// <PulseSlider images={block1Images} />
// <PulseSlider images={block2Images} reverseDirection />
// <PulseSlider images={block3Images} /> 