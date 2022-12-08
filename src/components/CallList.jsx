import Call from "./Call";
import React from 'react';
import rems from "../reminders";

function createCard(reminder){
    return (
    
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <Call 
                    key ={reminder.id}  //Unique for all components
                    name={reminder.name}
                    email = {reminder.email}
                    desc = {reminder.desc}
                    tel = {reminder.email}
                    img = {reminder.image}
                />
            </div>
    );

}

function CallList(){
    return (
        <div style={{padding:"3.5rem"}}>
            <h1 className="display-6">My Reminders</h1>
            <div  className="container" style={{padding:"2rem"}} >
                <div className ="row">
                    {rems.map(createCard)}
                </div>
            </div>       
        </div>
    );

}

export default CallList;