import {useState} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Collapse } from "@mui/material";

const SuggestionCard = ({sugerencia, onClickOtherSugg}) => {
    
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
                    <div className="card-suggestion-container-secondary">
                        <Typography gutterBottom variant="h5" component="div" className="title-card-suggestion">
                        {nombre}
                        </Typography>
                        <Button className="btn-other-suggestion" onClick={onClickOtherSugg}>Otra sugerencia</Button>
                        </div>
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
                <Collapse in={showRecipe} timeout={700} unmountOnExit>
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
                </Collapse>
            </Card>
        </div>
    );
}

export default SuggestionCard;