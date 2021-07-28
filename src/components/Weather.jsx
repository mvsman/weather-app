function Weather({ city }) {
  return (
    <div className="window-inner">
      <div className="window-title">
        <h3>
          {city.city.name} | {city.city.country}
        </h3>
      </div>
      <div>
        <p>{city.list[0].dt_txt.slice(0, 11).replace(/-/g, '/')}</p>
        <div className="temp">
          <img
            src={`https://openweathermap.org/img/wn/${city.list[0].weather[0].icon}@2x.png`}
            alt="city.list[0].weather[0].description"
          />
          <h1 className="temp-title">{Math.round(city.list[0].main.temp)}&deg;</h1>
        </div>
      </div>
      <div className="info">
        <p>Humidity: {city.list[0].main.humidity}%</p>
        <p>Wind: {city.list[0].wind.speed.toFixed(1)} m/s</p>
      </div>
    </div>
  );
}

export default Weather;
