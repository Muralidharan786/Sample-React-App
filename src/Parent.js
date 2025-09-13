import React from 'react';
// Grandchild Component
function Grandchild(props) {  
    // The Grandchild component receives the message prop from its parent  
    return <p>{props.message}</p>;
}
// Child Component
function Child(props) {  
    // The Child component receives the message prop and passes it down to the Grandchild  
return (    
<div>      
    <h2>Child Component</h2>      
    <Grandchild message={props.message} /> {/* Passing the message prop down */}    
</div>  
);
}
// Parent Component
function Parent() {  
    const message = "Hello from the Parent!";  
    return (    
    <div>      
        <h1>Parent Component</h1>      
        <Child message={message} /> {/* Passing the message prop to the Child */}    
        </div>  
        );
    }
export default Parent;