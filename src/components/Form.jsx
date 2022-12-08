import React from 'react';
import Input from './Input';


function Form(){
    return (
        <div style={{"marginTop":"20rem", marginLeft:"20rem", marginRight:"20rem", backgroundColor:"rgba(255, 167, 71, 0.5)", padding:"2rem"}}>
            <div>
                <Input placeholder="Username" type="text"/>
            </div>

            <div>
                <Input placeholder="Password" type="text"/>
            </div>

            <div class="container d-flex justify-content-center">
                <button type="button" className="btn btn-outline-warning btn-block">Sign In</button>
            </div>

            
        </div>
        
        

    );
}

export default Form;