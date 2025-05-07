import { Grow } from "@mui/material";
const DrinkCard = (props) => {
    const {image, name, isSelected, onClick} = props;
    return(
        <Grow in={true} timeout={2000}>
        <div>
            <div className={`drink-card ${isSelected ? "selected" : ""}`} onClick={onClick}>
                <img src={image} alt={name}/>
                <h2>{name}</h2>
            </div>
        </div>
        </Grow>
    )
}
export default DrinkCard;