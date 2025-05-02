import SuggestionCard from "./SuggestionCard";
import suggestion from "../data/suggestion.json";
const SuggestionContainer = ({bebidaSeleccionada, climaSeleccionado}) => {

    const sugerenciaFiltrada = suggestion.filter((s) => 
        s.bebida.includes(bebidaSeleccionada) && s.clima.includes(climaSeleccionado)
    );
    
    return(
        <div className="suggestions-container">
        {sugerenciaFiltrada.length > 0 ? (
        sugerenciaFiltrada.map((s) => (
            <SuggestionCard sugerencia={s} key={s.id}/>
        ))
        ) : (
        <p>No hay sugerencias para esta combinación.</p>
        )}
    </div>
    )
}
export default SuggestionContainer;