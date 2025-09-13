import React from "react";

function UncontrolledForm() {  
    const inputRef = React.useRef();  
    const handleSubmit = () => {    
        alert(inputRef.current.value);  
    };  
    return (    
    <>      
        <input type="text" ref={inputRef} />      
        <button onClick={handleSubmit}>Submit</button>    
    </>  
    );
}

export default UncontrolledForm;