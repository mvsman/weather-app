import axios from 'axios';

const API_KEY = 'c81577f5ae0d4498c9fbaa16f01d38e8';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


const Api = async (query) => {
   const {data} = await axios.get(API_URL, {
      params: {
         q: query,
         units: 'metric',
         lang: 'ru',
         APPID: API_KEY
      }
   })
   return data
}


export default Api