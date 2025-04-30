const SuggestionCard = ({sugerencia}) => {
    const {nombre, descripcion, imagen, receta} = sugerencia;
    return(
        <div>
            <img src={imagen} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <h4>Receta:</h4>
            <ul>
                {receta.map((paso, index) => (
                    <li key={index}>{paso}</li>
                ))}
            </ul>
        </div>
    )
}

export default SuggestionCard;