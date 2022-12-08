import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CallList from "./CallList";
import CardList from "./CardList";
import Incrementor from "../ComponentTrial/Incrementor";
import Form2 from "./Form2";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

var isLoggedIn = true;

const Item = styled('div')({
    padding: 10,
    backgroundColor: 'rgb(237, 231, 214)'
  });

function renderConditionally(){
    if (isLoggedIn === true){
        return (
        <div>
            <Header/>
            <Box
                sx={{
                width: '100%',
                maxWidth: '100%',
                }}>
                <Item sx={{paddingTop:10, paddingLeft:1, paddingRight:1}}><Note/></Item>
                <Item sx={{paddingTop:10, paddingLeft:1, paddingRight:1}}><CallList/></Item>
                <Item sx={{paddingTop:10, paddingLeft:1, paddingRight:1}}><CardList/></Item>
                <Item sx={{paddingTop:10, paddingLeft:1, paddingRight:1}}><Incrementor/></Item>
            </Box>
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