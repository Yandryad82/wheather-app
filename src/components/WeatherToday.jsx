import React from 'react';
import '../css/WeatherToday.css'
import { useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import imgSol from '../images/sol.png'
import countriesName from '../countriesName.json'

const WeatherToday = () => {
  
  //Todo el código JS se escribe aquí
  console.log(countriesName)
  const [data, setData] = useState({})
     
  useEffect(() => {
    function success(pos) {
        const crd = pos.coords;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=4bd21af8999321574db120507ed62a45`)
        .then(res => setData(res.data))
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
    }
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error);
}, [])
  //
   
  const tempC = ((data.main?.temp)-273.15).toFixed(2);

  const tempF = (tempC * 9/5 + 32).toFixed(2);
  
  const [changeTemp, setChangeTemp] = useState(true);

  const tempctotempf = () => {
    setChangeTemp(!changeTemp);
  }

  //Nombre Country
  let currentCountry = countriesName.find(function (country) {
    return country.code === `${data.sys?.country}`
})
  //
     
  const imgNub = "https://static.vecteezy.com/system/resources/previews/012/806/414/original/3d-cartoon-weather-rain-clouds-with-thunderstorm-dark-cloud-sign-with-lightning-isolated-on-transparent-background-3d-render-illustration-png.png"

  const [backgroundImage, setBackgroundImage] = useState(true);

  let time;
  
  if(data.clouds?.all >= 80) {
    time = true
  }else{
    time = false
  }
    
  //
  
  return (
    <div className='general-container-app'>
      <div className='container-title'>
        <h1>Weather App</h1>
        <h3>{data.name} {currentCountry?.name}</h3>
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
          
          <img src={time ? imgNub : imgSol } alt="" />
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
          <i className='bx bx-cloud-rain bx-sm'></i>
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