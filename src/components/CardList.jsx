import React from 'react';
import BasicCard from './BasicCard';
import todo from'../todo';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';


const Item = styled('div')({
    padding: 10,
});

function createCard(cards){
    return (
        <div>
            <Grid item xs={6}>
                <Item>
                    <BasicCard
                            key={cards.id}
                            title={cards.title}
                            desc={cards.desc}
                        />
                </Item>
            </Grid>
        </div>
        
    );
}

function CardList(){
    return (
        <div>
            <div style={{padding:"3.5rem"}}>
                <h1 className="display-6">My To-Do List</h1>
                <div  className="container" style={{padding:"2rem"}} >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {todo.map(createCard)}
                    </Grid>    
                </div>       
            </div>
        </div>
    );
}

export default CardList;