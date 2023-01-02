import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherToday from './components/WeatherToday'
import Loading from './components/Loading'

function App() {
  const [count, setCount] = useState(0)

let today = new Date();
let now = today.toLocaleTimeString('es-UY');
let dateUpdate = now[0]+now[1];
let h = parseInt(dateUpdate);
let h1;

if(h>=20){
  h1=true
}else{
  h1=false
}

window.addEventListener('load', () => {
  const container_loader = document.querySelector('.container_loader');
  container_loader.style.opacity = 0;
  container_loader.style.visibility = 'hidden';
})

  return (
    <div className="App">
      <div className={`container-app ${h1 ? 'evening' : 'day'}`}>
        <Loading/>
        <WeatherToday/>
      </div>
      
    </div>
  )
}

export default App
