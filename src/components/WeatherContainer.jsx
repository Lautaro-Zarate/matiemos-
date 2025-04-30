import useWeather from "../hooks/useWeather"

const WeatherContainer = () => {
    const {clima, error, loading} = useWeather();

    if(loading) return <p>Cargando clima...</p>
    if(error) return <p>Error al obtener el clima 🫤</p>
    return(
        <div>
            <h3>Ciudad: {clima.ciudad}</h3>
            <div>
                <span>{clima.temperatura}°C</span>
                <span>{clima.description}</span>
                <img src={`https://openweathermap.org/img/wn/${clima.icono}@2x.png`} alt="Icono del clima" />
            </div>
        </div>
    )
}

export default WeatherContainer;