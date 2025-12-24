import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-cards";

const PhotoCard = () => {
  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ];

  return (
    <>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-96"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="aspect-2/3 overflow-hidden shadow-xl">
            <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PhotoCard;
