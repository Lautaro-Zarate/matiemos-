import { Grow } from "@mui/material"
const ButtonSound = () => {
    const handleClick = () => {
        const mateAudio = new Audio("/sound/mate-sound.mp3")
        mateAudio.play()
        mateAudio.play().catch((err) => console.error("Error al reproducir el audio", err))
    }
    return(
        <Grow in={true} timeout={3000}>
        <div className="button-sound-container">
            <button className="btn-sound" onClick={handleClick}>🧉</button>
        </div>
        </Grow>
    )
}
export default ButtonSound;