import {useState} from "react";
const AskName = () => {
    const [name, setName] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        if(name.trim().length >= 3){
            localStorage.setItem("name", name);
            console.log(name);
        }else{
            console.error("El nombre debe tener al menos 3 caracteres.")
        }
    }
    return(
        <div className="askName-container">
            <div>
                <p>¡HOLA!</p>
                <h1>¿Cómo es tu nombre?</h1>
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
    )
}

export default AskName;