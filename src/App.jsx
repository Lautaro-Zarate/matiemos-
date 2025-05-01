import { useState, useEffect } from 'react'
import useWeather from './hooks/useWeather.js'
import suggestion from './data/suggestion.json'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import AskName from './components/AskName.jsx'

function App() {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [sugerencia, setSugerencia] = useState(null);
  const {clima, loading, error} = useWeather();

  const getNivelClima = (temp) => {
    if(temp < 14) return "frio";
    if(temp >= 14 && temp < 25) return "templado";
    return "calido";
  }

  useEffect(() => {
    if(selectedDrink && clima?.temperatura !== undefined){
      const nivelClima = getNivelClima(clima.temperatura);
      const filtradas = suggestion.filter((sug) => 
        sug.bebida.includes(selectedDrink) && 
      sug.clima.includes(nivelClima)
      );

      if(filtradas.length > 0){
        const randomIndex = Math.floor(Math.random() * filtradas.length);
        setSugerencia(filtradas[randomIndex])
      }else{
        setSugerencia(null);
      }
    }
  }, [selectedDrink, clima]);

  const handleDrinkSelection = (drinkName) => {
    setSelectedDrink(drinkName);
  }
  return (
  <div>
    <Navbar/>
    <Home 
    onDrinkSelect={handleDrinkSelection} 
    selectedDrink={selectedDrink} 
    sugerencia={sugerencia} 
    clima={clima} 
    loading={loading} 
    error={error} />
    {/* <AskName/> */}
  </div>
  )
}

export default App
