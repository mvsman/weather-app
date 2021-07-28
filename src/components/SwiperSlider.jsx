import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SliderFirst from './SliderFirst';
import SliderSecond from './SliderSecond';

SwiperCore.use([Pagination]);

function SwiperSlider({ city }) {
  return (
    <div className="swiper">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={10}>
        <SwiperSlide className="slide">
          <SliderFirst city={city} />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <SliderSecond city={city} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
