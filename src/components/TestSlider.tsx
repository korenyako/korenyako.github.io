import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const images = [
  '/images/projects/defonseca/photo_00.jpg',
  '/images/projects/defonseca/photo_01.jpg',
  '/images/projects/defonseca/photo_02.jpg',
  '/images/projects/defonseca/photo_03.jpg',
  '/images/projects/defonseca/photo_04.jpg',
  '/images/projects/defonseca/photo_05.jpg',
];

export default function TestSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16">
      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        spaceBetween={24}
        speed={60000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        observer={true}
        observeParents={true}
        className="w-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <img src={src} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 