import { useEffect, useState } from "react";
import SelectorDrinkContainer from "./SelectorDrinkContainer";
import SuggestionCard from "./SuggestionCard"
import WeatherContainer from "./WeatherContainer";

const Home = (props) => {
    const {onDrinkSelect, selectedDrink, sugerencia, loading, error} = props;

    const [userName, setUserName] = useState("");
    
    useEffect(() => {
        let savedName = localStorage.getItem("name");
        if(savedName){
            setUserName(savedName);
        }
    }, []);
    
    return(
        <div>
            <div className="home-greeting-container">
                <h1>¡Bienvenido {userName}!</h1>
                <p>¿Que tienes planeado desayunar/merendar hoy?</p>
            </div>
            <SelectorDrinkContainer 
            onDrinkSelect={onDrinkSelect}/>
            <WeatherContainer/>

            {error && <p>Error al obtener el clima</p>}
            {selectedDrink && !loading && !error && (
                sugerencia ? (
                    <>
                    <h2>Te sugerimos acompañarlo con: </h2>
                    <SuggestionCard sugerencia={sugerencia}/>
                    </>
                ):(
                    <p>No hay sugerencia para esta combinación</p>
                )
            )}
        </div>
    )
}
export default Home;