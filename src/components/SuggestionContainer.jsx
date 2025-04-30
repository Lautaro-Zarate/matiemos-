import suggestion from "../data/suggestion.json";

const SuggestionContainer = ({bebidaSeleccionada, climaSeleccionado}) => {
    const sugerenciaFiltrada = suggestion.filter((s) =>{
        s.bebida === bebidaSeleccionada && s.clima.includes(climaSeleccionado)
    }
    
        
    )
    return(
        <div className="suggestions-container">
        {sugerenciaFiltrada.length > 0 ? (
        sugerenciaFiltrada.map((s) => (
        <SuggestionCard key={s.id} sugerencia={s} />
        ))
        ) : (
        <p>No hay sugerencias para esta combinación.</p>
        )}
    </div>
    )
}
export default SuggestionContainer;