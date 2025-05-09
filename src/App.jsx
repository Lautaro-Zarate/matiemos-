import { useState, useEffect } from 'react'
import useWeather from './hooks/useWeather.js'
import suggestion from './data/suggestion.json'

import './App.css'
import { Fade } from '@mui/material'

import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import AskName from './components/AskName.jsx'

function App() {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [sugerencia, setSugerencia] = useState(null);
  const {clima, loading, error} = useWeather();
  const [name, setName] = useState("");

  useEffect(() => {
    let nameSaved = localStorage.getItem("name");
    setName(nameSaved);
  }, [])

  const getNivelClima = (temp) => {
    if(temp < 14) return "frio";
    if(temp >= 14 && temp < 24) return "templado";
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

  const handleClickOtherSuggestion = () => {
    if(selectedDrink && clima?.temperatura !== undefined){
      const nivelClima = getNivelClima(clima.temperatura);
      const filtradas = suggestion.filter(
        (sug) => 
          sug.bebida.includes(selectedDrink) &&
          sug.clima.includes(nivelClima) &&
          sug.id !== sugerencia?.id // Excluye la sugerencia actual;
        );

        if(filtradas.length > 0){
          const randomIndex = Math.floor(Math.random() * filtradas.length);
          setSugerencia(filtradas[randomIndex])
        }

    }
  } 


  return (
  <div>
    {!name 
    ?(<AskName userName={setName}/>)
    : (
      <Fade in timeout={800}>
        <div>
          <Navbar />
          <Home 
            onDrinkSelect={handleDrinkSelection} 
            onClickOtherSugg={handleClickOtherSuggestion}
            selectedDrink={selectedDrink} 
            sugerencia={sugerencia} 
            clima={clima} 
            loading={loading} 
            error={error} 
          />
          <Footer />
        </div>
      </Fade>
    )}
  </div>
  )
}

export default App
