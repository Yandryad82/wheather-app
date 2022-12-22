import React from 'react';
import '../css/WeatherToday.css'
import { useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const WeatherToday = () => {
  
  //Todo el código JS
        
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Montevideo&appid=4bd21af8999321574db120507ed62a45')
    .then(res => setData(res.data));
  }, []);

  console.log(data)

  const tempC = ((data.main?.temp)-273.15).toFixed(2);

  const tempF = (tempC * 9/5 + 32).toFixed(2);
  
  const [changeTemp, setChangeTemp] = useState(true);

  const tempctotempf = () => {
    setChangeTemp(!changeTemp);
  }

  const [backgroundImage, setBackgroundImage] = useState(true);

  const imgSol = "https://lh6.ggpht.com/E62FdNiGOnq0I77Xl5B7YMa9c2PFpAlK1zW-gi4jX1auhjdSwhjfRWgiDSd15txRNKoB=w1200-h630-p-k-no-nu";

  const imgNub = ""

  const changeImage = () => {
    setBackgroundImage(!backgroundImage);
  }
  
  //
  
  return (
    <div className='general-container-app'>
      <div className='container-title'>
        <h1>Weather App</h1>
        <h3>{data.name} {data.sys?.country}</h3>
      </div>
      <div className='container-date'>
        <span>{format(new Date(), "PPP")}</span>
      </div>
      <div className='container-termometer-icon'>
        <i className="fa-solid fa-temperature-three-quarters"></i>
        <span>{changeTemp ? tempC : tempF} {changeTemp ? '℃' : '℉'}</span>
      </div>
      <div className='information-container'>
        <div className='icon-weather-state'>
          
          <img src="https://lh6.ggpht.com/E62FdNiGOnq0I77Xl5B7YMa9c2PFpAlK1zW-gi4jX1auhjdSwhjfRWgiDSd15txRNKoB=w1200-h630-p-k-no-nu" alt="" />
        </div>
        <div className='icons-information'>
          <h3>Weather Informacion</h3>
          <div className='container-wind-speed'>
            <i className="fa-solid fa-wind"></i>
          <span>Wind Speed: {data.wind?.speed} m/s</span>
          </div>
          <div className='container-cloud'>
            <i className="fa-solid fa-cloud"></i>
          <span>Clouds: {data.clouds?.all} %</span>
            </div>
          <div className='container-humididy'>
          <i class='bx bx-cloud-rain bx-sm'></i>
          <span>Humidity: {data.main?.humidity} %</span>
          </div>
          <div className='container-btn'>
            <button onClick={tempctotempf}>{changeTemp ? '℉' : '℃'}</button>
          </div>
        </div>
      </div>
            
    </div>
  );
};

export default WeatherToday;