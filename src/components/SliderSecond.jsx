import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

function SliderSecond({ city }) {
  return (
    <>
      <div className="slide-item">
        <img
          src={`https://openweathermap.org/img/wn/${city.list[1].weather[0].icon}@2x.png`}
          alt="city.list[1].weather[0].description"
        />
        <div>{Math.ceil(city.list[1].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[1].main.temp_min)}&deg;</div>
        <div>{city.list[1].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <img
          src={`https://openweathermap.org/img/wn/${city.list[2].weather[0].icon}@2x.png`}
          alt="city.list[2].weather[0].description"
        />
        <div>{Math.ceil(city.list[2].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[2].main.temp_min)}&deg;</div>
        <div>{city.list[2].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <img
          src={`https://openweathermap.org/img/wn/${city.list[3].weather[0].icon}@2x.png`}
          alt="city.list[3].weather[0].description"
        />
        <div>{Math.ceil(city.list[3].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[3].main.temp_min)}&deg;</div>
        <div>{city.list[3].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <img
          src={`https://openweathermap.org/img/wn/${city.list[4].weather[0].icon}@2x.png`}
          alt="city.list[4].weather[0].description"
        />
        <div>{Math.ceil(city.list[4].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[4].main.temp_min)}&deg;</div>
        <div>{city.list[4].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <img
          src={`https://openweathermap.org/img/wn/${city.list[5].weather[0].icon}@2x.png`}
          alt="city.list[5].weather[0].description"
        />
        <div>{Math.ceil(city.list[5].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[5].main.temp_min)}&deg;</div>
        <div>{city.list[5].main.humidity}%</div>
      </div>
    </>
  );
}

export default SliderSecond;
