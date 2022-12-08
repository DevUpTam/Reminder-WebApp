import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CallList from "./CallList";
import CardList from "./CardList";
import Incrementor from "../ComponentTrial/Incrementor";
import Form2 from "./Form2";

var isLoggedIn = true;

function renderConditionally(){
    if (isLoggedIn === true){
        return (
        <div>
            <Header/>
            <div className="container-fluid" style={{padding:"1.5rem"}}>
                <ul className="list-group">
                <li className="list-group-item d-flex justify-content-start" style={{ backgroundColor:"rgb(241, 198, 111)"}}><Note/></li>
                <li className="list-group-item d-flex justify-content-start" style={{ backgroundColor:"rgb(241, 198, 111)"}}><CallList/></li>
                <li className="list-group-item d-flex justify-content-start" style={{ backgroundColor:"rgb(241, 198, 111)"}}><CardList/></li>
                <li className="list-group-item d-flex justify-content-center" style={{ backgroundColor:"rgb(241, 198, 111)"}}><Incrementor/></li>
                {/* <li className="list-group-item d-flex justify-content-center" style={{ backgroundColor:"rgb(241, 198, 111)"}}><InputWithIcon/></li> */}
                </ul>
            </div>
            <Footer/>          
        </div>

        );
        
        
    }
    else{
        return (
            <div className="container d-flex justify-content-center align-content-center" style={{padding:"1.5rem", backgroundColor:'rgb(239, 206, 140)'}}>
                <Form2/>
            </div>
        );
    }

}


function App()
{
    return (<div>
               {renderConditionally()}
    </div>);
        
    
}

export default App;