const DrinkCard = (props) => {
    const {image, name, isSelected, onClick} = props;
    return(
        <div>
            <div className={`drink-card ${isSelected ? "selected" : ""}`} onClick={onClick}>
                <img src={image} alt={name}/>
                <h2>{name}</h2>
            </div>
        </div>
    )
}
export default DrinkCard;