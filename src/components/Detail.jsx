import React from 'react';

function Detail(props){
    return (
        <div>
            <div className="card-body">
                    
                    <p className="card-text">{props.name}</p>
                    <p className="card-text">{props.tel}</p>
                    <p className="card-text">{props.email}</p>
                    <p className="card-text">{props.desc}</p>
            </div>
        </div>

    );

}

export default Detail;