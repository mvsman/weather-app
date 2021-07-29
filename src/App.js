import React, {useState} from 'react';
import useLocalStorage from './UseLocalStorage';
import Api from './api/Api';
import Weather from './components/Weather';
import SwiperSlider from './components/SwiperSlider';

import './styles.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useLocalStorage('city', {});

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await Api(inputValue)
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
          placeholder="Search..." 
          value={inputValue}
          onKeyPress={search}
          onChange={e => setInputValue(e.target.value)} 
           />
      </div>
        <div className="window">
          {city.cod ? 
          <Weather city={city} /> 
          : <div className="beforeInit">
              <p>Enter the name of the city</p>
              <p>on ENG or RUS keyboard layout</p>
            </div>}
          {city.cod && <SwiperSlider city={city}/>}
        </div>
    </div>
  )
}

export default App;
