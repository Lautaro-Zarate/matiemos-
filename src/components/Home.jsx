import { useEffect, useState } from "react";
import SelectorDrinkContainer from "./SelectorDrinkContainer";
import SuggestionCard from "./SuggestionCard"
import WeatherContainer from "./WeatherContainer";
import ButtonSound from "./ButtonSound";
import { Slide, Grow } from "@mui/material";

const Home = (props) => {
    const {onDrinkSelect, onClickOtherSugg ,selectedDrink, sugerencia, loading, error, clima} = props;

    const [userName, setUserName] = useState("");
    
    useEffect(() => {
        let savedName = localStorage.getItem("name");
        if(savedName){
            setUserName(savedName);
        }
    }, []);
    
    return(
        <main>
            <ButtonSound/>
            <WeatherContainer/>
            <Grow in={true} timeout={1500}>
            <section className="home-greeting-container">
                <h1>¡Bienvenido {userName}!</h1>
                <p>¿Que tienes planeado desayunar/merendar hoy?</p>
            </section>
            </Grow>
            <SelectorDrinkContainer 
            onDrinkSelect={onDrinkSelect}/>
            {error && <p className="not-weather-secondary">Error al obtener el clima</p>}
            {/* Si hay una bebida seleccionada, y no estamos cargando datos, y no hubo errores, entonces 👇 */}
            {selectedDrink && !loading && !error && (
                sugerencia ? (
                    <>
                    <Slide in={!!sugerencia} direction="up" timeout={1500}>
                    <div>
                    <SuggestionCard sugerencia={sugerencia} onClickOtherSugg={onClickOtherSugg}/>
                    </div>
                    </Slide>
                    </>
                ):(
                    <p className="p-no-hay-sugerencias">No hay sugerencia para esta combinación</p>
                )
            )}
            {!clima && <p className="not-weather">Necesitamos la obtención de tu clima para darte una mejor recomendación</p>}
        </main>
    )
}
export default Home;