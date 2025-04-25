import './App.css'
import Navbar from '../components/Navbar.jsx'
import AskName from '../components/AskName.jsx'
import Home from '../components/Home.jsx'
import WeatherContainer from '../components/WeatherContainer.jsx'

function App() {
  return (
  <div>
    <Navbar/>
    <Home/>
    {/* <AskName/> */}
    <WeatherContainer/>
  </div>
  )
}

export default App
