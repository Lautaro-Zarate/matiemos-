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
            <WeatherContainer/>
            <SelectorDrinkContainer 
            onDrinkSelect={onDrinkSelect}/>

            {error && <p>Error al obtener el clima</p>}
            {selectedDrink && !loading && !error && (
                sugerencia ? (
                    <>
                    <SuggestionCard sugerencia={sugerencia}/>
                    </>
                ):(
                    <p className="p-no-hay-sugerencias">No hay sugerencia para esta combinación</p>
                )
            )}
        </div>
    )
}
export default Home;