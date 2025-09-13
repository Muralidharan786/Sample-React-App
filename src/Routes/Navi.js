import React from "react";
import { useNavigate } from "react-router-dom";

function Navi() {  
    const navigate = useNavigate();   // Initialize the useNavigate hook  
      const goToAbout = () => {    
        navigate("/about"); // Navigate to the "About" page  
        };  return (    
        <div>      
            <h2>Home Page</h2>      
            <button onClick={goToAbout}>Go to About Page</button>    
        </div>  
        );
        }
    export default Navi;
