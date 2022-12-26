import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherToday from './components/WeatherToday'

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

  return (
    <div className="App">
      <div className={`container-app ${h1 ? 'evening' : 'day'}`}>
       
        <WeatherToday/>
      </div>
      
    </div>
  )
}

export default App
