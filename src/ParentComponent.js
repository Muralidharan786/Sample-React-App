import React, { createContext, useContext } from 'react';

const InfoContext = createContext();

function ChildComponent() { 
     const info = useContext(InfoContext);  
     return <div>{info}</div>;
    }
     function ParentComponent() {  
        const info = "Hello, World!";  
        return (    
        <InfoContext.Provider value={info}>      
        <ChildComponent />    
        </InfoContext.Provider>  
        );
    }

    export default ParentComponent;