import './App.css'
import Navbar from './components/Navbar'
import AskName from './components/AskName.jsx'
import Home from './components/Home.jsx'
import WeatherContainer from './components/WeatherContainer.jsx'
import SuggestionCard from './components/SuggestionCard.jsx'

function App() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <SuggestionCard/>
    {/* <AskName/> */}
    {/* <WeatherContainer/> */}
  </div>
  )
}

export default App
