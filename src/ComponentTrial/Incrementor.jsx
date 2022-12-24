import React, { useState } from 'react';
import Button from '@mui/material/Button';



function Incrementor(){

    const [count, setCount] = useState(0);

    function increase(){
        setCount(count+1);
    }

    function reset(){
        setCount(0)
    }

    function decrease(){
        if (count>0){
            setCount(count-1);
        }
        else{
            setCount(0);
        }
        
    }

    return (
        <div class="d-flex justify-content-center">
            <div class="container">
                <div className="container-fluid" style={{"paddingLeft":"30%", "paddingRight":"30%"}}>
                    <ul className='list-group'>
                        <li className='list-group-item d-flex justify-content-center'> <h1 className="display-6">{count}</h1> </li>
                        <li className='list-group-item d-flex justify-content-center'><Button size="small" onClick={increase}><b>+</b></Button></li>
                        <li className='list-group-item d-flex justify-content-center'><Button size="small" onClick={decrease}><b>-</b></Button></li>
                        <li className='list-group-item d-flex justify-content-center'><Button size="small" onClick={reset}>Reset</Button></li>
                    </ul>
                </div>
               
                
                
            </div>
        </div>
    );
}

export default Incrementor;