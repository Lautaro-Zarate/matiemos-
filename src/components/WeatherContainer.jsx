import useWeather from "../hooks/useWeather"
import LoaderComponent from "./LoaderComponent";
import { Grow } from "@mui/material";
const WeatherContainer = () => {
    const {clima, error, loading} = useWeather();

    if(loading) return <div><LoaderComponent/></div>
    if(error) return <p className="not-weather">Error al obtener el clima</p>
    return(
        <Grow in={true} timeout={1500}>
        <div className="weather-container">
            <div className="weather-info">
                <h3>{clima.temperatura}°C</h3>
                <p>{clima.ciudad}</p>
            </div>
            <img src={`https://openweathermap.org/img/wn/${clima.icono}@2x.png`} alt="Icono del clima" />
        </div>
        </Grow>
    )
}

export default WeatherContainer;