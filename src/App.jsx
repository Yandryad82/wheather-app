import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherToday from './components/WeatherToday'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container-app'>
        <WeatherToday/>
      </div>
      
    </div>
  )
}

export default App
