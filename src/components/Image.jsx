import React from 'react';

function Image(props){

    return (

        <div>
            <img className="card-img-top" src={props.img} alt=""/>
            
        </div>
    );
}

export default Image;