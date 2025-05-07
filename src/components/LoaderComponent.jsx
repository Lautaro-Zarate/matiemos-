import { useState } from "react";
import { CircularProgress } from "@mui/material";
const LoaderComponent = () => {
    const [loading, setLoading] = useState(false);
    
    setInterval(() => {
        setLoading(true)
    }, 2000)
    
    return(
        loading ?(
            <div className="loader-container">
                <CircularProgress color="inherit"/>
            </div>
        ):(
            <div className="loader-container">
                <CircularProgress color="inherit"/>
            </div>
        )
    )
}

export default LoaderComponent;