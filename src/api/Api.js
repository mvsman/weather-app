import axios from 'axios';

const API_KEY = 'ac13a02546cee1a10ac7feed486e9772';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const Api = async (query) => {
   const {data} = await axios.get(API_URL, {
      params: {
         q: query,
         units: 'metric',
         APPID: API_KEY
      }
   })
   return data
}

export default Api