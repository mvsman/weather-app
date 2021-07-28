import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Pagination]);

function SliderFirst({ city }) {
  // Local Time
  const LT = Math.abs(+city.list[0].dt_txt.slice(10, 13) + city.city.timezone / 3600);
  const LT2 = Math.abs(+city.list[1].dt_txt.slice(10, 13) + city.city.timezone / 3600);
  const LT3 = Math.abs(+city.list[2].dt_txt.slice(10, 13) + city.city.timezone / 3600);
  const LT4 = Math.abs(+city.list[3].dt_txt.slice(10, 13) + city.city.timezone / 3600);
  const LT5 = Math.abs(+city.list[4].dt_txt.slice(10, 13) + city.city.timezone / 3600);
  // Correct Time
  const CT = LT >= 24 ? LT - 24 : LT;
  const CT2 = LT2 >= 24 ? LT2 - 24 : LT2;
  const CT3 = LT3 >= 24 ? LT3 - 24 : LT3;
  const CT4 = LT4 >= 24 ? LT4 - 24 : LT4;
  const CT5 = LT5 >= 24 ? LT5 - 24 : LT5;
  // const time = CT < 10 ? `0${CT}:00` : `${CT}:00`;
  return (
    <>
      <div className="slide-item">
        <div className="time">{(LT >= 24 ? LT - 24 : LT) < 10 ? `0${CT}:00` : `${CT}:00`}</div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[1].weather[0].icon}@2x.png`}
          alt="city.list[1].weather[0].description"
        />
        <div>{Math.ceil(city.list[1].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[1].main.temp_min)}&deg;</div>
        <div>{city.list[1].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">{(LT2 >= 24 ? LT2 - 24 : LT2) < 10 ? `0${CT2}:00` : `${CT2}:00`}</div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[2].weather[0].icon}@2x.png`}
          alt="city.list[2].weather[0].description"
        />
        <div>{Math.ceil(city.list[2].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[2].main.temp_min)}&deg;</div>
        <div>{city.list[2].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">{(LT3 >= 24 ? LT3 - 24 : LT3) < 10 ? `0${CT3}:00` : `${CT3}:00`}</div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[3].weather[0].icon}@2x.png`}
          alt="city.list[3].weather[0].description"
        />
        <div>{Math.ceil(city.list[3].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[3].main.temp_min)}&deg;</div>
        <div>{city.list[3].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">{(LT4 >= 24 ? LT4 - 24 : LT4) < 10 ? `0${CT4}:00` : `${CT4}:00`}</div>
        <img
          src={`https://openweathermap.org/img/wn/${city.list[4].weather[0].icon}@2x.png`}
          alt="city.list[4].weather[0].description"
        />
        <div>{Math.ceil(city.list[4].main.temp_max)}&deg;</div>
        <div>{Math.floor(city.list[4].main.temp_min)}&deg;</div>
        <div>{city.list[4].main.humidity}%</div>
      </div>
      <div className="slide-item">
        <div className="time">{(LT5 >= 24 ? LT5 - 24 : LT5) < 10 ? `0${CT5}:00` : `${CT5}:00`}</div>
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

export default SliderFirst;
