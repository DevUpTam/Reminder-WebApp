import React from 'react';
import Image from './Image';
import Detail from './Detail';

function Call(props)
{
    return (
        <div style={{padding:"1.5rem"}}>
            <div className="card" style={{width: "18rem", float: "left" }}>
                <Image img={props.img}/>            
                <Detail name={props.name} email={props.email} tel={props.tel} desc={props.desc} />
            </div>
        </div>
        
    );
}

export default Call;