function Weather({ city }) {
  const date = new Date();
  const calcHour = Math.abs(date.getUTCHours() + city.city.timezone / 3600);
  const calcMin = date.getUTCMinutes();
  const minute = calcMin < 10 ? '0' + calcMin : calcMin;
  const hour = calcHour >= 24 ? calcHour - 24 : calcHour;
  const time = `${hour < 10 ? '0' + hour : hour}:${minute}`;
  return (
    <div className="window-inner">
      <div className="window-title">
        <p>
          {city.city.name} | {city.city.country}
        </p>
      </div>
      <div>
        <div className="window-time">{time}</div>
        <div className="temp">
          <img
            src={`https://openweathermap.org/img/wn/${city.list[0].weather[0].icon}@2x.png`}
            alt="city.list[0].weather[0].description"
          />
          <h1 className="temp-title">{Math.round(city.list[0].main.temp)}&deg;</h1>
        </div>
      </div>
      <div className="info">
        <div>
          <p>Humidity:</p>
          <p>{city.list[0].main.humidity}%</p>
        </div>
        <div>
          <p>Wind:</p>
          <p>{city.list[0].wind.speed.toFixed(1)} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
