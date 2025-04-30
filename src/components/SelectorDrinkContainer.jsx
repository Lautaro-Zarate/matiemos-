import { useReducer } from "react";
import DrinkCard from "./DrinkCard"

const reducer = (state, action) => {
    return state === action.index ? null : action.index;
}

const SelectorDrinkContainer = ({onDrinkSelect}) => {
    const [selectedDrink, dispatch] = useReducer(reducer, null);

    const drinks = [
        {image: "/isotipo.png", name: "Mate"},
        {image: "/cafe-card.png", name: "Café"},
        {image: "/te-card.png", name: "Té"}
    ]

    const handleClick = (index, name) => {
        dispatch({index});
        onDrinkSelect(name);
    }
    return(
        <div className="selector-drink-container">
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
        </div>
    )
}
export default SelectorDrinkContainer;