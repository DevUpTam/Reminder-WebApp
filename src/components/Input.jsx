import React from 'react';

function Input(props){
    return (
        <div>
            <div>
                <div class="input-group-sm mb-10" style={{"paddingBottom":"0.5rem"}} >
                    <input type={props.type} class="form-control" placeholder={props.plcaeholder} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </div>      
        </div>
    );
}

export default Input;