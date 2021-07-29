import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

function SliderSecond({ city }) {
  return (
    <>
      <div className="slide-item">
        <div className="time">
          {`${city.list[8].dt_txt.slice(8, 10)}/${city.list[8].dt_txt.slice(5, 7)}`}
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[8].weather[0].icon}@2x.png`}
          alt="city.list[8].weather[0].description"
        />
        <div>{Math.ceil(city.list[8].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[8].main.temp_min)}&deg;</div>
        <div>{city.list[8].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">
          {`${city.list[16].dt_txt.slice(8, 10)}/${city.list[16].dt_txt.slice(5, 7)}`}
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[16].weather[0].icon}@2x.png`}
          alt="city.list[16].weather[0].description"
        />
        <div>{Math.ceil(city.list[16].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[16].main.temp_min)}&deg;</div>
        <div>{city.list[16].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">
          {`${city.list[24].dt_txt.slice(8, 10)}/${city.list[24].dt_txt.slice(5, 7)}`}
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[24].weather[0].icon}@2x.png`}
          alt="city.list[24].weather[0].description"
        />
        <div>{Math.ceil(city.list[24].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[24].main.temp_min)}&deg;</div>
        <div>{city.list[24].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">
          {`${city.list[32].dt_txt.slice(8, 10)}/${city.list[32].dt_txt.slice(5, 7)}`}
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[32].weather[0].icon}@2x.png`}
          alt="city.list[32].weather[0].description"
        />
        <div>{Math.ceil(city.list[32].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[32].main.temp_min)}&deg;</div>
        <div>{city.list[32].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">
          {`${city.list[39].dt_txt.slice(8, 10)}/${city.list[39].dt_txt.slice(5, 7)}`}
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[39].weather[0].icon}@2x.png`}
          alt="city.list[39].weather[0].description"
        />
        <div>{Math.ceil(city.list[39].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[39].main.temp_min)}&deg;</div>
        <div>{city.list[39].main.humidity}%</div>
      </div>
    </>
  );
}

export default SliderSecond;
