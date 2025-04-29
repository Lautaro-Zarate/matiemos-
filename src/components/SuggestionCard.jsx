import suggestion from "../data/suggestion.json"
const SuggestionCard = ({tipoSeleccionado, climaActual}) => {
    const sugerencia = suggestion.filter( s => {
        s.tipo === tipoSeleccionado && s.climasRecomendados.includes(climaActual)})
        console.log(sugerencia)
    return(
        <div>
            {
            sugerencia.map((s) => {
                <div key={s.id}>
                    <img src={s.imagen} alt={s.nombre} />
                    <h2>{s.nombre}</h2>
                    <p>{s.descripcion}</p>
                    <p>{s.receta}</p>
                </div>
            })
            }
        </div>
    )
}
export default SuggestionCard;