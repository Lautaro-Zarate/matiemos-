import { useEffect, useState } from "react";
import SelectorDrinkContainer from "./SelectorDrinkContainer";
const Home = ({onDrinkSelect}) => {
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
            <SelectorDrinkContainer onDrinkSelect={onDrinkSelect}/>
        </div>
    )
}
export default Home;