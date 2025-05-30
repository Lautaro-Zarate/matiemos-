import {useState} from "react";
import { Grow } from "@mui/material";
const AskName = ({userName}) => {
    
    const [name, setName] = useState("");
    
    const handleClick = (e) => {
        e.preventDefault();
        if(name.trim().length >= 3){
            localStorage.setItem("name", name);
            userName(name);
        }else{
            console.error("El nombre debe tener al menos 3 caracteres.")
        }
    }
    return(
        <Grow in={true} timeout={1000}>
            <div className="askName-container">
                <img src="/isotipo.webp" alt="Logo Matiemos" />
                <div>
                    <h1>¡HOLA!</h1>
                    <p>¿Cómo es tu nombre?</p>
                </div>
                <input 
                type="text" 
                name="name" 
                id="nameUser" 
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <button className="btn-primary" onClick={handleClick}>Empezar</button>
            </div>
        </Grow>
    )
}

export default AskName;