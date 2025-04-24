import DrinkCard from "./DrinkCard"
const SelectorDrinkContainer = () => {
    return(
        <div className="selector-drink-container">
            <DrinkCard image={"/public/isotipo.png"} name={"Mate"}/>
            <DrinkCard image={"/public/cafe-card.png"} name={"Café"}/>
            <DrinkCard image={"/public/te-card.png"} name={"Té"}/>
        </div>
    )
}
export default SelectorDrinkContainer;