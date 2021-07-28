import React, {useState} from 'react';
import Api2 from './api/Api2'
import SwiperSlider from './components/SwiperSlider';
import Weather from './components/Weather';

import './styles.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await Api2(inputValue)
      setCity(data)
      setInputValue('')
    }
  }

  return (
    <div className="container">
      <div className="search-city">
        <input 
          className="search-input" 
          type="text" 
          placeholder="Поиск..." 
          value={inputValue}
          onKeyPress={search}
          onChange={e => setInputValue(e.target.value)} 
           />
      </div>
        <div className="window">
          {city.cod ? <Weather city={city} /> : <p>Введите название города</p>}
          {city.cod && <SwiperSlider city={city}/>}
        </div>
    </div>
  )
}

export default App;
