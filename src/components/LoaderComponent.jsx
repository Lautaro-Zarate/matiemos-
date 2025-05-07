import { useState } from "react";
import { CircularProgress } from "@mui/material";
const LoaderComponent = () => {
    const [loading, setLoading] = useState(true);
    
    setInterval(() => {
        setLoading(false)
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