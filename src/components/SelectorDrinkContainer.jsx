import { useReducer } from "react";
import DrinkCard from "./DrinkCard"
import cafeimg from "../public/cafe-card.png"

const reducer = (state, action) => {
    return state === action.index ? null : action.index;
}

const SelectorDrinkContainer = () => {
    const [selectedDrink, dispatch] = useReducer(reducer, null);

    const drinks = [
        {image: {cafeimg}, name: "Mate"},
        {image: "cafe-card.png", name: "Café"},
        {image: "te-card.png", name: "Té"}
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