import { useEffect, useState } from "react";

const apiKey = "8678f18abaf9bdc879c78833dacd4a14";

const useWeather = () => {
    const [clima, setClima] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerClima = async () => {
            try{
                const pos = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));

                const {latitude, longitude} = pos.coords;
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=es`);

                const data = await res.json();

                const temperatura = Math.round(data.main.temp)
                let nivelClima = "";

                if(temperatura <= 14){
                    nivelClima = "frío"
                } 
                else if(temperatura <= 25){
                    nivelClima = "templado";
                }
                else{
                    nivelClima = "calido";
                }

                const climaData = {
                    ciudad: data.name,
                    temperatura,
                    description: data.weather[0].description,
                    icono: data.weather[0].icon,
                    nivelClima
                };

                setClima(climaData);
                setLoading(false);
            }catch(err){
                console.error("Error al obtener el clima:" , err);
                setError(true);
                setLoading(false);
            }
        };

        obtenerClima();
    }, []);

    return{clima, loading, error}
}

export default useWeather;