import { useReducer } from "react";
import DrinkCard from "./DrinkCard"

const reducer = (state, action) => {
    return state === action.index ? null : action.index;
}

const SelectorDrinkContainer = ({onDrinkSelect}) => {
    const [selectedDrink, dispatch] = useReducer(reducer, null);

    const drinks = [
        {image: "/isotipo.webp", name: "Mate"},
        {image: "/cafe-card.webp", name: "Café"},
        {image: "/te-card.webp", name: "Té"}
    ]

    const handleClick = (index, name) => {
        // Dispatch manda argumentos al action en forma de objeto
        dispatch({index});
        onDrinkSelect(name);
    }
    return(
        <section className="selector-drink-container">
            {
                drinks.map((drink, index) => (
                    <DrinkCard
                    key={index}
                    image={drink.image}
                    name={drink.name}
                    isSelected={selectedDrink === index}
                    onClick={() => handleClick(index, drink.name)}
                    />
                ))
            }
        </section>
    )
}
export default SelectorDrinkContainer;