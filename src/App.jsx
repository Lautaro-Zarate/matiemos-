import { useState, useEffect } from 'react'
import useWeather from './hooks/useWeather.js'
import suggestion from './data/suggestion.json'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import SuggestionContainer from './components/SuggestionContainer.jsx'
import AskName from './components/AskName.jsx'
import WeatherContainer from './components/WeatherContainer.jsx'
import SuggestionCard from './components/SuggestionCard.jsx'

function App() {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [sugerencia, setSugerencia] = useState(null);
  const {clima} = useWeather();

  useEffect(() => {
    if(selectedDrink && clima){
      const filtradas = suggestion.filter((sug) => 
        sug.bebida.includes(selectedDrink) && 
      sug.clima.includes(clima.description)
      );
      setSugerencia(filtradas[0] || null);
    }
  }, [selectedDrink, clima]);

  const handleDrinkSelection = (drinkName) => {
    setSelectedDrink(drinkName);
  }
  return (
  <div>
    <Navbar/>
    <Home onDrinkSelect={handleDrinkSelection}/>
    {/* <AskName/> */}
    {/* <WeatherContainer/> */}
    {
      sugerencia && (
        <>
          <h2>Te sugerimos acompañarlo con: </h2>
          <SuggestionCard sugerencia={sugerencia}/>
        </>
      )
    }
  </div>
  )
}

export default App
