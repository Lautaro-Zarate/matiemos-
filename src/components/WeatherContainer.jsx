import useWeather from "../hooks/useWeather"
import { Grow } from "@mui/material";
const WeatherContainer = () => {
    const {clima, error, loading} = useWeather();

    if(loading) return <p>Cargando clima...</p>
    if(error) return <p>Error al obtener el clima 🫤</p>
    return(
        <Grow in={true} timeout={1500}>
        <div className="weather-container">
            <div className="weather-info">
                <span>{clima.temperatura}°C</span>
                <h3>{clima.ciudad}</h3>
            </div>
                <img src={`https://openweathermap.org/img/wn/${clima.icono}@2x.png`} alt="Icono del clima" />
        </div>
        </Grow>
    )
}

export default WeatherContainer;