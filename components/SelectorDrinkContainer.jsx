import { useReducer } from "react";
import DrinkCard from "./DrinkCard"

const reducer = (state, action) => {
    return state === action.index ? null : action.index;
}

const SelectorDrinkContainer = () => {
    const [selectedDrink, dispatch] = useReducer(reducer, null);

    const drinks = [
        {image: "/public/isotipo.png", name: "Mate"},
        {image: "/public/cafe-card.png", name: "Café"},
        {image: "/public/te-card.png", name: "Té"}
    ]

    return(
        <div className="selector-drink-container">
            {
                drinks.map((drink, index) => (
                    <DrinkCard
                    key={index}
                    image={drink.image}
                    name={drink.name}
                    isSelected={selectedDrink === index}
                    onClick={() => dispatch({index})}
                    />
                ))
            }
        </div>
    )
}
export default SelectorDrinkContainer;