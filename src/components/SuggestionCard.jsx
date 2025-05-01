import {useState} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SuggestionCard = ({sugerencia}) => {
    
    const {nombre, descripcion, imagen, receta} = sugerencia;
    const [showRecipe, setShowRecipe] = useState(false);
    const handleClick = () => setShowRecipe(prev => !prev)

    return (
        <div className='card-suggestion-container'>
            <h3 className='title-suggestion'>Te sugerimos acompañarlo con: </h3>
            <Card sx={{ maxWidth: 345 }} className='card-sugerencia'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imagen}
                    title={nombre}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                    </Typography>
                    <Typography variant="body2" className='description-card'>
                    {descripcion}
                    </Typography>
                </CardContent>
                {receta && receta.length > 0 && (
                <CardActions className="card-button">
                    <Button size="small" color="inherit" onClick={handleClick} className="button-recipe">
                        {showRecipe ? "Ocultar receta" : "Ver receta"}
                    </Button>
                </CardActions>    
                )}
                {showRecipe && (
                    <CardContent className="recipe-container">
                        <div>
                            <ul className="recipe-steps">
                                <h4 className="recipe-title">Pasos:</h4>
                                {receta.map((paso, index) => (
                                    <li key={index}>{paso}</li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                )}
            </Card>
    </div>
    );
}
// const SuggestionCard = ({sugerencia}) => {
//     const {nombre, descripcion, imagen, receta} = sugerencia;
//     return(
//         <div>
//             <img src={imagen} alt={nombre}/>
//             <h3>{nombre}</h3>
//             <p>{descripcion}</p>
//             {receta && receta.length > 0 && (
                // <>
                // <h4>Receta: </h4>
                // <ul>
                //     {receta.map((paso, index) => (
                //         <li key={index}>{paso}</li>
                //     ))}
                // </ul>
                // </>
            // )}
//         </div>
//     )
// }

export default SuggestionCard;