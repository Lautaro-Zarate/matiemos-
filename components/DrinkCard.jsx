const DrinkCard = (props) => {
    const {image, name} = props;
    return(
        <div>
            <div className="drink-card">
                <img src={image} alt={name}/>
                <h2>{name}</h2>
            </div>
        </div>
    )
}
export default DrinkCard;